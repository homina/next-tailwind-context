import React, { createContext } from "react";

interface iUserContext {
    context: User;
    setContext: React.Dispatch<React.SetStateAction<User>> | (() => void);
}

interface iUserConstructorProps {
    token?: string | null;
    name?: string;
}

export class User {
    token: string | null;
    name: string;

    constructor({ token = "", name = "" }: iUserConstructorProps) {
        this.token = token;
        this.name = name;
    }

    login(token: string): User {
        localStorage.setItem("token", token);
        return new User({ token });
    }

    logout(): User {
        localStorage.removeItem("token");
        return new User({});
    }
}

export const UserContext = createContext<iUserContext>({
    context: new User({}),
    setContext: () => null,
});
