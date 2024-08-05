import { Post } from './Posts';

export const validate = (...fns: Function[]) => (arg: any) => fns.every( fn => fn(arg) )

export const isString = (x: any): boolean => typeof x === 'string'

export const isNotEmptyString = (x: string) => typeof x === 'string' && x.length > 0

export const isMoreThanNChar = (n: number): Function => (char: string): boolean => char.length >= n

export const isSameString = (pswd1: string, pswd2: string): boolean => pswd1 === pswd2