"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useStoreUser } from "../hooks/use-store-user";
import { Building, Plus, Tickets } from "lucide-react";

const Header = () => {
  const { isLoading } = useStoreUser();

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-0 right-0 bg-background/80  backdrop-blur-xl z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center">
            <Image
              src="/spott.png"
              alt="Spott Logo"
              width={500}
              height={500}
              className="w-full h-11"
              priority
            />

            {/* Pro Tag */}
          </Link>

          {/* Search and Location - Desktop only */}

          {/* Right Side Actions */}

          <div className="flex items-center gap-4 ">
            {/* Create Event */}

            <Button variant="ghost" size="sm" onClick={() => setShowUpgradeModal(true)}>
              Pricing
            </Button>

            <Button variant="ghost" size="sm" className={"mr-2"} asChild>
              <Link href="/explore">Explore</Link>
            </Button>
            <Authenticated>
              <Button size="sm" className={"mr-2 flex gap-4"} asChild>
                <Link href="/create-event">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Tickets"
                    labelIcon={<Tickets size={16} />}
                    href="/my-tickets"
                  />

                  <UserButton.Link
                    label="My Events"
                    labelIcon={<Building size={16} />}
                    href="/my-events"
                  />

                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </Authenticated>
            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size="sm">Sign In </Button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>

        {/* Mobile Search and Location - Below Header */}

        {/* Loader */}

        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width={"100%"} color="#a855f7" />
          </div>
        )}
      </nav>

      {/* Modals */}
    </>
  );
};

export default Header;
