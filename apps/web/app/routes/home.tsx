import type { Route } from "./+types/home";
import { data } from "react-router";
import { getTestTableData } from "@shingleai/data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ context, request }: Route.LoaderArgs) {
  const dbData = await getTestTableData(
    context.cloudflare.env.HYPERDRIVE.connectionString
  );

  return data({
    dbData,
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { dbData } = loaderData;
  return <div>{JSON.stringify(dbData)}</div>;
}
