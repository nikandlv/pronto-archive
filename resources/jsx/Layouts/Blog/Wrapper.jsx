import React from 'react'
import Topbar from './Topbar'
import Grid from '@material-ui/core/Grid'
export default function Wrapper(props) {
    return (
        <section>
            <Topbar />
            <Grid container spacing={2}>
                <Grid xs={12} lg={4} xlg={3} item>
                    
                </Grid>
                <Grid xs={12} lg={8} xlg={9} item>
                    
                </Grid>
            </Grid>
        </section>
    )
}