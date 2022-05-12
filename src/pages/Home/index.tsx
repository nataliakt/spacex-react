import Header from '../../components/Header';
import Timeline from '../../components/Timeline';

import {
  AppContainer,
  AppColumns,
} from './styles';

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <AppColumns>
        <Timeline
          title="Timeline"
          data={[
            {
              id: 1,
              name: 'Launch 1',
              date: '04 jun 2022',
              hour: '22:30',
              success: null,
              patch: 'https://imgur.com/BrW201S.png',
            },
            {
              id: 1,
              name: 'Launch 1',
              date: '04 jun 2022',
              hour: '22:30',
              success: null,
              patch: 'https://imgur.com/BrW201S.png',
            },
          ]}
        />
        <Timeline
          title="Timeline"
          data={[
            {
              id: 1,
              name: 'Launch 1',
              date: '04 jun 2022',
              hour: '22:30',
              success: true,
              patch: null,
            },
            {
              id: 1,
              name: 'Launch 1',
              date: '04 jun 2022',
              hour: '22:30',
              success: true,
              patch: 'https://imgur.com/BrW201S.png',
            },
          ]}
        />
      </AppColumns>
    </AppContainer>
  );
}
