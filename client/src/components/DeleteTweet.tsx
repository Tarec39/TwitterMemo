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
        <button onClick={handleDeleteTweet}>-</button>
    )
}