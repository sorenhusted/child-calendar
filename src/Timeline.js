import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { TimeLineContext } from './App';
import TimelineItem from './TimelineItem';
import { ReactComponent as IconSyringe } from './iconSyringe.svg';

import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {

    const items = useContext(TimeLineContext);
    
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
            />
            {
                items.map(item => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={item.when.months ? `${item.when.months} måneder` : `${item.when.years} år`}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<IconSyringe />}
                    >
                        <TimelineItem key={item.name} item={item} />
                    </VerticalTimelineElement>
                ))
            }
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
            />
        </VerticalTimeline>
)};

export default Timeline;
