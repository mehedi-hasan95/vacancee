import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  if (user) {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <Link href="/">
        <Button variant={"link"} className="glass-effect blue-glow">
          <ArrowLeft /> Back to Homepage
        </Button>
      </Link>
      {children}
    </div>
  );
};

export default AuthLayout;
