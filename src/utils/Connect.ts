import { PrismaClient } from '@prisma/client';
import { isProductionEnv } from './Helper';

const setPrisma = (): PrismaClient => isProductionEnv() ? new PrismaClient() : ( global.prisma  ?? new PrismaClient() )

const prisma = setPrisma()

export default prisma