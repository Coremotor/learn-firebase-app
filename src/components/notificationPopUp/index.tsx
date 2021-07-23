import React, { FC } from 'react'
import styled from 'styled-components'
import { convertErrorsMessages } from './convertingMessage'
import { TError } from 'store/modules/errors/types'
import { DefaultThemeProps } from 'styles/types'

type TProps = {
  isError: boolean
  errorObj?: TError
  title?: string
  message?: string
  closePopUp?: () => void
  btnText?: string
}

export const NotificationPopUp: FC<TProps> = (props: TProps) => {
  return (
    <Container>
      <Window>
        {props.isError ? <ErrorTitle>{props.title || ''}</ErrorTitle> : <Title>{props.title || ''}</Title>}
        {props.errorObj ? (
          <MessageText>{convertErrorsMessages(props.errorObj)}</MessageText>
        ) : (
          <MessageText>{props.message}</MessageText>
        )}
        <CloseBtn onClick={props.closePopUp}>{props.btnText || 'Закрыть'}</CloseBtn>
      </Window>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 1000;
`

const Window = styled.div`
  min-height: 200px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 16px;
`

const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 16px;
`

const ErrorTitle = styled(Title)`
  color: red;
`

const MessageText = styled.span`
  font-size: 14px;
  margin-bottom: 20%;
`

const CloseBtn = styled.div`
  padding: 10px 20px;
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: pointer;
`
