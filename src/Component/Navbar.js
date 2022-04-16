import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function Navbar() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div/>
          <Content></Content>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">ATools</Menu.Item>
        </Menu>
        </Header>
      </Layout>
    </div>
  );
}
export default Navbar;
