import React, { HTMLAttributes } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './markdown-adapter.css'
import { Typography } from 'antd'
import { LinkOutlined } from '@ant-design/icons'

export type MarkdownData = { default: string }

interface Props {
  children?: MarkdownData
  // if you want to pass raw text. Has priority over children
  text?: string
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
  const { children, itemClassName, className, text } = props

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className={`${className} markdown-adapter-base dr-link`}
      components={{
        a(props) {
          return (
            <a
              style={{ display: 'inline-flex', alignItems: 'start' }}
              href={props.href}
              target="_blank"
              rel="noreferrer"
              className={`${itemClassName} dr-link`}
            >
              {props.children}
              <LinkOutlined
                style={{
                  fontSize: 10,
                }}
              />
            </a>
          )
        },
        p(props) {
          return <p className={itemClassName} {...props} />
        },
        ul(props) {
          return <ul className={itemClassName} {...props} />
        },
        code(props) {
          return <code className={`${itemClassName} markdown-adapter-code`} {...props} />
        },
        strong(props) {
          return <strong className={`${itemClassName} markdown-adapter-strong`} {...props} />
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
      {text ? text : children?.default}
    </Markdown>
  )
}

export default MarkdownAdapter
