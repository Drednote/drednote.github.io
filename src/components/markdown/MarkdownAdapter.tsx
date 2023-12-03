import React, { HTMLAttributes, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './markdown-adapter.css'
import { Typography } from 'antd'

export type MarkdownData = Promise<{ default: string }>

interface Props {
  children: MarkdownData
  itemClassName?: string
  className?: string
}

type TL = 1 | 2 | 3 | 4 | 5 | undefined

const GetHElement = (
  props: React.ClassAttributes<HTMLHeadElement> & HTMLAttributes<HTMLHeadElement>,
  level: TL,
) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Typography.Title level={level} {...props} />
)

const MarkdownAdapter: React.FC<Props> = (props) => {
  const { children, itemClassName, className } = props
  const [text, setText] = useState<string | undefined>(undefined)

  useEffect(() => {
    void children.then((it) => {
      setText(it.default)
    })
  }, [children])

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className={`${className} markdown-adapter-base`}
      components={{
        p(props) {
          return <p className={itemClassName} {...props} />
        },
        ul(props) {
          return <ul className={itemClassName} {...props} />
        },
        h1(props) {
          return GetHElement({ ...props, className: itemClassName }, 1)
        },
        h2(props) {
          return GetHElement({ ...props, className: itemClassName }, 2)
        },
        h3(props) {
          return GetHElement({ ...props, className: itemClassName }, 3)
        },
        h4(props) {
          return GetHElement({ ...props, className: itemClassName }, 4)
        },
        h5(props) {
          return GetHElement({ ...props, className: itemClassName }, 5)
        },
      }}
    >
      {text}
    </Markdown>
  )
}

export default MarkdownAdapter
