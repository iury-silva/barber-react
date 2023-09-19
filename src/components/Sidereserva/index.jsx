import { useContext, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import { Tooltip, Zoom, tooltipClasses } from "@mui/material";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
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

export default function Sidereserva() {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--side-color)",
          },
        }}
      >
        {/* <img src={logoImg} alt="logoImg" style={{
            width: "30px",
            marginBottom: "2rem",
            justifyItems: "start",
          }} /> */}
        <List
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ListItem
            sx={{
              display: "block",
              marginBottom: "3rem",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 30,
                justifyContent: open ? "initial" : "center",
                alignItems: "center",
              }}
              disableTouchRipple
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <img
                  src={logoImg}
                  alt="logoImg"
                  style={{
                    width: "30px",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              </ListItemIcon>

              <ListItemText
                primary="Trim.ly"
                secondary={user?.user_type}
                secondaryTypographyProps={{
                  sx: {
                    opacity: open ? 1 : 0,
                    fontSize: "0.7rem",
                    color: "var(--base-color)",
                  },
                }}
                primaryTypographyProps={{
                  sx: {
                    opacity: open ? 1 : 0,
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  },
                }}
              />
            </ListItemButton>
            {/* <Typography>Trim.ly</Typography> */}
          </ListItem>
          {itemsSidebar.map((item) => (
            <BootstrapTooltip
              key={item.id}
              title={open ? "" : item.title}
              placement="right"
              arrow
              TransitionComponent={Zoom}
              leaveDelay={100}
            >
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  borderRadius: "10px",
                  width: "80%",
                  marginBottom: "0.6rem",

                  backgroundColor: item.active
                    ? "var(--input-color)"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "10px",
                    transition: "all 0.3s ease-in-out",
                  },
                  "&:active": {
                    backgroundColor: "var(--secondary-color)",
                  },
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    alignItems: "center",
                    // px: 2.5,
                  }}
                  disableTouchRipple
                  LinkComponent={Link}
                  to={item.link}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      sx: {
                        opacity: open ? 1 : 0,
                        fontSize: "1rem",
                      },
                    }}
                    primary={item.title}
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </BootstrapTooltip>
          ))}
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Divider
            sx={{
              backgroundColor: "var(--input-color)",
            }}
          />
          <DrawerHeader>
            <IconButton
              onClick={!open ? handleDrawerOpen : handleDrawerClose}
              sx={{
                backgroundColor: "var(--primary-color)",
                "&:hover": {
                  backgroundColor: "var(--secondary-color)",
                },
              }}
            >
              {open ? (
                <ChevronLeftIcon sx={{ color: "white" }} />
              ) : (
                <ChevronRightIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </DrawerHeader>
        </div>
      </Drawer>
    </>
  );
}
