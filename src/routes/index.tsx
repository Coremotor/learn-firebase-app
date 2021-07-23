import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'routes/private-route'
import { Routes } from 'routes/routes'
import { AuthPage } from 'pages/auth'
import { HomePage } from 'pages/home'
import { ErrorPage } from 'pages/error'
import { RegistrationPage } from 'pages/registration'

export const RootRoute: FC = () => (
  <Router>
    <Switch>
      <Route path={Routes.auth}>
        <AuthPage />
      </Route>
      <Route path={Routes.registration}>
        <RegistrationPage />
      </Route>
      <Route path={Routes.error}>
        <ErrorPage />
      </Route>
      <PrivateRoute path={Routes.home}>
        <HomePage />
      </PrivateRoute>
    </Switch>
  </Router>
)
