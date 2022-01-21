import React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useStyles } from "./style"
import { Modal } from "antd"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#121212",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData(
    "Jean De Dieu",
    "UKWITEGETSE",
    "078486036",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
  createData(
    "Jean ",
    "UKWITEGETSE",
    "078486036",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
  createData(
    "John",
    "UKWITEGETSE",
    "078486036",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
  createData(
    "Linda",
    "UKWITEGETSE",
    "078486036",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
  createData(
    "Bosco",
    "UKWITEGETSE",
    "078486036",
    "ukwjeandedieu1@gmail.com",
    "1234"
  ),
]

const UserList = () => {
  const classes = useStyles()
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)

  const handleDelete = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log("Clicked cancel button")
    setVisible(false)
  }
  return (
    <React.Fragment>
      <Modal
        className="Modal"
        title="Delete This ?"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <span style={{ color: "red" }}> Do you want To Delete This ?</span>
      </Modal>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name </StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Password</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditIcon className={classes.userTableIcons} />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon
                    onClick={handleDelete}
                    className={classes.userTableIcons}
                    style={{ color: "red" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default UserList
