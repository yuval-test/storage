/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FollowWhereInput } from "./FollowWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FollowListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FollowWhereInput,
  })
  @ValidateNested()
  @Type(() => FollowWhereInput)
  @IsOptional()
  @Field(() => FollowWhereInput, {
    nullable: true,
  })
  every?: FollowWhereInput;

  @ApiProperty({
    required: false,
    type: () => FollowWhereInput,
  })
  @ValidateNested()
  @Type(() => FollowWhereInput)
  @IsOptional()
  @Field(() => FollowWhereInput, {
    nullable: true,
  })
  some?: FollowWhereInput;

  @ApiProperty({
    required: false,
    type: () => FollowWhereInput,
  })
  @ValidateNested()
  @Type(() => FollowWhereInput)
  @IsOptional()
  @Field(() => FollowWhereInput, {
    nullable: true,
  })
  none?: FollowWhereInput;
}
export { FollowListRelationFilter as FollowListRelationFilter };
