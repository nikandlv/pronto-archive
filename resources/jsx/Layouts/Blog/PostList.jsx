import React from 'react'
import { IconButton, makeStyles, Divider, Grid, Button, Chip } from '@material-ui/core'

import Amber from '@material-ui/core/colors/amber'
import ViewDay from '@material-ui/icons/ViewDayOutlined'
import ViewWeek from '@material-ui/icons/AmpStoriesOutlined'
import GridIcon from '@material-ui/icons/DashboardOutlined'
import LabelIcon from '@material-ui/icons/LabelOutlined'
import CategoryIcon from '@material-ui/icons/CategoryOutlined'
import Explore from '@material-ui/icons/ExploreOutlined'
import PostPreview from '../../Components/PostPreview'
import withDynamic from '../../Data/withDynamic'
import { setLanguage } from '../../Data/Actions/ApplicationActions'

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
    },
    exploreChip: {
        backgroundColor: Amber[500],
        '&:hover,&:active,&:focus': {
            backgroundColor: Amber[600],
        }
    }
})

function PostList(props) {
    const styles = useStyles()
    const posts = [{},{}];
    const reducer = props.ApplicationReducer || {}

    return (
        <section>
            <div className={styles.header}>
                {
                    reducer.search === ""
                    ? (
                        <IconButton>
                            <Explore />
                        </IconButton>
                    )
                    : <Chip className={styles.exploreChip} icon={<Explore />} label={reducer.search} onDelete={() => {

                    }}/>
                }
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

export default withDynamic(PostList).injectReducer('ApplicationReducer').injectAction('setLanguage',setLanguage).build()