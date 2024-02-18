import Nav from "./Nav"
import Hero from "./Hero"
import New from "./over/New"
import Over from "./over/Over"
import Footer from "./Footer"
import Categories from "./Categories"
import Product from "./Product"
import Sales from "./Sales"
import Best_Slling from "./Best_Slling"
import Explore from "./Explore"
import ProductCountdown from "./time/ProductCountdown"

function Home() {

  return (
    <>
      <Nav />
      <Hero />
      <Sales />
      <Categories />
      <Best_Slling />
      <Product />
      <Explore />
      <New />
      <Over />
      <Footer />
    </>
  )
}


export default Home