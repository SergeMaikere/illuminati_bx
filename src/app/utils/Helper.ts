import latinize from 'latinize'

export const curry = (fn: Function) => {
    const curried = (...args: any[]) => {
        if ( args.length  >= fn.length ) fn.apply(this, args)
        return (...args2: any[]) => curried.apply(this, args.concat(args2))
    }
    return curried
}

export const pipe = (...fns: Function[]) => (arg: any) => fns.reduce( (g, fn) => fn(g), arg )

export const asyncPipe = (...fns: Promise<Function>[]) => (arg: any) => fns.reduce( (g, fn) => g.then(fn), Promise.resolve(arg) )

export const asyncVoyeur = async (x: any) => {
    console.log('\r\n')
    console.log(await `SEEEEEERGE ====> ${x}`); 
    console.log('\r\n')
    return x
}

export const voyeur = (x: any) => {
    console.log('\r\n')
    console.log('SEEEEEERGE ====>', x) 
    console.log('\r\n')
    return x
}
 
export const pick = (obj: any, props: string[]): any => {
    return props.reduce( 
        (acc: any, prop) => {
            acc[prop] = obj[prop]
            return acc
        },{} 
    )
}

export const except = (obj: any, props: string[]): any => {
    return Object.fromEntries( Object.entries(obj).filter(tuple => !props.includes(tuple[0])) )
}

export const addProps = (obj: any, ...props: string[]) => props.map( prop =>({...obj, prop: "" }) )

export const splicer = (arr: any[], n: number) => {
    if (arr.length === 0) return []
    const myArr = [...arr]
    const myAcc = []
    while (myArr.length > 0) {
        myAcc.push(myArr.splice(0, n))
    }
    return myAcc
}

export const formDataToObject = (formData: FormData) => Object.fromEntries( formData.entries() )

export const getFormDataByObject = (obj: any): FormData => {
    return Object.entries(obj).reduce(
        (formData, pair) => {
            formData.append(pair[0], pair[1])
            return formData
        }, new FormData()
    )
}

export const  addMonths = ( date: Date, n: number ): Date => new Date(date.setMonth( date.getMonth() + n ))

export const slugify = (str: string): string => latinize( str.toLowerCase().split(' ').join('_').replace(/[*+~.()'"!:@,]/g, '') )

export const isLoggedIn = (status: string): boolean => status === 'authenticated'
export const isAdmin = (status: string, data:any): boolean => isLoggedIn(status) && data.user.role === "ADMIN"
export const isEditor = (status: string, data:any): boolean => isLoggedIn(status) && data.user.role === "EDITOR"
export const isWriter = (status: string, data:any): boolean => isLoggedIn(status) && data.user.role === "WRITER"
export const isLoading = (status: string): boolean => status === 'loading'
export const isProductionEnv = (): boolean => process.env.NODE_ENV === 'production'
