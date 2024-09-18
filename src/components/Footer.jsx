import React, { useContext } from 'react'
import { AgeStore } from '../Context'

const Footer = () => {
    const store =  useContext(AgeStore)
  return (
    <div>
      footer agevalue {store.age} {store.name}
    </div>
  )
}

export default Footer
