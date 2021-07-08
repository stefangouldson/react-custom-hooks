import { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards){
                setCounter((prevInterval) => prevInterval + 1);
            } else {
                setCounter((prevInterval) => prevInterval - 1);
            }
        }, 1000);
        return () => clearInterval();
    }, [forwards]);

    return counter
}

export default useCounter