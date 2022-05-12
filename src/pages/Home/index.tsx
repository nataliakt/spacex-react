import Header from '../../components/Header';

import {
  AppContainer,
  AppColumns,
} from './styles';

export default function Home() {
  return (
    <AppContainer>
      <Header />
      <AppColumns>
        <p>Home</p>
        <p>Home</p>
      </AppColumns>
    </AppContainer>
  );
}
