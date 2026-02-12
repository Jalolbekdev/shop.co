import { Banner } from "./components/Banner"
import Browse from "./components/Browse"
import { Header } from "./components/Header"
import { NewArrivals } from "./components/Newarrivals"
import Topselling from "./components/Topselling"


function App(){
    return(
      <>
      <Header/>
      <main className="main">
        <Banner/>
        <NewArrivals/>
        <Topselling/>
        <Browse/>
      </main>
      </>
    )
}
export default App