import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import './cart.css'
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector(state => state.numberItems)
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
          <p>product <strong>$ 1000.00</strong></p>
          <p>shipping costs <strong>Free</strong></p>
          <p>payment cost<strong>Free</strong></p>
          <p>Number of items<strong>{items}</strong></p>
          </div>
          <hr />
          <h3>Total    ${items*1000}</h3>
        </div>

      </Paper>
    </Box>
  );
}
