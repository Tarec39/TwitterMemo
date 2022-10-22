import { useState } from "react"

export const AddThreadButton = () => {
    const [isDisplay, setIsDisplay] = useState<boolean>(false)
    //setIsDisplayをTrue/Falseする関数
    const onClick = () => {
        setIsDisplay(!isDisplay)
    }
    return(
        <>
        <button onClick={onClick}>+</button>
        <ThreadBox
            isDisplay={isDisplay}
        />
        </>
    )
}

type isDisplay ={isDisplay:boolean}
const ThreadBox = (props: isDisplay) => {
    const isDisplay = props.isDisplay ? 'inherit' : 'none'
    return(
        <textarea style={{display: isDisplay}}></textarea>
    )
}