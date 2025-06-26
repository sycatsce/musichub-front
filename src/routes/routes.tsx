import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from '@tanstack/react-router'
import App from '../App'
import { CallbackPage } from '../pages/CallbackPage'

// Root route avec <Outlet />
const rootRoute = createRootRoute({
  component: () => (
    <div>
      <div id="root-layout">
        {/* Tu peux ajouter une navbar ici */}
        <Outlet />
      </div>
    </div>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const callbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/callback',
  component: CallbackPage,
})

const routeTree = rootRoute.addChildren([indexRoute, callbackRoute])

export const router = createRouter({ routeTree })