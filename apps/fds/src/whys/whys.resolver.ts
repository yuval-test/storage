import * as graphql from "@nestjs/graphql";
import { WhysResolverBase } from "./base/whys.resolver.base";
import { Whys } from "./base/Whys";
import { WhysService } from "./whys.service";

@graphql.Resolver(() => Whys)
export class WhysResolver extends WhysResolverBase {
  constructor(protected readonly service: WhysService) {
    super(service);
  }
}
