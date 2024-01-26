import { AppstoreOutlined, DiffOutlined, OrderedListOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons";

export const  agentList = [
    {
      gap: false,
      name: "Dashboard",
      path: "/agent/dashboard",
      Icon: <AppstoreOutlined />,
    },
    {
      gap: true,
      name: "Bucket",
      path: "/agent/bucket",
      Icon: <OrderedListOutlined />,
    },
    {
      gap: false,
      name: "Picked Tickets",
      path: "/agent/picked-tickets",
      Icon: <DiffOutlined />,
    },
    {
      gap: false,
      name: "Handover Tickets",
      path: "/agent/handover-tickets",
      Icon: <SettingOutlined />,
    },
    {
      gap: false,
      name: "Assign Tickets",
      path: "/agent/assign-tickets",
      Icon: <SettingOutlined />,
    },
    {
      gap: false,
      name: "Resolved Tickets",
      path: "/agent/resolved-tickets",
      Icon: <SettingOutlined />,
    },
    {
      gap: true,
      name: "Profile",
      path: "/_/update-profile",
      Icon: <ProfileOutlined />,
    },
  ];

  export const  clientList = [
    {
      gap: false,
      name: "Dashboard",
      path: "/client/dashboard",
      Icon: <AppstoreOutlined />,
    },
    {
      gap: true,
      name: "Submit Request",
      path: "/client/submit-request",
      Icon: <OrderedListOutlined />,
    },
    {
      gap: false,
      name: "Open Requests",
      path: "/client/open-request",
      Icon: <DiffOutlined />,
    },
    {
      gap: false,
      name: "Resolved Requests",
      path: "/client/resolved-request",
      Icon: <SettingOutlined />,
    },
    {
      gap: true,
      name: "Profile",
      path: "/client/update-profile",
      Icon: <ProfileOutlined />,
    },
  ];