import { Module } from "@nestjs/common";
import { AaaModuleBase } from "./base/aaa.module.base";
import { AaaService } from "./aaa.service";
import { AaaController } from "./aaa.controller";
import { AaaResolver } from "./aaa.resolver";

@Module({
  imports: [AaaModuleBase],
  controllers: [AaaController],
  providers: [AaaService, AaaResolver],
  exports: [AaaService],
})
export class AaaModule {}
