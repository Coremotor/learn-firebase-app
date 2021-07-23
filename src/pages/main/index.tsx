import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from 'store/modules/theme/reducer'
import { EnumTabs } from 'store/modules/theme/types'
import { DefaultThemeProps } from 'styles/types'
// import { useTranslation } from 'react-i18next'
import { getIsLoading, getUsersList } from 'store/modules/users/selectors'
import { getCurrentUserFromDB, getUsersListFromDB } from 'store/modules/users/actions'
import { Loader } from 'components/loader'

export const MainPage: FC /*<TProps>*/ = () => {
  const dispatch = useDispatch()
  // const { t } = useTranslation()
  const usersList = useSelector(getUsersList)
  const isLoading = useSelector(getIsLoading)

  useEffect(() => {
    dispatch(getUsersListFromDB())
  }, [])

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.main))
    dispatch(getCurrentUserFromDB())
  }, [])
  return (
    <Container>
      {isLoading && <Loader />}
      {/*<Text>{t('mainPage')}</Text>*/}
      <Title>Список пользователей:</Title>
      <UsersList>
        {usersList.map((u, index) => (
          <Text key={u.createdAt.seconds}>{`${index + 1}. ${u.email}`}</Text>
        ))}
      </UsersList>
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
`

const Title = styled.span`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-bottom: 20px;
`

const UsersList = styled.div`
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  margin-top: 20px;
`
