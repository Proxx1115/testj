import * as React from "react";
// import { useNavigate } from "react-router-dom";

import LoginForm from "./Login";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();

  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
