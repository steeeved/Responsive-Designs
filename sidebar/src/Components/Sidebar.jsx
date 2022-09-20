import React from 'react';
import Styles from './Sidebar.module.scss';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className={Styles.main}>
      <ul className={Styles.Sidebar}>
        {SidebarData.map((item, index) => {
          return (
            <li key={index}
              id={window.location.pathname == item.link ? [Styles.active] : ''}
              onClick={() => {
              window.location.pathname = item.link;
            }}>
              <div id={Styles.icon}>{item.icon}</div>
              <div to={item.link} id={Styles.title}>{item.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
