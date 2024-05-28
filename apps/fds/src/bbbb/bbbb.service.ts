import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BbbbServiceBase } from "./base/bbbb.service.base";

@Injectable()
export class BbbbService extends BbbbServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
