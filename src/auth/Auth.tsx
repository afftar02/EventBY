import { createContext, useContext, useEffect, useState } from 'react';
import { UserType } from 'types/user';

// import { loginUser, registerUser } from 'services/authService';
// import { getCurrentUser } from 'services/userService';
import { AuthContextType, AuthProps } from './types';

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

function Auth({ children }: AuthProps) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const login = async (/* data: LoginParams */) => {
    // await loginUser(data);
    setIsAuth(true);
    // await loadUser();
  };

  const register = async (/* data: RegisterParams */) => {
    // await registerUser(data);
    setIsAuth(true);
    // await loadUser();
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem('tokens');
  };

  // const loadUser = async () => {
  //   const userData = await getCurrentUser();
  //   setUser(userData);
  // };

  // const getUserName = () =>
  //   `${user?.name} ${user?.surname}` || user?.email || '';

  // const checkAuthenticated = useCallback(async () => {
  //   if (localStorage.getItem('tokens')) {
  //     try {
  //       await loadUser();
  //       setIsAuth(true);
  //     } catch (err) {
  //       logout();
  //     }
  //   }
  // }, []);

  useEffect(() => {
    // (async () => {
    //   await checkAuthenticated();
    //   setIsAuthChecked(true);
    // })();

    setIsAuthChecked(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        register,
        login,
        logout,
        user,
        // getUserName,
        // loadUser,
        // checkAuthenticated,
      }}
    >
      {isAuthChecked && children}
    </AuthContext.Provider>
  );
}

export default Auth;
