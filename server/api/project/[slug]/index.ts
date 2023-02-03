import { feedbacks } from "~~/data/feedbacks";
import { projects } from "~~/data/projects";

export default defineEventHandler((event) => {
  const { category } = getQuery(event);
  const { slug } = event.context.params;
  const project = projects[slug];
  let $feedbacks = feedbacks[slug];

  if (project)
    return {
      project,
      feedbacks: category
        ? $feedbacks?.filter((f) => f.category === category)
        : $feedbacks,
    };
  else throw new Error("project, not found");
});
