import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/Header/Header"
import { Navigation } from "./components/navigation/Navigation"

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main__container">
        <Banner/>
        <Navigation/>
      </main>
    </div>
  )
}

export default App
