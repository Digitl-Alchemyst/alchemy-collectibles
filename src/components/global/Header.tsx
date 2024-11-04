import React from "react";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/global/ThemeToggle";
import Link from "next/link";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Image from "next/image";

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
                className="  text-transparent text-gradient-orange-purple"
              >
                <Image src='./logo.jpg' alt='' width={50} height={50} className="h-10 w-10 rounded-full" />
                <h3>Alchemy Collectibles</h3>
              </Button>
              {/* <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-orange-400 to-purple-400 opacity-50" /> */}
            </h1>
          </div>

          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
