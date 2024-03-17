import React from "react";
import { BsBricks } from "react-icons/bs";
import { GiFamilyHouse, GiHighGrass, GiRake } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { BASE_URL, SERVICES, SERVICES_PATHS } from "../../consts";

const Sidebar = () => {
  const { service } = useParams();

  let data = [
    {
      sidebarListLink: SERVICES_PATHS.AERATION,
      sidebarListIcon: GiHighGrass,
      sidebarListText: SERVICES.AERATION,
    },
    {
      sidebarListLink: SERVICES_PATHS.DETHATCHING,
      sidebarListIcon: GiRake,
      sidebarListText: SERVICES.DETHATCHING,
    },
    {
      sidebarListLink: SERVICES_PATHS.WINDOW_CLEANING,
      sidebarListIcon: GiFamilyHouse,
      sidebarListText: SERVICES.WINDOW_CLEANING,
    },
    {
      sidebarListLink: SERVICES_PATHS.INTERLOCK_CLEANING,
      sidebarListIcon: BsBricks,
      sidebarListText: SERVICES.INTERLOCK_CLEANING,
    },
  ];

  let Datalist = data.map((val, i) => {
    return (
      <li key={i}>
        <Link
          to={`${BASE_URL}/services/${val.sidebarListLink}`}
          className={`align-items-baseline gap-2 ${
            service === val.sidebarListLink ? "active" : ""
          }`}
        >
          <val.sidebarListIcon size="1.5em" />
          <span>{val.sidebarListText}</span>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <h3 className="sidebar-title">Services</h3>
          <ul className="sidebar-list">{Datalist}</ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
