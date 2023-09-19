import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useState } from "react";
import { LogoutOutlined } from "@mui/icons-material";
import "./style.css";

export default function Header() {
  const date = new Date();
  const { user, logOut } = useContext(AuthContext);
  const initial = user?.name?.charAt(0).toUpperCase();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      style={{
        width: "100%",
        height: "3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // padding: "0 15rem",
        color: "white",
        marginBottom: "4rem",
      }}
    >
      <div>{date.toDateString()}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.3rem",
            backgroundColor: "var(--side-color)",
            padding: "0.6rem",
            paddingInline: "1rem",
            borderRadius: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "var(--input-color)",
            },
          }}
          onClick={handleClick}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {user?.name}
          <Avatar>{initial}</Avatar>
        </Box>
        <Menu
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          anchorEl={anchorEl}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              width: 150,
              backgroundColor: "var(--side-color)",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&.MuiPaper-root": {
                color: "white",
                backgroundColor: "var(--side-color)",
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 40,
                width: 10,
                height: 10,
                bgcolor: "var(--side-color)",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          id="basic-menu"
        >
          <MenuItem onClick={logOut}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
          >
            Sair
            <LogoutOutlined
              sx={{
                marginRight: "0.5rem",
              }}
            />
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
}
