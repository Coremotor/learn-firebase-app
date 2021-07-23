import React from 'react'
import { Link } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { setError } from 'store/modules/errors/reducer'
import { useDispatch } from 'react-redux'
import { DefaultThemeProps } from 'styles/types'

export const ErrorPage = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      <ErrorTitle>Ошибка 404</ErrorTitle>
      <ErrorMessage>Кажется, что-то пошло не так! Страница, которую вы запрашиваете, не существует.</ErrorMessage>
      <ErrorMessage>Возможно она была удалена, или вы набрали неверный адрес.</ErrorMessage>
      <LinkGoHome onClick={() => dispatch(setError(null))} to={Routes.home}>
        Вернуться в личный кабинет
      </LinkGoHome>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
`

const ErrorTitle = styled.span`
  font-size: 88px;
  font-weight: bold;
  margin-bottom: 10vh;
`
const ErrorMessage = styled.span`
  font-size: 24px;
`

const LinkGoHome = styled(Link)`
  font-weight: bold;
  font-size: 24px;
  margin-top: 10vh;
`
