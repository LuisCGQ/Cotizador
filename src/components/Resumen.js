import React, { Fragment, fragment } from "react";
import styled from "@emotion/styled";

import { primerMayuscula } from "../helper";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {primerMayuscula(datos.marca)}</li>
        <li>Plan: {primerMayuscula(datos.plan)} </li>
        <li>Año: {datos.year}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
