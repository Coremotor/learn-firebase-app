import React, { FC } from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import { DefaultThemeProps } from 'styles/types'
import { TNewsInDB } from 'store/modules/news/types'

type TProps = {
  article: TNewsInDB
}

export const Article: FC<TProps> = (props: TProps) => {
  return (
    <NewsBlock>
      <Title>{props.article.title}</Title>
      <NewsText>{props.article.text}</NewsText>
      <Footer>
        <TextSmall>Автор: {props.article.authorName}</TextSmall>
        {/*<TextSmall>Опубликовано: {format(props.article.createdAt.toDate(), 'HH:mm dd.MM.yyyy')}</TextSmall>*/}
        <TextSmall>
          Опубликовано: {format(new Date(props.article.createdAt.seconds * 1000), 'HH:mm dd.MM.yyyy')}
        </TextSmall>
      </Footer>
    </NewsBlock>
  )
}

const NewsBlock = styled.article`
  min-width: 360px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props: DefaultThemeProps) => props.theme.text.primary};
  padding: 10px;
  margin-bottom: 10px;
`

const Title = styled.h4`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin: 0 0 20px 10px;
`

const NewsText = styled.span`
  height: 100%;
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin-bottom: 10px;
`

const TextSmall = styled.small`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
