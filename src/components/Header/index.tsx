import HeaderModel from '../../models/Header';

import {
  HeaderContainer,
  HeaderLogo,
  HeaderText
} from './styles';

import logo from '../../assets/logo.png';

export default function Header({ nextLaunch }: HeaderModel) {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} width={92} height={92} alt="Pixel rocket"/>
      <HeaderText>
        Next Launch: {nextLaunch?.name}
        <br />
        <br />
        In x days, y hours and z minutes
      </HeaderText>
    </HeaderContainer>
  );
}
