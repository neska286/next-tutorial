"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "../../app/contact/contact.module.css";
import Button from "../Button";
import { ContactData } from "@/types/User";
const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [state, setState] = useState<ContactData>(initialState);

  function handleInput(event: ChangeEvent< HTMLInputElement | HTMLTextAreaElement>){
    setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>){
    ev.preventDefault();

    console.log(state);

  }
  return (
    <form  onSubmit={handleSubmit}  className={styles.form}>
      <input type="text" placeholder="name" className={styles.input} 
      name='name'
      value={state.name}
      onChange={handleInput}/>
      <input type="text" placeholder="email" className={styles.input} 
      name='email'
      value={state.email}
      onChange={handleInput}/>
      <textarea
        className={styles.textArea}
        placeholder="message"
        // cols="30"
        // rows="10"
        name='message'
      value={state.message}
      onChange={handleInput}
      ></textarea>
      {/* <Button url="#" text="Send" /> */}
      <button className="btn-primary" >
        <span>Adding...</span>
        {/* {!isLoading && <span>Add Ticket</span>} */}
      </button>
    </form>
  );
};

export default ContactForm;
