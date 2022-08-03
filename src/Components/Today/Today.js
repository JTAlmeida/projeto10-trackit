import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";

export default function Today(){
    const { token, setToken } = useContext(TokenContext);

    console.log(token);
    
    return(
        <></>
    )
}