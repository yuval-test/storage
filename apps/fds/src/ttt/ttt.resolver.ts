import * as graphql from "@nestjs/graphql";
import { TttResolverBase } from "./base/ttt.resolver.base";
import { Ttt } from "./base/Ttt";
import { TttService } from "./ttt.service";

@graphql.Resolver(() => Ttt)
export class TttResolver extends TttResolverBase {
  constructor(protected readonly service: TttService) {
    super(service);
  }
}
