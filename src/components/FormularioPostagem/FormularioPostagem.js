import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({
  changePost,
  title,
  setTitle,

  urlFoto,
  setUrlFoto,

  descricao,
  setDescricao,
}) => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input 
            id="titulo" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input 
          id="foto" 
          value={urlFoto}
          onChange={(e) => setUrlFoto(e.target.value)}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input 
            id="descricao" 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}/>
        </StyledLabel>
        <SendButton onClick={changePost}>Postar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
