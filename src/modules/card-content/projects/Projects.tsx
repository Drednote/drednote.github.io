import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import context from '@const/context'
import { MarkdownData } from '@components/markdown/MarkdownAdapter'
import projects from '@public/projects/projects.json'
import ProjectContent, { Project } from '@modules/card-content/projects/ProjectContent'
import { Desktop, DesktopOrTablet, Mobile, MobileOrTablet } from "@components/adaptive/Adaptive";

type DataValue = { json: Project; md: MarkdownData; key: string }

const Projects: React.FC<{ id: string }> = ({ id }) => {
  const { options } = useContext(context.Adaptive)
  const { i18n, t } = useContext(context.Translation)
  const [content, setContent] = useState<{ l: DataValue; r: DataValue | null }[]>([])

  useEffect(() => {
    async function loadData() {
      const data = await Promise.all(
        (projects as { rel: string }[]).map(async (project) => {
          const title = require(`@public/projects/${i18n.language}/${project.rel}.json`) as Project
          const text = (await import(
            `@public/projects/${i18n.language}/${project.rel}.md`
          )) as MarkdownData
          return { json: title, md: text, key: project.rel }
        }),
      )
      const pairs = []
      for (let i = 0; i < data.length; i += 2) {
        if (i + 1 < data.length) {
          pairs.push({ l: data[i], r: data[i + 1] })
        } else {
          pairs.push({ l: data[i], r: null })
        }
      }
      setContent(pairs)
    }
    void loadData()
  }, [i18n.language])

  return (
    <Col
      id={id}
      style={{
        maxWidth: options.maxWidth,
        paddingTop: options.navigationHeight,
        width: '100%',
      }}
    >
      <Typography.Title className="dr-row-center" level={options.titleLevels.l1}>
        {t('projects_title')}
      </Typography.Title>
      <Row className="dr-row dr-row-center" style={{ display: 'grid', gap: '16px' }}>
        {content.map((data, index) => {
          const leftBlock = <ProjectContent key={data.l.key} data={data.l.json} text={data.l.md} />
          const rightBlock = data.r && (
            <ProjectContent key={data.r.key} data={data.r.json} text={data.r.md} />
          )

          return (
            <>
              <Desktop>
                <Row
                  style={{
                    gridRow: index + 1,
                    display: 'grid',
                    gap: '16px',
                    gridTemplateColumns: '50%',
                  }}
                >
                  <Col style={{ gridColumn: 1 }}>{leftBlock}</Col>
                  <Col style={{ gridColumn: 2 }}>{rightBlock}</Col>
                </Row>
              </Desktop>
              <MobileOrTablet>
                {leftBlock}
                {rightBlock}
              </MobileOrTablet>
            </>
          )
        })}
      </Row>
    </Col>
  )
}

export default Projects
