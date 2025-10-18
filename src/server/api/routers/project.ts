import { TRPCError } from "@trpc/server";
import { cookies } from "next/headers";
import z from "zod";
import { addProjectSchema } from "~/lib/schemas";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  userGetAll: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const projects = await ctx.db.project.findMany({
        where: { userId: input.id },
      });

      if (projects.length === 0) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No projects found",
        });
      }

      return {
        projects,
      };
    }),
  create: protectedProcedure
    .input(addProjectSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const project = await ctx.db.project.create({
          data: {
            ...input,
            user: {
              connect: { id: ctx.session.user.id },
            },
          },
        });

        return {
          id: project.id,
        };
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Could not create project",
        });
      }
    }),
  getActive: protectedProcedure.query(async ({ ctx }) => {
    const cookieStore = await cookies();
    const activeCookie = cookieStore.get("activeProject");

    if (!activeCookie) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "No cookie found",
      });
    }

    const project = await ctx.db.project.findUnique({
      where: { id: activeCookie.value },
    });

    if (!project) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "No project found",
      });
    }

    return {
      project,
    };
  }),
  setActive: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const project = await ctx.db.project.findUnique({
        where: { id: input.id },
      });

      if (!project) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No project found",
        });
      }

      try {
        const cookieStore = await cookies();
        cookieStore.set("activeProject", input.id, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 365, // 1 year
        });
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Could not create cookie",
        });
      }
    }),
});
