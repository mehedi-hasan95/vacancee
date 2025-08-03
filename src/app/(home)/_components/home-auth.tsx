import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { AfterAuthButton } from "./after-auth-button";

export const HomeAuth = async ({ className }: { className?: string }) => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <AfterAuthButton />
      ) : (
        <div className={cn("flex items-center gap-4", className)}>
          <Link href={"/sign-in"}>
            <Button variant="ghost" className="blue-glow">
              Login
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button variant="ghost" className="blue-glow">
              Register
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};
