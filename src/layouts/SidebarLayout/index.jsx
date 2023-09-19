import Sidebar2 from "../../components/Sidereserva";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function SidebarLayout() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar2 />
        <div style={{
          width: "100%",
          margin: "2rem 15rem",
        }}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
