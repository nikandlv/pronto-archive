import React from 'react'
import Comments from './Comments'
import { Card, CardContent, makeStyles } from '@material-ui/core'
import Attachments from '../../Components/Attachments'
import MetaData from '../../Components/MetaData'

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
            <MetaData />
            <Attachments />
            <Comments />
        </div>
    )
}