// import { Post } from "./Post";
import { Tweet } from "../../../types/Tweet";

type Props = {
    tweetList: Tweet[]
    // deleteTweet: (id:string) => void
}

export const Posts = (props: Props) => {
    return(
        <>
        {props.tweetList.length !== 0 && (
        <>
            {props.tweetList.map((tweet, i) => (
                <>
                {/* <Post key={i} tweet={tweet} deleteTweet={props.deleteTweet}></Post> */}
                <div>{i}</div>
                </>
            ))}
        </>
        )}
        </>
    )
}

