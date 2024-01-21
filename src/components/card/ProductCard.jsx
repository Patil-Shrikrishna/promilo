import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./ProductCard.css";
export default function ProductCard({ image, name }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          className="product-img"
          style={{ display: "flex", width: "50%", height: "auto" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ textAlign: "center" }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
