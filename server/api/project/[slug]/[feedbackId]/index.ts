import { comments } from "~~/data/comments";
import { feedbacks } from "~~/data/feedbacks";

export default defineEventHandler((event) => {
  const { slug, feedbackId } = event.context.params;
  const feedback = feedbacks[slug]?.find((f) => f.id === Number(feedbackId));
  const $comments = comments[`${slug}-${feedbackId}`];
  if (feedback) {
    const feedbackData = {
      feedback: feedback,
      comments: $comments || [],
    };
    return feedbackData;
  } else return {};
});
