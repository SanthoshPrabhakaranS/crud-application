import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  DataDiv,
  SplitDiv,
  SplitDivThree,
  SplitDivTwo,
  UserHeader,
  UserInfo,
  UserNav,
  Wrapper,
} from "../Task.styles/UserDetails.styles";
import { ButtonEdit } from "../Task.styles/Network.styles";
import HomePage from "./HomePage";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AdduserModal from "./form/AdduserModal";
import { openModal } from "./features/ModalSlice";

const UserDetails = () => {
  const dispatch = useDispatch();

  const formOpen = useSelector((state) => state.modal.formOpen);
  const users = useSelector((store) => store.users);
  const valid = useSelector((state) => state.modal.valid);

  const { id } = useParams();
  const ExistingUser = users.filter((user) => user.id === id);

  const editHandler = () => {
    dispatch(openModal());
  };

  if (!valid) return <Navigate to="/" />;

  return (
    <>
      {formOpen && <AdduserModal editForm={ExistingUser[0]} />}
      <HomePage />
      <UserNav>
        <Link
          style={{ textDecoration: "none", color: "#4169DF" }}
          to="/home/users"
        >
          <p>Users </p>
        </Link>{" "}
        <p>/ {id}</p>
      </UserNav>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Wrapper>
          <UserHeader>
            <p>User</p>
          </UserHeader>
          {ExistingUser.map((user) => {
            return (
              <>
                <UserInfo key={user}>
                  <SplitDiv>
                    <p>Username: {user.username}</p>
                    <p>Role: {user.role}</p>
                    <DataDiv>
                      <p>Data: </p> <p> {user.data}</p>
                    </DataDiv>
                  </SplitDiv>
                  <SplitDivTwo>
                    <p>Status: {user.status}</p>
                    <img
                      style={{
                        width: "80px",
                        height: "80px",
                        marginLeft: "20px",
                      }}
                      src={user.image}
                      alt="img"
                    />
                  </SplitDivTwo>
                  <SplitDivThree>
                    <ButtonEdit
                      onClick={editHandler}
                      backgroundColor="#8113FF"
                      style={{ marginRight: "20px", padding: "0.7rem 0.7rem" }}
                    >
                      Edit
                    </ButtonEdit>
                  </SplitDivThree>
                </UserInfo>
              </>
            );
          })}
        </Wrapper>
      </Container>
    </>
  );
};

export default UserDetails;
