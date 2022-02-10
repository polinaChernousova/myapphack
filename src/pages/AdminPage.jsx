import { Container } from "@mui/material";
import React from "react";
import { ToastContainer } from "react-toastify";
import AdminTable from "../components/AdminTable";

const AdminPage = () => {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <Container>
        <h2>Изменить данные</h2>
        <AdminTable />
      </Container>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AdminPage;
