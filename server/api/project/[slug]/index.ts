import data from "~~/data";

export default defineEventHandler((event) => {
  const { category } = getQuery(event);
  const project = data.find((el) => el.slug === event.context.params.slug);

  if (project)
    return {
      project,
      feedbacks: category
        ? project.feedbacks.filter((f) => f.category === category)
        : project.feedbacks,
    };
  else throw new Error("project, not found");
});
