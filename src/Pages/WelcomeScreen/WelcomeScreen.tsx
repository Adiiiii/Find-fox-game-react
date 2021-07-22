import React, { useState } from "react";
import {
  LinkButton,
  InputWrapper,
  WelcomeScreenWrapper,
  Label,
  NameInput
} from "./WelcomeScreen.styles";

const WelcomeScreen = () => {
  const [name, setName] = useState();

  const setUserName = (e: any) => {
    setName(e.target.value.trim());
  };

  return (
    <WelcomeScreenWrapper>
      <p>Spot the Fox! Game </p>
      <InputWrapper>
        <Label>Name:</Label>
        <NameInput onBlur={(event) => setUserName(event)} type="text" />
      </InputWrapper>
      <LinkButton disableLink={!Boolean(name)} to="/game">
        Play
      </LinkButton>
    </WelcomeScreenWrapper>
  );
};

export default WelcomeScreen;
