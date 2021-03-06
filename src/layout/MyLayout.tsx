import React from "react"
import { Layout, Menu } from "antd"
import { css } from "@emotion/css"
import { UserOutlined, VideoCameraOutlined, UploadOutlined, UnorderedListOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { MyContent } from "./MyContent"
import { MyHeader } from "./MyHeader"
import { BasicRoute } from "../router"
const { Sider } = Layout
class MyLayout extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Layout>
        <Sider className={siderNavStyle} trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={logoStyle}>一站式运营工作台</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
              <Link to={"/reportManage"}>报告管理</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/onlineQuality">线上质量</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <Link to={"/flowReplay"}>流量回放</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UnorderedListOutlined />}>
              <Link to={"/reduxTest"}>redux练习</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to={"/mockGateway"}>mock网关</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ backgroundColor: "#fff" }}>
          <MyHeader />
          <MyContent>
            <BasicRoute />
          </MyContent>
        </Layout>
      </Layout>
    )
  }
}
const siderNavStyle = css`
  height: 100vh;
`
const logoStyle = css`
  color: #fff;
  font-size: 20px;
  height: 60px;
  line-height: 60px;
  text-align: center;
`

export default MyLayout
