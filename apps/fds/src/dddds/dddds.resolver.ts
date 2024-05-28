import * as graphql from "@nestjs/graphql";
import { DdddsResolverBase } from "./base/dddds.resolver.base";
import { Dddds } from "./base/Dddds";
import { DdddsService } from "./dddds.service";

@graphql.Resolver(() => Dddds)
export class DdddsResolver extends DdddsResolverBase {
  constructor(protected readonly service: DdddsService) {
    super(service);
  }
}
