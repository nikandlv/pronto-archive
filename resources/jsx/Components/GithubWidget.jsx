import React from 'react'
import { Paper, List, ListItem, ListItemText, Collapse, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ArrowDown from '@material-ui/icons/ExpandMoreOutlined'
import ArrowUp from '@material-ui/icons/ExpandLessOutlined'
import GithubIcon from './Icons/GithubIcon'
const useStyles = makeStyles({
    paper: {
        borderRadius: 16,
        marginTop: 16,
        padding: 0
    },
    expand: {
        justifyContent: 'center'
    },
    list: {
        padding: 0,
        borderRadius: 16
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
            <List className={styles.list}>
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
                    {
                        expand
                        ? <ArrowUp />
                        : <ArrowDown />
                    }
            </ListItem>
            </List>
        </Paper>
    )
}