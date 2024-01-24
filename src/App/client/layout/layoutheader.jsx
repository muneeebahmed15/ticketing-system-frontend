import { CloseOutlined, LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Grid } from "antd";
import React, { useState } from "react";
import LeftCol from "./leftcol";
import { _useLogin } from "../../../logic/actions/_common";


const { useBreakpoint } = Grid;

const LayoutHeader = () => {
  const breakpoints = useBreakpoint();
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const {logout} = _useLogin();

  return (
    <>
      <div className="pb-2 pt-2 border-bottom d-flex flex-row justify-content-between align-items-center px-1">
        {!breakpoints.md && <MenuOutlined onClick={() => setDrawerVisibility(true)} />}
        <span style={{ fontWeight: "600" }}>Welcome Muneeb</span>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2 px-1" style={{ fontWeight: "600" }}>
          <span className="d-flex flex-row justify-content-center align-items-center gap-1 border-end px-1 cursor-pointer" role="button" onClick={logout}>
            <LogoutOutlined /> Logout
          </span>
        </div>
      </div>
      <Drawer
        placement="left"
        closable={false}
        width={250}
        onClose={() => setDrawerVisibility(false)}
        open={drawerVisibility}
        extra={<CloseOutlined onClick={() => setDrawerVisibility(false)} />}
      >
        <LeftCol />
      </Drawer>
    </>
  );
};

export default LayoutHeader;