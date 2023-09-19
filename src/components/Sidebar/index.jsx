import { styled, Stack, IconButton, Typography } from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import { useState } from "react";
import LastPageOutlinedIcon from "@mui/icons-material/LastPageOutlined";
import logoImg from "../../assets/logo.png";
import "./style.css";

const drawerWidth = 240;

const SidebarContainer = styled("div")(({ open }) => ({
  width: open ? drawerWidth : "80px",
  flexShrink: 0,
  height: "100vh",
  backgroundColor: "#2c2c2e",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  transition: "all 0.3s ease-in-out",
  position: "relative",
  overflowX: "hidden",
}));

const itemsSidebar = [
  {
    id: 1,
    title: "Dashboard",
    icon: <GridViewOutlinedIcon />,
    link: "/dashboard",
    active: true,
  },
  {
    id: 2,
    title: "Agendamentos",
    icon: <EventNoteOutlinedIcon />,
    link: "/agendamentos",
    active: false,
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContainer open={open}>
      <ul
        style={{
          color: "white",
          whiteSpace: "nowrap",
          width: open ? "100%" : "78px",
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // padding: "25px",
        }}
      >
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "4rem",
          }}
        >
          <img
            src={logoImg}
            alt="logoImg"
            style={{
              width: "30px",
              marginRight: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease-in-out",
            }}
          />
          {open && (
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                // opacity: open ? "1" : "0",
                transition: "all 0.3s ease-in-out",
              }}
            >
              Trim.ly
            </Typography>
          )}
        </li>
        {itemsSidebar.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              marginBottom: "2rem",
              cursor: "pointer",
            }}
            className="button"
          >
            {item.icon}
            {open && (
              <Typography
                sx={{
                  fontSize: "1rem",
                  opacity: open ? "1" : "0",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {item.title}
              </Typography>
            )}
          </li>
        ))}
      </ul>
      <OpenCloseButton handleDrawerClose={() => setOpen(!open)} open={open} />
    </SidebarContainer>
  );
}

// eslint-disable-next-line react/prop-types
const OpenCloseButton = ({ handleDrawerClose, open }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <IconButton
        onClick={handleDrawerClose}
        disableTouchRipple
        sx={{
          display: "flex",
          justifyContent: "end",
          paddingRight: "25px",
        }}
      >
        <LastPageOutlinedIcon
          sx={{
            color: "white",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fontSize="large"
        />
      </IconButton>
    </div>
  );
};

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });
