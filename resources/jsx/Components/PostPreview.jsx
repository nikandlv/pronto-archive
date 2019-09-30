import React from 'react'
import { Card, CardContent, makeStyles, CardHeader, CardMedia, Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
    card: {
        borderRadius: 16
    },
    media: {
    },
    img: {
        visibility: 'hidden'
    }
})

export default function PostPreview() {
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardHeader 
                avatar={
                    <Avatar src={'/img/user.png'} />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="How to get over something simple"
                    subheader="October 1, 2019"
            />
             <CardMedia
                className={styles.media}
                image={'https://images.unsplash.com/photo-1569844514393-4e409050d5d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}
                title="Paella dish"
            >
                <img src={'https://images.unsplash.com/photo-1569844514393-4e409050d5d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} className={styles.img} />
                </CardMedia>
            <CardContent>
                Hello!
            </CardContent>
        </Card>
    )
}