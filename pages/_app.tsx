import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/introHome.component.css";
import "@/styles/infoCardHome.component.css";
import "@/styles/HomePhotoWithInfo.component.css";
import "@/styles/header.component.css";
import "@/styles/Footer.component.css";
import "@/styles/Ervaringen.component.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
