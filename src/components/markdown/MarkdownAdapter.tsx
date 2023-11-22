import React, { CSSProperties } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { type Options } from 'react-markdown/lib'
import './markdown-adapter.css'

interface Props {
  children: Options['children']
  className?: string
  style?: CSSProperties
}

const MarkdownAdapter: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <Markdown remarkPlugins={[remarkGfm]} className="abs-center markdown-adapter-base">
      {children}
    </Markdown>
  )
}

export default MarkdownAdapter
