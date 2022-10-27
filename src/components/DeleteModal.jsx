import React from "react";
import { Container } from "@mui/material";
import {
  DeletBtnDiv,
  DeleteModalBtn,
  DeleteModalDiv,
} from "../Task.styles/DeleteModal.styles";
import { useDispatch } from "react-redux";
import { deleteUser } from "./features/userDataSlice";
import { closeDeleteModal } from "./features/ModalSlice";

const DeleteModal = ({ deleteId }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteUser({ id }));
    dispatch(closeDeleteModal());
  };

  return (
    <>
      <Container
        maxWidth="100vw"
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0000006e",
          zIndex: "999",
        }}
      >
        <DeleteModalDiv>
          <p>Do you want to delete this user?</p>
          <DeletBtnDiv>
            <DeleteModalBtn onClick={() => dispatch(closeDeleteModal())}>
              Cancel
            </DeleteModalBtn>
            <DeleteModalBtn onClick={() => deleteHandler(deleteId)}>
              Delete
            </DeleteModalBtn>
          </DeletBtnDiv>
        </DeleteModalDiv>
      </Container>
    </>
  );
};

export default DeleteModal;
