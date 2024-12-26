import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/32486295375"
      className="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default Whatsapp;