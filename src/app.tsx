import * as React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme } from 'theme/theme'
import { ErrorBoundary } from 'components/ErrorBoundary/errorboundary'
import { Interface } from 'components/interface'
import { HashRouter as Router } from "react-router-dom";

require("./firebase")

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #app { height: 100%; }
`

export const App = () => <>
    <Reset />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
        <ErrorBoundary>
            <Router>
                <Interface />
            </Router>
        </ErrorBoundary>
    </ThemeProvider>
</>
