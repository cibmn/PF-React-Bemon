import { Button } from "@mui/material";

const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div style={{ marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
      <Button onClick={restar} variant="text" style={{  fontSize: "20px" }}>
        -
      </Button>
      <h2 style={{ margin: "5px" }}>{contador}</h2>
      <Button onClick={sumar} variant="text" style={{ fontSize: "20px" }}>
        +
      </Button>
      <div style={{ marginLeft: "20px" }}>
        <Button onClick={() => onAdd(contador)} variant="contained" style={{ backgroundColor:"red", minWidth: "8px", minHeight: "8px", fontSize: "20px"}} >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default CounterPresentacional;
