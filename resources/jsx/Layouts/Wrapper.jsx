import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = {
    light: createMuiTheme({
        palette: {
            type: 'light'
        },  
    }),
    dark: createMuiTheme({
        palette: {
            type: 'dark'
        },  
    })
};
export default function Wrapper(props) {
    return (
        <ThemeProvider theme={theme.light}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}