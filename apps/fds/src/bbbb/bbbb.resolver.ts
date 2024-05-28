import * as graphql from "@nestjs/graphql";
import { BbbbResolverBase } from "./base/bbbb.resolver.base";
import { Bbbb } from "./base/Bbbb";
import { BbbbService } from "./bbbb.service";

@graphql.Resolver(() => Bbbb)
export class BbbbResolver extends BbbbResolverBase {
  constructor(protected readonly service: BbbbService) {
    super(service);
  }
}
