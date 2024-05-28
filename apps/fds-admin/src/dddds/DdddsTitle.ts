import { Dddds as TDddds } from "../api/dddds/Dddds";

export const DDDDS_TITLE_FIELD = "id";

export const DdddsTitle = (record: TDddds): string => {
  return record.id?.toString() || String(record.id);
};
