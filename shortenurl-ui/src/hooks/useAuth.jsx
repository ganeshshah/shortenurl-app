import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
    url: 'http://localhost:8050/',
    realm: 'master',
    clientId: 'shortenurl-app',
});

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
      })
      .then((res) => {
        setLogin(res);
        setToken(client.token);
      });
  }, []);

  return [isLogin, token];
};

export default useAuth;