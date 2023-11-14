import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { type Options } from 'react-markdown/lib'

interface Props {
  children: Options['children']
}

const MarkdownAdapter: React.FC<Props> = (props) => {
  const { children } = props
  return <Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
}

export default MarkdownAdapter
