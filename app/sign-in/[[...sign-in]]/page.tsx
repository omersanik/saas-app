import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex items-center justify-center gap-4">
      <SignIn />;
    </main>
  );
}
