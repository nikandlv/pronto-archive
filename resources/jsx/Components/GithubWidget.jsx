import React from 'react'
import { Paper, List, ListItem, ListItemText, Collapse, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ArrowDown from '@material-ui/icons/ExpandMoreOutlined'
import ArrowUp from '@material-ui/icons/ExpandLessOutlined'
import GithubIcon from './Icons/GithubIcon'
const useStyles = makeStyles({
    paper: {
        borderRadius: 16,
        marginTop: 16
    },
    expand: {
        justifyContent: 'center'
    }
})

export default function GithubWidget() {
    const styles = useStyles()
    const [expand,setExpand] = React.useState()
    return (
        <Paper className={styles.paper}>
            <ListItem>
            <IconButton>
            <GithubIcon />
            </IconButton>
                    <ListItemText primary="Github activity" />
                </ListItem>
            <List>
            <Collapse in={expand} collapsedHeight='160px'>
                <ListItem button>
                    <ListItemText primary="Pushed" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Pushed" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Pushed" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Pushed" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Pushed" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Pushed" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Pushed" />
                </ListItem>
            </Collapse>
            <ListItem className={styles.expand} button onClick={() => {
                setExpand(!expand)
            }}>
                <IconButton>
                    {
                        expand
                        ? <ArrowUp />
                        : <ArrowDown />
                    }
                </IconButton>
            </ListItem>
            </List>
        </Paper>
    )
}