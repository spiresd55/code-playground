import * as React from 'react';
import SourceCard from './SourceCard';

const SourceList = ({sources, filter}) => {
    console.log('HERE ARE THE SOURCES IN COMPONENT' + sources);
    //TODO: Create source datatype
    sources = sources.filter((source: any) => {
       return source.name.indexOf(filter) != -1;
    });

    return(
       <div>
           Source List
           {sources.map(source => <SourceCard source={source}></SourceCard>)}
       </div>
    );
};

export default SourceList;