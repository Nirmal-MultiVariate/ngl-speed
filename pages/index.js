import Hero from "../components/home/Hero";
import Marketing from "../components/home/Marketing";
import OurServices from "../components/home/OurServices";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import Tools from "../components/home/Tools";
import Trustby from "../components/home/Trustby";
import Contact from "../components/home/Contact";
import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT Growth Labs Pvt. Ltd.</title>
      </Head>
      <Layout>
        <Hero />
        <Trustby />
        <OurServices />
        <Testimonials />
        <Tools />
        <Services />
        <Marketing />
        <Contact />
      </Layout>
    </>
  );
}
