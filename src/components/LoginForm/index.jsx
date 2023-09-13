import {
  Stack,
  InputAdornment,
  IconButton,
  MenuItem,
  Divider,
  FormControl,
  styled,
} from "@mui/material";
import { useState } from "react";
import BaseInput from "../BaseInput";
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  MailOutlineOutlined,
  Check,
} from "@mui/icons-material";

const OptionCustom = styled(MenuItem)({
  display: "flex",
  justifyContent: "space-between",
  "&.Mui-selected": {
    backgroundColor: "var(--secondary-color)",
    borderRadius: "15px",
    paddingTop: "0.5rem",
  },
  "&:hover": {
    backgroundColor: "var(--secondary-color)",
    borderRadius: "15px",
    transition: "0.5s",
  },
});

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("CLIENT");
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          padding: "20px",
        }}
      >
        <FormControl variant="filled">
          <BaseInput
            select
            label="Tipo de Usuário"
            value={type}
            onChange={(e) => setType(e.target.value)}
            InputProps={{
              sx: {
                "& .MuiSvgIcon-root": {
                  color: "var(--primary-color)",
                },
              },
            }}
          >
            <OptionCustom
              value="CLIENT"
              dense
              
            >
              Cliente {type === "CLIENT" && <Check fontSize="13" />}
            </OptionCustom>
            <OptionCustom
              value="BARBER"
              dense
              autoFocus={false}
            >
              Barbeiro {type === "BARBER" && <Check fontSize="13" />}
            </OptionCustom>
          </BaseInput>
        </FormControl>
        <Divider
          variant="middle"
          sx={{
            marginTop: "1rem",
            marginBottom: "1rem",
            backgroundColor: "#2C2C2E",
          }}
        />
        <BaseInput
          id="email"
          label="Email"
          value={email}
          InputProps={{
            endAdornment: (
              <IconButton>
                <InputAdornment position="end">
                  <MailOutlineOutlined
                    sx={{
                      color: "var(--label-color)",
                    }}
                  />
                </InputAdornment>
              </IconButton>
            ),
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BaseInput
          id="password"
          label="Password"
          type={showPass ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPass(!showPass)}>
              <InputAdornment position="end">
                { showPass ? <VisibilityOffOutlined sx={{color: "var(--label-color)"}}/> : <VisibilityOutlined sx={{color: "var(--label-color)"}}/>}
                </InputAdornment>
              </IconButton>
            ),
          }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Stack>
    </>
  );
};
LoginForm.propTypes = {};
export default LoginForm;
