import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({
  post
}) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{post.title === "" ? "Um título" : post.title}</TitleHeader>
      <Image src={post.urlFoto === "" ? "https://picsum.photos/536/354" : post.urlFoto} />
      <Description>{post.descricao === "" ? "Uma descrição" : post.descricao} </Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
