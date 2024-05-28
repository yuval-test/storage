import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TttService } from "./ttt.service";
import { TttControllerBase } from "./base/ttt.controller.base";

@swagger.ApiTags("ttts")
@common.Controller("ttts")
export class TttController extends TttControllerBase {
  constructor(protected readonly service: TttService) {
    super(service);
  }
}
