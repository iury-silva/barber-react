import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "@mui/material";
import theme from "./components/theme/muiTheme";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}
