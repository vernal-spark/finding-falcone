import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import "./css/index.css";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        maxOrigin={1}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
