import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
