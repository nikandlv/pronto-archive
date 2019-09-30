import React from 'react'
import { IconButton } from '@material-ui/core'

import ViewDay from '@material-ui/icons/ViewDayOutlined'

export default function PostList() {
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