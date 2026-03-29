import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import AnniversaryPage from "./pages/AnniversaryPage";
import HomePage from "./pages/HomePage";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const anniversaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/anniversary",
  component: AnniversaryPage,
});

const routeTree = rootRoute.addChildren([homeRoute, anniversaryRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
