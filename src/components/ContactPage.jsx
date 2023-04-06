import React from 'react'
import Page from './Page'
import ContactForm from './ContactForm'

function ContactPage() {
  return (
    <>
      <Page slot={<ContactForm />}/>
    </>
  )
}

export default ContactPage
