import { Children, createContext, useReducer } from "react";
import PokeReducer from "./PokeReducer";

const PokeContext = createContext()
export const PokeProvider = ({ children }) => {
        const initialState = {
            score: 500,
            chances: 2,
            pokemon: {
                name: 'pikachu',
                imageURL:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
            }
        }
        
        const [state,dispatch]= useReducer(PokeReducer,initialState)

    return (
        <PokeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PokeContext.Provider>
        )
    
}
export  default PokeContext