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
import { Bbbb } from "./Bbbb";
import { BbbbCountArgs } from "./BbbbCountArgs";
import { BbbbFindManyArgs } from "./BbbbFindManyArgs";
import { BbbbFindUniqueArgs } from "./BbbbFindUniqueArgs";
import { DeleteBbbbArgs } from "./DeleteBbbbArgs";
import { BbbbService } from "../bbbb.service";
@graphql.Resolver(() => Bbbb)
export class BbbbResolverBase {
  constructor(protected readonly service: BbbbService) {}

  async _bbbbsMeta(
    @graphql.Args() args: BbbbCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Bbbb])
  async bbbbs(@graphql.Args() args: BbbbFindManyArgs): Promise<Bbbb[]> {
    return this.service.bbbbs(args);
  }

  @graphql.Query(() => Bbbb, { nullable: true })
  async bbbb(@graphql.Args() args: BbbbFindUniqueArgs): Promise<Bbbb | null> {
    const result = await this.service.bbbb(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Bbbb)
  async deleteBbbb(@graphql.Args() args: DeleteBbbbArgs): Promise<Bbbb | null> {
    try {
      return await this.service.deleteBbbb(args);
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
