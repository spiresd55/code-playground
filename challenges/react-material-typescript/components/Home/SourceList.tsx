import * as React from 'react';
import SourceCard from './SourceCard';
import {Source} from "./Source";
import Grid from "@material-ui/core/Grid";

const SourceList = ({sources, filter}) => {
    sources = sources.filter((source: Source) => {
       return source.name.indexOf(filter) != -1;
    });

    return(
       <Grid container spacing={8} justify={'flex-start'} direction={'row'}>
           <Grid item xs={12}><h2>Add Connection</h2></Grid>
           {sources.map( (source,index) => <Grid item xs={6} key={`source_${index}`}><SourceCard source={source}></SourceCard></Grid>)}
       </Grid>
    );
};

export default SourceList;