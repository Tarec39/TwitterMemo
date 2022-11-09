import {DelThreadBtn} from './ThreadBtn'

type props = {
    value: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    array: number[]
    handleDelThread: (num: number)=>void
}

export const ThreadText = (props: props) => {
    return(
        <>
        <div>
            {props.array.map((i)=>(
            <>
            <textarea
                key={i}
                value={props.value}
                onChange={props.onChange}
                placeholder="いまどうしてる?"
                required
                />
            <DelThreadBtn
                index={i}
                onClick={props.handleDelThread}/>
            </>
            ))}
        </div>                                                                                                                                                                                                                                   
        </>
    )
}