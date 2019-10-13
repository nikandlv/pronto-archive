import React from 'react'
import { Paper, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    paper: {
        borderRadius: 16,
        marginTop: 16
    }
})

export default function GithubWidget() {
    const styles = useStyles()
    return (
        <Paper className={styles.paper}>
            <List>
                <ListItem>
                    <ListItemText primary="Pushed" />
                </ListItem>
            </List>
        </Paper>
    )
}