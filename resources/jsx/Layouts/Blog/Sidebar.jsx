import React from 'react'
import Searchbar from './Searchbar'
import { List, ListItem, ListItemIcon, ListItemText, Paper, makeStyles } from '@material-ui/core'
import HouseIcon from '@material-ui/icons/HouseOutlined';
import CategoryIcon from '@material-ui/icons/CategoryOutlined';
import WorkIcon from '@material-ui/icons/WorkOutlineOutlined';
import SubjectIcon from '@material-ui/icons/SubjectOutlined';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import Gutter from '../../Components/Gutter';
import AboutCard from '../../Components/AboutCard';

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
                        <HouseIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resume"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MessageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact me"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SubjectIcon />
                    </ListItemIcon>
                    <ListItemText primary="About"/>
                </ListItem>
            </List>
            </Paper>
            <AboutCard />
        </section>
    )
}