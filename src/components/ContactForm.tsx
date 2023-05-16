import React, { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import './ContactForm.css';

type ContactFormProps = {

}

type ContactFormState = {
  form: ContactRequest,
  valid: FormValidity,
  loading: boolean
}

type ContactRequest = {
  name: string,
  email: string,
  message: string
}

type FormValidity = {
  nameValid: boolean,
  emailValid: boolean,
  messageValid: boolean
}

/**
 * Renders a ContactForm with fields name, email, and message and sends to a google script
 * @returns 2 text `<input>`s, a `<textarea>`, and submission `<button>`
 */
export class ContactForm extends Component <ContactFormProps, ContactFormState> {
  state = {
    form: {
      name: '',
      email: '',
      message: ''
    },
    valid: {
      nameValid: true,
      emailValid: true,
      messageValid: true
    },
    loading: false
  }

  handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameAttribute = event.target.name;
    const valueAttribute = event.target.value;
    
    let updatedForm = this.state.form;
    updatedForm[nameAttribute as keyof ContactRequest] = valueAttribute;

    this.setState({
      form: updatedForm
    });
  }
  
  handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nameAttribute = event.target.name;
    const valueAttribute = event.target.value;
    
    let updatedForm = this.state.form;
    updatedForm[nameAttribute as keyof ContactRequest] = valueAttribute;

    this.setState({
      form: updatedForm
    });
  }

  validateForm = () => {
    const name = this.state.form.name;
    const email = this.state.form.email;
    const message = this.state.form.message;
    let validUpdate: FormValidity = this.state.valid;

    if (name.length === 0) {
      validUpdate['nameValid'] = false;
    }
    else {
      validUpdate['nameValid'] = true;
    }

    if (email.length === 0 || !(email.includes('@'))) {
      validUpdate['emailValid'] = false;
    }
    else {
      validUpdate['emailValid'] = true;
    }

    if (message.length === 0) {
      validUpdate['messageValid'] = false;
    }
    else {
      validUpdate['messageValid'] = true;
    }

    this.setState({
      valid: validUpdate
    })
  }

  send = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbymrCeLLpRrV0zuLRlbjDWQKqcTr8KaYK_GsWly_h_MQcIvEQOnBS0yMtzJrrAhVlSn8A/exec';
    const method = 'POST';

    let data = new FormData();
    for (const [key, value] of Object.entries(this.state.form)) {
      data.append(key, value);
    }

    fetch(url, {
      method,
      body: data
    })
    .then(() => {
      alert('Message sent!');
      this.setState({
        loading: false
      })
    })
    .catch(e => {
      alert('Something went wrong');
      this.setState({
        loading: false
      })
      console.log(e);
    })
  }

  handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.validateForm();

    if (!this.state.valid.nameValid || !this.state.valid.emailValid || !this.state.valid.messageValid) {
      return;
    }
    else {
      this.setState({
        loading: true
      })
      this.send();
    }
  }
  
  render() {
    return (
      <div className="contact-form">
        <input
          className="text-input"
          placeholder="Name"
          name="name" type="text"
          value={this.state.form.name}
          onChange={this.handleTextChange} />

        <input
          className="text-input"
          placeholder="Email"
          name="email" type="text"
          value={this.state.form.email}
          onChange={this.handleTextChange} />

        <textarea
          className="box-input"
          placeholder="Message"
          name="message"
          value={this.state.form.message}
          onChange={this.handleTextAreaChange} />
        
        <div className="submit">
          {
            !this.state.valid.nameValid &&
            <div className="error">Please enter your name</div>
          }
          {
            !this.state.valid.emailValid &&
            <div className="error">Please enter an email or include the '@' symbol</div>
          }
          {
            !this.state.valid.messageValid &&
            <div className="error">Please enter a message</div>
          }
          <button className="submit-button" onClick={this.handleSubmit}><h2 className="subheader">Send</h2></button>
          {
            this.state.loading &&
            <Circles height="25" width="25" color="#98c1d9ff"/>
          }
        </div>
      </div>
    )
  }
}