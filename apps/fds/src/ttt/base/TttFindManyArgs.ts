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
import { TttWhereInput } from "./TttWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TttOrderByInput } from "./TttOrderByInput";

@ArgsType()
class TttFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TttWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TttWhereInput, { nullable: true })
  @Type(() => TttWhereInput)
  where?: TttWhereInput;

  @ApiProperty({
    required: false,
    type: [TttOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TttOrderByInput], { nullable: true })
  @Type(() => TttOrderByInput)
  orderBy?: Array<TttOrderByInput>;

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

export { TttFindManyArgs as TttFindManyArgs };