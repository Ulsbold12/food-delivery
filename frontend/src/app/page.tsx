import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href="/signup">
        <Button className="h-12 px-10 text-lg">Sign up</Button>
      </Link>
    </div>
  );
}
