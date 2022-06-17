import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const row = (x, i, header) =>
<StyledTableRow key= {`tr-${i}`}>
    {header.map((y, k) =>
        <StyledTableCell key={`trc- ${k}`}>
            {x[y.prop]}
        </StyledTableCell>
    )}
    <StyledTableCell>
      <EditIcon />
    </StyledTableCell>

    <StyledTableCell>
      <DeleteIcon />
    </StyledTableCell>

</StyledTableRow>


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ({data, header}) {
  const classes = useStyles();

  return (
    <div>
    <h1>Products list</h1>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              {header.map((x,i) =>
                <StyledTableCell key= {`thc-${i}`}>
                    {x.name}
                </StyledTableCell>
              )

              }
            {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}

            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
            {data.map((x, i) => row(x, i, header))}
          {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
{/*       
      <button className="btn btn-primary d-block m-auto" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Add Item
        </button>
         */}
    </TableContainer>
    </div>
    
  );
}
