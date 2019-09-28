import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
export default function Wrapper(props) {
    return (
        <div>
            <CssBaseline />
            {props.children}
        </div>
    )
}