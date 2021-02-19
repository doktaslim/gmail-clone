import React, { useState, useEffect } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import GroupIcon from "@material-ui/icons/Group";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import ForumIcon from "@material-ui/icons/Forum";
import "./MailList.css";
import MailListSection from "./MailListSection";
import MailRow from "./MailRow";
import { db } from "../../Firebase";

const MailList = () => {
  const [emails, setEmails] = useState([])

  useEffect(() => {
    const emails = db.collection('emails').orderBy('timeStamp', 'desc').onSnapshot(snapShot => setEmails(snapShot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }))))
    return emails
  }, [])

  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="mailList__settings__left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="mailList__settings__right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="mailList__section">
        <MailListSection
          Icon={InboxIcon}
          title="Primary"
          selected={true}
        />
        <MailListSection Icon={GroupIcon} title="Social" />
        <MailListSection Icon={LocalOfferIcon} title="Promotions" />
        <MailListSection Icon={AnnouncementIcon} title="Updates" />
        <MailListSection Icon={ForumIcon} title="Forums" />
      </div>

      <div className='mailList__list'>
        {emails.map(({id, data: { to, subject, message, timeStamp }}) => (
          <MailRow 
            id= {id}
            key={id}
            to= {to}
            subject={subject}
            message={message}
            timeStamp={new Date(timeStamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
};

export default MailList;
