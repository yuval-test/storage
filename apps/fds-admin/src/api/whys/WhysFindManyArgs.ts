import { WhysWhereInput } from "./WhysWhereInput";
import { WhysOrderByInput } from "./WhysOrderByInput";

export type WhysFindManyArgs = {
  where?: WhysWhereInput;
  orderBy?: Array<WhysOrderByInput>;
  skip?: number;
  take?: number;
};
