import styled from 'styled-components'
import { useState } from 'react';

import { AddThread } from '../AddThread';
import { Tweet } from "../../types/Tweet";

type props = {
    tweet: Tweet
    deleteTweet: any
}

export const Post = (props: props) => {
    const [isDisplay, setIsDisplay] = useState<boolean>(false!)
    const event = () =>  setIsDisplay(!isDisplay)

    return(
        <>
        <div>

            {props.tweet.title === ""
                ?<h3>&nbsp;</h3>
                :<h3>{props.tweet.title}</h3>
            }
            {props.tweet.contents.map((i) => (
            <>
            <div><p>{i.text}</p></div>
            <button>-</button>
            </>
            ))}
            <AddThread onClick={event}></AddThread>
            <div><textarea></textarea></div>
        </div>
        </>
    )
}


