import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
const Nav = () => {
    const items=[
      {key:1,
        label: <Link to={"/"}>Home</Link>
    },
        {key:2,
            label: <Link to={"/listing"}>Listing</Link>
        },
        {key:3,
          label: <Link to={"/signup"}>Signup</Link>
      },
        ]
   
  return (
    <div >
        {/* <h1>Navbar</h1> */}
        <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        // items={new Array(15).fill(null).map((_, index) => {
        //   const key = index + 1;
        //   return {
        //     key,
        //     label: <Link to={"/listing"}>{`nav ${key}`}</Link>,
        //   };
        // })}
        items={items}
      />
    </Header>
    <Link/>
    </div>
  )
}

export default Nav