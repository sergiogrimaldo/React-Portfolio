  import GlobalStyle from "./GlobalStyle"
  import { ThemeProvider } from "styled-components"
  import { lightTheme } from "./components/Themes.js"
function App() {
  return <>

  <GlobalStyle/>

    <ThemeProvider theme={lightTheme}>
    App File total
    </ThemeProvider>

    
    </>
    
}

export default App

