
export const getCategoryLogo = (cat: string): string => {
    if ( cat.toLowerCase() === 'enfer' ) return 'satan.png'
    if ( cat.toLowerCase() === 'science' ) return 'virus.png'
    if ( cat.toLowerCase() === 'france' ) return 'france_icon.png'
    if ( cat.toLowerCase() === 'cyprien' ) return 'reptilian_icon.png'
    if ( cat.toLowerCase() === 'histoire' ) return 'cia.png'
    if ( cat.toLowerCase() === 'mode' ) return 'villain.png'
}

const colorConfig = {
    enfer: 'text-red-400',
    france: 'text-blue-400',
    cyprien: 'text-lime-400',
    histoire: 'text-stone-400',
    mode: 'text-fuchsia-400',
    science: 'text-teal-400'
}

const curry = fn => {
    const curried = (...args) => {
        if ( args.length  >= fn.length ) fn.apply(this, args)
        return (...args2) => curried.apply(this, args.concat(args2))
    }
    return curried
}

export const selectProperties = (keys: string[], obj: any) => keys.reduce( 
    (acc, key) => {
        acc[key] = obj[key]
        return acc
    },{} 
)

export const getCategoryBg = cat => `bg-${colorConfig[cat.toLowerCase()]}-400` 

export const getCategoryTextColor = cat => `text-${colorConfig[cat.toLowerCase()]}-400`

export const getAllCategories = (): string[] => [ 'science', 'mode', 'histoire', 'enfer', 'france', 'cyprien' ]