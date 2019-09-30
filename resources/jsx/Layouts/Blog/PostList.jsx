import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'

import ViewDay from '@material-ui/icons/ViewDayOutlined'

const useStyles = makeStyles({
    header: {

    }
})

export default function PostList() {
    const styles = useStyles()
    return (
        <section>
            <div>
                <IconButton>
                    <ViewDay/>
                </IconButton>
            </div>
        </section>
    )
}