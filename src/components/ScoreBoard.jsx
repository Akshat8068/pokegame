import { useContext } from 'react'
import Pokeball from'../assets/pokball.jpg'
import PokeContext from '../context/PokeContext'
const ScoreBoard = () => {
    const{score,chances}=useContext(PokeContext)
    return (
        <div className="my-4 flex items-center justify-between">
            <p className="font-bold text-gray-600">Score : {score}</p>
            <div className='flex space-x-2'>
                {
                    chances === 3 ? (
                        <>
                            <img className='h-6' src={Pokeball} alt="" />
                            <img className='h-6' src={Pokeball} alt="" />
                            <img className='h-6' src={Pokeball} alt="" />
                        </>
                    ) : chances === 2 ? (
                            <>
                                <img className='h-6' src={Pokeball} alt="" />
                                <img className='h-6' src={Pokeball} alt="" />
                            </>
                        ) : chances === 1 ? (
                                <>
                                    <img className='h-6' src={Pokeball} alt="" />
                                </>
                            ) : (
                                <>
                                </>
                            )
                }
            </div>
        </div>
    )
}
export default ScoreBoard