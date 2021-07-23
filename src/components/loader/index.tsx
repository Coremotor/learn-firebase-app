import React from 'react'
import styled from 'styled-components'
import { DefaultThemeProps } from 'styles/types'

export const Loader = () => {
  return (
    <LoaderScreen>
      <Text>Загрузка...</Text>
    </LoaderScreen>
  )
}

const LoaderScreen = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(5px);
`
const Text = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
`
