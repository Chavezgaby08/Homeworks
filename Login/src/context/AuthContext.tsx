import { createContext, useState } from "react";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {

  const [user, setUser] = useState<string | null>(null);

  const login = (email: string, password: string): boolean => {

    if (email === "user@mail.com" && password === "123") {
      setUser(email);
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};