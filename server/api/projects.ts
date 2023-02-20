import prisma from "~~/lib/prismaClient";

export default defineEventHandler(async () => {
  const data = await prisma.projects.findMany();

  const projects = data.map((val) =>
    JSON.stringify(val, (key, value) =>
      typeof value === "bigint" ? `BIGINT::${value}` : value
    )
  );

  return projects;
});
