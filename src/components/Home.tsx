import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DndComp from "./DndComp";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 40px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
const BtnBox = styled.div`
  display: flex;
  font-size: 30px;
  gap: 20px;
  color: #d9d9d9;
`;
function Home() {
  return (
    <Wrapper>
      <Header>
        <Title>TodoList</Title>
        <BtnBox>
          <SvgIcon component={LibraryAddIcon} fontSize="inherit" />
          <SvgIcon component={WbSunnyIcon} fontSize="inherit" />
        </BtnBox>
      </Header>
      <DndComp />
    </Wrapper>
  );
}
export default Home;
