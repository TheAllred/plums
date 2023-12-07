import pool from "@/db/vercel";
import type { Item } from "@/components/Item";
import EditForm from "@/components/editForm";

export default async function Page({ params }: { params: { slug: number } }) {
  const { rows } =
    await pool.sql<Item>`SELECT * FROM notes where id =${params.slug};`;
  return (
    <>
      {/* <h1>{JSON.stringify(data[0])}</h1> */}
      <EditForm item={rows[0]} />
    </>
  );
}
