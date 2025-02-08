import { createBrowserRouter } from 'react-router-dom';
import { routesPath } from './routesPath';
import { importComponent } from './routesLazy';

export const router = createBrowserRouter([
  {
    path: routesPath.HOME_PAGE,
    element: <importComponent.SHARED_LAYOUT />,
    errorElement: <importComponent.ERROR_COMPONENT />,
    children: [
      {
        index: true,

        element: <importComponent.HOME_PAGE />,
      },
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
