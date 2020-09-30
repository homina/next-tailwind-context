import React, { useState } from "react";
import { UserContext, User } from "../../context";

interface ILayoutProps {
    children: React.ReactNode;
}

const LayoutDefault: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
    const [context, setContext] = useState<User>(
        new User({ token: process.browser ? localStorage.getItem("token") : "" }),
    );
    return <UserContext.Provider value={{ context, setContext }}>{children}</UserContext.Provider>;
};

export default LayoutDefault;
