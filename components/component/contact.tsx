import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_uyz2ik9';
    const templateID = 'template_d0tm9og';
    const userID = 'v-idG3pMsjd8JrlQl';
    console.log(formData)
    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        window.alert('Votre mail a bien été envoyé ! Je reviens vers vous au plus vite !');
      }, () => {
        window.alert(`Echec de l'envoi du mail. Veuillez réessayer plus tard.`);
      });
  };


  return (
    <div className="form-container">
      <form className="contact-form grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label htmlFor="name">Votre Nom</label>
          <input
            name="name"
            id="name"
            placeholder="Entrez votre nom ici"
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">Votre Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Entrez votre mail ici"
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="subject">Sujet du contact</label>
          <input
            name="subject"
            id="subject"
            placeholder="Décrivez de façon brève la raison de votre message"
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Provide more details about your message"
            className="textarea-field min-h-[150px]"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button w-full">
          Envoi du message
        </button>
      </form>
    </div>
  );
}

export default Contact;