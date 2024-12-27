import React from 'react';
import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const router = useRouter();

  if (router.pathname === '/404') {
    return null;
  }

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