import styled from 'styled-components'

import { Tweet } from '../types/Tweet'

type props = {
    tweet: Tweet
    deleteTweet: any
}

export const DeleteTweet = (props: props) =>{
    const handleDeleteTweet = () => {
        props.deleteTweet(props.tweet.id)
    }
    return(
        <Button>
            <button onClick={handleDeleteTweet}>-</button>
        </Button>
    )
}

const Button = styled.div`
display: flex;
border-bottom: 1px solid #e6ecf0;
border-left: 1px solid #e6ecf0;

justify-content: flex-end;
`;