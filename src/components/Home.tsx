import { TweetBox } from "../parts/TweetBox";
import { Feed } from "../parts/Feed";
import { Outlet } from "react-router-dom";

export const Home = () => {
    return(
        <>
            <Outlet/>
            <TweetBox/>
            <Feed/>
        </>
    )
}