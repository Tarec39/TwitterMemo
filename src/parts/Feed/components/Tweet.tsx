import { TweetData } from "../../../types/Tweet";

import {DeleteBtn} from './DeleteBtn'

type props = {
    tweet: TweetData
    handleDelete: () => void
    index: number
}

export const Tweet = (props: props) => {

    return(
        <>
        <div>
            {props.tweet.title === ""
                ?<h3>&nbsp;</h3>
                :<h3>{props.tweet.title}</h3>
            }
            {props.tweet.contents.map((i) => (
            <div key={props.index+1}>
                <div key={props.index+1}><p>{i.text}</p></div>
                <DeleteBtn key={props.index+2} onClick={props.handleDelete}/>
            </div>
            ))}
        </div>
        </>
    )
}


