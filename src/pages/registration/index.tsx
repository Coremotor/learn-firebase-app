import React from 'react'
import { setError } from 'store/modules/errors/reducer'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getIsLoading } from 'store/modules/registration/selectors'
import { Link, useHistory } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Routes } from 'routes/routes'
import { TRegFormValues } from 'store/modules/registration/types'
import { registration } from 'store/modules/registration/actions'
import { DefaultThemeProps } from 'styles/types'
import { Button } from 'components/button'

export const RegistrationPage = () => {
  const isLoading = useSelector(getIsLoading)

  const dispatch = useDispatch()
  const history = useHistory()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TRegFormValues>()

  const watchAllFields = watch()
  const submitDisabled = !watchAllFields.email || !watchAllFields.password || watchAllFields.password.length < 6

  const onSubmit: SubmitHandler<TRegFormValues> = (data) => {
    dispatch(registration(data, goAuthPage))
  }

  const inputHandler = () => {
    dispatch(setError(null))
  }

  const goAuthPage = () => {
    history.push(Routes.auth)
  }

  return (
    <Container>
      <FormWrapper>
        <Title>Регистрация</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            onInput={inputHandler}
            type="email"
            {...register('email', { required: true })}
            placeholder="Почта"
            autoComplete="off"
          />
          {errors.email && <span>Поле обязательно для заполнения</span>}
          <Input
            onInput={inputHandler}
            type="password"
            {...register('password', { required: true, minLength: 6 })}
            placeholder="Пароль"
            autoComplete="off"
          />
          {errors.password && <span>Пароль должен быть не менее 6 символов</span>}
          <Button disabled={submitDisabled}>{isLoading ? 'Регистрация...' : 'Зарегистрироваться'}</Button>
          <StyledLink to={Routes.auth}>Войти</StyledLink>
        </Form>
      </FormWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
`

const FormWrapper = styled.div``

const Title = styled.div`
  margin: 0 0 10px 10px;
`

const Form = styled.form`
  min-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 20px;

  & button {
    margin-top: 10px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-top: 10px;
  font-size: 12px;
`
