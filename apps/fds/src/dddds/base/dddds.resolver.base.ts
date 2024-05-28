/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Dddds } from "./Dddds";
import { DdddsCountArgs } from "./DdddsCountArgs";
import { DdddsFindManyArgs } from "./DdddsFindManyArgs";
import { DdddsFindUniqueArgs } from "./DdddsFindUniqueArgs";
import { DeleteDdddsArgs } from "./DeleteDdddsArgs";
import { DdddsService } from "../dddds.service";
@graphql.Resolver(() => Dddds)
export class DdddsResolverBase {
  constructor(protected readonly service: DdddsService) {}

  async _ddddsItemsMeta(
    @graphql.Args() args: DdddsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Dddds])
  async ddddsItems(@graphql.Args() args: DdddsFindManyArgs): Promise<Dddds[]> {
    return this.service.ddddsItems(args);
  }

  @graphql.Query(() => Dddds, { nullable: true })
  async dddds(
    @graphql.Args() args: DdddsFindUniqueArgs
  ): Promise<Dddds | null> {
    const result = await this.service.dddds(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Dddds)
  async deleteDddds(
    @graphql.Args() args: DeleteDdddsArgs
  ): Promise<Dddds | null> {
    try {
      return await this.service.deleteDddds(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}