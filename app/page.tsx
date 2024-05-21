import { Main } from "@/components/Main";
import { prisma } from "@/lib/prisma";

async function getData() {
  const jobs = await prisma.job.findMany();
  return jobs;
}

export default async function Home() {
  const prismaData = await getData();
  console.log(prismaData);
  return <Main prismaData={prismaData} />;
}
