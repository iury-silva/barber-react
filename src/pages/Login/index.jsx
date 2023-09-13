import { Grid, Grow } from "@mui/material";
import {
  Paper,
  Box,
  Stack,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { AiOutlineLogin } from "../../../node_modules/react-icons/ai/index.esm";
import LoginForm from "../../components/LoginForm/index";
import loginImg from "../../assets/iury.png";
import { useState } from "react";

export default function Login() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          xs={5}
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
            <Paper
              elevation={3}
              sx={{
                width: "400px",
                height: "500px",
                borderRadius: "15px",
                backgroundColor: "#18181B",
                boxShadow: "0 0 30px var(--secondary-color)",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  padding: "20px",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  color="white"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "start",
                  }}
                >
                  Barber
                </Typography>
                <AiOutlineLogin
                  size={50}
                  style={{
                    color: "var(--primary-color)",
                  }}
                />
              </Stack>
              {/* <Divider
                variant="middle"
                sx={{
                  backgroundColor: "#2C2C2E",
                  marginBottom: "20px",
                }}
              /> */}
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                scrollButtons={false}
                centered
                sx={{
                  backgroundColor: "#2C2C2E",
                  borderRadius: "10px",
                  marginLeft: "20px",
                  marginRight: "20px",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "var(--secondary-color)",
                    borderRadius: "10px",
                    height: "75%",
                    transition: "all 0.5s ease-in-out",
                  },
                  "& .MuiTab-root": {
                    color: "var(--label-color)",
                    fontWeight: "bold",
                    marginRight: "10px",
                    zIndex: "1",
                  },
                  "& .Mui-selected": {
                    color: "white",
                    transition: "all 0.5s ease-in-out",
                  },
                }}
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
                  label="Registrar"
                  sx={{
                    color: "var(--label-color)",
                    fontWeight: "bold",
                  }}
                  disableRipple
                />
              </Tabs>
              {value === 0 && (
                <Grow in={value === 0} mountOnEnter unmountOnExit timeout={1000}>
                  <div role="tabpanel">
                    <LoginForm />
                    <Stack direction={"column"} alignItems="center">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "var(--primary-color)",
                          boxShadow: "0 0 20px var(--secondary-color)",
                          width: "60%",
                          height: "40px",
                          borderRadius: "10px",
                          "&:hover": {
                            backgroundColor: "var(--secondary-color)",
                          },
                        }}
                      >
                        Entrar
                      </Button>
                    </Stack>
                  </div>
                </Grow>
              )}
              {value === 1 && (
                <Grow in={value === 1} mountOnEnter unmountOnExit timeout={1000}>
                  <div role="tabpanel">
                    <LoginForm />
                    <Stack direction={"column"} alignItems="center">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "var(--primary-color)",
                          boxShadow: "0 0 20px var(--secondary-color)",
                          width: "60%",
                          height: "40px",
                          borderRadius: "10px",
                          "&:hover": {
                            backgroundColor: "var(--secondary-color)",
                          },
                        }}
                      >
                        Entrar
                      </Button>
                    </Stack>
                  </div>
                </Grow>
              )}
            </Paper>
          </Box>
        </Grid>
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
      </Grid>
    </>
  );
}
