import React, { useState } from 'react'
import { Button } from 'antd'
import ContactModal from '@modules/navigation/ContactModal'
import ChatIcon from '@icons/ChatIcon'
import './mobile-navigation.scss'

const ContactFooter: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(!open)
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 32,
        right: 10,
        zIndex: 100,
      }}
    >
      <Button
        onClick={handleOpenModal}
        shape="circle"
        className="contact-button"
        style={{ width: 64, height: 64 }}
        icon={<ChatIcon style={{ fontSize: 36 }} />}
      />
      <ContactModal open={open} onCancel={handleOpenModal} />
    </div>
  )
}

export default ContactFooter
