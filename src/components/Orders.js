import RightBarImages from "./RightBarImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAdd,
  faArrowUpShortWide,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const orderHeaders = [
  "Order ID",
  "User",
  "Project",
  "Address",
  "Date",
  "Status",
];
const orders = [
  {
    id: "#CM9801",
    user: "Natali Craig",
    photo: RightBarImages.Natali,
    project: "Landing Page",
    address: "Meadow Lane OakLand",
    date: "Just Now",
    status: "In Progress",
    color: "#8A8CD9",
  },
  {
    id: "#CM9802",
    user: "Kate Marrison",
    photo: RightBarImages.Kate,
    project: "CRM Admin Pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    color: "#4AA785",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    photo: RightBarImages.Drew,
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    color: "#59A8D4",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    photo: RightBarImages.Orlando,
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    color: "#FFC555",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    photo: RightBarImages.Andi,
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb2, 2023",
    status: "Rejected",
    color: "#1C1C1C66",
  },
  {
    id: "#CM9801",
    user: "Natali Craig",
    photo: RightBarImages.Natali,
    project: "Landing Page",
    address: "Meadow Lane OakLand",
    date: "Just Now",
    status: "In Progress",
    color: "#8A8CD9",
  },
  {
    id: "#CM9802",
    user: "Kate Marrison",
    photo: RightBarImages.Kate,
    project: "CRM Admin Pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    color: "#4AA785",
  },
  {
    id: "#CM9803",
    user: "Drew Cano",
    photo: RightBarImages.Drew,
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    color: "#59A8D4",
  },
  {
    id: "#CM9804",
    user: "Orlando Diggs",
    photo: RightBarImages.Orlando,
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    color: "#FFC555",
  },
  {
    id: "#CM9805",
    user: "Andi Lane",
    photo: RightBarImages.Andi,
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb2, 2023",
    status: "Rejected",
    color: "#1C1C1C66",
  },
];

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  width: 95%;
  padding: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
`;

const MiddleHeadBar = styled.div`
  background-color: #f7f9fb;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 16px;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0 10px;
  font-size: 18px;
  cursor: pointer;
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

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  color: #1c1c1c66;
  font-size: 12px;
  font-weight: 400;
  border-bottom: 2px solid #e0e0e0;
  height: 40px;
  padding: 8px 12px;
  gap: 8px;
  text-align: left;
`;

const StyledTd = styled.td`
  font-size: 12px;
  font-weight: 400;
  min-width: 88px;
  max-width: 240px;
  height: 40px;
  padding: 8px 12px;
  gap: 8px;
  border-bottom: 2px solid #1c1c1c0d;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  border-radius: 2px;
  outline: 2px solid #1c1c1c33;
  accent-color: black;
  appearance: none;
  width: 13px;
  height: 13px;
  margin-left: 38px;
`;

const SalesDot = styled.span`
  background-color: ${(props) => props.color};
  display: inline-flex;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
`;

function OrderRow({ order }) {
  return (
    <tr>
      <StyledTd>
        <Checkbox />
      </StyledTd>
      <StyledTd>{order.id}</StyledTd>
      <StyledTd style={{ display: "flex", alignItems: "center" }}>
        <span>
          <img alt="user" src={order.photo} />
        </span>
        {order.user}
      </StyledTd>
      <StyledTd>{order.project}</StyledTd>
      <StyledTd>{order.address}</StyledTd>
      <StyledTd>{order.date}</StyledTd>
      <StyledTd style={{ color: order.color }}>
        <SalesDot color={order.color} />
        {order.status}
      </StyledTd>
    </tr>
  );
}

export default function Orders() {
  return (
    <div>
      <Row>
        <LeftSection>
          <SectionTitle>Order List</SectionTitle>
          <MiddleHeadBar>
            <NavLeft>
              {[faAdd, faArrowUpWideShort, faArrowUpShortWide].map(
                (icon, i) => (
                  <Icon icon={icon} key={i} />
                )
              )}
            </NavLeft>
            <NavRight>
              <SearchContainer>
                <SearchIcon icon={faSearch} />
                <SearchBar placeholder="Search" />
              </SearchContainer>
            </NavRight>
          </MiddleHeadBar>
          <div>
            <StyledTable>
              <thead>
                <tr>
                  <StyledTh>
                    <Checkbox />
                  </StyledTh>
                  {orderHeaders.map((header) => (
                    <StyledTh key={header}>{header}</StyledTh>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <OrderRow order={order} key={index} />
                ))}
              </tbody>
            </StyledTable>
          </div>
        </LeftSection>
      </Row>
    </div>
  );
}

// If you want to remove all CSS files, you must first migrate all className-based styles (e.g. "orders-table-data", "orders-table-header", "row", "left-section", "middle-head-bar", "nav-left", "nav-right", "search-container", "search-bar", "checkbox", "sales-dot", etc.) to styled-components or another CSS-in-JS solution.
// As long as you see className usage or CSS imports in this file, do NOT remove the CSS files yet.
