import React from "react";
export const clientType = React.createContext();
function MakingProvider(props) {
  return (
    <clientType.Provider value="Good one">
      <div className="App">{props.theToy}</div>
    </clientType.Provider>
  );
}
export default MakingProvider;
