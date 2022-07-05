import React, { useCallback, useEffect, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import DashboardButton from "../../../components/DashboardButton";
import FlatButton from "../../../components/FlatButton";
import {
  Container,
  ActionIcons,
  ConstructionsList,
  FilterSection,
  RegisterButton,
  Modal,
  ModalContent,
  ModalForm,
  Form,
  ButtonForm,
} from "./styles";
import DashboardPowerBi from "../../../assets/pdf/dashboard.pdf";

import { Footer } from "../../../components/Footer";

const PowerBi = () => {
  return (
    // <DashboardLayout title="Dashboard Power BI">
    <Form>
      <Container style={{ marginBottom: 20 }}>
        <iframe width="100%" height="800" src={DashboardPowerBi} />
      </Container>
      <Footer />
    </Form>
    // </DashboardLayout>
  );
};

export default PowerBi;
