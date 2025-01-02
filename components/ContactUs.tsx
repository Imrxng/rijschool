import { useForm } from "@formspree/react";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mgvvebyb");
  const [errors, setErrors] = useState({ name: "", email: "", phone: "", message: "" });

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("mail") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    let valid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    if (!name) {
      newErrors.name = "Naam is verplicht.";
      valid = false;
    } else if (name.length < 2) {
      newErrors.name = "Naam moet minstens 2 karakters bevatten.";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is verplicht.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is ongeldig.";
      valid = false;
    }

    if (!phone) {
      newErrors.phone = "Telefoonnummer is verplicht.";
      valid = false;
    } else if (!/^\+?[0-9]{7,15}$/.test(phone)) {
      newErrors.phone = "Telefoonnummer is ongeldig.";
      valid = false;
    }

    if (!message) {
      newErrors.message = "Bericht is verplicht.";
      valid = false;
    } else if (message.length < 10) {
      newErrors.message = "Bericht moet minstens 10 karakters bevatten.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      handleSubmit(event).then(() => {
        form.reset();
        setErrors({ name: "", email: "", phone: "", message: "" });
      });
    }
  };

  return (
    <div id="contact-us">
      <div id="contact-usLeft">
        <h1>Contacteer ons</h1>
        <p>
          Vragen? We horen graag van je! Stuur ons een bericht en we reageren zo
          snel mogelijk.
        </p>
        <div className="contact-usInfoCard">
          <FaMapMarkerAlt />
          <div className="contact-usInfoCardText">
            <h3>Locatie</h3>
            <a
              href="https://www.google.com/maps/place/Alpha+Rijschool/@51.2202801,4.4592743,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3f78275834721:0x9e464b0a101b01a4!8m2!3d51.2202801!4d4.4592743!16s%2Fg%2F11c58222mp?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Turnhoutsebaan 76B, 2100 Antwerpen, België
            </a>
          </div>
        </div>
        <div className="contact-usInfoCard">
          <FaPhoneAlt />
          <div className="contact-usInfoCardText">
            <h3>Telefoon</h3>
            <a href="tel:+32 486 29 53 75">+32 486 29 53 75</a>
          </div>
        </div>
        <div className="contact-usInfoCard">
          <IoMail />
          <div className="contact-usInfoCardText">
            <h3>Email</h3>
            <a href="mailto:rijschoolalpha@gmail.com">
              rijschoolalpha@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-usInfoCard">
          <FaClock />
          <div className="contact-usInfoCardText">
            <h3>Openingsuren</h3>
            <div>
              <p>Maandag - Vrijdag: 10:00 - 18:00</p>
              <p>Zaterdag: 10:00 - 17:00</p>
              <p>Zondag: Gesloten</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-usRight">
        <h2>Stuur ons een bericht</h2>
        <form id="formContact" onSubmit={validateForm}>
          <div className="contact-usInput">
            <label htmlFor="name">
              Name <span className="redColor">*</span>
            </label>
            <br />
            <input type="text" name="name" id="name" required/>
            {errors.name && <p className="errorMessage">{errors.name}</p>}
          </div>
          <div className="contact-usInput">
            <label htmlFor="mail">
              Email <span className="redColor">*</span>
            </label>
            <br />
            <input type="email" name="mail" id="mail" required/>
            {errors.email && <p className="errorMessage">{errors.email}</p>}
          </div>
          <div className="contact-usInput">
            <label htmlFor="phone">
              Telefoon <span className="redColor">*</span>
            </label>
            <br />
            <input type="tel" name="phone" id="phone" required/>
            {errors.phone && <p className="errorMessage">{errors.phone}</p>}
          </div>
          <div className="contact-usInput">
            <label htmlFor="message">
              Bericht <span className="redColor">*</span>
            </label>
            <br />
            <textarea name="message" id="message" required rows={5}></textarea>
            {errors.message && <p className="errorMessage">{errors.message}</p>}
          </div>
          <div className="contact-usInput">
            <label htmlFor="onderwerp">
              Onderwerp: <span className="redColor">*</span>
            </label>
            <br />
            <div id="onderwerp">
              <div className="onderwerpItem">
                <label htmlFor="onderwerp">2 uur manueel</label>
                <input type="checkbox" name="onderwerp"  value={'2 uur manueel'} />
              </div>
              <div className="onderwerpItem">
                <label htmlFor="onderwerp">6 uur manueel</label>
                <input type="checkbox" name="onderwerp" value={'6 uur manueel'} />
              </div>
              <div className="onderwerpItem">
                <label htmlFor="onderwerp">20 uur manueel</label>
                <input type="checkbox" name="onderwerp" value={'20 uur manueel'} />
              </div>
              <div className="onderwerpItem">
                <label htmlFor="onderwerp">2 uur automaat</label>
                <input type="checkbox" name="onderwerp" value={'2 uur automaat'} />
              </div>
              <div className="onderwerpItem">
                <label htmlFor="onderwerp">6 uur automaat</label>
                <input type="checkbox" name="onderwerp" value={'6 uur automaat'} />
              </div>
              <div className="onderwerpItem">
                <label htmlFor="onderwerp">20 uur automaat</label>
                <input type="checkbox" name="onderwerp" value={'20 uur automaat'} />
              </div>
            </div>
            {errors.message && <p className="errorMessage">{errors.message}</p>}
          </div>
          <button id="buttonSendMessage" type="submit" disabled={state.submitting}>
            {state.submitting ? "Verzenden..." : "Verzenden"}
          </button>        
        </form>
        {state.succeeded && (
          <p className="successMessage">Je bericht is succesvol verzonden!</p>
        )}
        {state.errors && (
          <p className="errorMessage">
            Er is een fout opgetreden. Probeer het opnieuw.
          </p>
        )}
        {!state.succeeded && !state.errors && (<p className="nothingMessage"></p>)}
      </div>
    </div>
  );
};

export default ContactUs;