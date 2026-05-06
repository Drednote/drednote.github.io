import LinkToAnotherLang from '@modules/navigation/navExtra/LinkToAnotherLang'
import ColorSchemeSwitcher from '@modules/navigation/navExtra/ColorSchemeSwitcher'
import { Button, Space, Tooltip } from 'antd'
import React, { useContext, useState } from 'react'
import { Desktop } from '@components/adaptive/Adaptive'
import ContactModal from '@modules/navigation/ContactModal'
import './navigation.scss'
import context from '@const/context'
import IconButton, { GithubIconButton } from '@components/icon-button/IconButton'
import { FilePdfOutlined } from '@ant-design/icons'
import { downloadResumePdf } from '@modules/resume/resumePdf'

const NavExtra: React.FC<{ spaceSize: number }> = ({ spaceSize }) => {
  const [open, setOpen] = useState(false)
  const [resumeLoading, setResumeLoading] = useState(false)
  const { i18n, t } = useContext(context.Translation)

  const handleOpenModal = () => {
    setOpen(!open)
  }

  const handleDownloadResume = async () => {
    setResumeLoading(true)

    try {
      await downloadResumePdf(i18n.language, t)
    } finally {
      setResumeLoading(false)
    }
  }

  return (
    <>
      <Space size={spaceSize}>
        <GithubIconButton fontSize={24} />
        <LinkToAnotherLang />
        <ColorSchemeSwitcher />
        <Tooltip title={t('resume_download-button')}>
          <IconButton
            aria-label={t('resume_download-button')}
            fontSize={24}
            icon={<FilePdfOutlined style={{ fontSize: 24 }} />}
            loading={resumeLoading}
            onClick={handleDownloadResume}
          />
        </Tooltip>
        <Desktop>
          <Button className="navigation-extra-button" onClick={handleOpenModal}>
            {t('navigation_contact')}
          </Button>
        </Desktop>
      </Space>
      <ContactModal open={open} onCancel={handleOpenModal} />
    </>
  )
}

export default NavExtra
