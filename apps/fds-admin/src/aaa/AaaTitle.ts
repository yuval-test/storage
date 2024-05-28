import { Aaa as TAaa } from "../api/aaa/Aaa";

export const AAA_TITLE_FIELD = "id";

export const AaaTitle = (record: TAaa): string => {
  return record.id?.toString() || String(record.id);
};
