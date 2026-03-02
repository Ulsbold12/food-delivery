"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  user: User | null;
  logout: () => void;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
};

type User = {
  _id: string;
  name: string;
  email: string;
};

type LoginRespoonse = {
  user: User;
  accessToken: string;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    const { data } = await api.post<LoginRespoonse>("/auth/login", {
      username,
      password,
    });

    const { user, accessToken } = data;

    localStorage.setItem("accessToken", accessToken);

    setUser(user);

    if (user.role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/");
    }

    router.push("/");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/login");
  };

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const { data } = await api.post("/auth/register", {
      username,
      email,
      password,
    });

    router.push("/login");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const fetchMe = async () => {
      try {
        const { data } = await api.get<{ user: User }>("/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUser(data.user);
      } catch {
        localStorage.removeItem("accessToken");
      }
    };
    fetchMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
