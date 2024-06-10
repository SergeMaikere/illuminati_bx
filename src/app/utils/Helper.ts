import latinize from 'latinize'

export const curry = fn => {
    const curried = (...args) => {
        if ( args.length  >= fn.length ) fn.apply(this, args)
        return (...args2) => curried.apply(this, args.concat(args2))
    }
    return curried
}

export const pipe = (...fns) => arg => fns.reduce( (g, fn) => fn(g), arg )

export const asyncPipe = (...fns) => arg => fns.reduce( (g, fn) => g.then(fn), Promise.resolve(arg) )

export const asyncVoyeur = async x => {
    console.log('\r\n')
    console.log(await `SEEEEEERGE ====> ${JSON.parse(JSON.stringify(x))}`); 
    console.log('\r\n')
    return x
}

export const voyeur = x => {
    console.log('\r\n')
    console.log(`SEEEEEERGE ====> ${JSON.stringify(x)}`); 
    console.log('\r\n')
    return x
}
 
export const pick = (obj: any, props: string[]): any => {
    return props.reduce( 
        (newObj: any, prop: string) => {
            newObj[prop] = obj[prop]
            return newObj
        },{} 
    )
}

export const except = (obj: any, props: string[]): any => {
    return Object.fromEntries( Object.entries(obj).filter(tuple => !props.includes(tuple[0])) )
}

export const addProps = (obj: any, ...props: string[]) => props.map( prop =>({...obj, prop: "" }) )

export const splicer = (arr, n) => {
    if (arr.length === 0) return []
    const myArr = [...arr]
    const myAcc = []
    while (myArr.length > 0) {
        myAcc.push(myArr.splice(0, n))
    }
    return myAcc
}

export const formDataToObject = formData => {
    return [ ...formData.entries() ].reduce(
        (obj, pair) => {
            obj[pair[0]] = pair[1]
            return obj
        }, {}
    )
}

export const getFormDataByObject = obj => {
    return [ ...Object.entries(obj) ].reduce(
        (formData, pair) => {
            formData.append(pair[0], pair[1])
            return formData
        }, new FormData()
    )
}

export const  addMonths = ( date, n ) => new Date(date.setMonth( date.getMonth() + n ))

export const slugify = str => latinize( str.toLowerCase().split(' ').join('_').replace(/[*+~.()'"!:@,]/g, '') )

export const isLoggedIn = (status: string): boolean => status === 'authenticated'
export const isAdmin = (status: string, data:any): boolean => isLoggedIn(status) && data.user.role === "ADMIN"
export const isEditor = (status: string, data:any): boolean => isLoggedIn(status) && data.user.role === "EDITOR"
export const isWriter = (status: string, data:any): boolean => isLoggedIn(status) && data.user.role === "WRITER"
export const isLoading = (status: string): boolean => status === 'loading'