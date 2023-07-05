import DefaultLayout from "../layout/DefaultLayout";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import './Contact.css'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/c9d84e70-196d-11ee-b0a7-9f000c4c1540"; 

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sender, setSender] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSender(data.name)
        setSubmitted(true);
      })
      .catch(err => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <DefaultLayout>
        <section className="card">
          <h2>Submitted!</h2>
          <p>
            Dear {sender},
            <br /><br />
            Thank you for reaching out and sending your message! I appreciate your interest and wanted to express my gratitude for your time and effort. I will review your message carefully and get back to you promptly. If you have any further questions or need additional information, please feel free to let me know. 
            <br /><br />
            Thank you again for your message, and I look forward to connecting with you further.
            <br /><br />
            Best regards,
            <br /><br />
            Sam Jenkin
          </p>
        </section>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <section className="card">
        <section className="contact-heading">
          <h1>Contact Me</h1>
          <p>I will get back to you as soon as I can!</p>
        </section>
        
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          accept-charset="UTF-8"
        >
          <TextField
            placeholder="Enter name"
            name="name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            type="email"
            placeholder="Enter email" 
            name="email" 
            variant="outlined" 
            fullWidth 
            required
          />
          <TextField 
            multiline 
            rows={4} 
            placeholder="Type your message here" 
            name="message" 
            variant="outlined" 
            fullWidth 
            required
          />
          <Button 
            type="submit" 
            variant='contained' 
            color='primary' 
            fullWidth
          >
            Submit
          </Button>
        </form>
      </section>

      {/* catch hackers */}
      <div style={{ textIndent: '-99999px', whiteSpace: 'nowrap', overflow: 'hidden', position: 'absolute' }}  aria-hidden="true">
        <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
      </div>
    </DefaultLayout>
  )
}

export default Contact;