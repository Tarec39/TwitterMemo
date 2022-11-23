//type
import { TweetData } from "../../types/Tweet";
//component
import {Tweet} from "./Tweet"
import { Masonry } from '@mui/lab';

type props = {
    tweetList: TweetData[]
    handleDelete: (id:string)=>void
}

export const Feed = (props: props) => {
    return(
        <Masonry columns={4} spacing={3}>
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
        </Masonry>
    )
}