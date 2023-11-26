import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Col, Drawer } from 'antd'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import './mobile-navigation.scss'
import useColorScheme from '@components/color-scheme/useColorScheme'

interface Props {
  height: number | string
  indentation: number | string
}

const MobileNavigation: React.FC<Props> = ({ height, indentation }) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const { isDark, colors } = useColorScheme()

  const showDrawer = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <Col
        style={{ position: 'fixed', right: indentation, height: '100%' }}
        className="drednote-center"
      >
        <Button
          icon={<MenuOutlined style={{ fontSize: 24 }} />}
          style={{ backgroundColor: 'transparent', border: 0 }}
          size="large"
          onClick={showDrawer}
        />
      </Col>
      <Drawer
        title={t('navigation-drawer-title')}
        placement="top"
        onClose={onClose}
        open={open}
        key="left"
        closeIcon={<CloseOutlined className="drawer-close-icon" />}
        contentWrapperStyle={{ height }}
        style={{
          backgroundColor: isDark
            ? colors.backgroundDark()
            : colors.backgroundLight(),
          height,
        }}
        bodyStyle={{ display: 'flex', justifyContent: 'center' }}
      >
        {/*<NavigationContainer />*/}
      </Drawer>
    </>
  )
}

export default MobileNavigation
