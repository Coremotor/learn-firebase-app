import React, { FC, FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from 'store/modules/theme/reducer'
import { EnumTabs } from 'store/modules/theme/types'
import { DefaultThemeProps } from 'styles/types'
// import { useTranslation } from 'react-i18next'
import { getCurrentUserFromDB, updateCurrentUser } from 'store/modules/users/actions'
import { getCurrentUser, getIsLoading } from 'store/modules/users/selectors'
import { Loader } from 'components/loader'
import { Button } from 'components/button'

export const ProfilePage: FC /*<Props>*/ = () => {
  // const { t } = useTranslation()
  const dispatch = useDispatch()
  const currentUser = useSelector(getCurrentUser)
  const isLoading = useSelector(getIsLoading)

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.profilePage))
    dispatch(getCurrentUserFromDB())
  }, [])

  const [name, setName] = useState('')
  const onNameInput = (e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)

  const [email, setEmail] = useState('')
  // const onEmailInput = (e: FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)

  const [password, setPassword] = useState('')
  // const onPasswordInput = (e: FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(updateCurrentUser(name, email, password))
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <Container>
      {isLoading && <Loader />}
      {/*<Text>{t('Profile')}</Text>*/}
      <Text>Информация о профиле:</Text>
      <CurrentUserInfo>
        <Text>Uid: {currentUser?.uid || 'none'}</Text>
        <Text>Email: {currentUser?.email || 'none'}</Text>
        <Text>Name: {currentUser?.displayName || 'none'}</Text>
      </CurrentUserInfo>
      <Form onSubmit={onSubmit}>
        <label htmlFor="displayName">Изменить имя</label>
        <input
          placeholder="Введите новое имя"
          onInput={onNameInput}
          id="displayName"
          name="displayName"
          type="text"
          value={name}
        />
        <Button disabled={false}>Сохранить</Button>
      </Form>

      {/*<Form onSubmit={onSubmit}>*/}
      {/*  <label htmlFor="email">Изменить Email</label>*/}
      {/*  <input*/}
      {/*    placeholder="Введите новый Email"*/}
      {/*    onInput={onEmailInput}*/}
      {/*    id="email"*/}
      {/*    name="email"*/}
      {/*    type="text"*/}
      {/*    value={email}*/}
      {/*  />*/}
      {/*  <Button disabled={false}>Сохранить</Button>*/}
      {/*</Form>*/}

      {/*<Form onSubmit={onSubmit}>*/}
      {/*  <label htmlFor="password">Изменить пароль</label>*/}
      {/*  <input*/}
      {/*    placeholder="Введите новый пароль"*/}
      {/*    onInput={onPasswordInput}*/}
      {/*    id="password"*/}
      {/*    name="password"*/}
      {/*    type="password"*/}
      {/*    value={password}*/}
      {/*  />*/}
      {/*  <Button disabled={false}>Сохранить</Button>*/}
      {/*</Form>*/}
    </Container>
  )
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Text = styled.span`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-bottom: 10px;
`

const CurrentUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  & label {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  & input {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  & button {
    cursor: pointer;
    padding: 10px;
  }
`
