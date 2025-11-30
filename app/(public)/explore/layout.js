"use client";
import { Button } from "../../../components/ui/button";
import { ArrowLeft, Ghost } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { useRouter } from "next/navigation";

const ExploreLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isMainExplorePage = pathname === "/explore";

  return (
    <div className="pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {!isMainExplorePage && (
          <div className="mb-6 ">
            <Button variant="ghost" onClick={() => router.push("/explore")} className="gap-2 -ml-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Explore
            </Button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default ExploreLayout;
