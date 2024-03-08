
export const curry = fn => {
    const curried = (...args) => {
        if ( args.length  >= fn.length ) fn.apply(this, args)
        return (...args2) => curried.apply(this, args.concat(args2))
    }
    return curried
}

export const pipe = (...fns) => arg => fns.reduce( (g, fn) => fn(g), arg )

export const voyeur = x => {console.log('VOYEUR', x); return x}
 
export const selectProperties = (keys: string[], obj: any) => keys.reduce( 
    (acc, key) => {
        acc[key] = obj.hasOwnProperty(key) ? obj[key] : ""
        return acc
    },{} 
)

export const getAllCategories = (): string[] => [ 'science', 'mode', 'histoire', 'enfer', 'france', 'cyprien' ]