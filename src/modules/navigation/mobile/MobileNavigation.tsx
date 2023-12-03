import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Col, Drawer, List } from 'antd'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import './mobile-navigation.scss'
import useColorScheme from '@components/color-scheme/useColorScheme'
import NavExtra from '@modules/navigation/NavExtra'
import { menu } from '@modules/navigation/menu/const'
import { useNavigate } from 'react-router-dom'

interface Props {
  height: number
  indentation: number | string
}

const MobileNavigation: React.FC<Props> = ({ height, indentation }) => {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const { colors } = useColorScheme()
  const navigate = useNavigate()

  const showDrawer = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  const resumeKey = 'resume'
  const handleClickMenu = (item: string) => {
    const element = document.getElementById(`${item}`)
    element?.scrollIntoView({ behavior: 'smooth' })
    history.pushState({}, '', `#${item}`)
    onClose()
  }

  return (
    <>
      <Col style={{ position: 'fixed', right: indentation, height: '100%' }} className="dr-center">
        <Button
          icon={<MenuOutlined style={{ fontSize: 24 }} />}
          style={{ backgroundColor: 'transparent', border: 0 }}
          size="large"
          onClick={showDrawer}
        />
      </Col>
      <Drawer
        title={t('navigation-drawer-title')}
        extra={<NavExtra spaceSize={24} />}
        placement="top"
        onClose={onClose}
        open={open}
        key="left"
        height="inherit"
        closeIcon={<CloseOutlined className="drawer-close-icon" />}
        contentWrapperStyle={{
          minHeight: height,
        }}
        // headerStyle={{ border: 0 }}
        style={{
          backgroundColor: colors.backgroundDark(),
        }}
        bodyStyle={{ display: 'flex', justifyContent: 'center', padding: 0 }}
      >
        <List
          dataSource={[
            ...menu[i18n.language],
            // {
            //   key: resumeKey,
            //   title: t('navigation_resume'),
            // },
          ]}
          style={{ width: '100%' }}
          renderItem={(item) => (
            <List.Item
              key={item.key}
              style={{
                borderBlockEnd: '1px solid rgba(255, 255, 255, 0.94)',
              }}
              actions={[
                <Button
                  type="text"
                  onClick={
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    item.key === resumeKey
                      ? () => navigate('resume')
                      : () => handleClickMenu(item.key)
                  }
                  key={item.key}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  target={item.key === resumeKey ? '_blank' : undefined}
                >
                  {item.title}
                </Button>,
              ]}
            />
          )}
        />
      </Drawer>
    </>
  )
}

export default MobileNavigation
