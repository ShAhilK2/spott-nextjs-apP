import { query } from "./_generated/server";
import { v } from "convex/values";
export const getFeaturedEvents = query({
  args: {
    limits: v.optional(v.number()),
  },
  handler: async (ctx, agrs) => {
    const now = Date.now();
    let events = await ctx.db
      .query("events")
      .withIndex("by_start_date")
      .filter(q => q.gte(q.field("startDate"), now))
      .order("desc")
      .collect();

    //   Sort by registration count for featured events

    const featuredEvents = events
      .sort((a, b) => b.registrationCount - a.registrationCount)
      .slice(0, agrs.limits ?? 3);

    return featuredEvents;
  },
});

// Get events by  Location(city/state)
export const getEventsByLocation = query({
  args: {
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    let events = await ctx.db
      .query("events")
      .withIndex("by_start_date")
      .filter(q => q.eq(q.field("city"), args.city))
      .filter(q => q.eq(q.field("state"), args.state))
      .collect();

    //   Filter by city or state
    if (args.city) {
      events = events.filter(event => event.city.toLowerCase() === args.city.toLowerCase());
    } else if (args.state) {
      events = events.filter(event => event.state.toLowerCase() === args.state.toLowerCase());
    }
    return events.slice(0, args.limits ?? 4);
  },
});

// Get featured events by popular events
export const getPopularEvents = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const events = await ctx.db
      .query("events")
      .withIndex("by_start_date")
      .filter(q => q.gte(q.field("startDate"), now))
      .collect();

    //   Sort by registration count for featured events

    const popularEvents = events
      .sort((a, b) => b.registrationCount - a.registrationCount)
      .slice(0, args.limits ?? 6);

    return popularEvents;
  },
});

// Get Events by Category
export const getEventsByCategory = query({
  args: {
    category: v.string(),
    limits: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const eventsCategory = await ctx.db
      .query("events")
      .withIndex("by_category", q => q.eq("category", args.category))
      .filter(q => q.gte(q.field("startDate"), now))
      .collect();

    return eventsCategory.slice(0, args.limits ?? 12);
  },
});

export const getCategoryCount = query({
  handler: async ctx => {
    const now = Date.now();
    const events = await ctx.db
      .query("events")
      .withIndex("by_start_date")
      .filter(q => q.gte(q.field("startDate"), now))
      .collect();

    //   Counts events by category

    const counts = {};

    events.forEach(event => {
      counts[event.category] = (counts[event.category] || 0) + 1;
    });
    return counts;
  },
});
