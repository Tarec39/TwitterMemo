import { Outlet } from "react-router-dom";
//parts
import { Feeder } from "./Feeder";
//Nannka
import styled from "styled-components";
import Icon from '../assets/icon.png'

export const Home = () => {
    return(
        <>
            <Outlet/>
            <Header></Header>
            <Contents>
                <Sidebar>
                  <div><img src={Icon}/></div>
                </Sidebar>
                <Feeder></Feeder>
            </Contents>
        </>
    )
}

const Header = styled.header`
  position: sticky;
  display: flex;
  height: 50px;
  background: black;
  fill: black;
  top: 0;
  z-index: 1;
  border: 1px solid #2F3336;
  color: rgb(231, 233, 234);
`;

const Contents = styled.div`
  display: flex;
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
  >div {
    flex: 0.1;
    >img{
      display: block;
      width:60px;
      margin: auto;
    }
  }
`;


