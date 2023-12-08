import React from 'react'
import CardContent from '@modules/card-content/CardContent'
import Navigation from '@modules/navigation/Navigation'
import { Mobile } from '@components/adaptive/Adaptive'
import ContactFooter from '@modules/navigation/mobile/ContactFooter'

const Root: React.FC = () => {
  return (
    <>
      <Navigation />
      <CardContent />
      <Mobile>
        <ContactFooter />
      </Mobile>
    </>
  )
}

export default Root
