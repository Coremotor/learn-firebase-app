import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Routes } from 'routes/routes'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveTab } from 'store/modules/theme/selectors'
import { EnumTabs } from 'store/modules/theme/types'
import { DefaultThemeProps } from 'styles/types'
import { logout } from 'store/modules/auth/actions'
import { useTranslation } from 'react-i18next'

type TLinkProps = {
  activeTab: boolean
}

export const Header: FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const activeTab = useSelector(getActiveTab)

  const onLogout = async () => {
    await dispatch(logout())
    history.push(Routes.auth)
  }

  return (
    <Container>
      <Navigation>
        <StyledNavLink to={Routes.home}>
          <LinkText activeTab={activeTab === EnumTabs.main}>{t('mainPage')}</LinkText>
        </StyledNavLink>

        <StyledNavLink to={Routes.news}>
          <LinkText activeTab={activeTab === EnumTabs.news}>{t('news')}</LinkText>
        </StyledNavLink>

        <StyledNavLink to={Routes.comments}>
          <LinkText activeTab={activeTab === EnumTabs.comments}>{t('comments')}</LinkText>
        </StyledNavLink>

        <StyledNavLink to={Routes.profilePage}>
          <LinkText activeTab={activeTab === EnumTabs.profilePage}>{t('profilePage')}</LinkText>
        </StyledNavLink>
      </Navigation>

      <Logout onClick={onLogout}>{t('logout')}</Logout>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  border-bottom: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 20px;
`

const Navigation = styled.nav`
  display: flex;
`

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-right: 20px;
  &:visited {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  &:active {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  &:last-child {
    margin-right: 0;
  }
`

const LinkText = styled.span`
  font-weight: ${(props: TLinkProps) => (props.activeTab ? 'bold' : 'normal')};
`

const Logout = styled.div`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: pointer;
  margin-left: auto;
`
