import React from 'react'
import { IconButton, makeStyles, Typography, Divider } from '@material-ui/core'

import ViewDay from '@material-ui/icons/ViewDayOutlined'
import ViewWeek from '@material-ui/icons/AmpStoriesOutlined'
import GridIcon from '@material-ui/icons/DashboardOutlined'

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