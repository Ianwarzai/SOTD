import React from "react";
import styled from 'styled-components';
import HomeBackground2 from '../../HomeBackground2.JPEG';
import WideBull from '../../WideBull.jpg';
import { useState, useEffect } from "react";




const AboutText1 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   margin-top:40px;
   flex-direction: column;
   font-size: 60px;
   font-family: Ubuntu;
   margin-bottom: 70px;
   background-image: url(${HomeBackground2});
   background-size: cover;
   box-sizing: border-box;
   color: white;
   padding: 10px;
`;


const AboutText2 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-size: 32px;
   font-family: Ubuntu;
   margin-bottom: 20px;
   color: #000080;
`;

const AboutText3 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   font-size: 22px;
   font-family: Ubuntu;
   width: 66%;
   height: 30%;
   align-items:center;
   justify-content:center;
   margin: auto;
   color: #189AB4;
   margin-bottom: 60px;
`;

const AboutText4 = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   font-size: 32px;
   font-family: Ubuntu;
   margin-bottom: 30px;
   color: #000080;
   margin-top: 140px
`;

const AboutText8 = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: row;
font-size: 22px;
font-family: Ubuntu;
width: 66%;
height: 30%;
align-items:center;
justify-content:center;
margin: auto;
color: #189AB4;
margin-bottom: 50px;
`;

const AboutTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: Ubuntu;
  margin: 35px 0;
  margin-top: 30px;
`;

const AboutTextContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: Ubuntu;
  margin: 35px 0;
`;

const AboutText5 = styled.div`
font-size: 28px;
border: 2px solid #D4F1F4;
width: 15%; 
height: 10%; 
display: flex;
align-items: center;
justify-content: center;
margin-right: 40px;
padding: 5px;
color: #189AB4;
border-weight:3px;
box-sizing: border-box;
transition: color 0.2s ease-out;
flex-direction: row;
background-color: ${props =>
    props.selected ? '#D4F1F4' : 'transparent'};
  color: ${props => (props.selected ? '#189AB4' : '#189AB4')};
&:hover {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D4F1F4;
  color: #189AB4;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
  flex-direction: row;
`;

const NewDiv = styled.div`
margin-top: 30px;
font-size: 20px;
width: 1000px;
height: 50px;
display: ${props => props.show ? 'flex' : 'none'};
color: #004A94;
text-align: left;
padding: 10px 0;
align-items: center;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
`;



const AboutText6 = styled.div`
font-size: 28px;
border: 2px solid #D4F1F4;
width: 15%; 
height: 10%; 
display: flex;
align-items: center;
justify-content: center;
margin-right: 40px;
padding: 5px;
color: #189AB4;
border-weight:3px;
box-sizing: border-box;
transition: color 0.2s ease-out;
flex-direction: row;
background-color: ${props =>
    props.selected ? '#D4F1F4' : 'transparent'};
  color: ${props => (props.selected ? '#189AB4' : '#189AB4')};
&:hover {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D4F1F4;
  color: #189AB4;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
  flex-direction: row;
`;

const NewDiv1 = styled.div`
margin-top: 30px;
font-size: 20px;
width: 1000px;
height: 50px;
display: ${props => props.show ? 'flex' : 'none'};
color: #004A94;
text-align: left;
padding: 10px 0;
align-items: center;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
`;


const AboutText7 = styled.div`
   font-size: 28px;
   border: 2px solid #D4F1F4;
   width: 15%; 
   height: 10%; 
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 40px;
   padding: 5px;
   color: #189AB4;
   border-weight:3px;
   box-sizing: border-box;
   flex-direction: row;
   background-color: ${props =>
    props.selected ? '#D4F1F4' : 'transparent'};
  color: ${props => (props.selected ? '#189AB4' : '#189AB4')};
   &:hover {
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: #D4F1F4;
     color: #189AB4;
     cursor: pointer;
     transition: background-color 0.3s ease-out;
     flex-direction: row;
   }
`;

const NewDiv2 = styled.div`
   margin-top: 30px;
   font-size: 20px;
   width: 1000px;
   height: 50px;
   display: ${props => props.show ? 'flex' : 'none'};
   color: #004A94;
   text-align: left;
   padding: 10px 0;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   flex-wrap: wrap;
`;


const WideBullimg = styled.img`
  width: 65%;
  height: 65%;
  position: relative;
  margin: 0 auto;
  display: block;
  margin-top: 60px;
`;





export const About = () => {
  const [showDiv, setShowDiv] = useState(true);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
      localStorage.setItem("selectedTab", selectedTab);
  }, [selectedTab]);

  const handleTabClick = (index) => {
      setShowDiv(index === 0);
      setShowDiv1(index === 1);
      setShowDiv2(index === 2);
      setSelectedTab(index);
  };

  const handleTabClick1 = (event) => {
      event.preventDefault();
      const element = document.querySelector("#bottom-of-page");
      element.scrollIntoView({ behavior: "smooth" });
  };
  
    return (
      <div>
        <AboutText1>
          <div>ABOUT SOTD</div>
        </AboutText1>
        <AboutText2>
          <div>OUR MISSION</div>
        </AboutText2>
        <AboutText3>
          <div>
            At SOTD, we are committed to helping traders discover a more
            efficient way to trade by providing a streamlined, precise method for
            identifying top stocks for the day with a single click. We are
            passionate about this goal and excited to make it easier for everyone
            to detect top stocks through our software and community.
          </div>
        </AboutText3>
        <WideBullimg src={WideBull} />
        <AboutText4>
          <div>OUR TRADING STRATEGIES</div>
        </AboutText4>
        <AboutText8>
          <div>At SOTD, we employ a concise data-driven approach in the development of our trading strategies, incorporating extensive research and advanced AI technology to screen the best stocks for our clients. Please note that these are not the only criteria and indicators used for evaluating stocks in our screening process.</div>
        </AboutText8>
        <br />
        
        <AboutTextContainer>
        <AboutText5
          selected={selectedTab === 0}
            onClick={() => handleTabClick(0)}
          >
            Day-Trading
          </AboutText5>
        
        
          <AboutText6
          selected={selectedTab === 1}
            onClick={() => handleTabClick(1)}
          >
            Swing-Trading
          </AboutText6>

        
          <AboutText7
          selected={selectedTab === 2}
            onClick={() => handleTabClick(2)}
          >
            Long-term
          </AboutText7>
        </AboutTextContainer>
        <AboutTextContainer2>
        <NewDiv show={showDiv}>
        Our day-trading strategy at SOTD is geared towards providing optimal short-term returns to our clients within a single trading day. This process involves evaluating stocks with a small market cap, as well as those with a high volume, in order to identify those with the greatest potential for short-term growth. Additionally, we consider stocks with a relatively low float, as part of our analysis, as this has the potential to influence stock price volatility and present attractive trading opportunities. With these carefully selected criteria, alongside various other factors and indicators, we are able to make informed decisions for our optimized day-trading strategy at SOTD.
        <br />
        <br />
        <br />
        <br />
        </NewDiv>
 <NewDiv1 show={showDiv1}>
    Our swing-trading strategy is focused on maximizing returns for our clients' investments over a short-term period, typically within several days to a few weeks. To achieve this, we employ a comprehensive screening process that takes into consideration multiple critical factors. These include short interest, which provides valuable insights into market sentiment, and float, which has the potential to influence stock price volatility and present attractive trading opportunities. Our evaluation of stocks also includes an assessment of their price, in search of undervalued stocks that offer growth potential. With these carefully selected criteria, alongside various other factors and indicators, we are able to make informed decisions for our optimized swing-trading strategy at SOTD.  
    <br />
        <br />
        <br />
        <br />
        <br />
    </NewDiv1>
        <NewDiv2 show={showDiv2}>
        Our long-term trading strategy utilizes the 20-day and 50-day Simple Moving Average Price indicators to determine the trend and strength of a stock, providing insight into its average price over a certain period of time and its overall trend. The 52-week High and Low and the Relative Strength Index are utilized to measure a stock's relative strength and potential for further gains, giving a clear indication of whether it is overbought or oversold. To further ensure the success of our clients' long-term investments, we also consider the Positive Earnings Per Share Year over Year, a crucial factor in determining a company's financial stability and growth potential. With these carefully selected criteria, alongside various other factors and indicators, we are able to make informed decisions for our optimized long-term trading strategy at SOTD.        
        <br />
        <br />
        <br />
        <br />
        <br />
        </NewDiv2>
        </AboutTextContainer2>
      </div>
    );
  };
