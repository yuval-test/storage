import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BbbbService } from "./bbbb.service";
import { BbbbControllerBase } from "./base/bbbb.controller.base";

@swagger.ApiTags("bbbbs")
@common.Controller("bbbbs")
export class BbbbController extends BbbbControllerBase {
  constructor(protected readonly service: BbbbService) {
    super(service);
  }
}
