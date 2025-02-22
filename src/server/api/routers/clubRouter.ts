import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db"; // Ensure this is the correct path to your Prisma client

export const clubRouter = createTRPCRouter({
  searchClubs: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(async ({ input }) => {
      return prisma.db.Club.findMany({
        where: {
          name: {
            contains: input.name,
            mode: "insensitive", // Case-insensitive search
          },
        },
        take: 10, // Limit results to 10
      });
    }),
});
