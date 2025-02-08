import { lazy } from 'react';

export const importComponent = {
  HOME_PAGE: lazy(() => import('@pages/HomePage/HomePage')),
  SHARED_LAYOUT: lazy(() => import('@layouts/SharedLayout')),
  BODY_CARE: lazy(() => import('@pages/BodyCarePage/BodyCarePage')),
  ARTTHERAPY: lazy(() => import('@pages/ArttherapyPage/ArttherapyPage')),
  ABOUT: lazy(() => import('@pages/AboutPage/AboutPage')),
  EVENTS: lazy(() => import('@pages/EventsPage/EventsPage')),
  PRICE: lazy(() => import('@pages/PricePage/PricePage')),
  ERROR_COMPONENT: lazy(() => import('@pages/Page404/Page404')),
};
