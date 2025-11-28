import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="text-center sm:text-left">
      <section className="relative p-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}

          <div>
            <span className="text-gray-500 font-light tracking-wide ">
              spott
              <span className="text-purple-400">*</span>
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Discover & <br />
              create amazing
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400  to-orange-400 bg-clip-text text-transparent">
                event.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Whether you&apos;re hosting or attending, Spott makes every event memorable. Join our
              community today.
            </p>

            <Link href="/explore">
              <Button size="xl" className="rounded-full">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Right */}

          <div>
            <Image
              src="/hero.png"
              alt="Hero Image"
              width={700}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
