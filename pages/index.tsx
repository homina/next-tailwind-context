import React, { useState, useContext } from "react";
import { login } from "../services/auth";
import { UserContext } from "../context";

export default function Home() {
    const { context, setContext } = useContext(UserContext);
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("test");

    const handleSubmit = async (email: string, password: string) => {
        const data = await login({ value: email, password: password });
        if (data.data) {
            setContext((prevContext) => {
                return prevContext.login(data.data.token);
            });
        }
    };

    const handleLogout = async () => {
        setContext((prevContext) => {
            return prevContext.logout();
        });
    };

    if (context?.token) {
        return (
            <div>
                <h1>Udah login</h1>
                <button onClick={() => handleLogout()}>logout</button>
            </div>
        );
    }

    return (
        <div>
            <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => handleSubmit(email, password)}>submit</button>
        </div>
    );
}
