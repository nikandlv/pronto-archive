import React from 'react'
import { IconButton, makeStyles, Divider, Grid, Button, Chip } from '@material-ui/core'

import Amber from '@material-ui/core/colors/amber'
import Blue from '@material-ui/core/colors/blue'
import Red from '@material-ui/core/colors/red'
import ViewDay from '@material-ui/icons/ViewDayOutlined'
import ViewWeek from '@material-ui/icons/AmpStoriesOutlined'
import DeleteIcon from '@material-ui/icons/ClearOutlined'
import GridIcon from '@material-ui/icons/DashboardOutlined'
import LabelIcon from '@material-ui/icons/LabelOutlined'
import CategoryIcon from '@material-ui/icons/CategoryOutlined'
import Explore from '@material-ui/icons/ExploreOutlined'
import PostPreview from '../../Components/PostPreview'
import withDynamic from '../../Data/withDynamic'
import { setLanguage, setSearch } from '../../Data/Actions/ApplicationActions'

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
    chip: {
        margin: 3,
        '&.explore': {
            backgroundColor: Amber[100],
            '&:hover,&:active,&:focus': {
                backgroundColor: Amber[300],
            }
        },
        '&.category': {
            backgroundColor: Blue[100],
            '&:hover,&:active,&:focus': {
                backgroundColor: Blue[300],
            }
        },
        '&.tag': {
            backgroundColor: Red[100],
            '&:hover,&:active,&:focus': {
                backgroundColor: Red[300],
            }
        }
    },
    
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
                    : <Chip className={`${styles.chip} explore`} icon={<Explore />} label={reducer.search} deleteIcon={<DeleteIcon />} onDelete={() => {
                        props.setSearch('')   
                    }}/>
                }
                {
                    reducer.category.id === 0
                    ? (
                        <IconButton>
                            <CategoryIcon />
                        </IconButton>
                    )
                    : <Chip className={`${styles.chip} category`} icon={<CategoryIcon />} label={reducer.category.title} deleteIcon={<DeleteIcon />} onDelete={() => {

                    }}/>
                }
                {
                    reducer.tag === ""
                    ? (
                        <IconButton>
                            <LabelIcon />
                        </IconButton>
                    )
                    : <Chip className={`${styles.chip} tag`} icon={<LabelIcon />} label={reducer.tag} deleteIcon={<DeleteIcon />} onDelete={() => {

                    }}/>
                }                
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

export default withDynamic(PostList).injectReducer('ApplicationReducer').injectAction('setSearch',setSearch).build()