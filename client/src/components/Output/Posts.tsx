import styled from 'styled-components'

import { Post } from "./Post";
import { Tweet } from "../../types/Tweet";

type Props = {
    tweetList: Tweet[]
    deleteTweet: (id:string) => void
}
export const Posts = (props: Props) => {
    return(
        <>
        {props.tweetList.length !== 0 && (
        <>
        <Container>
            {props.tweetList.map((tweet) => (
                <Post key={tweet.id} tweet={tweet} deleteTweet={props.deleteTweet}/>
            ))}
        </Container>
        </>
        )}
        </>
    )
}

const Container = styled.div``;