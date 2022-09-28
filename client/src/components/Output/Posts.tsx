import styled from 'styled-components'
import {Masonry} from '@mui/lab'

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
        <Masonry spacing={0}>            
            {props.tweetList.map((tweet, i) => (
                <>
                <div key={i}>

                <Post  tweet={tweet} deleteTweet={props.deleteTweet}></Post>
                </div>
                </>
            ))}
        </Masonry>
        </>
        )}
        </>
    )
}

const Container = styled.div`
    // display:flex;
    // flex-wrap: wrap;
`; 