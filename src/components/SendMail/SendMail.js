import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../../src/Firebase";
import firebase from 'firebase'

const SendMail = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch()

  const onSubmit = (formData) => {
    db.collection('emails').add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <IconButton onClick={() => dispatch(closeSendMessage())}>
          <Close className="sendMail__close" />
        </IconButton>
      </div>

      <form className="sendMail__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          ref={register({ required: true })}
        />
        {errors.to && (
          <small className="sendMail__error">
            Recipient's email is required
          </small>
        )}

        <input
          type="text"
          placeholder="Subject"
          name="subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <small className="sendMail__error">A subject is required</small>
        )}

        <input
          type="text"
          placeholder="Message"
          name="message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <small className="sendMail__error">A message is required</small>
        )}

        <div className="sendMail__options">
          <Button className="sendMail__send" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
