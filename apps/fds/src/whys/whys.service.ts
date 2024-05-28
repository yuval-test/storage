import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhysServiceBase } from "./base/whys.service.base";

@Injectable()
export class WhysService extends WhysServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
