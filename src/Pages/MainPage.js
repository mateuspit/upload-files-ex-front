import styled from "styled-components";
import FileUpload from "../components/FileUpload";

export default function MainPage() {
    return (
        <Container>
            <Content>
                <FileUpload />
            </Content>
        </Container>
    );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;