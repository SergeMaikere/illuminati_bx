
export const validate = (...fns) => arg => fns.every( fn => fn(arg) )

export const isString = (x: any): boolean => typeof x === 'string'

export const isNotEmptyString = x => x && x.length > 0

export const isMoreThanNChar = n => char => char.length >= n

export const isSameString = (pswd1: string, pswd2: string): boolean => pswd1 === pswd2