import data from "~~/data";

export default defineEventHandler((event) => {
  const project = data.find((el) => el.slug === event.context.params.slug);
  if (project) return project;
  else throw new Error("project, not found");
});
