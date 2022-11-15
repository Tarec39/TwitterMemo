import { TweetBox } from "../parts/TweetBox";
import { Feed } from "../parts/Feed";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
export const Home = () => {
    return(
        <>
            <Header><h2>青鳥</h2></Header>
            <Outlet/>
            <Contents>
                <Sidebar></Sidebar>
                <Feeder>
                    <TweetBox2>
                        <TweetBox/>
                    </TweetBox2>
                    <Feed/>
                </Feeder>
            </Contents>
        </>
    )
}

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  border: 1px solid #2F3336;
  padding: 15px 20px;
  color: rgb(231, 233, 234);
`;

const Contents = styled.div`
  display: flex;
  // max-width: 1300px;
  padding: 0 10px;
  height: 100vh;
`;

const Sidebar = styled.div`
  flex: 0.2;
  border-right: 1px solid #2F3336;
  min-width: 250px;
  // margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Feeder = styled.div`
  width: 100%;
  min-width: fit-content!;
  overflow-y:scroll
  -ms-overflow-style: none;
`

const TweetBox2 = styled.div`
  width: 500px;
  padding-bottom: 10px;
  padding-right: 10px;
  border-bottom: 8px solid #2F3336;
  margin: auto;
`;