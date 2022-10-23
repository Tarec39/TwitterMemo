import { useState } from 'react'; 

export const useThreadBtn = () => {
    const [num, setNum] = useState(0)

    const handleNum = () => {
        setNum(num+1)
    }

    return{num, handleNum}
}