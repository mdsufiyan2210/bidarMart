import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

export default function Cart() {
  const items = useSelector((state) => state.numberItems);
  const price = useSelector((state) => state.priceAdded);
  const data = {
    items,
    price,
  };
  const [dataobject,setDataobject]=useState({})
  const [dataarray,setDataarray]=useState([dataobject])

  useEffect(()=>{
    setDataobject(data)
    setDataarray([...dataarray,dataobject])
    console.log(dataarray)
  },[items,price])


  const dispatch = useDispatch();

  const remove = (params) => {
    dispatch(allActions.visible(false));
  };

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
            <p>
              product <strong>$ {price}</strong>
            </p>
            <p>
              shipping costs <strong>Free</strong>
            </p>
            <p>
              payment cost<strong>Free</strong>
            </p>
            <p>
              Number of items<strong>{items}</strong>
            </p>
          </div>
          <hr />
          <h3>Total ${items * 1000}</h3>
          <button onClick={remove}>remove from cart</button>
        </div>
      </Paper>
    </Box>
  );
}
