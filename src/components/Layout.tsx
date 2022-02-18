import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export function Layout() {
  return (
    <StyledContainer maxWidth="sm">
      <Outlet />
    </StyledContainer>
  );
}
