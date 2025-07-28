import React, { useState } from "react";
import styled from "styled-components";
import {
  FaRegCircle,
  FaChartPie,
  FaIdBadge,
  FaIdCard,
  FaBook,
} from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import {
  IoBagHandleOutline,
  IoBookOutline,
  IoChatbubbles,
} from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const SidebarWrapper = styled.div`
  width: 212px;
  height: 1206px;
  background-color: #fff;
  border-right: 1px solid #1c1c1c1a;
  border-left: 1px solid #1c1c1c1a;
  padding: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileName = styled.span`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

const FavoritesItem = styled.span`
  color: #1c1c1c33;
  font-size: 14px;
  font-weight: 400;
  margin-right: 16px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1c1c1c33;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.3s;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  &.selectedTab {
    background-color: #1c1c1c0d;
    border-radius: 8px;
    padding-left: 5px;
  }
`;

const ToggleIcon = styled.span`
  margin-right: 8px;
`;

const LeftIcon = styled.span`
  padding-right: 8px;
  font-size: 16px;
`;

const Circles = styled(FaRegCircle)`
  font-size: 6.5px;
  color: #1c1c1c33;
  padding-right: 8px;
`;

function Sidebar({ setIsOpenOrdersPage }) {
  const [isPagesOpen, setPagesOpen] = useState(true);

  const handleDashboardClick = (item) => {
    if (item.onClick === "orders") setIsOpenOrdersPage(true);
    else if (item.onClick === "default" || item.onClick === "ecommerce")
      setIsOpenOrdersPage(false);
  };

  return (
    <SidebarWrapper>
      <Profile>
        <ProfileName>
          <CgProfile style={{ fontSize: 30, paddingRight: 8 }} />
          ByeWind
        </ProfileName>
      </Profile>
      <div>
        <FavoritesItem style={{ paddingRight: 40 }}>Favorites</FavoritesItem>
        <FavoritesItem>Recently</FavoritesItem>
      </div>
      <Section>
        <List>
          <ListItem>
            <Circles />
            Overview
          </ListItem>
          <ListItem>
            <Circles />
            Projects
          </ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle>Dashboards</SectionTitle>
        <List>
          <ListItem
            onClick={() => setIsOpenOrdersPage(false)}
            className="selectedTab"
          >
            <LeftIcon>
              <FaChartPie />
            </LeftIcon>
            Default
          </ListItem>
          <ListItem onClick={() => setIsOpenOrdersPage(false)}>
            <LeftIcon>
              <IoBagHandleOutline />
            </LeftIcon>
            eCommerce
          </ListItem>
          <ListItem onClick={() => setIsOpenOrdersPage(true)}>
            <LeftIcon>
              <IoBagHandleOutline />
            </LeftIcon>
            Orders
          </ListItem>
          <ListItem>
            <LeftIcon>
              <BsFolder />
            </LeftIcon>
            Projects
          </ListItem>
          <ListItem>
            <LeftIcon>
              <IoBookOutline />
            </LeftIcon>
            Online Courses
          </ListItem>
        </List>
      </Section>
      <Section>
        <SectionTitle>Pages</SectionTitle>
        <List>
          <ListItem onClick={() => setPagesOpen(!isPagesOpen)}>
            <ToggleIcon>
              {isPagesOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </ToggleIcon>
            <FaIdBadge style={{ marginRight: 8 }} />
            User Profile
          </ListItem>
          {isPagesOpen && (
            <>
              <ListItem>Overview</ListItem>
              <ListItem>Projects</ListItem>
              <ListItem>Campaigns</ListItem>
              <ListItem>Documents</ListItem>
              <ListItem>Followers</ListItem>
            </>
          )}
          <ListItem>
            <LeftIcon>
              <FaIdCard />
            </LeftIcon>
            Account
          </ListItem>
          <ListItem>
            <LeftIcon>
              <HiMiniUserGroup />
            </LeftIcon>
            Corporate
          </ListItem>
          <ListItem>
            <LeftIcon>
              <FaBook />
            </LeftIcon>
            Blog
          </ListItem>
          <ListItem>
            <LeftIcon>
              <IoChatbubbles />
            </LeftIcon>
            Social
          </ListItem>
        </List>
      </Section>
    </SidebarWrapper>
  );
}
export default Sidebar;
