import React from 'react'
import { IJournal } from '../types'

import { Card, CardBody, CardHeader } from 'reactstrap'

interface JournalWithClick extends IJournal {
    onClick: any
}
const OldTile = (props: JournalWithClick) => {
    return (
        <div onClick={props.onClick}>
            <Card className="mt-2" >
                <CardHeader>{props.date.toDateString()}</CardHeader>
                <CardBody>
                    {props.heading}
                </CardBody>
            </Card >
        </div>
    )
}

export default OldTile