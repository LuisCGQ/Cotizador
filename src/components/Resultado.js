import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <Mensaje>
            Total: <span>${cotizacion}</span>
          </Mensaje>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCoizacion>
  );
};

Resultado.propTypes = {
  cotizacion: PropTypes.string.isRequired,
};

export default Resultado;
