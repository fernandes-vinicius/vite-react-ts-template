import { ReactNode } from 'react';

import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

type LayoutProps = {
  children: ReactNode;
};

const StyledContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

function Layout(props: LayoutProps) {
  const { children } = props;

  return <StyledContainer maxWidth="sm">{children}</StyledContainer>;
}

export default Layout;
