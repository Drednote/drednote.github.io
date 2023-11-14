import React, { type ReactNode } from 'react'
import MarkdownAdapter from '@components/markdown/MarkdownAdapter'
import aboutMeEn from '@public/text/en/about-me.md'
import aboutMeRu from '@public/text/ru/about-me.md'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const text: Record<string, string> = {
  aboutMeRu,
  aboutMeEn,
}

const AboutMe = (): ReactNode => {
  const { t } = useTranslation()

  return (
    <>
      <Typography.Title>Ivan Galushko</Typography.Title>
      <MarkdownAdapter>{text[t('body-about-me')]}</MarkdownAdapter>
    </>
  )
}

export default AboutMe
