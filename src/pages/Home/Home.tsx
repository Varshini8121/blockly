import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Button, Input, MenuProps } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal, Space } from "antd";

const { confirm } = Modal;
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { info } from "autoprefixer";
import { getRouteName, routeNames } from "../../data/routeUtils";
import { saveToFirebase, updateData } from "../../db/dbFunc";
import { useAppSelector } from "../../state/hooks";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// const items: MenuItem[] = [
//   getItem("Dashboard", "dashboard", <PieChartOutlined />),
//   getItem("Trips", "trips", <TeamOutlined />),

//   getItem("Analytics", "analytics", <DesktopOutlined />),
//   // getItem("Files", "9", <FileOutlined />),
// ];

export const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const routeName = getRouteName();
  const navigate = useNavigate();
  const xml = useAppSelector((state) => state.blockly.xml);
  const [name, setname] = useState("");

  const { id } = useParams();
  const showConfirm = () => {
    confirm({
      title: "Please enter name of the project ?",
      // icon: <SaveOutlined />,
      content: (
        <div>
          <Input
            placeholder="Enter project name "
            autoFocus
            // value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
      ),
      onOk() {
        // let namedata = "project_" + new Date().toISOString();
        // saveToFirebase(namedata, xml);
      },
      onCancel() {
        console.log("Cancel");
      },
      okText: "Save",
    });
  };
  const saveToDB = () => {
    // showConfirm();
    console.log("To Save ", xml);
    if (id === "new")
      saveToFirebase("project" + "_" + new Date().toISOString(), xml);
    else if (id) {
      console.log("update");
      updateData(id, xml);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(info) => {
            if (info.key === "dashboard") {
              navigate("/");
            } else if (info.key === "trips") {
              navigate("/trips");
            } else if (info.key === "analytics") {
              navigate("/analytics");
            }
          }}
        />
      </Sider> */}
      <Layout className="site-layout">
        <Header className="bg-white p-2 px-4 flex items-center pl-6 justify-between">
          <div className="text-xl font-bold">{routeName}</div>
          {routeName === routeNames.HOME ? (
            <>
              <Button
                size="large"
                icon={<SaveOutlined />}
                onClick={() => navigate("/projects/new")}
                type="primary"
              >
                New
              </Button>
            </>
          ) : (
            <div className="mr-4">
              <Button
                size="large"
                icon={<SaveOutlined />}
                onClick={() => saveToDB()}
                type="primary"
              >
                Save
              </Button>
            </div>
          )}
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
