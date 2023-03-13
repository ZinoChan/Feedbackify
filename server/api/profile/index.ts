import prisma from "~~/lib/prismaClient";

type UserData = {
  username: string;
  userId: string;
  avatar_url?: string;
};

export default defineEventHandler(async (event) => {
  const { username, userId }: UserData = await readBody(event);

  const data = await prisma.user.create({
    data: {
      userId,
      username,
    },
  });

  return data;
});
