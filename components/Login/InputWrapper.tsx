import { ReactHTMLElement, ReactNode } from "react";
import styles from "../../styles/InputWrapper.module.css"

interface IInputWrapperProps {
  placeholder: string,
  name: string,
  register: any;
  errors: any;
}

export default function InputWrapper({placeholder, name, register, errors}: IInputWrapperProps) {
  return (
    <div className={styles.inputWrapper}>
      <input 
        className={styles.input}
        placeholder={placeholder}
        {...register(name)}
      />
      { typeof errors[name]?.message
        ? <p className={styles.error}>{errors[name]?.message}</p>
        : null
      }
    </div>
  )
} 
