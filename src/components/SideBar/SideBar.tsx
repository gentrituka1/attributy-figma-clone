import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <aside className="side-bar">
      <div>
        <button className="side-bar__button__div">
          <span className="side-bar__plus">+</span>
          <span className="side-bar__newfolder__span">New Folder</span>
        </button>

        <div className="side-bar__item-div-active">
          <div className="side-bar__item-div-selector"></div>
          <section className="side-bar__item-image-text">
            <div className="side-bar__item-image">
              <img src="src\assets\folder.svg" />
            </div>
            <div className="side-bar__item-text">
              <p>Employer</p>
            </div>
          </section>
          <button>10</button>
        </div>

        <div className="side-bar__item-div">
          <div className="side-bar__item-div-inactive"></div>
          <section className="side-bar__item-image-text">
            <div className="side-bar__item-image">
              <img src="src\assets\folder.svg" />
            </div>
            <div className="side-bar__item-text">
              <p>Drafts</p>
            </div>
          </section>
          <button>15</button>
        </div>

        <div className="side-bar__item-div">
          <div className="side-bar__item-div-inactive"></div>
          <section className="side-bar__item-image-text">
            <div className="side-bar__item-image">
              <img src="src\assets\folder.svg" />
            </div>
            <div className="side-bar__item-text">
              <p>Emails</p>
            </div>
          </section>
          <button>12</button>
        </div>
      </div>

      <div className="help-n-support">
        <div className="side_nav_divider"></div>
        <p>Help and Support</p>
      </div>
    </aside>
  );
}

export default SideBar;
