import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import './cart.css'

export default function Cart() {

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 250,
        },
      }}
    >
      <Paper elevation={3}>
        <div className="cart">
          <h2 className="total">TOTAL AMMOUNT</h2>
          <div className="para">
          <p>product <strong>$ 450.00</strong></p>
          <p>shipping costs <strong>Free</strong></p>
          <p>payment cost<strong>Free</strong></p>
          <p>Number of items<strong>1</strong></p>
          </div>
          <hr />
          <h3>Total    $5400.00</h3>
        </div>

      </Paper>
    </Box>
  );
}
