import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Rijschool Alpha</title>
        <meta
          name="description"
          content="Neem contact op met Rijschool Alpha. Wij staan klaar om al je vragen te beantwoorden en je te helpen met je rijopleiding. Bereik ons via telefoon, e-mail of bezoek ons kantoor."
        />
        <meta
          name="keywords"
          content="rijschool, contact, vragen, rijopleiding, telefoon, e-mail, kantoor"
        />
        <meta name="author" content="Rijschool Alpha" />
        <meta property="og:title" content="Contact - Rijschool Alpha" />
        <meta
          property="og:description"
          content="Neem contact op met Rijschool Alpha. Wij staan klaar om al je vragen te beantwoorden en je te helpen met je rijopleiding."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.alpharijschool.be/contact"
        />
      </Head>
      <div>
        <Header />
        <ContactUs />
        <div id="map">
          <noscript>
            <p>
              Bekijk onze locatie op de kaart:{" "}
              <a href="https://maps.google.com/?q=Rijschool+Alpha">
                Rijschool Alpha op Google Maps
              </a>
              .
            </p>
          </noscript>
          <DynamicMap />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
