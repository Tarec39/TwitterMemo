type props = {
    value: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    num: number
}

export const ThreadText = (props: props) => {
    let nums: number[] = []
    for(let i=0; i < props.num; i++){
        nums.push(i)
    }
    return(
        <>
        <div>
            {nums.map((i)=>(
            <textarea
                key={i}
                value={props.value}
                onChange={props.onChange}
                placeholder="いまどうしてる?"
                required
            />
            ))}
        </div>                                                                                                                                                                                                                                   
        </>
    )
}