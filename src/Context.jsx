import { createContext } from "react";

const AgeStore = createContext({}) ;
// {age:21}
function AgeProvider(props){
    return <AgeStore.Provider value={{age:21, name:"taswoor"}}> 
        {props.children}
    </AgeStore.Provider>
}
export default AgeProvider;
export {AgeStore};