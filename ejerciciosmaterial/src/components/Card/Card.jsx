import * as React from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card as MUICard,
} from "@mui/material/";
import Link from "../Link";

export default function Card({ image, title, description, id }) {
  return (
    <Link to={`${id}`}>
      <MUICard sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </MUICard>
    </Link>
  );
}
