import { React } from "react"
import { Dropdown, Menu, Layout } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { MenuFoldOutlined } from "@ant-design/icons"
import { css } from "@emotion/css"
const { Header } = Layout

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
)

export const MyHeader = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Dropdown overlay={menu} className={userInfoStyle}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          jingjing <DownOutlined />
        </a>
      </Dropdown>
    </Header>
  )
}

const userInfoStyle = css`
  float: right;
  margin-right: 20px;
`
