import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [pageFlow, setPageFlow] = useState(1);

  const [name, setName] = useState("")
  const [profilePicture, setProfilePicture] = useState("")
  const [profile, setProfile] = useState({})

  const login = () => {
    setProfile({
      name: name,
      profilePicture: profilePicture
    })
    setPageFlow(2);
  };

  const [title, setTitle] = useState("")
  const [urlFoto, setUrlFoto] = useState("")
  const [descricao, setDescricao] = useState("")
  const [post, setPost] = useState({})

  const changePost = () => {
    setPost({
      title: title,
      urlFoto: urlFoto,
      descricao: descricao,
    })
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header profile={profile}/>
          {pageFlow === 1 ? (
            <FormularioLogin 
              name={name}
              setName={setName}

              profilePicture={profilePicture}
              setProfilePicture={setProfilePicture}

              profile={profile}
              setProfile={setProfile}

              setPageFlow={setPageFlow} 
              login={login}/>
          ) : (
            <FormularioPostagem 
              changePost={changePost}

              title={title}
              setTitle={setTitle} 

              urlFoto={urlFoto} 
              setUrlFoto={setUrlFoto}

              descricao={descricao}
              setDescricao={setDescricao}/>
          )}
        </aside>
        <TelaDaPostagem 
          post={post}/>
      </Container>
    </>
  );
}

export default App;
