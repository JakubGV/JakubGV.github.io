import React, { Component } from 'react';
import './ContactForm.css';

type ContactFormProps = {

}

type ContactFormState = {
  form: ContactRequest
}

type ContactRequest = {
  name: string,
  email: string,
  message: string
}

export class ContactForm extends Component <ContactFormProps, ContactFormState> {
  state = {
    form: {
      name: '',
      email: '',
      message: ''
    }
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

  handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert(JSON.stringify(this.state.form))
  }
  
  render() {
    return (
      <>
        <input
          className="text-input"
          placeholder="Name..."
          name="name" type="text"
          value={this.state.form.name}
          onChange={this.handleTextChange} />

        <input
          className="text-input"
          placeholder="Email..."
          name="email" type="text"
          value={this.state.form.email}
          onChange={this.handleTextChange} />

        <textarea
          className="box-input"
          placeholder="Message..."
          name="message"
          value={this.state.form.message}
          onChange={this.handleTextAreaChange} />

        <div className="submit">
          <button onClick={this.handleSubmit}>Send!</button>
        </div>
      </>
    )
  }
}