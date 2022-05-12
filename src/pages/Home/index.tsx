import Header from '../../components/Header';
import Timeline from '../../components/Timeline';
import useHome from '../../hooks/useHomeLaunches';

import {
  AppContainer,
  AppColumns,
} from './styles';

export default function Home() {
  const { home, loading } = useHome();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AppContainer>
      <Header nextLaunch={home?.nextLaunch} />
      <AppColumns>
        <Timeline
          title="Upcoming Launches"
          data={home?.upcomingLaunches}
        />
        <Timeline
          title="Past Launches"
          data={home?.pastLaunches}
        />
      </AppColumns>
    </AppContainer>
  );
}
