import { Module } from "@nestjs/common";
import { WhysModuleBase } from "./base/whys.module.base";
import { WhysService } from "./whys.service";
import { WhysController } from "./whys.controller";
import { WhysResolver } from "./whys.resolver";

@Module({
  imports: [WhysModuleBase],
  controllers: [WhysController],
  providers: [WhysService, WhysResolver],
  exports: [WhysService],
})
export class WhysModule {}
