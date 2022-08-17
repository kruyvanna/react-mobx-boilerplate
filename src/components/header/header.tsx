import React, { Children } from "react";
import { useTranslation } from "react-i18next";
import { Button, Layout } from "antd";
import { useStore } from "../../hooks/use-store";
import { observer } from "mobx-react";
import { Menu } from "antd";

let items = [
  { label: "item 1", key: "item-1" }, // remember to pass the key prop
  { label: "item 2", key: "item-2" }, // which is required
  {
    label: "sub menu",
    key: "submenu",
    children: [{ label: "item 3", key: "submenu-item-1" }],
  },
];

const Header = () => {
  const { t } = useTranslation();
  const {
    uiStore: { authStore },
  } = useStore();

  if (authStore.isLoggedIn) {
    items.push({
      label: authStore.user?.username || "",
      key: "username",
      children: [
        {
          label: "Logout",
          key: "logout",
        },
      ],
    });
  }

  return (
    <Layout.Header className="header">
      <Menu items={items} mode="horizontal" />
      {authStore.isLoggedIn && (
        <div className="header-user-actions">
          <span>
            {t("hello")} {authStore.user?.username}
          </span>
          <Button type="primary" danger onClick={authStore.logout}>
            {t("logout")}
          </Button>
        </div>
      )}
    </Layout.Header>
  );
};

export default observer(Header);
