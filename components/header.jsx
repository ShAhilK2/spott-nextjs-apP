"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useStoreUser } from "@/hooks/use-store-user";

const Header = () => {

    const {isLoading} = useStoreUser();

  return <>
  <nav className="fixed left-0 top-0 right-0 bg-background/80  backdrop-blur-xl z-20 border-b"> 
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center">
        <Image src="/spott.png" alt="Spott Logo" width={500} height={500}  className="w-full h-11" priority />

        {/* Pro Tag */}
      </Link>

        {/* Search and Location - Desktop only */}


        {/* Right Side Actions */}

        <div className="flex items-center gap-4 ">
          <Authenticated>
            {/* Create Event */}
            <UserButton /> 
          </Authenticated>
          <Unauthenticated>
            <SignInButton mode="modal">
              <Button size="sm">Sign In </Button>
              </SignInButton >
          </Unauthenticated >


        </div>
        

    </div>


    {/* Mobile Search and Location - Below Header */}


    {/* Loader */}


    {isLoading &&  <div className="absolute bottom-0 left-0 w-full">

      <BarLoader width={"100%"} color="#a855f7"/>

    </div> }

  
  </nav>  

  {/* Modals */}
  </>
  
};

export default Header;




 

