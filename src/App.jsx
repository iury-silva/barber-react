import { ThemeProvider } from "@mui/material";
import theme from "./components/theme/muiTheme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Certifique-se de importar o CSS do react-toastify
import AppRoutes from "./routes/index";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <AppRoutes />
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
      </ThemeProvider>
    </>
  );
}
