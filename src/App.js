import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/storeIndex";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { AuthProvider, useAuthContext } from "./context/authContext";

const NotLoginedRoute = ({ children }) => {
  const { isLogin } = useAuthContext();
  if (!isLogin()) {
    return <Navigate to="/login" />;
  }
  return children;
};

const LoginedRoute = ({ children }) => {
  const { isLogin } = useAuthContext();
  if (isLogin()) {
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <NotLoginedRoute>
                  <MainPage />
                </NotLoginedRoute>
              }
            />
            <Route
              path="/registration"
              element={
                <LoginedRoute>
                  <RegistrationPage />
                </LoginedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <LoginedRoute>
                  <LoginPage />
                </LoginedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
