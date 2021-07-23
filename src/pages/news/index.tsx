import React, { FC, FormEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from 'store/modules/theme/reducer'
import { EnumTabs } from 'store/modules/theme/types'
import { DefaultThemeProps } from 'styles/types'
// import { useTranslation } from 'react-i18next'
import { addNewsInDB, getNewsListFromDB } from 'store/modules/news/actions'
import { getIsLoading, getNewsList } from 'store/modules/news/selectors'
import { Loader } from 'components/loader'
import { Article } from 'pages/news/components/article'
import { Button } from 'components/button'
import { getCurrentUser } from 'store/modules/users/selectors'

export const NewsPage: FC /*<Props>*/ = () => {
  // const { t } = useTranslation()
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const newsList = useSelector(getNewsList)
  const currentUser = useSelector(getCurrentUser)

  const [article, setArticle] = useState({
    authorName: currentUser?.displayName || '',
    title: '',
    text: '',
  })

  const onInputAuthorName = (e: FormEvent<HTMLInputElement>) =>
    setArticle({ ...article, authorName: e.currentTarget.value })
  const onInputTitle = (e: FormEvent<HTMLInputElement>) => setArticle({ ...article, title: e.currentTarget.value })
  const onInputText = (e: FormEvent<HTMLTextAreaElement>) => setArticle({ ...article, text: e.currentTarget.value })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(addNewsInDB(article))
    setArticle({ authorName: currentUser?.displayName || '', title: '', text: '' })
  }

  useEffect(() => {
    dispatch(setActiveTab(EnumTabs.news))
    dispatch(getNewsListFromDB())
  }, [])
  return (
    <Container>
      {isLoading && <Loader />}
      {/*<Text>{t('news')}</Text>*/}
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <Title>Создать новость</Title>
          <input
            onInput={onInputAuthorName}
            value={article.authorName}
            placeholder="Имя автора"
            name="authorName"
            type="text"
            required={true}
          />
          <input
            onInput={onInputTitle}
            value={article.title}
            placeholder="Название статьи"
            name="title"
            type="text"
            required={true}
          />
          <textarea
            onInput={onInputText}
            value={article.text}
            placeholder="Текст статьи"
            name="text"
            maxLength={250}
            minLength={10}
            required={true}
          />
          <Button disabled={false}>Опубликовать статью</Button>
        </Form>
        <NewsList>
          {newsList.map((n) => (
            <Article key={n.uid} article={n} />
          ))}
        </NewsList>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  margin: 0 0 10px 10px;
`

const Form = styled.form`
  width: 20%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  & label {
    color: ${(props: DefaultThemeProps) => props.theme.text.primary};
  }
  & input {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
  }
  & textarea {
    resize: none;
    width: 100%;
    height: 20vh;
    padding: 5px;
    margin-bottom: 10px;
  }

  & button {
    align-self: flex-end;
  }
`

const NewsList = styled.div`
  width: 78%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;
`
