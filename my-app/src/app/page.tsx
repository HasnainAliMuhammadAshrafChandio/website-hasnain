// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Hero from "../app/components/navbar";
import Products from "../app/components/productCard7";
import Slides from "../app/components/slides";
import SubHero from "../app/components/subhero";

export default function Home(){
  return (
    <>
    {/* <Header/> */} 
    <Hero/>
    <SubHero/>
    <Products/>
    <Slides/>
    {/* <Footer/> */}
    </>
  )
}