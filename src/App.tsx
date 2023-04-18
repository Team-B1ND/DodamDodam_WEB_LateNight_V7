import React from "react";
import Providers from "./components/common/Providers";
import Router from "./router/Router";

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;
