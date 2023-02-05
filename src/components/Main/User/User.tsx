import React from "react";
import { SingleUser } from "../Main";
import "./User.css";

type Props = {
    user: SingleUser
}

function User({ user }: Props) {
  return (
    <div className="main-user">
      <input type="checkbox" />
      <div className="main-user__name flex2"><p>{user.name}</p></div>
      <div className="main-user__email flex2"><p>{user.email}</p></div>
      <div className="main-user__company flex2"><p>{user.companyName}</p></div>
      <div className="main-user__role flex2"><p>{user.role}</p></div>
      <div className="main-user__activity flex2"><p>{user.recentActivity}</p></div>
      <div><p></p></div>
    </div>
  );
}

export default User;
