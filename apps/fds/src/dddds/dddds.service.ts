import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DdddsServiceBase } from "./base/dddds.service.base";

@Injectable()
export class DdddsService extends DdddsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
