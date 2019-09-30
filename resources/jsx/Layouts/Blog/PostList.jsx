import React from 'react'
import { IconButton, makeStyles, Typography, Divider } from '@material-ui/core'

import ViewDay from '@material-ui/icons/ViewDayOutlined'
import ViewWeek from '@material-ui/icons/AmpStoriesOutlined'
import GridIcon from '@material-ui/icons/DashboardOutlined'
import LabelIcon from '@material-ui/icons/LabelOutlined'
import CategoryIcon from '@material-ui/icons/CategoryOutlined'
import Explore from '@material-ui/icons/ExploreOutlined'

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center'
    },
    push: {
        flexGrow: 1
    }
})

export default function PostList() {
    const styles = useStyles()
    return (
        <section>
            <div className={styles.header}>
                <IconButton>
                    <Explore />
                </IconButton>
                <IconButton>
                    <CategoryIcon />
                </IconButton>
                <IconButton>
                    <LabelIcon />
                </IconButton>
                <div className={styles.push} />
                <IconButton>
                    <ViewWeek />
                </IconButton>
                <IconButton>
                    <ViewDay />
                </IconButton>
                <IconButton>
                    <GridIcon />
                </IconButton>
            </div>
            <Divider />
        </section>
    )
}