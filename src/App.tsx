import React, { useState } from 'react';
import './App.css';
import '@chatui/core/dist/index.css';
import { Layout, Menu, MenuProps } from 'antd';
import ChatArea from './ChatArea';
// import Options from './Options';
import Info from './Info';

const App = () => {
  const [current, setCurrent] = useState('chat');

  //items for custom menu
  const items: MenuProps["items"] = [
    {
      label: "Chat",
      key: "chat"
    },
    {
      label: "Info",
      key: "info"
    }
  ];

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  return (

    <div className="App">
      <Menu
        items={items}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
      />
      {current === "chat" && <ChatArea setCurrent={setCurrent} />}
      {/* {current === "settings" && <Options />} */}
      {current === "info" && <Info />}
    </div>
  );
};

export default App;
