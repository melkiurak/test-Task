import { Banner } from "./components/Banner/Banner"
import { Header } from "./components/Header/Header"

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main__container">
        <Banner/>
      </main>
    </div>
  )
}

export default App
