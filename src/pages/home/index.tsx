import React, { FC } from 'react'
import { Header } from './components/header'
import { Route, Switch } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { MainPage } from '../main'
import { NewsPage } from '../news'
import { Footer } from './components/footer'
import { ProfilePage } from 'pages/profile'
import { DefaultThemeProps } from 'styles/types'
import { CommentsPage } from 'pages/comments'

export const HomePage: FC = () => {
  return (
    <Container>
      <Header />

      <Switch>
        <Route exact path={Routes.home} component={MainPage} />
        <Route exact path={Routes.news} component={NewsPage} />
        <Route exact path={Routes.comments} component={CommentsPage} />
        <Route exact path={Routes.profilePage} component={ProfilePage} />
      </Switch>

      <Footer>Footer</Footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 700px;
  //max-height: 100%;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
`
