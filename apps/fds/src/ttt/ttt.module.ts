import { Module } from "@nestjs/common";
import { TttModuleBase } from "./base/ttt.module.base";
import { TttService } from "./ttt.service";
import { TttController } from "./ttt.controller";
import { TttResolver } from "./ttt.resolver";

@Module({
  imports: [TttModuleBase],
  controllers: [TttController],
  providers: [TttService, TttResolver],
  exports: [TttService],
})
export class TttModule {}
