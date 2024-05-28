import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AaaService } from "./aaa.service";
import { AaaControllerBase } from "./base/aaa.controller.base";

@swagger.ApiTags("aaas")
@common.Controller("aaas")
export class AaaController extends AaaControllerBase {
  constructor(protected readonly service: AaaService) {
    super(service);
  }
}
