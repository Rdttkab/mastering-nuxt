export default defineNuxtRouteMiddleware((to, from) => {
  const navigationHistory = useLocalStorage<string[]>("navigationHistory", []);
  navigationHistory.value.push(to.path);
});
