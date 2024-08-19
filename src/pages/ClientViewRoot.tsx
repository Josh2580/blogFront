import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const ClientViewRoot = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
