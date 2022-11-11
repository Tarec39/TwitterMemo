import { TweetData } from "../../../types/Tweet";

import {DeleteBtn} from './DeleteBtn'

type props = {
    tweet: TweetData
    handleDelete: (id:string) => void
    index: number
}

export const Tweet = (props: props) => {
    const id = props.tweet.id
    return(
        <>
        <div>
            {props.tweet.title === ""
                ?<h3>&nbsp;</h3>
                :<h3>{props.tweet.title}</h3>
            }
            {props.tweet.contents.map((i) => (
            <div key={props.index}>
                <div><p>{i.text}</p></div>
                <DeleteBtn onClick={props.handleDelete} id={id}/>
            </div>
            ))}
        </div>
        </>
    )
}


