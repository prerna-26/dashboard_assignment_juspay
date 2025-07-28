import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  AiTwotoneStar,
  AiOutlineHistory,
  AiOutlineCreditCard,
  AiOutlineSun,
  AiTwotoneBell,
} from "react-icons/ai";

const MiddleHeadBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #1c1c1c1a;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

// const Icon = styled(FontAwesomeIcon)`
//   margin: 0 10px;
//   font-size: 18px;
//   cursor: pointer;
// `;

const Breadcrumb = styled.span`
  font-size: 16px;
  color: #555;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  padding: 5px 10px 5px 30px;
  border: none;
  border-radius: 8px;
  margin-right: 10px;
  font-size: 14px;
  width: 135px;
  background-color: #1c1c1c0d;
  &::placeholder {
    color: #aaa;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 10px;
  color: #aaa;
`;

const leftIcons = [<AiOutlineCreditCard />, <AiTwotoneStar />];
const rightIcons = [
  <AiOutlineSun />,
  <AiOutlineHistory />,
  <AiTwotoneBell />,
  <AiOutlineCreditCard />,
];

const MiddleHeadBar = () => (
  <MiddleHeadBarWrapper>
    <NavLeft>
      {leftIcons.map((icon, i) => (
        <span key={i} style={{ marginRight: "1em", fontSize: "23px" }}>
          {icon}
        </span>
      ))}
      <Breadcrumb>
        <span style={{ color: "#1C1C1C33", paddingRight: 5 }}>Dashboards</span>
        <span style={{ paddingRight: 10 }}>/</span> Default
      </Breadcrumb>
    </NavLeft>
    <NavRight>
      <SearchContainer>
        <SearchIcon icon={faSearch} />
        <SearchBar type="text" placeholder="Search" />
      </SearchContainer>
      {rightIcons.map((icon, i) => (
        <span
          key={i}
          style={{ marginRight: "1em", fontSize: "23px", fill: "red" }}
        >
          {icon}
        </span>
      ))}
    </NavRight>
  </MiddleHeadBarWrapper>
);

export default MiddleHeadBar;
