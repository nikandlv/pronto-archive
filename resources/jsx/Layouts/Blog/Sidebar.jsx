import React from 'react'
import Searchbar from './Searchbar'
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Paper, makeStyles } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Gutter from '../../Components/Gutter';

const useStyles = makeStyles({
    menu: {
        borderRadius: 24,
        overflowX: 'hidden'
    }
})

export default function Sidebar() {
    const classes = useStyles()
    let open = true
    return (
        <section>
            <Searchbar />
            <Gutter size="sm" />
            <Paper className={classes.menu}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader">
                <ListItem button>
                    <ListItemIcon>
                    <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItem>
                    </List>
                </Collapse>
            </List>
            </Paper>
        </section>
    )
}