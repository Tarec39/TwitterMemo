type Props = {
    onChange: (event:React.ChangeEvent<HTMLTextAreaElement>) => void
    onClick: () => void
    value: string
    isDisabled: boolean
}

export const MakeTweet = (props: Props) => {
    return(
        <>
        <h2>テキストの追加</h2>

        <textarea
            value={props.value}
            onChange={props.onChange}
            style={{resize:'none', width:'300px', height:'200px'}
        }/>

        <button
            onClick={props.onClick}
            disabled={props.isDisabled}
        >
        ツイート
        </button>
        </>
    )
}
