import { PrismaClient } from 'prisma/prisma-client';


const isProductionEnv = (): boolean => process.env.NODE_ENV === 'production'
const isGlobalPrisma = (): boolean => global.prisma


const setGlobalPrisma = () => {
    if ( !isProductionEnv() && !isGlobalPrisma() ) 
        global.prisma = new PrismaClient()
}
const setPrisma = (): PrismaClient => {
    if ( isProductionEnv() ) return new PrismaClient()
    if ( !isProductionEnv() && isGlobalPrisma() ) return global.prisma
}

setGlobalPrisma()
const prisma = setPrisma()

export default prisma