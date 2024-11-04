import React from "react";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/global/ThemeToggle";
import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Image from "next/image";
import Search from "./Search";
import { TrolleyIcon } from "@sanity/icons";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-light-300 bg-light-100/75 backdrop-blur-lg dark:border-dark-600 dark:bg-dark-800/75">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <h1 className="relative">
              <Button
                variant="default"
                size="lg"
                className="text-transparent text-gradient-orange-purple"
              >
                <Image
                  src="/logo.jpg"
                  alt=""
                  width={50}
                  height={50}
                  className="h-8 w-8 rounded-full"
                />
                <h3 className="hidden sm:block">Alchemy Collectibles</h3>
              </Button>
            </h1>
          </div>
          <div className="hidden sm:block flex-1 mx-4">
            <Search />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-6">
            <Link
              className="flex items-center p-1 bg-dark-900 shadow hover:bg-dark-900/90 dark:bg-light-500 dark:hover:bg-light-500/90 border border-dark-900/10 dark:border-light-300/40 text-light-500 dark:text-dark-400 rounded-md"
              href="/cart"
            >
              <TrolleyIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <ThemeToggle />
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <div className="sm:hidden border-t border-light-300 dark:border-dark-600 p-2">
          <Search />
        </div>
      </div>
    </header>  );
};

export default Header;
