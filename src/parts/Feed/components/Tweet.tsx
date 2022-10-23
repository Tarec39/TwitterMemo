import { TweetData } from "../../../types/Tweet";

import {DeleteBtn} from './DeleteBtn'

type props = {
    tweet: TweetData
    handleDelete: () => void
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
            <>
                <div><p >{i.text}</p></div>
                <DeleteBtn onClick={props.handleDelete}/>
            </>
            ))}
        </div>
        </>
    )
}


