import {  LogoutOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { _useLogin } from "../../../logic/actions/_common";
import { _AuthContext } from "../../../logic/context/AuthContext";
import { agentList, clientList } from "./Navlist";


const Sidebar = () => {
  // const { isActive } = useActive();
 const {logout} = _useLogin();
 const {auth} = _AuthContext();

 const role = auth?.user?.role;
const  list = role === "client"? clientList : role === "agent" ? agentList : role === "admin" ? agentList :"";

  return (
    <>
      <div className={"text-start px-3 mt-3 mb-4"}>
        <h4>Muneeb</h4>
      </div>
      <div className="py-1 ">
        <Menu>
          {list.map((x, index) => (
            <Menu.Item
              key={index}
              className={`${x.gap ? "mt-4" : "mt-1"} nav-link`}
              icon={
                <Link className="_link its-icon" to={x.path}>
                  {x.Icon}
                </Link>
              }
            >
              <Link className="_link" to={x.path}>
                {x.name}
              </Link>
            </Menu.Item>
          ))}

          <Menu.Item
            key="99"
            className="mt-4 nav-link"
            icon={
              <div className="its-icon">
                <LogoutOutlined />
              </div>
            }
          >
            <span onClick={logout}> Logout</span>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default Sidebar;