import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

export const routesPath = {
  MAIN: `/`,
  BODY_CARE: `/body_care`,
  ARTTHERAPY: `/arttherapy`,
  ABOUT: `/about`,
  EVENTS: `/events`,
  PRICE: `/price`,
};

const importComponent = {
  LAYOUT: lazy(() => import("@/components/Layout/Layout")),
  BODY_CARE: lazy(() => import("@/routes/BodyCareRoute/BodyCareRoute")),
  ARTTHERAPY: lazy(() => import("@/routes/ArttherapyRoute/ArttherapyRoute")),
  ABOUT: lazy(() => import("@/routes/AboutRoute/AboutRoute")),
  EVENTS: lazy(() => import("@/routes/EventsRoute/EventsRoute")),
  PRICE: lazy(() => import("@/routes/PriceRoute/PriceRoute")),
  ERROR_COMPONENT: lazy(() => import("@/routes/Page404/Page404")),
};

export const router = createBrowserRouter([
  {
    path: routesPath.MAIN,
    element: <importComponent.LAYOUT />,
    errorElement: <importComponent.ERROR_COMPONENT />,
    children: [
      {
        path: routesPath.BODY_CARE,
        element: <importComponent.BODY_CARE />,
      },
      {
        path: routesPath.ARTTHERAPY,
        element: <importComponent.ARTTHERAPY />,
      },
      {
        path: routesPath.ABOUT,
        element: <importComponent.ABOUT />,
      },
      {
        path: routesPath.EVENTS,
        element: <importComponent.EVENTS />,
      },
      {
        path: routesPath.PRICE,
        element: <importComponent.PRICE />,
      },
    ],
  },
]);
