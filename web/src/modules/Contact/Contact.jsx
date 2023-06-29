import React, { useState } from 'react';
import styled from 'styled-components';
import HomeBackground2 from '../../HomeBackground2.JPEG';
import Mail from '../../Mail.PNG';

const ContactText1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
  font-size: 65px;
  font-family: Ubuntu;
  margin-bottom: 70px;
  background-image: url(${HomeBackground2});
  background-size: cover;
  box-sizing: border-box;
  color: white;
  padding: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 33%;
  padding: 10px;
  padding-left: 30px; 
`;


const FirstNameInput = styled.input`
  border: 1px solid #75E6DA;
  height: 50px;
  width: 214px;
  border-radius: 15px;
  font-size: 20px;
  color: navy;
  margin-left: 67px; 
`;

const LastNameInput = styled.input`
  border: 1px solid #75E6DA;
  height: 50px;
  width: 214px;
  border-radius: 15px;
  font-size: 20px;
  color: navy;
  margin-left: 44px; 
`;

const NameText = styled.div`
  font-size: 22px;
  text-align: left;
  color: navy;
  position: relative;
  margin-right: 20px;
  left: 82px; 
`;

const LastNameText = styled(NameText)`
  left: 57px;  
`;



const EmailText = styled.div`
  font-size: 22px;
  text-align: left;
  color: navy;
  position: relative;
  right: -110px;
`;

const MessageText = styled.div`
  font-size: 22px;
  text-align: left;
  color: navy;
  position: relative;
  right: -110px;
`;

const MailImg = styled.img`
  width: 30%;
  height: 44%;
  position: absolute;
  right: 220px;
  top: 290px;
`;

const EmailInput = styled.input`
  border: 1px solid #75E6DA;
  height: 50px;
  width: 480px;
  border-radius: 15px;
  font-size: 20px;
  margin-left: 95px;
  color: navy;
`;

const MessageInput = styled.textarea`
  border: 1px solid #75E6DA;
  height: 100px;
  width: 480px;
  border-radius: 15px;
  font-size: 20px;
  vertical-align: top;
  align-self: flex-start;
  margin-left: 95px;
  color: navy;
`;

const SubmitButton = styled.button`
  top: 30px;
  height: 80px;
  position: relative;
  right: -110px;
  color: navy;
  font-size: 22px;
  background-color: white;
  border: 1px solid white;
  transition: background-color 0.2s ease;
  cursor: pointer;
  padding: 1px 10px;
  &:hover {
    background-color: lightgray;
  }
`;

const ImageContainer = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const LabelInputWrapper = styled.div`
  position: relative;
  margin-right: 40px; 
`;

export const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState("SUBMIT");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("Sending...");
    let details = {
      name: `${firstName} ${lastName}`,
      email: email,
      message: message,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <ContactText1>CONTACT</ContactText1>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <div>
            <NameText>First Name:</NameText>
            <FirstNameInput
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div>
          <LastNameText>Last Name:</LastNameText>
          <LastNameInput
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        </InputContainer>
      <br />
        <LabelInputWrapper>
          <EmailText>Email:</EmailText>
          <EmailInput
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </LabelInputWrapper>
    
        <br />
        <LabelInputWrapper>
          <MessageText>Message:</MessageText>
          <MessageInput
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </LabelInputWrapper>
        <br />
        <SubmitButton type="submit">{status}</SubmitButton> 
      </form>
            <ImageContainer>
        <MailImg src={Mail} alt="Submit" />
      </ImageContainer> 
    </div>
  );
};
