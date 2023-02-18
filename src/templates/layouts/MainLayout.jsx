import React from 'react'
import Header from '../HomeTemplates/Layout/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function MainLayout(props) {
    const {children} = props
  return (<>
    <Header />
    {children}
    <Footer />
  </>
  )
}
