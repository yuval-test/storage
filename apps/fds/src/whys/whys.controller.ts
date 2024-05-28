import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WhysService } from "./whys.service";
import { WhysControllerBase } from "./base/whys.controller.base";

@swagger.ApiTags("whys")
@common.Controller("whys")
export class WhysController extends WhysControllerBase {
  constructor(protected readonly service: WhysService) {
    super(service);
  }
}
