import { Button, Typography } from '@mui/material';

import Layout from '@/components/Layout';
import useThemeColorMode from '@/hooks/useThemeColorMode';

function Home() {
  const colorMode = useThemeColorMode();

  return (
    <Layout>
      <Typography sx={{ mb: 5 }}>Hi! Welcome to Home Page :)</Typography>
      <Button variant="contained" onClick={colorMode.toggleColorMode}>
        Toggle Color Mode
      </Button>
    </Layout>
  );
}

export default Home;
