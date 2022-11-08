type props = {
    maxChar: number
}

export const WordCountIndicator = (props: props) => {
    return(
        <>
        {props.maxChar <= 20
        ?   <div>残りバイト数：{props.maxChar}</div>
        :   <div></div>
        }

        </>
    )
}