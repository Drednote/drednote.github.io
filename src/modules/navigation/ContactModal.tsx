import React, { useContext, useEffect, useState } from 'react'
import { Modal, Row } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import './navigation.scss'
import './mobile/mobile-navigation.scss'
import MarkdownAdapter, { MarkdownData } from '@components/markdown/MarkdownAdapter'
import context from '@const/context'

interface Props {
  open: boolean
  onCancel: () => void
}

const ContactModal: React.FC<Props> = (props) => {
  const { open, onCancel } = props
  const { i18n } = useContext(context.Translation)
  const [text, setText] = useState<MarkdownData>()

  useEffect(() => {
    async function loadText() {
      const loadedText = (await import(`@public/text/${i18n.language}/contact.md`)) as MarkdownData
      setText(loadedText)
    }
    void loadText()
  }, [i18n.language])

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      closeIcon={<CloseOutlined className="drawer-close-icon" />}
    >
      <Row className="dr-row-center">
        <MarkdownAdapter>{text}</MarkdownAdapter>
      </Row>
    </Modal>
  )
}

export default ContactModal
