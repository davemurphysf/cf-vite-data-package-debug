import createDrizzle from "./db";
import { testTable } from "./db/schema";

export const getTestTableData = async (databaseUrl: string) => {
  const db = createDrizzle({ databaseUrl });
  const data = await db.select().from(testTable);
  return data;
};
