import React from 'react'
import { IconButton, makeStyles, Divider, Grid } from '@material-ui/core'

import ViewDay from '@material-ui/icons/ViewDayOutlined'
import ViewWeek from '@material-ui/icons/AmpStoriesOutlined'
import GridIcon from '@material-ui/icons/DashboardOutlined'
import LabelIcon from '@material-ui/icons/LabelOutlined'
import CategoryIcon from '@material-ui/icons/CategoryOutlined'
import Explore from '@material-ui/icons/ExploreOutlined'
import PostPreview from '../../Components/PostPreview'

const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center'
    },
    push: {
        flexGrow: 1
    },
    container: {
        marginTop: 16
    }
})

export default function PostList() {
    const styles = useStyles()
    const posts = [{},{}];
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
            <Divider/>
            <Grid container className={styles.container} spacing={2}>
                {
                    posts.map((post,key) => {
                        return (
                            <Grid item xs={12} md={6} key={key}>
                                <PostPreview />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </section>
    )
}