import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    paper: {
        borderRadius: 16
    }
})

export default function GithubWidget() {
    const styles = useStyles()
    return (
        <Paper className={styles.paper}>
            a
        </Paper>
    )
}