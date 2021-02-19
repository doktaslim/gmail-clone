import React from "react";
import { useHistory } from "react-router-dom";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import "./MailRow.css";
import { deleteMail, selectMail } from "../../features/mailSlice";
import { useDispatch } from "react-redux";
import { Delete } from "@material-ui/icons";
import { db } from "../../Firebase";
import moment from 'moment'

const MailRow = ({ id, to, subject, message, timeStamp }) => {
  const dispatch = useDispatch();
  const history = useHistory(id);

  const openMail = () => {
    dispatch(selectMail({
      id, to, subject, message, timeStamp 
    }))
    history.push(`/mail/${id}`)
  }

  const deleteThisMail = () => {
    db.collection('emails').doc(id).delete()
    dispatch(deleteMail())
  }

  return (
    <div className="mailrow">
      <div onClick={openMail} className='mailrow__container'>
        <div className="mailrow__options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>

        <h3 className="mailrow__title">{to}</h3>

        <div className="mailrow__message">
          <h4>
            {subject}<span className="mailrow__description">-{message}</span>
          </h4>
        </div>

        <small className="mailrow__time">{moment(timeStamp).startOf('day').fromNow()}</small>
      </div>
      <IconButton onClick={deleteThisMail}>
        <Delete />
      </IconButton>
    </div>
  );
};

export default MailRow;
