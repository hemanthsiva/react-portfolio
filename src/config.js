import { OktaAuth } from "@okta/okta-auth-js";

export const oktaAuth = new OktaAuth({
  issuer: "https://dev-43571954.okta.com/oauth2/ausmg2w1lktFdArnQ5d7", // Replace with your Okta issuer
  clientId: "0oamg11aenFpFxts15d7", // Replace with your Okta client ID
  redirectUri: window.location.origin + "/login/callback",
});
