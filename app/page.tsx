import HomeLayout from "./HomeLayout";
export default async function Home() {
  return (
    <HomeLayout>
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      This is a Next.js app with Tailwind CSS and TypeScript.
      <div className="font-bold text-[#FF0000]">메이플 폰트</div>
    </HomeLayout>
  );
}
