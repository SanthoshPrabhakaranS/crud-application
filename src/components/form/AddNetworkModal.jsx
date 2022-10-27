import React, { useState } from "react";
import { Container } from "@mui/material";
import {
  AddFormBtn,
  FormBtnDiv,
  FormNetwork,
  Header,
  Inputs,
  Label,
  Span,
  Svg,
  TextArea,
} from "../../Task.styles/AddNetworkModal.styles";
import { addNetwork, updateNetwork } from "../features/networkDataSlice";
import { closeNetworkModal } from "../features/NetworkModalSlice";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const AddNetworkModal = ({ createOpen, editNetwork }) => {
  const dispatch = useDispatch();
  const networkId = uuidv4().slice(0, 4);
  const [submitted, setSubmitted] = useState(false);

  const initialId = editNetwork ? editNetwork.id : "";
  const initialNetworkName = editNetwork ? editNetwork.networkName : "";
  const initialDescription = editNetwork ? editNetwork.description : "";

  const [values, setValues] = useState({
    networkName: initialNetworkName,
    description: initialDescription,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (values.networkName === "") {
      setSubmitted(true);
    } else if (values.description === "") {
      setSubmitted(true);
    } else if (createOpen) {
      dispatch(
        addNetwork({
          id: networkId,
          networkName: values.networkName,
          description: values.description,
        })
      );
      dispatch(closeNetworkModal());
    } else if (editNetwork) {
      dispatch(
        updateNetwork({
          id: initialId,
          networkName: values.networkName,
          description: values.description,
        })
      );
      dispatch(closeNetworkModal());
    }
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
        <FormNetwork style={{ padding: "1rem" }}>
          <Header>
            {createOpen ? <p>Create new network</p> : <p>Edit network</p>}
            <Svg
              onClick={() => dispatch(closeNetworkModal())}
              style={{
                height: "20px",
                width: "20px",
                margin: "2px 20px 0 0",
                cursor: "pointer",
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </Svg>
          </Header>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Label htmlFor="network-name">Name</Label>
            <Inputs
              type="text"
              id="network-name"
              placeholder="New network"
              value={values.networkName}
              onChange={(e) =>
                setValues({ ...values, networkName: e.target.value })
              }
              isInvalid={submitted && !values.networkName ? true : false}
            />
            {submitted && !values.networkName ? (
              <Span>Name required</Span>
            ) : null}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Label htmlFor="description">Description</Label>
            <TextArea
              id="discription"
              rows="4"
              cols="50"
              placeholder="Enter Description"
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
              isInvalid={submitted && !values.description ? true : false}
            ></TextArea>
            {submitted && !values.description ? (
              <Span>Description required</Span>
            ) : null}
          </div>
          <FormBtnDiv>
            <AddFormBtn
              onClick={() => {
                dispatch(closeNetworkModal());
              }}
              backgroundColor="#fff"
            >
              Cancel
            </AddFormBtn>
            <AddFormBtn onClick={submitHandler} backgroundColor="#16830d">
              Save
            </AddFormBtn>
          </FormBtnDiv>
        </FormNetwork>
      </Container>
    </>
  );
};

export default AddNetworkModal;
