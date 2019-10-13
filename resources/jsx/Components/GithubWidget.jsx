import React from 'react'
import { Paper, List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    paper: {
        borderRadius: 16,
        marginTop: 16
    }
})

export default function GithubWidget() {
    const styles = useStyles()
    const [expand,setExpand] = React.useState()
    return (
        <Paper className={styles.paper}>
            <List>
            <Collapse in={expand}>
            <ListItem>
                    <ListItemText primary="Pushed" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Pushed" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Pushed" />
                </ListItem>
            </Collapse>
            <ListItem button onClick={() => {
                setExpand(!expand)
            }}>
                <ListItemText primary={expand? 'Collapse': 'Expand'} />
            </ListItem>
            </List>
        </Paper>
    )
}