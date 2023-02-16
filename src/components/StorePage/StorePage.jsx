import { useState } from "react";
import "./store.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function StorePage() {
  const [numItem, setNumItem] = useState(1);
  const [price, setPrice] = useState(1000);
  if (numItem < 0) {
    setNumItem(0);
  }
  console.log(numItem);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SY450_.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lenovo ideapad 500
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          price=${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          14 ich display with intel i5 12th gen (250GB SSD & 1TB HDD) windows 11
          preintsalled with microsoft office life time free
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Card</Button>
        <label htmlFor="number">Number of items :-</label>
        <input
          type="number"
          id="number"
          onChange={(e) => {
            setNumItem(e.target.value);
          }}
          value={numItem}
        />
      </CardActions>
    </Card>
  );
}
