import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Logo from '../../BlueLogo.PNG';


const ContactTextContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   font-family: Ubuntu;
   margin-right:1cm;
   margin-top:1cm;
   margin: 85px 0;
`;



const ContactText4 = styled.div`
   font-size: 80px;
   text-align:center;
   margin-top:4cm;
   font-weight: bold;
   color: #000080;
`;

const TickerTextFirst = styled.div`
  font-size: 40px;
  color: #595959;
  margin-left: 20px;
  display: inline-block;
`;


const Item = styled.li`
  font-size: 40px;
  width: 38%;
  margin: 0 auto;
  margin-top: 90px;
  color: #595959;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #A9A9A9;
  margin-left: 20px;
  display: inline-block;

`;

const Line = styled.hr`
  border: none;
  height: 2px; 
  background-color: #000080; 
  margin: 25px 0; 
`;


const Container = styled.ol`
    color: #595959;
`;

const ItemRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;


const Price = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  color: #595959;
  align-items: center;

`;


const Change = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #07CE07;
  margin-top: -14px;
`;

const PriceChangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const VolumeText = styled.div`
  font-size: 23px;
  color: #595959;
  margin-top: 30px; 
  margin-left: 10px;
  display: flex;
`;

const HighText = styled.div`
  font-size: 23px;
  color: #595959;
  margin-top: 30px; 
  margin-left: 10px;
  display: flex;
`;

const LowText = styled.div`
  font-size: 23px;
  color: #595959;
  margin-top: 30px; 
  margin-left: 10px;
  display: flex;
`;

const LogoImage = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 30px;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
`;

const TextLabel = styled.span`
  margin-right: 5px;
`;

const NewsHeader = styled.div`
  font-size: 20px;
  color: #189AB4;
  text-align: center;
  margin-top: 50px;
  text-decoration: underline;
  cursor: pointer;
`;

const ActiveTab = styled.div`
  border-bottom: 3px solid #189AB4;
`;

const ContactText = styled.div`
  font-size: 34px;
  border-radius: 20px;
  border: 2px solid black;
  width: 18%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 35px;
  padding: 5px;
  font-weight: bold;
  color: ${props => props.active ? '#189AB4' : '#59CEE0'};
  border: gray;
  box-sizing: border-box;
  background-color: #D4F1F4;
  cursor: pointer;
  &:hover { text-decoration: border; color: '#189AB4'; }
  ${props => props.active && 'border-bottom: 3px solid #189AB4;'}
`;


export const SOTD = () => {
    const [data, setData] = useState({});
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        /*axios
            .get('http://127.0.0.1:5000/flask/hello')
            .then((response) => {
                console.log('SUCCESS', response);
                if (response.data.status !== 400)
                    setData(response?.data?.message ?? data);
            })
            .catch((error) => {
                console.log(error);
            });*/
    }, []);

    const handleClick = (tab) => {
        if (tab === 'day-trading') {
            setIsVisible(true);
            setIsVisible2(false);
            setIsVisible3(false);
        } else if (tab === 'swing-trading') {
            setIsVisible(false);
            setIsVisible2(true);
            setIsVisible3(false);
        } else if (tab === 'long-term') {
            setIsVisible(false);
            setIsVisible2(false);
            setIsVisible3(true);
        }
    };

    return (
        <div>
             <ContactTextContainer>
                <ContactText active={isVisible} onClick={() => handleClick('day-trading')}>
                    <div>Day-trading</div>
                </ContactText>
                <ContactText active={isVisible2} onClick={() => handleClick('swing-trading')}>
                    <div>Swing-trading</div>
                </ContactText>
                <ContactText active={isVisible3} onClick={() => handleClick('long-term')}>
                    <div>Long-term</div>
                </ContactText>
            </ContactTextContainer>
            <ContactText4>
                <div>Top picks for 5/8</div>
            </ContactText4>
            {isVisible &&
                <Container>
                    <Item>
                        <ItemRow>
                            <TickerTextFirst>{data?.daytrading?.ticker?.[0]}</TickerTextFirst>
                            <PriceChangeContainer>
                                <Price>$40.00</Price>
                            </PriceChangeContainer>

                        </ItemRow>
                        <ItemRow>
                            <Subtitle>{data?.daytrading?.company?.[0]}</Subtitle>
                            <PriceChangeContainer>
                                <Change>+4.60 (1.23%)</Change>
                            </PriceChangeContainer>
                        </ItemRow>
                        <Line />
                        <DetailsContainer>
                        <InfoContainer>
                            <VolumeText><TextLabel>VOLUME:</TextLabel> 1,000,000</VolumeText>
                            <HighText><TextLabel>HIGH:</TextLabel> $4,038</HighText>
                            <LowText><TextLabel>LOW:</TextLabel> $3,898</LowText>
                        </InfoContainer>
                        <LogoContainer>
                            <LogoImage src={Logo} />
                        </LogoContainer>
                        </DetailsContainer>
                        <NewsHeader>AAPL NEWS</NewsHeader>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.daytrading?.ticker?.[1]}</TickerTextFirst>
                        <Subtitle>{data?.daytrading?.company?.[1]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.daytrading?.ticker?.[2]}</TickerTextFirst>
                        <Subtitle>{data?.daytrading?.company?.[2]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.daytrading?.ticker?.[3]}</TickerTextFirst>
                        <Subtitle>{data?.daytrading?.company?.[3]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.daytrading?.ticker?.[4]}</TickerTextFirst>
                        <Subtitle>{data?.daytrading?.company?.[4]}</Subtitle>
                    </Item>
                </Container>
            }

            {isVisible2 &&
                <ol>
                    <Item>
                        <TickerTextFirst>{data?.swingtrading?.ticker?.[0]}</TickerTextFirst>
                        <Subtitle>{data?.swingtrading?.company?.[0]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.swingtrading?.ticker?.[1]}</TickerTextFirst>
                        <Subtitle>{data?.swingtrading?.company?.[1]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.swingtrading?.ticker?.[2]}</TickerTextFirst>
                        <Subtitle>{data?.swingtrading?.company?.[2]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.swingtrading?.ticker?.[3]}</TickerTextFirst>
                        <Subtitle>{data?.swingtrading?.company?.[3]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.swingtrading?.ticker?.[4]}</TickerTextFirst>
                        <Subtitle>{data?.swingtrading?.company?.[4]}</Subtitle>
                    </Item>
                </ol>
            }
            {isVisible3 &&
                <ol>
                    <Item>
                        <TickerTextFirst>{data?.longterm?.ticker?.[0]}</TickerTextFirst>
                        <Subtitle>{data?.longterm?.company?.[0]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.longterm?.ticker?.[1]}</TickerTextFirst>
                        <Subtitle>{data?.longterm?.company?.[1]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.longterm?.ticker?.[2]}</TickerTextFirst>
                        <Subtitle>{data?.longterm?.company?.[2]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.longterm?.ticker?.[3]}</TickerTextFirst>
                        <Subtitle>{data?.longterm?.company?.[3]}</Subtitle>
                    </Item>
                    <Item>
                        <TickerTextFirst>{data?.longterm?.ticker?.[4]}</TickerTextFirst>
                        <Subtitle>{data?.longterm?.company?.[4]}</Subtitle>
                    </Item>
                </ol>
            }
        </div>
    );
};

