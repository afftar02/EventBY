import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { PATHS } from 'constants/paths';
import Authorization from 'pages/Authorization';
import Home from 'pages/Home';
import AuthorizedRoute from 'utils/AuthorizedRoute';
import UnauthorizedRoute from 'utils/UnauthorizedRoute';

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="*" element={<Navigate to={PATHS.home} />} />
      <Route
        path={PATHS.signIn}
        element={
          <UnauthorizedRoute>
            <Authorization />
          </UnauthorizedRoute>
        }
      />
      <Route
        path={PATHS.home}
        element={
          <AuthorizedRoute>
            <Home />
          </AuthorizedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
