import { Main } from "@/components/Main";
import { prisma } from "@/lib/prisma";

async function getData() {
  const jobs = await prisma.job.findMany();
  return jobs;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return <Main />;
}
