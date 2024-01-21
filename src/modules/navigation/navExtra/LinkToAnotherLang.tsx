import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
import ruIcon from '@icons/lang/ru-icon.svg'
import enIcon from '@icons/lang/en-icon.svg'
import Icon from '@ant-design/icons'
import context from '@const/context'

const LinkToAnotherLang: React.FC = () => {
  const { colors } = useContext(context.ColorScheme)
  const { t } = useContext(context.Translation)

  return (
    <Link to={t('link-lang-to')} style={{ display: 'flex' }}>
      {t('button-link-lang') === 'en' ? (
        <Icon alt="en" component={enIcon} style={{ color: colors.primary(), fontSize: 26 }} />
      ) : (
        <Icon alt="ru" component={ruIcon} style={{ color: colors.primary(), fontSize: 26 }} />
      )}
    </Link>
  )
}

export default LinkToAnotherLang
