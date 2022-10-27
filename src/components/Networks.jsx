import React, { useState, useEffect } from "react";
import { Container, TableContainer } from "@mui/material";
import { Button } from "../Task.styles/user.styles";
import { openNetworkModal } from "./features/NetworkModalSlice";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { openDeleteModal } from "./features/ModalSlice";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import {
  ButtonEdit,
  HoverAsc,
  HoverDsc,
  NetworkAdd,
  NoNetwork,
  SearchBar,
  SearchInput,
  SearchLabel,
  TalbeHeading,
} from "../Task.styles/Network.styles";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AddNetworkModal from "./form/AddNetworkModal";
import NetworkDeleteModal from "./NetworkDeleteModal";

const Networks = () => {
  const networkData = useSelector((store) => store.networkData);
  const dispatch = useDispatch();
  const formOpen = useSelector((state) => state.networkModal.formOpen);
  const deleteModal = useSelector((state) => state.modal.deleteModal);
  const valid = useSelector((state) => state.modal.valid);

  const [createOpen, setCreateOpen] = useState(false);

  // const { id } = useParams();

  const [existingUser, setExistingUser] = useState(null);

  //Deleting
  const [DeleteNetworkId, setDeleteNetworkId] = useState(null)
  const deleteHandler = (id) => {
    setDeleteNetworkId(id)
    dispatch(openDeleteModal())
  };

  const editHandler = (id) => {
    dispatch(openNetworkModal());
    setCreateOpen(false);
    setExistingUser(networkData.filter((user) => user.id === id));
  };

  //Sorting
  const [data, setData] = useState(networkData);
  const [order, setOrder] = useState(true);
  const [hoverAsc, setHoverAsc] = useState(false);
  const [hoverDsc, setHoverDsc] = useState(false);

  const sorting = () => {
    if (order) {
      const sorted = [...networkData].sort((a, b) =>
        a.networkName.toLowerCase() > b.networkName.toLowerCase() ? 1 : -1
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
      const sorted = [...networkData].sort((a, b) =>
        a.networkName.toLowerCase() < b.networkName.toLowerCase() ? 1 : -1
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
    setData(networkData);
  }, [networkData]);

  //Search filter
  const [search, setSearch] = useState('');

  const searchRows = (rows) => {
    return rows.filter((row) =>
    row.networkName.toLowerCase().indexOf(search) > -1  
    )
  }

  if (!valid) return <Navigate to="/" />;

  const rows = searchRows(data)

  return (
    <>
    { deleteModal && <NetworkDeleteModal deleteId={DeleteNetworkId} /> }
      <SearchBar>
        <SearchLabel htmlFor="search">Search</SearchLabel>
        <SearchInput
          type="text"
          id="search"
          placeholder="Search networks..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBar>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TableContainer sx={{ maxWidth: 700, mt: 6, maxHeight: "400px" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    backgroundColor: "#DEDEDE",
                  },
                }}
              >
                <TableCell onClick={() => sorting()}>
                  <Stack direction="row">
                    <p>
                      <TalbeHeading>Network</TalbeHeading>
                    </p>
                    <InfoOutlinedIcon
                      style={{
                        cursor: "pointer",
                        margin: "-0.5 0 0 4px",
                        fontSize: "22px",
                      }}
                    />
                  </Stack>
                  <HoverAsc isHover={hoverAsc ? true : false}>
                    Ascending
                  </HoverAsc>
                  <HoverDsc isHover={hoverDsc ? true : false}>
                    Descending
                  </HoverDsc>
                </TableCell>
                <TableCell align="center">
                  <TalbeHeading>
                    <p>Description</p>
                  </TalbeHeading>
                </TableCell>
                <TableCell align="center">
                  <TalbeHeading>
                    <p>Actions</p>
                  </TalbeHeading>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              style={{
                maxHeight: "400px",
                overflowY: "auto",
              }}
            >
              { rows && rows.length > 0 ? rows.map((network) => {
                  return (
                    <>
                      <TableRow key={network.id}>
                        <TableCell component="th" scope="row">
                          {network.networkName}
                        </TableCell>
                        <TableCell align="center">
                          {network.description}
                        </TableCell>
                        <TableCell align="center">
                          <ButtonEdit
                            onClick={() => editHandler(network.id)}
                            backgroundColor="#8113FF"
                          >
                            Edit
                          </ButtonEdit>
                          <Button
                            onClick={() => deleteHandler(network.id)}
                            backgroundColor="#FF000D"
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                }) : <NoNetwork>No networks</NoNetwork> }
            </TableBody>
          </Table>
        </TableContainer>
        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <NetworkAdd
            onClick={() => {
              dispatch(openNetworkModal());
              setCreateOpen(true);
              setExistingUser("");
            }}
            backgroundColor="#23ab16"
          >
            Add new network
          </NetworkAdd>
        </Container>
      </Container>
      {formOpen && (
        <AddNetworkModal
          createOpen={createOpen}
          editNetwork={existingUser[0]}
        />
      )}
    </>
  );
};
export default Networks;
