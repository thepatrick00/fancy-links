import React from 'react'
import styled from 'styled-components'
import MainNav from './MainNav'
import styles from './ContactForm.module.css'

function ContactForm() {

  const uid = React.useId()

  const handleSubmit = (e) => {
    // e.preventDefault();

  }

  // HTMLInputElement.setSelectionRange()

  return (
    <>
      <Wrapper className={styles.wrapper}>
        <h2>Contact Form</h2>
        <p>If you have any feedback I would gladly hear it.</p>
        <StyledForm
          onSubmit={handleSubmit}
          action="https://submit-form.com/BXfnwqFt"
          method="POST"
        >
          <label htmlFor={`name${uid}`}>Name</label>
          <input
            type="text"
            id={`name${uid}`}
            placeholder="Your Name"
            name='name'
          />

          <label htmlFor={`email${uid}`}>Email</label>
          <input
            type="email"
            id={`email${uid}`}
            required
            placeholder="Email"
            name='email'
          />

          <label htmlFor={`subject${uid}`}>Subject</label>
          <input
            type="text"
            id={`subject${uid}`}
            required
            placeholder="Subject"
            name='subject'
          />

          <label htmlFor={`message${uid}`}>Message</label>
          <textarea
            rows={4}
            id={`message${uid}`}
            required
            minLength={20}
            placeholder="What do you want to tell me?"
            name='message'
          />

          <button type='submit'>Submit</button>
        </StyledForm>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;

  h2 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
`

const StyledForm = styled.form`
  margin-top: 1.5rem;
  display: grid;
  gap: .5rem;
  width: 100%;

  input, textarea {
    border: 1px solid var(--slate8);
    border-radius: 10px;
  }
  textarea {

  }
  input {
    height: 2.5rem;
  }
`

export default ContactForm
