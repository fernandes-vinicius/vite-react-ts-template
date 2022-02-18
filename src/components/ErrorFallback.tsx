import { FallbackProps } from 'react-error-boundary';

import { Box, Button } from '@mui/material';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Box role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Box>
  );
}
