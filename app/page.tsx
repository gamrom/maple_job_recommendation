import HomeLayout from "./HomeLayout";
export default async function Home() {
  return (
    <HomeLayout>
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      <p className="mt-4">
        This is a Next.js app with Tailwind CSS and TypeScript.
      </p>
    </HomeLayout>
  );
}
