import data from "~~/data";

export default defineEventHandler((event) => {
  const { slug, feedbackId } = event.context.params;
  const feedback = data
    .find((el) => el.slug === slug)
    ?.feedbacks.find((el) => el.id === Number(feedbackId));
  if (feedback) return feedback;
  else throw new Error("feedback not found");
});
