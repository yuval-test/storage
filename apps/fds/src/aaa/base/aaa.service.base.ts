/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Aaa as PrismaAaa } from "@prisma/client";

export class AaaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AaaCountArgs, "select">): Promise<number> {
    return this.prisma.aaa.count(args);
  }

  async aaas<T extends Prisma.AaaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaaFindManyArgs>
  ): Promise<PrismaAaa[]> {
    return this.prisma.aaa.findMany<Prisma.AaaFindManyArgs>(args);
  }
  async aaa<T extends Prisma.AaaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaaFindUniqueArgs>
  ): Promise<PrismaAaa | null> {
    return this.prisma.aaa.findUnique(args);
  }
  async createAaa<T extends Prisma.AaaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaaCreateArgs>
  ): Promise<PrismaAaa> {
    return this.prisma.aaa.create<T>(args);
  }
  async updateAaa<T extends Prisma.AaaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaaUpdateArgs>
  ): Promise<PrismaAaa> {
    return this.prisma.aaa.update<T>(args);
  }
  async deleteAaa<T extends Prisma.AaaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaaDeleteArgs>
  ): Promise<PrismaAaa> {
    return this.prisma.aaa.delete(args);
  }
}