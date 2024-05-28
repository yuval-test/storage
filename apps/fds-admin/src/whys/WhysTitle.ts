import { Whys as TWhys } from "../api/whys/Whys";

export const WHYS_TITLE_FIELD = "id";

export const WhysTitle = (record: TWhys): string => {
  return record.id?.toString() || String(record.id);
};
