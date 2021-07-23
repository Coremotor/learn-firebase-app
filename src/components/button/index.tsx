import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { DefaultThemeProps } from 'styles/types'

type TProps = {
  disabled: boolean
  children: ReactNode
}

type TStyleProps = {
  disabled: boolean
}

export const Button: FC<TProps> = (props: TProps) => {
  return <StyledButton disabled={props.disabled}>{props.children}</StyledButton>
}

const StyledButton = styled.button`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  background-color: ${(props: DefaultThemeProps) => props.theme.background.primary};
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  cursor: ${(props: TStyleProps) => (props.disabled ? 'auto' : 'pointer')};
  opacity: ${(props: TStyleProps) => (props.disabled ? '0.5' : '1')};
  padding: 10px;
`
