import axios from "axios";
import { useState,useEffect } from "react";

function useFlip(start = true){
    const [isFlipped, setFlipped] = useState(start);
    const flip = () => {
        setFlipped(side => !side);
    }
    return [isFlipped, flip];
}

function useAxios(url){
    const [response, setResponse] = useState(null);

    const callAxios = async() => {
        const r = await axios.get(url);
        setResponse(res.data);
    }

    useEffect(()=>{callAxios()},[]);

    return {response};
}

export {useFlip,useAxios};