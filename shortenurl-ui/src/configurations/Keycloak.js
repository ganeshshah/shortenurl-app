import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8180/',
    realm: 'master',
    clientId: 'shortenurl-app',
  });

  export default keycloak;