import * as graphql from "@nestjs/graphql";
import { AaaResolverBase } from "./base/aaa.resolver.base";
import { Aaa } from "./base/Aaa";
import { AaaService } from "./aaa.service";

@graphql.Resolver(() => Aaa)
export class AaaResolver extends AaaResolverBase {
  constructor(protected readonly service: AaaService) {
    super(service);
  }
}
