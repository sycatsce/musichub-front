import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from '@tanstack/react-router'
import { App } from './App'
import { CallbackPage } from './pages/CallbackPage'
//import getConnectedUsersInfo from './UserInfo'

// Root route avec <Outlet />
const rootRoute = createRootRoute({
  component: () => (
    <div>
      <div id="root-layout">
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

/*const infoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/userinfo',
  component: getConnectedUsersInfo,
})*/

const routeTree = rootRoute.addChildren([indexRoute, callbackRoute])

const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)