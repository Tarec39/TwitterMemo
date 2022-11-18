//type
import { TweetData } from "../../types/Tweet";
//component
import {Tweet} from "./components/Tweet"

type props = {
    tweetList: TweetData[]
    handleDelete: (id:string)=>void
}

export const Feed = (props: props) => {
    return(
        <>
            {props.tweetList?.length !== 0 && (
                <>
                {props.tweetList?.map((tweet, i) => (
                    <Tweet
                        tweet={tweet}
                        handleDelete={props.handleDelete}
                        index={i}
                        key={i}
                    />
                ))}
            </>
            )}
        </>
    )
}