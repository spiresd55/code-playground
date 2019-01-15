import * as React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';

const SourceList = ({source}) => {
    console.log('HERE IS THE SOURCE IN THE COMPONENT' + source);
    return(
        <Card>
            <CardContent>
                <Typography component="h5">{source.name}</Typography>
            </CardContent>
        </Card>
    );
};

export default SourceList;