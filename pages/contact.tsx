import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

const Contact = () => {
    return (
        <div>
            <Header/>
            <ContactUs/> 
            <div id="map">
                <DynamicMap/>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;