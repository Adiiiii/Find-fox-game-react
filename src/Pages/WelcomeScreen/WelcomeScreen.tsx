import React, { useContext, useState } from "react";
import {
  LinkButton,
  InputWrapper,
  WelcomeScreenWrapper,
  Label,
  NameInput
} from "./WelcomeScreen.styles";
import { UsersContext } from "../../StateProviders/UserDataProvider";

const WelcomeScreen = () => {
  const [name, setName] = useState();
  const [showInput, setShowInput] = useState(true);

  const { setActiveUser } = useContext(UsersContext);

  const setUserName = (e: any) => {
    const value = e.target.value.trim();
    setName(value);
    if (value) {
      setShowInput(false);
    }
  };

  const setPlayerData = () => {
    const uniqueId = Date.now();
    const user = {
      name,
      id: uniqueId
    };
    setActiveUser(user);
  };

  const userNameView = () =>
    showInput ? (
      <NameInput
        defaultValue={name}
        onBlur={(event) => setUserName(event)}
        type="text"
      />
    ) : (
      <p onClick={() => setShowInput(true)}>{name}</p>
    );

  return (
    <WelcomeScreenWrapper>
      <p>Spot the Fox! Game </p>
      <InputWrapper>
        <Label>Name:</Label>
        {userNameView()}
      </InputWrapper>
      <LinkButton
        onClick={() => setPlayerData()}
        disableLink={!Boolean(name)}
        to="/game"
      >
        Play
      </LinkButton>
    </WelcomeScreenWrapper>
  );
};

export default WelcomeScreen;
