import React from "react";
import { Container } from "@mui/material";
import {
  DeletBtnDiv,
  DeleteModalBtn,
  DeleteModalDiv,
} from "../Task.styles/DeleteModal.styles";
import { useDispatch } from "react-redux";
import { deleteNetwork } from "./features/networkDataSlice";
import { closeDeleteModal } from "./features/ModalSlice";

const NetworkDeleteModal = ({ deleteId }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteNetwork({id}))
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
          <p>Do you want to delete this network?</p>
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

export default NetworkDeleteModal;
