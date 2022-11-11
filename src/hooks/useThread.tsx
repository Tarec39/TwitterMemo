import { useState } from 'react'; 

export const useThreadBtn = () => {
    const [num, setNum] = useState<number>(0)
    const [array, setArray] =useState<number[]>([])

    const handleNum = () => {
        setArray([...array, (num+1)])
        setNum(num+1)
    }

    const handleDelThread = (num: number) => {
        const newThread = array.filter((index)=> index != num)
        setArray(newThread)
    }
    return{array, handleNum, handleDelThread}
}


