import TimelineModel from '../../models/Timeline';

import TimelineItem from '../TimelineItem';

import {
  TimelineContainer,
  TimelineList,
  TimelineTitle
} from "./styles";

export default function Timeline({ title, data } : TimelineModel) {
  return (
    <TimelineContainer>
      <TimelineTitle>{ title }</TimelineTitle>
      <TimelineList>
        { data.map(item => (
          <TimelineItem { ...item } />
        )) }  
      </TimelineList>
    </TimelineContainer>
  );
}
