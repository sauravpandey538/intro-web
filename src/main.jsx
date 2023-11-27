import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider resetCSS={true}>
    <App />
  </ChakraProvider>
);
