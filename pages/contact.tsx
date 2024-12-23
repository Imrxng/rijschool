import Header from "@/components/header";
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