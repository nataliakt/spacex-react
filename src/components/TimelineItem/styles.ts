import styled from "styled-components";

export const TimelineItemContainer = styled.li`
  &::before {
    content: "";
    position: absolute;
    z-index: 1;

    width: 4px;

    top: 0;
    bottom: 0;
    left: 85px;

    background-color: rgba(255, 255, 255, 0.5);
  }

  position: relative;
  flex-grow: 1;
  max-width: 512px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  padding: 12px 0;
`;

export const TimelineItemDate = styled.p`
  width: 60px;

  font-size: 10px;
  line-height: 15px;
  text-align: right; 

  margin-right: 12px;
`;

export const TimelineItemCircle = styled.div<{ success: boolean | null}>`
  z-index: 2;

  width: 30px;
  height: 30px;

  border-radius: 50%;
  background-color: ${({ success }) => success ? 
    '#138B00' :
    success === null ? '#CFCFCF' : '#AD0000'
  };
`;

export const TimelineItemPatch = styled.img`
  margin: 0 12px;
`;

export const TimelineItemPathDefault = styled.p`
  display: flex;
  align-items: center;

  width: 60px;
  height: 60px;

  font-size: 8px;
  line-height: 12px;
  text-align: center;
  
  margin: 0 12px;

  border: 1px solid #fff;
`;

export const TimelineItemName = styled.h3`
  width: calc(100% - 60px - 60px - 12px * 3 - 30px);

  font-size: 12px;
  line-height: 17px;
`;

export const TimelineItemHour = styled.span`
  font-size: 10px;
  line-height: 15px;
`;
