import React from "react";
import styled from "@emotion/styled";

const ResultadoCoizacion = styled.div`
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
  position: relative;
  border: 1px solid #26c6da;
`;

const Mensaje = styled.p`
  margin: 0;
  padding: 1rem;
  color: #00838f;
  text-transform: uppercase;
  font-weight: bold;
`;

const Resultado = ({ cotizacion }) => {
  return (
    <ResultadoCoizacion>
      <Mensaje>Total: ${cotizacion}</Mensaje>
    </ResultadoCoizacion>
  );
};

export default Resultado;
