import styled from 'styled-components'

import { TweetItem } from "./TweetItem";
import { Tweet } from "../../types/Tweet";
import { DeleteTweet } from "../DeleteTweet"

type Props = {
    tweetList: Tweet[]
    deleteTweet: (id:string) => void
}
export const TweetList = (props: Props) => {
    return(
        <>
        <Container>
            {/* <span></span> */}

            {props.tweetList.length !== 0 && (
                <>
                    <Posts>
                        {props.tweetList.map((tweet) => (
                            <div key={tweet.id}>
                                <TweetItem tweet={tweet}/>
                                <DeleteTweet tweet={tweet} deleteTweet={props.deleteTweet}></DeleteTweet>
                            </div>
                        ))}
                    </Posts>
                </>
            )}
            {/* <span></span> */}

        </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding: 0 10px;
    > span:first-child {
        flex: 0.2;
        border-right: 1px solid #e6ecf0;
        min-width: 250px;
        margin-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
      }
    
    > span:last-child {
      flex: 0.3;
    }
`;

const Posts = styled.div`
flex: 0.5;
> div:first-child{
    border-top: 1px solid #e6ecf0;
}
`;
