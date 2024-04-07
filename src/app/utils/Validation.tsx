
export const validate = (...fns) => arg => fns.every( fn => fn(arg) )

export const isString = (x: any): boolean => typeof x === 'string'

export const isNotEmptyString = x => x && x.length > 0

export const isMoreThanNChar = n => char => char.length >= n