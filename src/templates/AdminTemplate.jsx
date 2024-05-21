import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/Sidebar/AdminSidebar";
import { Avatar, Button } from "@mui/material";

const AdminTemplate = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/auth/login");
    localStorage.removeItem("token");
  };
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-1 bg-gray-800">
        <AdminSidebar />
      </div>
      <div className="col-span-11 bg-neutral-300">
        <div className="flex flex-row items-center justify-end pr-3 gap-5 bg-neutral-50">
          <Button
            variant="contained"
            color="warning"
            size="small"
            onClick={handleLogout}
          >
            Đăng xuất
          </Button>
          <Avatar
            src="https://elearning-project-puce.vercel.app/img/50d429ea5c9afe0ef9cb3c96f784bea4.jpg"
            sx={{ width: 60, height: 60 }}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminTemplate;
