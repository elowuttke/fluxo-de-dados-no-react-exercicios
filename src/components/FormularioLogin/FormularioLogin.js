import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ({
  name,
  setName,
  profilePicture,
  setProfilePicture,
  profile,
  setProfile,
  setPageFlow,
  login
}) => {
  // const login = () => {
  //   setProfile({
  //     name,
  //     profilePicture
  //   })
  //   console.log(profile)
  //   setPageFlow(2);
  // };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input 
            type={"text"} 
            value={name} 
            onChange={(e) => setName(e.target.value)}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input 
            type={"text"} 
            value={profilePicture} 
            onChange={(e) => setProfilePicture(e.target.value)}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
