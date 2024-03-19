
export const curry = fn => {
    const curried = (...args) => {
        if ( args.length  >= fn.length ) fn.apply(this, args)
        return (...args2) => curried.apply(this, args.concat(args2))
    }
    return curried
}

export const pipe = (...fns) => arg => fns.reduce( (g, fn) => fn(g), arg )

export const asyncPipe = (...fns) => arg => fns.reduce( (g, fn) => g.then(fn), Promise.resolve(arg) )

export const asyncVoyeur = async x => {console.log(await `SEEEEEERGE ====> ${JSON.stringify(x)}`); return x}

export const voyeur = x => {console.log(`SEEEEEERGE ====> ${JSON.stringify(x)}`); return x}
 
export const pick = (obj: any, props: string[]): any => {
    return props.reduce( 
        (newObj: any, prop: string) => {
            newObj[prop] = obj[prop]
            return newObj
        },{} 
    )
}

export const addProps = (obj: any, ...props: string[]) => props.map( prop =>({...obj, prop: "" }) )

export const splicer = (arr, n) => arr.reduce( 
    (acc, item, i) => {
        if (i % n === 0) acc.push( arr.splice(0, n) )
        return acc
    }, []
)