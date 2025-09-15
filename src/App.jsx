import Card from "./components/Card"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import ScoreBoard from "./components/ScoreBoard"
import { PokeProvider } from "./context/PokeContext"

const App = () => {
  return (
    <PokeProvider>
      <Navbar />
      <div className="p-8">
        <h1 className="text-center font-bold text-2xl my-4">Who's That Pokemoon ?</h1>
        <Card />
        <ScoreBoard />
        <Form />
      </div>

    </PokeProvider>
  )
}
export default App