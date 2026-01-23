"use client";

import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type AuthContextType = {
  user: User | null;
};

type User = {
  _id: string;
  name: string;
  email: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    const { data } = await api.post("/auth/login", {
      username,
      password,
    });

    const { user } = data;

    setUser(user);
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    const { data } = await api.post("/auth/register", {
      username,
      email,
      password,
    });

    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
