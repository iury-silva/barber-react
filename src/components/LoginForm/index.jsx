import {
  Stack,
  InputAdornment,
  IconButton,
  MenuItem,
  Divider,
  FormControl,
  styled,
} from "@mui/material";
import { useContext, useState } from "react";
import BaseInput from "../BaseInput";
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
  MailOutlineOutlined,
} from "@mui/icons-material";
import BaseButton from "../BaseButton";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/Auth/AuthContext";

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

const createUserSchema = z.object({
  userType: z.string(),
  email: z.string().nonempty("Email obrigatório").email(),
  password: z.string().min(6),
});

const LoginForm = () => {
  /**
   * @description States below
   */
  const [showPass, setShowPass] = useState(false);
  const createUserForm = useForm({
    resolver: zodResolver(createUserSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = createUserForm;

  const { onLogin, loading} = useContext(AuthContext);

  return (
    <>
      <FormProvider {...createUserForm}>
        <form onSubmit={handleSubmit(onLogin)}>
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
                name="userType"
                defaultValue="CLIENT"
                InputProps={{
                  sx: {
                    "& .MuiSvgIcon-root": {
                      color: "var(--primary-color)",
                    },
                  },
                }}
              >
                <OptionCustom value="CLIENT" dense>
                  Cliente
                </OptionCustom>
                <OptionCustom value="BARBER" dense autoFocus={false}>
                  Barbeiro
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
              type="email"
              name="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                endAdornment: (
                  <IconButton disableTouchRipple>
                    <InputAdornment position="end">
                      <MailOutlineOutlined
                        sx={{
                          color: "var(--label-color)",
                        }}
                        fontSize="small"
                      />
                    </InputAdornment>
                  </IconButton>
                ),
              }}
            />
            <BaseInput
              id="password"
              label="Password"
              type={showPass ? "text" : "password"}
              name="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setShowPass(!showPass)}>
                    <InputAdornment position="end">
                      {showPass ? (
                        <VisibilityOffOutlined
                          sx={{ color: "var(--label-color)" }}
                        />
                      ) : (
                        <VisibilityOutlined
                          sx={{ color: "var(--label-color)" }}
                        />
                      )}
                    </InputAdornment>
                  </IconButton>
                ),
              }}
            />
          </Stack>
          <Stack direction={"column"} alignItems="center" marginTop={3}>
            <BaseButton text="Entrar" type="submit" loading={loading} />
          </Stack>
        </form>
      </FormProvider>
    </>
  );
};
LoginForm.propTypes = {};
export default LoginForm;
