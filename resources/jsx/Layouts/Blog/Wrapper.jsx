import React from 'react'
import Topbar from './Topbar'
import Grid from '@material-ui/core/Grid'
import Sidebar from './Sidebar'
import { Box } from '@material-ui/core'

export default function Wrapper(props) {
    return (
        <section>
            <Box m={1}>
            <Topbar />
                <Grid container spacing={2}>
                    <Grid xs={12} lg={3} xlg={4} item>
                        <Sidebar />
                    </Grid>
                    <Grid xs={12} lg={9} xlg={8} item>
                        {props.children}
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}