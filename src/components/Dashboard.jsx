import React,{useEffect} from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import DashboardLayout from "./dashboard/DashboardLayout";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import CandidateInformationForm from "./form/CandidateInformationForm";
import EmployerInformationForm from "./form/EmployerInformationForm";

const Dashboard = () => {
  const { userData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
useEffect(() => {
    if (!userData) {
      return;
    }
    const role = userData.user.role;
    if (userData[role] === null) {
      onOpen();
    }
 
  }, [userData]);
  return (
    <>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        onCloseComplete={() => {
          navigate(location.pathname, {
            replace: true,
          });
        }}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            {userData?.user.role === "candidate" && (
              <CandidateInformationForm onClose={onClose} />
            )}
            {userData?.user.role === "employer" && (
              <EmployerInformationForm onClose={onClose} />
            )}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dashboard;
