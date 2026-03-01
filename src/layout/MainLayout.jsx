import { Outlet } from "react-router";

export const MainLayout = () => (
    <main role="main" className="container">
      <Outlet />
    </main>
);
