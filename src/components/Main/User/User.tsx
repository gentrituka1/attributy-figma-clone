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
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.companyName}</p>
      <p>{user.role}</p>
      <p>{user.recentActivity}</p>
      <p></p>
    </div>
  );
}

export default User;
