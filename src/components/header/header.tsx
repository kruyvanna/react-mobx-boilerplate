import React, { Children } from "react";
import { useTranslation } from "react-i18next";
import { Button, Layout } from "antd";
import { useStore } from "../../hooks/use-store";
import { observer } from "mobx-react";
import { Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
// import { useNavigate } from "react-router-dom";

let items = [
  { label: "Home", key: "home" },
  { label: "Product", key: "product" },
];

const Header = () => {
  const { t } = useTranslation();
  const {
    uiStore: { authStore },
  } = useStore();

  // const navigate = useNavigate();

  if (authStore.isLoggedIn) {
    items.push({
      label: authStore.user?.username || "",
      key: "profile",
    });
  }

  const onMenuItemClicked = (info: MenuInfo) => {
    console.log("menu clicked", info.key);
    // navigate("new page");
  };

  return (
    <Layout.Header className="header">
      <Menu items={items} mode="horizontal" onClick={onMenuItemClicked} />
    </Layout.Header>
  );
};

export default observer(Header);
