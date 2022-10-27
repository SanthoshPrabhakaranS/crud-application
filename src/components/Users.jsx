import React, { useEffect, useState } from "react";
import { Container, TableContainer } from "@mui/material";
import {
  ButtonAdd,
  TalbeHeading,
  Button,
  HoverAsc,
  HoverDsc,
  SearchBar,
  SearchInput,
  SearchLabel,
  FilterDiv,
  DropDownDiv,
  NoUser,
} from "../Task.styles/user.styles";
import { openModal, openDeleteModal } from "./features/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Stack from "@mui/material/Stack";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AdduserModal from "./form/AdduserModal";
import { Link, Navigate } from "react-router-dom";
import { UserImage } from "../Task.styles/UserDetails.styles";
import DeleteModal from "./DeleteModal";

const Users = () => {

  const [deleteId, setDeleteId] = useState(null)
  const valid = useSelector((state) => state.modal.valid);

  const [createOpen, setCreateOpen] = useState(false);
  const formOpen = useSelector((state) => state.modal.formOpen);
  const deleteModal = useSelector((state) => state.modal.deleteModal);

  const users = useSelector((store) => store.users);

  const dispatch = useDispatch();


  //sorting
  const [data, setData] = useState(users);
  const [order, setOrder] = useState(true);

  const [hoverAsc, setHoverAsc] = useState(false);
  const [hoverDsc, setHoverDsc] = useState(false);

  const sorting = () => {
    if (order) {
      const sorted = [...users].sort((a, b) =>
        a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder(false);
      setHoverAsc(true);
      setHoverDsc(false);
      setTimeout(() => {
        setHoverAsc(false);
      }, 1000);
    }
    if (!order) {
      const sorted = [...users].sort((a, b) =>
        a.username.toLowerCase() < b.username.toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder(true);
      setHoverDsc(true);
      setHoverAsc(false);
      setTimeout(() => {
        setHoverDsc(false);
      }, 1000);
    }
  };

  useEffect(() => {
    setData(users);
  }, [users]);

  //Search filter
  const [search, setSearch] = useState("");
  const [value, setValue] = useState('username');

  const dropDownChange = (e) => {
     setValue(e.target.value);
  };

  const searchRows = (rows) => {
    return rows.filter((row) => 
    row[value]?.toLowerCase().includes(search.toLowerCase()) 
    )
  }

  if (!valid) return <Navigate to="/" />;

  //Delete Modal
  const deleteModalHandler = (id) => {
    dispatch(openDeleteModal())
    setDeleteId(id)
  }
  const rows = searchRows(data)
  return (
    <>
    { deleteModal && <DeleteModal deleteId={deleteId} /> }

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FilterDiv>
          <DropDownDiv>
            <select  value={value.select} onChange={dropDownChange} name="filter" id="filter">
              <option value="username">Username</option>
              <option value="role">Role</option>
              <option value="status">Status</option>
              <option value="data">Data</option>
            </select>
          </DropDownDiv>
        <SearchBar>
        <SearchLabel htmlFor="search">Search</SearchLabel>
        <SearchInput
          type="text"
          id="search"
          placeholder="Search users... "
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBar>
        </FilterDiv>
         
        <TableContainer sx={{ maxWidth: 950, mt: 6, maxHeight: "400px" }}>
          <Table rows={search} stickyHeader>
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    backgroundColor: "#DEDEDE",
                  },
                }}
              >
                <TableCell align="center">
                  <TalbeHeading>Dp</TalbeHeading>
                </TableCell>
                <TableCell
                  onClick={() => sorting()}
                  align="center"
                >
                  <HoverAsc isHover={hoverAsc ? true : false}>
                    Ascending
                  </HoverAsc>
                  <HoverDsc isHover={hoverDsc ? true : false}>
                    Descending
                  </HoverDsc>
                  <Stack direction="row">
                    <TalbeHeading>Login </TalbeHeading>
                    <InfoOutlinedIcon
                      style={{
                        cursor: "pointer",
                        margin: "-0.2 0 0 4px",
                        fontSize: "22px",
                      }}
                    />{" "}
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <TalbeHeading>Role</TalbeHeading>
                </TableCell>
                <TableCell align="center">
                  <TalbeHeading>Status</TalbeHeading>
                </TableCell>
                <TableCell align="center">
                  <TalbeHeading>Data</TalbeHeading>
                </TableCell>
                <TableCell align="center">
                  <TalbeHeading>Actions</TalbeHeading>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              { rows && rows.length > 0 ? rows.map((user) => {
                  return (
                    <>
                      <TableRow key={user.id}>
                        <TableCell align="center">
                          <UserImage src={user.image} />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {user.username}
                        </TableCell>
                        <TableCell align="center">{user.role}</TableCell>
                        <TableCell align="center">{user.status}</TableCell>
                        <TableCell align="center">{user.data}</TableCell>
                        <TableCell align="center">
                          <Link to={`/home/user/${user.id}`}>
                            <Button backgroundColor="#41A6E1">Details</Button>
                          </Link>
                          <Button
                            backgroundColor="#FF000D"
                            onClick={() => deleteModalHandler(user.id)}
                          >
                            Delete
                          </Button>{" "}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                }) : <NoUser>No users</NoUser> }
            </TableBody>
          </Table>
        </TableContainer>
        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ButtonAdd
            backgroundColor="#23ab16"
            onClick={() => {
              setCreateOpen(true);
              dispatch(openModal());
            }}
          >
            Add new user
          </ButtonAdd>
        </Container>
        {formOpen && <AdduserModal createForm={createOpen} />}
      </Container>

      
    </>
  );
};

export default Users;
