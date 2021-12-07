import { RowingSharp } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Grid,
  Paper,
  Typography,
  Divider,
  TablePagination,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id,
  fullname,
  email,
  username,
  phone,
  role,
  status,
  password
) {
  return { id, fullname, email, username, phone, role, status, password };
}

const rows = [
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
  createData(
    1,
    'abebe',
    'abebe@gmail.com',
    'abebe',
    '0911111111',
    'Admin',
    'active',
    '#fhdg232hg'
  ),
];

export default function ManageMerchantContainer() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid
      container
      sx={{ alignContent: 'center', display: 'flex', justifyContent: 'center' }}
    >
      <Grid item xs={12}>
        <Paper sx={{ padding: 3 }}>
          <Typography variant="h5">Merchants</Typography>
          <Divider sx={{ height: 10 }} />
          <TableContainer component="Paper">
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{ minWidth: 700 }}
              // aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell>Fullname</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>Username</StyledTableCell>
                  <StyledTableCell>Role</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>password</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <StyledTableRow
                      key={row.id}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.id}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.fullname}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.phone}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.username}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.role}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.status}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.password}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
