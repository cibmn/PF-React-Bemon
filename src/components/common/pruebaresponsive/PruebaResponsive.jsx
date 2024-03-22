import {Grid} from '@mui/material/';


const pruebaresponsive = () => {
  return (
    <div>
        <Grid container>
            <Grid item sx={{backgroundColor: {xs:"red"; sm:"blue"} }} xs={12} Sms={6}>
                <h2>Caja 1</h2></Grid>
            <Grid item sx={{backgroundColor:"red", padding: {xs: 20x; sm: 120px} }} xs={12} Sms={6}>
                <h2>Caja 1</h2></Grid>

    <Typography variant="h1" align="center">Caja 5</Typography>

            <Grid item sx={{backgroundColor:"red"}} xs={12} Sms={6}>
                <h2>Caja 1</h2></Grid>
        </Grid>
    </div>
  )
}

export default pruebaresponsive
