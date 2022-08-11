import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from "react";
import { User } from "../types/api/user";

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

type LoginUser = User & { isAdmin: boolean };

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  const value = useMemo(() => ({ loginUser, setLoginUser }), [loginUser, setLoginUser]);
  return (
    <LoginUserContext.Provider value={value}>
      {children}
    </LoginUserContext.Provider>
  )
}