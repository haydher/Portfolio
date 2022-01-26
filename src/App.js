import { ThemeProvider } from "styled-components";
import { GlobalComponents } from "./components/styles/GlobalComponents";
import { darkTheme } from "./components/styles/Theme";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";

const App = () => {
 return (
  <ThemeProvider theme={darkTheme}>
   <GlobalComponents />
   <div className="App">
    <Nav />
    <Main />
   </div>
  </ThemeProvider>
 );
};

export default App;
