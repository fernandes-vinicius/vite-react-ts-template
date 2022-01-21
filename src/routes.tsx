import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '@/pages/Home';

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
    </ReactDomRoutes>
  );
}

export default Routes;
