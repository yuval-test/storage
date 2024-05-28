import { Module } from "@nestjs/common";
import { DdddsModuleBase } from "./base/dddds.module.base";
import { DdddsService } from "./dddds.service";
import { DdddsController } from "./dddds.controller";
import { DdddsResolver } from "./dddds.resolver";

@Module({
  imports: [DdddsModuleBase],
  controllers: [DdddsController],
  providers: [DdddsService, DdddsResolver],
  exports: [DdddsService],
})
export class DdddsModule {}
