import Header from "@/components/header";
import "@/styles/header.component.css";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

const Contact = () => {
    return (
        <div>
            <Header/>
            <DynamicMap/>
        </div>
    );
}

export default Contact;