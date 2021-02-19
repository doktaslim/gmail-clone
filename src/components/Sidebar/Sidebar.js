import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NoteIcon from "@material-ui/icons/Note";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

const Sidebar = () => {

  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        variant="text"
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions selected={true} Icon={InboxIcon} title="Inbox" number={34} />
      <SidebarOptions Icon={StarIcon} title="Starred" number={42} />
      <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number={2} />
      <SidebarOptions Icon={LabelImportantIcon} title="Important" number={14} />
      <SidebarOptions Icon={SendIcon} title="Sent" number={22} />
      <SidebarOptions Icon={NoteIcon} title="Drafts" number={1} />
    </div>
  );
};

export default Sidebar;
