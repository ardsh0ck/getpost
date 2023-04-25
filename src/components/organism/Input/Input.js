import React from "react";
import clsx from "clsx";
import styles from "./Input.module.scss";

const Input = ({
  type,
  name,
  value,
  onChangeHandle,
  id,
  required,
  min,
  max,
  accept,
  label,
  error,
  className
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className={clsx(styles.input, className, {
          [styles.inputRadio]: type === "radio",
          [styles.inputFile]: type === "file",
          [styles.inputHasError]: error
        })}
      >
        {type === "file" && (
          <span className={styles.inputFileButton}>Upload</span>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChangeHandle}
          id={id}
          required={required}
          minLength={min}
          maxLength={max}
          accept={accept}
          placeholder=" "
        />

        {type !== "file" && <span className={styles.inputLabel}>{label}</span>}
      </label>

      {error && <p className={styles.inputError}>{error}</p>}
    </>
  );
};

export default Input;
