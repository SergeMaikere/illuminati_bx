import { PrismaClient } from '@prisma/client';

const isProductionEnv = (): boolean => process.env.NODE_ENV === 'production'
const isGlobalPrisma = (): boolean => global.prisma
    
const setPrisma = (): PrismaClient => {
    if ( isProductionEnv() ) return new PrismaClient()
    if ( !isProductionEnv() && !isGlobalPrisma() ) global.prisma = new PrismaClient()
    if ( !isProductionEnv() && isGlobalPrisma() ) return global.prisma
}

const prisma = setPrisma()

export default prisma