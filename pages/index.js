import Feature from "../components/WeOffer";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='EMnovation' />
      <Layout>
        <Hero />
        <Feature />
        {/* <Pricing /> */}
      </Layout>
    </>
  );
}
