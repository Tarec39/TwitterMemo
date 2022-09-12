type Props = {
    onChange: (event:React.ChangeEvent<HTMLTextAreaElement>) => void
    onClick: () => void
    value: string
}

export const MakeTweet = (props: Props) => {
    return(
        <>
        <h2>ツイートの作成</h2>

        <textarea
            value={props.value}
            onChange={props.onChange}
            style={{resize:'none', width:'300px', height:'200px'}
        }/>

        <button onClick={props.onClick}>ツイート</button>
        </>
    )
}
