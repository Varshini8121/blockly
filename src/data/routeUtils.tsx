import { matchPath, useLocation } from "react-router-dom";

export enum routeNames {
  HOME = "Blockly",
  PROJECTS = "Projects",
}
export const routeNamePath = {
  [routeNames.HOME]: "/",
  [routeNames.PROJECTS]: "/projects/:id",
};
export const routePaths = [{ path: "/", name: routeNames.HOME }];
export const getRouteName = () => {
  const { pathname } = useLocation();
  for (const route of routePaths) {
    if (matchPath({ path: route.path }, pathname)) {
      return route.name;
    }
  }
  return "Projects";
};
