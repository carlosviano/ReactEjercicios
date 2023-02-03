import { Grid, Paper, Typography } from "@mui/material";

export default function CharacterDetailView({ character }) {
  return (
    <Grid container>
      {character ? (
        <>
          <Grid item xs={12} md={2.5}>
            <Paper
              elevation={2}
              sx={{
                backgroundImage: `url(${character.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: 400,
              }}
            ></Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6">Nombre: {character.name}</Typography>
            <Typography variant="h6">Estado: {character.status}</Typography>
            <Typography variant="h6">Genero: {character.gender}</Typography>
            <Typography variant="h6">Especie: {character.species}</Typography>
            <Typography variant="h6">
              Origen: {character.origin.name}
            </Typography>
            <Typography variant="h6">
              Lugar de residencia: {character.location.name}
            </Typography>
          </Grid>
        </>
      ) : (
        <p>cargando personaje</p>
      )}
    </Grid>
  );
}
