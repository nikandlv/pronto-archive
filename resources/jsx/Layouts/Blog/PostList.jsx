import React from 'react'
import { IconButton, makeStyles, Typography } from '@material-ui/core'

import ViewDay from '@material-ui/icons/ViewDayOutlined'

const useStyles = makeStyles({
    header: {
        display: 'flex'
    },
    title: {
        flexGrow: 1
    }
})

export default function PostList() {
    const styles = useStyles()
    return (
        <section>
            <div className={styles.header}>
                <Typography variant="h5" className={styles.title}>
                    Post list
                </Typography>
                <IconButton>
                    <ViewDay/>
                </IconButton>
            </div>
        </section>
    )
}