import '@/index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import reportWebVitals from '@/reportWebVitals'

import { STALE_TIME } from './shared/constants/queryOptions'

const Home = lazy(() => import('@/pages/Home'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: STALE_TIME,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
