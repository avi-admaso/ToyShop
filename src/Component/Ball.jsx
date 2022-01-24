import React, { useContext } from "react";
import { clientType } from "../Component/ToysContext";

function Ball() {
  const getInfo = useContext(clientType);
  return <section> {getInfo}</section>;
}

export default Ball;
