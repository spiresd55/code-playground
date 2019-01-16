import * as React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

const SourceList = ({source}) => {
    return(
        <Card>
            <CardContent>
                <Typography component="h5">{source.name}</Typography>
            </CardContent>
        </Card>
    );
};

export default SourceList;