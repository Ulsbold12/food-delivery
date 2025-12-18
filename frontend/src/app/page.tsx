import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "./_components/Header";
import { Header1 } from "./_components/Header1";

export default function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center flex flex-col">
      <Header />
      <Header1 />
      <Link href="/signup">
        <Button className="h-12 px-10 text-lg">Sign up</Button>
      </Link>
    </div>
  );
}
