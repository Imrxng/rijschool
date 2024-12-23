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
            <div style={{ height: "700px", padding: "5rem 7rem 5rem 7rem", backgroundColor: '#f9f9f9' }}>
                <DynamicMap/>
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;