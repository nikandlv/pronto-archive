import React from 'react'
import { Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        borderRadius: 16
    }
})

export default function PostPreview() {
    const styles = useStyles()
    return (
        <Card className={styles.card}>
            <CardContent>
                Hello!
            </CardContent>
        </Card>
    )
}