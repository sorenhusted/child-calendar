import React from 'react';

const TimelineItem = ({item}) => (
    <>
        <h3 className="vertical-timeline-element-title">{item.name}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.description}</h4>
        <div>
            
        </div>
    </>
);

export default TimelineItem;
