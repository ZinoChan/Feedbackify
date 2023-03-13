const user = useSupabaseUser();

export default defineNuxtRouteMiddleware(() => {
  if (user.value) {
    return navigateTo("/");
  }
});
