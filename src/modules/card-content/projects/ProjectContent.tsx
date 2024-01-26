import React, { useContext } from 'react'
import MarkdownAdapter, { MarkdownData } from '@components/markdown/MarkdownAdapter'
import { Row, Space, Typography } from 'antd'
import context from '@const/context'
import WrapText from '@components/wrap-text/WrapText'
import LinkIconOutlined from '@icons/link/LinkIconOutlined'

export interface Project {
  title: string
  skills: string[]
  href: string
}

type Props = { data: Project; text: MarkdownData }

const BodyRenderer: React.FC<{
  text: Props['text']
  data: Props['data']
}> = ({ text, data: { title, skills, href } }) => {
  const { options } = useContext(context.Adaptive)

  return (
    <>
      <Space
        direction="vertical"
        className="dr-row"
        style={{
          marginTop: 0,
        }}
      >
        <Typography.Title level={options.titleLevels.l4} className="link-button delimiter">
          <a
            style={{ color: 'inherit', display: 'inline-flex', alignItems: 'start' }}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {title}
            <LinkIconOutlined
              style={{
                fontSize: 10,
                paddingLeft: 4,
              }}
            />
          </a>
        </Typography.Title>
        <Row>
          <MarkdownAdapter>{text}</MarkdownAdapter>
        </Row>
      </Space>
      <Row style={{ alignContent: 'end' }}>
        {skills.map((skill) => (
          <WrapText
            text={skill}
            key={skill}
            className="skills"
            small
            style={{
              fontSize: '.9rem',
              marginRight: 8,
              marginBottom: 8,
            }}
          />
        ))}
      </Row>
    </>
  )
}

const ProjectContent: React.FC<Props> = ({ data, text }) => {
  const bodyRenderer = <BodyRenderer text={text} data={data} />

  return (
    <Row
      className="dr-row dr-block-layout"
      style={{
        marginBottom: 24,
        borderRadius: 'inherit',
        padding: 24,
        paddingTop: 24,
        height: '100%',
      }}
    >
      {bodyRenderer}
    </Row>
  )
}
export default ProjectContent
