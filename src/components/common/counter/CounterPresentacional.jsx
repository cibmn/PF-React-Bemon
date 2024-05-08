import { Button } from "@mui/material";

const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div style={{ marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
      <Button onClick={restar} variant="outlined" size="small" style={{ minWidth: "30px", minHeight: "30px", fontSize: "14px" }}>
        -
      </Button>
      <h2 style={{ margin: "0 10px" }}>{contador}</h2>
      <Button onClick={sumar} variant="outlined" size="small" style={{ minWidth: "30px", minHeight: "30px", fontSize: "14px" }}>
        +
      </Button>
      <div style={{ marginLeft: "20px" }}>
        <Button onClick={() => onAdd(contador)} variant="contained">
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default CounterPresentacional;
