import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Col, Drawer } from 'antd'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { mainColors } from '@const/colors'
import './mobile-navigation.scss'

interface Props {
  height: number | string
}

const MobileNavigation: React.FC<Props> = ({ height }) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const showDrawer = (): void => {
    setOpen(true)
  }

  const onClose = (): void => {
    setOpen(false)
  }

  return (
    <>
      <Col
        style={{ position: 'fixed', right: 48, height: '100%' }}
        className="abs-center"
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
        style={{ backgroundColor: mainColors.secondary, height }}
        bodyStyle={{ display: 'flex', justifyContent: 'center' }}
      >
        {/*<NavigationContainer />*/}
      </Drawer>
    </>
  )
}

export default MobileNavigation
