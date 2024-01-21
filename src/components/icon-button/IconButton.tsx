import React from 'react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd/es/button/button'
import { GithubFilled } from '@ant-design/icons'

export interface IconButtonProps extends ButtonProps {
  fontSize: number
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { shape = 'circle', fontSize, className, ...otherProps } = props

  return (
    <Button
      style={{
        backgroundColor: 'transparent',
        border: 0,
        fontSize: fontSize,
      }}
      size="middle"
      shape={shape}
      styles={{ icon: { display: 'inline-flex', marginTop: '4px' } }}
      target="_blank"
      rel="noreferrer"
      className={`${className} social-network`}
      {...otherProps}
    />
  )
}

export const GithubIconButton: React.FC<IconButtonProps> = (props) => {
  const { fontSize, ...otherProps } = props
  return (
    <IconButton
      {...otherProps}
      icon={<GithubFilled style={{ fontSize: fontSize }} />}
      fontSize={fontSize}
      href="https://github.com/Drednote"
    />
  )
}

export default IconButton
