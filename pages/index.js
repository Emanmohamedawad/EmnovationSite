import Feature from "../components/WeOffer";
import Courses from "../components/Courses";
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
        <Courses />
      </Layout>
    </>
  );
}
