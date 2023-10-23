import React from 'react'
import { useState } from 'react';

const ConfirmPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateForm = () => password === confirmPassword;

    return (
        <div className='container'>
            <h3 className='header'>React Js Confirm Password Validation</h3>
            <div>
                <p className='label'>Password</p>
                <input
                    className='password-input'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='label'>Confirm Password</p>
                <input
                    className='confirm-password-input'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}

                />
                {confirmPassword && (
                    <p
                        className='validation-message'
                        style={{ color: validateForm() ? "green" : "red" }}
                    >
                        {validateForm() ? "Password Match" : "Password Does not Match"}
                    </p>

                )}
            </div>
            </div>
          )
          
          }

            export default ConfirmPassword;