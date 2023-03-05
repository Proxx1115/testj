import * as React from "react";
import LoginForm from "./Login";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  );
}
export default App;
