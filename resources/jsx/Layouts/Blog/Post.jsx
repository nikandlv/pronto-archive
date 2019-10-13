import React from 'react'
import Comments from './Comments'
import { Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    paper: {
        borderRadius: 16
    }
})

export default function Post() {
    const styles = useStyles()
    return (
        <div>
            <Card className={styles.paper}>
                <CardContent>
                    abcsssssssssssssssss
                </CardContent>
            </Card>
            <Comments />
        </div>
    )
}