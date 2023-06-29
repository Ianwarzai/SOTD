import styled from 'styled-components';
import HomeBackground1 from '../../Testtest.jpeg';
import Bull from '../../BullOnCliff.PNG';
import Phone from '../../AppPhone.PNG';
import React, { useState } from "react";


const HomeText1 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-size: 80px;
   font-family: Ubuntu;
   margin: 125px 0;
   font-weight: bold;
   color: white;
`;


const HomeText2 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-size: 33px;
   font-family: Ubuntu;
   margin: -115px 0;
   color: #000080;
`;


const HomeText3 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-size: 23px;
   font-family: Ubuntu;
   border-radius: 50px;
   border: 2px solid black;
   width: 20%;
   height: 4.3%;
   margin: 250px auto;
   padding: 4px;
   font-weight: bold;
   color: #189AB4;
   border: gray;
   box-sizing: border-box;
   background-color: #D4F1F4;
   padding: 1px;
   cursor: pointer;
   a {
      color: ${props => props.clicked ? '#000080' : '#189AB4'};
      text-decoration: none;
      position: relative;
      &:hover{ text-decoration: none; color: '#189AB4'; }
      &:active, &:focus { color: #000080; }

      &:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -3px;
        width: 0;
        height: 1px;
        background-color: #189AB4;
        transition: width 0.3s ease-out;
      }

      &:hover:after {
        width: 100%;
      }
   }
`;





const HomeText4 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: left;
   align-items: left;
   flex-direction: column;
   font-size: 90px;
   font-family: Ubuntu;
   margin: 240px 0;
   position: relative;
   right: -37mm;
   font-weight: bold;
   color: white;
   top: 60px
`;


const HomeText5 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: left;
   align-items: left;
   flex-direction: column;
   font-size: 28px;
   font-family: Ubuntu;
   margin: -220px 0;
   position: relative;
   right: -37mm;
   color: #D4F1F4;
   top: 80px
`;


const HomeWrapper1 = styled.div`
  background-image: url(${HomeBackground1});
  background-size: cover;
  width: 100%;
  height: 158vh;
  position: absolute;
`;

const Bullimg = styled.img`
width: 39%;
height: 39%;
position: absolute;
right: 950px;
top: 250px;
`;

const Phoneimg = styled.img`
width: 43%;
height: 45%;
position: absolute;
right: 45px;
top: 730px;
`;




export const Home = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <div>
            <HomeWrapper1>
            <HomeText1>
                <div> Get the best, Earn the most </div>
            </HomeText1>
            <HomeText2>
                <div> Utilizing AI to generate </div>
                <div> top-tier stocks daily </div>
            </HomeText2>
            <HomeText3 onClick={handleClick}>
                <a href="/sotd"> Today's Stocks of the Day </a>
            </HomeText3>
            <HomeText4>
                <div> We are </div>
                <div>Coming soon… </div>
            </HomeText4>
            <HomeText5>
                <div> SOTD app </div>
            </HomeText5>
            <Bullimg src={Bull}/>; 
            <Phoneimg src={Phone}/>; 
            </HomeWrapper1>
           
        </div>
    );
};