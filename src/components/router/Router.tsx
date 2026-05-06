import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import Redirect from '@components/router/Redirect'
import NotFoundOrError from '@components/router/NotFoundOrError'
import LanguageProvider from '@components/language/LanguageProvider'
import Root from '@modules/Root'

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
    path: '*',
    hasErrorBoundary: true,
    errorElement: <NotFoundOrError />,
    element: <NotFoundOrError />,
  },
])
