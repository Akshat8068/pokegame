import { useContext } from "react"
import PokeContext from "../context/PokeContext"

const Card = () => {

    const {pokemon}=useContext(PokeContext)

    return (
        <div className="boder boder-gray-300 rounded-md p-4 flex item-center justify-center">
            <img className="h-44 md:h-52" src={pokemon?.imageURL} alt="" />
        </div>
    )
}
export default Card