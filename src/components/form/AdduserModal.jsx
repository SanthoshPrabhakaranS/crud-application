import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { closeModal, closeEditModal } from "../features/ModalSlice";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../features/userDataSlice";
import {
  AddFormBtn,
  AddUserModal,
  Form,
  FormBtnDiv,
  Header,
  Inputs,
  Label,
  Select,
  TextArea,
  Span,
  Svg,
} from "../../Task.styles/AddUserModal.styles";

const AdduserModal = ({ createForm, editForm }) => {
  const dispatch = useDispatch();
  const userId = uuidv4().slice(0, 5);

  const initialId = editForm ? editForm.id : "";
  const initialUsername = editForm ? editForm.username : "";
  const initialRole = editForm ? editForm.role : "Admin";
  const initialStatus = editForm ? editForm.status : "Logged Out";
  const initialPassword = editForm ? editForm.password : "";
  const initialConfirmPassword = editForm ? editForm.confirmPassword : "";
  const initialData = editForm ? editForm.data : "";
  const initialImage = editForm ? editForm.image : "";

  const [image, setImage] = useState(initialImage);
  const [values, setValues] = useState({
    username: initialUsername,
    role: initialRole,
    status: initialStatus,
    password: initialPassword,
    confirmPassword: initialConfirmPassword,
    data: initialData,
  });

  const [submitted, setSubmitted] = useState(false);
  const [passValid, setPassValid] = useState(false);
  const [jsonvalid, setJsonValid] = useState(false);

  useEffect(() => {
    if (values.data) {
      try {
        JSON.parse(values.data);
        setJsonValid(false);
        return;
      } catch (e) {
        setJsonValid(true);
        return;
      }
    }
  }, [values.data]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (values.username === "") {
      setSubmitted(true);
      return
    }if(values.password === ''){
      setSubmitted(true)
    }else if(values.confirmPassword === ''){
      setSubmitted(true)
      setPassValid(false)
    }else if(values.confirmPassword !== values.password){
      setPassValid(true)
    }
    else if (values.data === "") {
      setSubmitted(true);
      jsonvalid(true);
    } else if (image === "") {
      setSubmitted(true);
    } else if (jsonvalid) {
    } else if (createForm) {
      dispatch(
        addUser({
          id: userId,
          username: values.username,
          role: values.role,
          status: values.status,
          password: values.password,
          confirmPassword: values.confirmPassword,
          data: values.data,
          image: image,
        })
      );
      dispatch(closeModal());
    } else if (editForm) {
      dispatch(
        updateUser({
          id: initialId,
          username: values.username,
          role: values.role,
          status: values.status,
          password: values.password,
          confirmPassword: values.confirmPassword,
          data: values.data,
          image: image,
        })
      );
      dispatch(closeModal());
    }
  };

  const onImageChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <>
      <AddUserModal>
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
          <Form style={{ padding: "1rem" }}>
            <Header>
              {createForm ? <p>Create new user</p> : <p>Edit user</p>}
              <Svg
                onClick={() => {
                  dispatch(closeModal());
                }}
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
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  <Label htmlFor="name">Username</Label>
                  <Inputs
                    type="text"
                    id="name"
                    placeholder="Enter Username"
                    value={values.username}
                    onChange={(e) =>
                      setValues({ ...values, username: e.target.value })
                    }
                    isInvalid={submitted && !values.username ? true : false}
                  />
                </div>
                {submitted && !values.username ? (
                  <Span>Username required</Span>
                ) : null}
              </Grid>

              {/* image */}
              <Grid item xs={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  <Label for="image">Image</Label>
                  <input
                    isInvalid={submitted && !image ? true : false}
                    type="file"
                    id="image"
                    name="image"
                    onChange={onImageChange}
                  />
                </div>
                {submitted && !image ? <Span>Image required</Span> : null}
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  <Label for="role">Role</Label>
                  <Select
                    id="role"
                    name="role"
                    value={values.role}
                    onChange={(e) =>
                      setValues({ ...values, role: e.target.value })
                    }
                  >
                    <option value="Admin">Admin</option>
                    <option value="client">Client</option>
                  </Select>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  <Label for="status">Status</Label>
                  <Select
                    id="status"
                    name="status"
                    value={values.status}
                    onChange={(e) =>
                      setValues({ ...values, status: e.target.value })
                    }
                  >
                    <option value="Logged Out">Logged Out</option>
                    <option value="active">Active</option>
                    <option value="disabled">Disabled</option>
                  </Select>
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  <Label htmlFor="password">Password</Label>
                  <Inputs
                    style={{ width: "240px" }}
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                    isInvalid={submitted && !values.password ? true : false}
                  />
                </div>
                {submitted && !values.password ? (
                  <Span>Password required</Span>
                ) : null}
              </Grid>
              <Grid item xs={6}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Inputs
                    style={{ width: "240px" }}
                    type="password"
                    id="confirm-password"
                    placeholder="Enter Password"
                    value={values.confirmPassword}
                    onChange={(e) =>
                      setValues({ ...values, confirmPassword: e.target.value })
                    }
                    // isInvalid={
                    //  submitted && values.confirmPassword && values.confirmPassword === values.password ? false : true
                    // }
                    isInvalid={
                      submitted && !values.confirmPassword ? true : false
                     }
                    
                  />
                </div>
                {submitted && !values.confirmPassword ? (
                  <Span>Confirm password required</Span>
                ) : null }
                {passValid && values.confirmPassword && values.password !== values.confirmPassword ? (
                  <Span>Password does not match</Span>
                ) : null}
              </Grid>
            </Grid>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "7px" }}
            >
              <Label for="data">Data (json)</Label>
              <TextArea
                id="data"
                name="data"
                rows="4"
                cols="50"
                placeholder="Enter Data (in JSON)"
                value={values.data}
                onChange={(e) => setValues({ ...values, data: e.target.value })}
                isInvalid={submitted && !values.data ? true : false}
              ></TextArea>
            </div>
            {submitted && !values.data ? <Span>Data required</Span> : null}
            {jsonvalid ? <Span>JSON data required</Span> : null}

            <FormBtnDiv>
              <AddFormBtn
                backgroundColor="#fff"
                onClick={() => {
                  dispatch(closeModal());
                  dispatch(closeEditModal());
                }}
              >
                Cancel
              </AddFormBtn>
              <AddFormBtn backgroundColor="#16830d" onClick={submitHandler}>
                Save
              </AddFormBtn>
            </FormBtnDiv>
          </Form>
        </Container>
      </AddUserModal>
    </>
  );
};

export default AdduserModal;
