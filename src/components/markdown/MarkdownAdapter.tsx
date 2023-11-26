import React, { CSSProperties, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './markdown-adapter.css'

interface Props {
  children: Promise<{ default: string }>
  className?: string
  style?: CSSProperties
}

const MarkdownAdapter: React.FC<Props> = (props) => {
  const { children } = props
  const [text, setText] = useState<string | undefined>(undefined)

  useEffect(() => {
    void children.then((it) => {
      setText(it.default)
    })
  }, [children])

  return (
    <Markdown remarkPlugins={[remarkGfm]} className="drednote-center markdown-adapter-base">
      {text}
    </Markdown>
  )
}

export default MarkdownAdapter
