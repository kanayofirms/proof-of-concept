import React from "react";

const BigInput = ({ 
    label, 
    htmlFor, 
    type, 
    name, 
    autocomplete, 
    placeholder, 
    value, 
    onChange, 
    err, 
    register, 
}) => {
    return (
    <dir className={styles.container}>
        <label htmlFor={htmlFor}>{label}</label>
        <div className={styles.inputWrapper}>
            <input
                type={type}
                name={name}
                autoComplete={autocomplete}
                placeholder={placeholder}
                onChange={onChange}
                {...register}
                />
        </div>
        <span className={styles.err}>{err}</span>
    </dir>
    );
};

BigInput.defaultProps = {
    label: "Email",
    htmlFor: undefined,
    type: undefined,
    autocomplete: undefined,
    placeholder: "Enter your Email",
    value: "",
    onChange: () => {},
    err: "",
};

export default BigInput; 
