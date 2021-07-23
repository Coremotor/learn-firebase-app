import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { DefaultThemeProps, themeNames } from 'styles/types'
import { setTheme } from 'store/modules/theme/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getTheme } from 'store/modules/theme/selectors'

export const Footer: FC = () => {
  const dispatch = useDispatch()
  const theme = useSelector(getTheme)

  const themeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      dispatch(setTheme(themeNames.light))
    } else {
      dispatch(setTheme(themeNames.dark))
    }
  }
  const { t, i18n } = useTranslation()
  const changeLang = async (lg: string) => {
    await i18n.changeLanguage(lg)
  }

  return (
    <Container>
      <SwitchersWrapper>
        <ThemeSwitcher>
          <label htmlFor="theme">{t('lightTheme')}</label>
          <input id="theme" type="checkbox" onChange={themeSwitch} checked={theme === themeNames.light} />
        </ThemeSwitcher>

        <LangSwitcher>
          <button disabled={i18n.language === 'en'} onClick={() => changeLang('en')}>
            en
          </button>
          <button disabled={i18n.language === 'ru'} onClick={() => changeLang('ru')}>
            ru
          </button>
        </LangSwitcher>
      </SwitchersWrapper>
      <span>{format(Date.now(), 'yyyy')}</span>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  border-top: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 20px;
`

const SwitchersWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  & label {
    cursor: pointer;
    margin-right: 10px;
  }

  & input {
    cursor: pointer;
  }
`

const LangSwitcher = styled.div`
  display: flex;
  align-items: center;

  & button {
    cursor: pointer;
    padding: 0 10px;
  }

  & button:not(:last-child) {
    margin-right: 10px;
  }
`
