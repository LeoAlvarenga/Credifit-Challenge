import React from "react";
import Main from "./pages/Main";
import GlobalStyle from "./styles/global";
import { JsonDataProvider } from "./hooks/useJsonData";

const App: React.FC = () => {
  return (
    <>
      <JsonDataProvider>
        <Main />
      </JsonDataProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
