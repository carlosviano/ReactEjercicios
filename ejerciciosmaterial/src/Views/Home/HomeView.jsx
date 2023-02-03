import { Typography, Grid } from "@mui/material";
import Card from "../../components/Card";

export default function HomeView({ characters }) {
  return (
    <>
      <Grid container spacing={2}>
        {characters ? (
          characters.map((character) => (
            <Grid item key={character.id} xs={12} sm={6} md={3}>
              <Card
                id={character.id}
                title={character.name}
                image={character.image}
                description={character.name}
              />
            </Grid>
          ))
        ) : (
          <Typography> No hay personajes para mostrar</Typography>
        )}
      </Grid>
    </>
  );
}
