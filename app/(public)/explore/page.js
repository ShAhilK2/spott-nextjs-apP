"use client";
import React from "react";
import { api } from "../../../convex/_generated/api";
import { UseConvexQuery } from "../../../hooks/use-convex-query";

const page = () => {
  const { data: getCurrentUser } = UseConvexQuery(api.users.getCurrentUser);

  const { data: featuredEvents, isLoading: loadingfeatured } = UseConvexQuery(
    api.explore.getFeaturedEvents,
    { limits: 5 }
  );

  const { data: localEvents, isLoading: loadinglocalEvents } = UseConvexQuery(
    api.explore.getEventsByLocation,
    {
      city: getCurrentUser?.city || "Gurugram",
      state: getCurrentUser?.state || "Haryana",
      limit: 4,
    }
  );

  const { data: popularEvents, isLoading: loadingpopularEvents } = UseConvexQuery(
    api.explore.getPopularEvents,
    {
      limit: 4,
    }
  );

  const { data: categoryCount, isLoading: loadingCategoryCount } = UseConvexQuery(
    api.explore.getCategoryCount
  );

  console.log(featuredEvents);

  return (
    <>
      <div className="pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Event</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore Featured events, find what&apos; happening locally, or browse events across India
        </p>
      </div>

      {/* Featured Carousel */}

      {/* Local Events */}

      {/* Browse by Category */}

      {/* Popular Events Across  Country */}

      {/* Empty State */}
    </>
  );
};

export default page;
