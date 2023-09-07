'use client'
import React, { useState } from "react";
const Task6 = () => {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");
    const calculateStrength = (input) => {
        let score = 0;
        if (input.length < 8) return "Password should have atleast 8 digits or values"
        if (input.match(/[!@#$%^*&)(+_{}:;<>,.?~/-]/)) score += 2;
        if (input.match(/[A-Z]/)) score += 1;
        if (input.match(/[a-z]/)) score += 1;
        if (input.match(/[0-9]/)) score += 1;
        if (score === 0) return "Weak";
        if (score <= 2) return "Normal";
        if (score <= 4) return "Strong";
        return "Very Strong";};

        const handlePasswordChanger = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        const newStrength = calculateStrength(newPassword);
        setStrength(newStrength);};

        return (
        <div className=" flex justify-center text-white">
            <div>
                <h2>Password Strength Checker</h2>
                <input
                    className=" bg-slate-900 hover:bg-slate-800 rounded-xl p-2 h-10 my-2"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChanger} />
                    <div>
                    {password && (<p>Password Strength: <strong>{strength}</strong></p>)}
                </div>
            </div>
        </div>);
};
export default Task6;
