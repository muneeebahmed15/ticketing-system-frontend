import {
    AppstoreOutlined,
    BackwardOutlined,
    CommentOutlined,
    DiffOutlined,
    FolderOutlined,
    LogoutOutlined,
    OrderedListOutlined,
    ProfileOutlined,
    SettingOutlined,
    SnippetsOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import React from "react";
  import { Link } from "react-router-dom";
import { _useLogin } from "../../../logic/actions/_common";
  // import useActive from "../../../hooks/useActive";
 

  const menuList = [
    {
      gap: false,
      name: "Dashboard",
      path: "/client",
      Icon: <AppstoreOutlined />,
    },
    {
      gap: true,
      name: "Submit Requests",
      path: "/client/submit-requests",
      Icon: <SnippetsOutlined />,
    },
    {
      gap: false,
      name: "Open Requests",
      path: "/client/open-requests",
      Icon: <DiffOutlined />,
    },
    {
      gap: false,
      name: "Resolved Requests",
      path: "/client/resolved-requests",
      Icon: <SettingOutlined />,
    },
    {
      gap: true,
      name: "Profile",
      path: "/client/profile",
      Icon: <ProfileOutlined />,
    }
  ];
  
  const LeftCol = () => {
    // const { isActive } = useActive();
  const {logout} = _useLogin();
  
    return (
      <>
        <div className={"text-start px-3 mt-3 mb-4"}>
          <h4>Muneeb</h4>
        </div>
        <div className="py-1 ">
          <Menu>
            {menuList.map((x, index) => (
              <Menu.Item
                key={index}
                className={`${x.gap ? "mt-4" : "mt-1"} nav-link}`}
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
  
  export default LeftCol;
