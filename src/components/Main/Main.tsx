import React, { useState } from "react";
import "./Main.css";
import User from "./User/User";

export type SingleUser = {
  name: string;
  email: string;
  companyName: string;
  role: string;
  recentActivity: string;
};

function Main() {
  const [users, setUsers] = useState<SingleUser[]>([
    {
      name: "Lindsey Stroud",
      email: "lindsey.stroud@gmail.com",
      companyName: "Hatchbuck",
      role: "Manager",
      recentActivity: "5 Minutes ago",
    },
    {
      name: "Nicci Troiani",
      email: "nicci.troiani@gmail.com",
      companyName: "Slack",
      role: "Manager",
      recentActivity: "14 Minutes ago",
    },
    {
      name: "George Fields",
      email: "george.fields@gmail.com",
      companyName: "Clockify",
      role: "CEO",
      recentActivity: "6 Hours ago",
    },
    {
      name: "Rebecca Moore",
      email: "rebecca.moore@gmail.com",
      companyName: "Upwork",
      role: "Manager",
      recentActivity: "Dec 14, 2020",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      companyName: "Trello",
      role: "Engineer",
      recentActivity: "Dec 12, 2020",
    },
    {
      name: "Jones Dermot",
      email: "dermot.jones@gmail.com",
      companyName: "Slack",
      role: "Developer",
      recentActivity: "Dec 11, 2020",
    },
    {
      name: "Martin Merces",
      email: "martin.merces@gmail.com",
      companyName: "Google",
      role: "Manager",
      recentActivity: "Dec 9, 2020",
    },
    {
      name: "Franz Ferdinand",
      email: "franz.ferdiand@gmail.com",
      companyName: "Facebook",
      role: "Manager",
      recentActivity: "Dec 6, 2020",
    },
    {
      name: "John Smith",
      email: "john.smith@gmail.com",
      companyName: "Skype",
      role: "CEO",
      recentActivity: "Nov 30, 2020",
    },
    {
      name: "Judith Williams",
      email: "judith.williams@gmail.com",
      companyName: "Google",
      role: "Designer",
      recentActivity: "Nov 26, 2020",
    },
  ]);

  return (
    <main>
      <section className="main-header">
        <div className="main-header__checkbox flex">
        <input type="checkbox" />
        </div>
        <div className="main-header__name flex"><p>Name</p></div>
        <div className="main-header__email flex"><p>Email</p></div>
        <div className="main-header__company flex"><p>Company name</p></div>
        <div className="main-header__role flex"><p>Role</p></div>
        <div className="main-header__activity flex"><p>Recent activity</p></div>
        <div className="main-header__add-column"><p>+ Add Column</p></div>
      </section>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
      <section className="main-footer">
        <div className="main-footer__div">
            <p className="main-footer__div-p">Rows per page: <span>8 <img src="src\assets\arrow.svg"/></span></p>
            <p>1-8 of 1240</p>
            <p><img src="src\assets\left-arrow.svg"/></p>
            <p><img src="src\assets\right-arrow.svg"/></p>
        </div>
        </section>
    </main>
  );
}

export default Main;
