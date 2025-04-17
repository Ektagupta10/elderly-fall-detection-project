import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    name: string,
    email: string,
    phone: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5002/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.message) {
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data)); // ✅ store user on refresh
          }
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:5002/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");

    localStorage.setItem("token", data.token);

    const meRes = await fetch("http://localhost:5002/api/auth/me", {
      headers: { Authorization: `Bearer ${data.token}` },
    });

    const userData = await meRes.json();
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ store user

    alert("Successfully Logged In!");
    navigate("/home");
  };

  const signup = async (
    name: string,
    email: string,
    phone: string,
    password: string
  ) => {
    const res = await fetch("http://localhost:5002/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Signup failed");

    localStorage.setItem("token", data.token);

    const meRes = await fetch("http://localhost:5002/api/auth/me", {
      headers: { Authorization: `Bearer ${data.token}` },
    });

    const userData = await meRes.json();
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ store user

    alert("Account created successfully!");
    navigate("/home");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // ✅ remove user on logout
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
