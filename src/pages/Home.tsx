import { Button, Typography } from '@mui/material';

import { Head } from '@/components/Head';
import { useAppTheme } from '@/hooks/useAppTheme';

export function Home() {
  const appTheme = useAppTheme();

  return (
    <>
      <Head title="Home" />
      <Typography sx={{ mb: 5 }}>Hi! Welcome to Home Page :)</Typography>
      <Button variant="contained" onClick={appTheme.toggleColorMode}>
        Toggle Color Mode
      </Button>
    </>
  );
}
