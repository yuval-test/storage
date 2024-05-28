import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DdddsService } from "./dddds.service";
import { DdddsControllerBase } from "./base/dddds.controller.base";

@swagger.ApiTags("dddds")
@common.Controller("dddds")
export class DdddsController extends DdddsControllerBase {
  constructor(protected readonly service: DdddsService) {
    super(service);
  }
}
