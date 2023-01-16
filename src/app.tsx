import * as React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { theme } from 'theme/theme'
import { ErrorBoundary } from 'components/ErrorBoundary/errorboundary'
import { Game } from 'components/Game/game'

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #app { height: 100%; }
`

export const App = () => <>
    <Reset />
    <GlobalStyles />
    <ThemeProvider theme={theme}>
        <ErrorBoundary>
            <Game />
        </ErrorBoundary>
    </ThemeProvider>
</>
