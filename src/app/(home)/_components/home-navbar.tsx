import { Logo } from "@/components/common/logo";
import { HomeMenu } from "./home-menu";
import { SearchBar } from "./search-bar";
import { HomeAuth } from "./home-auth";
import { SheetModify } from "@/components/modify/sheet-modify";
import { HomeMens } from "@/constants/menus";
import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";

export const HomeNavbar = () => {
  return (
    <header className="container-3xl my-5">
      <div className="md:flex justify-between items-center gap-5 hidden">
        <Logo />
        <HomeMenu />
        <SearchBar />
        <HomeAuth />
      </div>
      <div className="md:hidden flex justify-between items-center">
        <Logo />
        <SearchBar />
        <SheetModify title="Menus">
          <div className="flex flex-col items-start gap-3">
            {HomeMens.map((item) => (
              <SheetClose key={item.id}>
                <Link href={`/${item.href}`}>{item.label}</Link>
              </SheetClose>
            ))}
            <SheetClose>
              <Link href={`/sign-in`}>Sign In</Link>
            </SheetClose>
            <SheetClose>
              <Link href={`/sign-up`}>Sign Up</Link>
            </SheetClose>
          </div>
        </SheetModify>
      </div>
    </header>
  );
};
