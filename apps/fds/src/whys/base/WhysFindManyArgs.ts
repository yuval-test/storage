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
import { WhysWhereInput } from "./WhysWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WhysOrderByInput } from "./WhysOrderByInput";

@ArgsType()
class WhysFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WhysWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WhysWhereInput, { nullable: true })
  @Type(() => WhysWhereInput)
  where?: WhysWhereInput;

  @ApiProperty({
    required: false,
    type: [WhysOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WhysOrderByInput], { nullable: true })
  @Type(() => WhysOrderByInput)
  orderBy?: Array<WhysOrderByInput>;

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

export { WhysFindManyArgs as WhysFindManyArgs };
