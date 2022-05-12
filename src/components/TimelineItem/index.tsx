import Launch from '../../models/Launch';

import {
  TimelineItemContainer,
  TimelineItemDate,
  TimelineItemName,
  TimelineItemHour,
  TimelineItemPatch,
  TimelineItemCircle,
  TimelineItemPathDefault,
} from './styles';

export default function TimelineItem({ name, date, hour, patch, success }: Launch) {
  return (
    <TimelineItemContainer>
      <TimelineItemDate>{ date }</TimelineItemDate>
      <TimelineItemCircle success={success} />
      
      {
        patch ? (
          <TimelineItemPatch src={patch} alt="Launch Icon" width={60} height={60} />
        ) : (
          <TimelineItemPathDefault>no image</TimelineItemPathDefault>
        )
      }
      
      <TimelineItemName>
        { name }
        <br />
        <TimelineItemHour>{ hour }</TimelineItemHour>
      </TimelineItemName>
    </TimelineItemContainer>
  );
}
