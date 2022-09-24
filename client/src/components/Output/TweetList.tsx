import styled from 'styled-components'

import { Post } from "./TweetItem";
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
                        <div key={tweet.id}>
                            <Post tweet={tweet} deleteTweet={props.deleteTweet}/>
                            {/* <DeleteTweet tweet={tweet} deleteTweet={props.deleteTweet}></DeleteTweet> */}
                        </div>
                    ))}
                </Container>
            </>
        )}
        </>
    )
}

const Container = styled.div``;
// const Posts = styled.div`
// > div:first-child{
//     border-top: 1px solid #e6ecf0;
// }
// `;
