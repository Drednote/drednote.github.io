import React from 'react'
import CardContent from '@modules/card-content/CardContent'
import Navigation from '@modules/navigation/Navigation'
import { MobileOrTablet } from '@components/adaptive/Adaptive'
import ContactFooter from '@modules/navigation/mobile/ContactFooter'

const Root: React.FC = () => {
  return (
    <>
      <Navigation />
      <CardContent />
      <MobileOrTablet>
        <ContactFooter />
      </MobileOrTablet>
    </>
  )
}

export default Root
