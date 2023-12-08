import { createBrowserRouter } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import Redirect from '@components/router/Redirect'
import NotFoundOrError from '@components/router/NotFoundOrError'
import LanguageProvider from '@components/language/LanguageProvider'
import Root from '@modules/Root'

const Resume = lazy(() => import('@modules/resume/Resume'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Redirect />,
    errorElement: <NotFoundOrError />,
    children: [],
  },
  {
    path: '/:lang',
    errorElement: <NotFoundOrError />,
    element: (
      <LanguageProvider>
        <Root />
      </LanguageProvider>
    ),
  },
  {
    path: '/:lang/resume',
    errorElement: <NotFoundOrError />,
    element: (
      <LanguageProvider>
        <Suspense>
          <Resume />
        </Suspense>
      </LanguageProvider>
    ),
  },
  {
    path: '*',
    hasErrorBoundary: true,
    errorElement: <NotFoundOrError />,
    element: <NotFoundOrError />,
  },
])
