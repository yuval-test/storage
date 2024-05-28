/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BbbbWhereInput } from "./BbbbWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BbbbOrderByInput } from "./BbbbOrderByInput";

@ArgsType()
class BbbbFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BbbbWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BbbbWhereInput, { nullable: true })
  @Type(() => BbbbWhereInput)
  where?: BbbbWhereInput;

  @ApiProperty({
    required: false,
    type: [BbbbOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BbbbOrderByInput], { nullable: true })
  @Type(() => BbbbOrderByInput)
  orderBy?: Array<BbbbOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BbbbFindManyArgs as BbbbFindManyArgs };
