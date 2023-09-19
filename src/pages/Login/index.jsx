import { Grid, Grow } from "@mui/material";
import { Box, Stack, Typography, Tab } from "@mui/material";
import { AiOutlineLogin } from "../../../node_modules/react-icons/ai/index.esm";
import LoginForm from "../../components/LoginForm/index";
import loginImg from "../../assets/iury.png";
import { useContext } from "react";
import { CustomTabs, CustomPaper } from "./styles";
import RegisterForm from "../../components/RegisterForm";
import { LoginTabsContext } from "../../context/Tabs/LoginTabsContext";
import logoImg from "../../assets/logo.png";

import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
export default function Login() {
  const { tabValue, handleChange } = useContext(LoginTabsContext);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid
        container
        columns={12}
        sx={{
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          sx={{
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CustomPaper elevation={3}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  padding: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Typography
                  variant="h4"
                  color="white"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "start",
                  }}
                >
                  Barber
                </Typography> */}
                <img
                  src={logoImg}
                  alt=""
                  width={30}
                />
                {/* <AiOutlineLogin
                    size={50}
                    style={{
                      color: "var(--primary-color)",
                    }}
                  /> */}
              </Stack>
              <CustomTabs
                value={tabValue}
                onChange={handleChange}
                variant="fullWidth"
                scrollButtons={false}
                centered
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "var(--primary-color)",
                    borderRadius: "10px",
                    margin: "6px",
                  },
                }}
                textColor="inherit"
              >
                <Tab
                  label="Login"
                  sx={{
                    color: "var(--label-color)",
                    fontWeight: "bold",
                  }}
                  disableRipple
                />

                <Tab
                  label="Cadastro"
                  sx={{
                    color: "var(--label-color)",
                    fontWeight: "bold",
                  }}
                  disableRipple
                />
              </CustomTabs>
              {tabValue === 0 && (
                <Grow
                  in={tabValue === 0}
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <div role="tabpanel">
                    <LoginForm />
                  </div>
                </Grow>
              )}
              {tabValue === 1 && (
                <Grow
                  in={tabValue === 1}
                  mountOnEnter
                  unmountOnExit
                  timeout={1000}
                >
                  <div role="tabpanel">
                    <RegisterForm />
                  </div>
                </Grow>
              )}
            </CustomPaper>
          </Box>
        </Grid>
        {isMd && (
          <Grid
            item
            xs={7}
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={loginImg}
              alt="login"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                filter: "drop-shadow(0px 0px 15px var(--secondary-color))",
              }}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
}
