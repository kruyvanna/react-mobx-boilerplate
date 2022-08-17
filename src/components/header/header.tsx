import React, { Children } from "react";
import { useTranslation } from "react-i18next";
import { Button, Layout } from "antd";
import { useStore } from "../../hooks/use-store";
import { observer } from "mobx-react";
import { Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import { useHistory } from "react-router-dom";

let items = [
  { label: "Home", key: "home" },
  { label: "Product", key: "product" },
];

const Header = () => {
  const { t } = useTranslation();
  const {
    uiStore: { authStore },
  } = useStore();

  const history = useHistory();

  if (authStore.isLoggedIn) {
    items.push({
      label: authStore.user?.username || "",
      key: "profile",
    });
  }

  const onMenuItemClicked = (info: MenuInfo) => {
    console.log("menu clicked", info.key);
    history.push("profile");
  };

  return (
    <Layout.Header className="header">
      <Menu items={items} mode="horizontal" onClick={onMenuItemClicked} />
    </Layout.Header>
  );
};

export default observer(Header);
