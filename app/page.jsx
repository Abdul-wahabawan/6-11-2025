import Main from "./components/Main/page";
import About from "./components/About/page";
import Clients from "./components/Clients/page";
import Features from "./components/Features/page";
import Simplify from "./components/Simplify/page";
import Hero from "./components/Hero/page";
import Header from "./components/Layout/Header/page";
import Footer from "./components/Layout/Footer/page";
import Paymentcard from "./components/Paymentcard/page";

export default function Home() {
  return (
    <>
    <Header/>
      <Hero/>
      <About/>
        <Simplify/>
        <Paymentcard/>
        <Features/>
      <Clients/>
      <Main/>
    <Footer/>
    </>
  );
}
