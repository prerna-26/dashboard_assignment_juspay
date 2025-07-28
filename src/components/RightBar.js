import React from "react";
import styled from "styled-components";
import RightBarImages from "./RightBarImages";
import { MdPermIdentity } from "react-icons/md";
import { BsBroadcast } from "react-icons/bs";
import { AiTwotoneBug } from "react-icons/ai";

const Sidebar = styled.div`
  width: 250px;
  background: #fff;
  border-left: 1px solid #1c1c1c1a;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItemRight = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 400;
`;

const TimeClass = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #1c1c1c66;
  margin-left: 40px;
`;

const TimeClassAct = styled(TimeClass)`
  margin-left: 33px;
`;

const NotiIcon = styled.div`
  margin-top: 5px;
  font-size: 20px;
  padding:3px;
  background-color:#E3F5FF;
   border-radius:6px}}
`;

export default function RightBar() {
  const notifications = [
    {
      icon: <AiTwotoneBug />,
      message: "You have a bug that needs...",
      time: "Just Now",
    },
    {
      icon: <MdPermIdentity />,
      message: "New user registered",
      time: "59 minutes ago",
    },
    {
      icon: <AiTwotoneBug />,
      message: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      icon: <BsBroadcast />,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];
  const activities = [
    {
      icon: RightBarImages.Profile1,
      message: "You have a bug that...",
      time: "Just Now",
    },
    {
      icon: RightBarImages.Profile2,
      message: "Released a new version",
      time: "59 minutes ago",
    },
    {
      icon: RightBarImages.Profile3,
      message: "Submitted a bug",
      time: "12 hours ago",
    },
    {
      icon: RightBarImages.Profile4,
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      icon: RightBarImages.Profile5,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];
  const contacts = [
    { photo: RightBarImages.Natali, name: "Natali Craig" },
    { photo: RightBarImages.Drew, name: "Drew Cano" },
    { photo: RightBarImages.Orlando, name: "Orlando Diggs" },
    { photo: RightBarImages.Andi, name: "Andi Lane" },
    { photo: RightBarImages.Kate, name: "Kate Marrison" },
    { photo: RightBarImages.Karay, name: "Koray Okumus" },
  ];

  return (
    <Sidebar>
      <Section>
        <SectionTitle>Notifications</SectionTitle>
        <List>
          {notifications.map((n, i) => (
            <React.Fragment key={i}>
              <ListItemRight>
                <NotiIcon>{n.icon}</NotiIcon>
                {n.message}
              </ListItemRight>
              <TimeClass>{n.time}</TimeClass>
            </React.Fragment>
          ))}
        </List>
      </Section>
      <Section>
        <SectionTitle>Activities</SectionTitle>
        <List>
          {activities.map((a, i) => (
            <React.Fragment key={i}>
              <ListItemRight>
                <img alt="activity" src={a.icon} />
                {a.message}
              </ListItemRight>
              <TimeClassAct>{a.time}</TimeClassAct>
            </React.Fragment>
          ))}
        </List>
      </Section>
      <Section>
        <SectionTitle>Contacts</SectionTitle>
        <List>
          {contacts.map((c, i) => (
            <ListItemRight key={i}>
              <img alt="contact" src={c.photo} />
              {c.name}
            </ListItemRight>
          ))}
        </List>
      </Section>
    </Sidebar>
  );
}
