(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(233)),i={title:"Azure AD",sidebar_label:"Azure AD"},c={unversionedId:"documentation/appConfiguration/azure-ad",id:"documentation/appConfiguration/azure-ad",isDocsHomePage:!1,title:"Azure AD",description:"Introduction",source:"@site/docs/documentation/appConfiguration/azure-ad.md",slug:"/documentation/appConfiguration/azure-ad",permalink:"/docs/documentation/appConfiguration/azure-ad",version:"current",sidebar_label:"Azure AD",sidebar:"documentation",previous:{title:"Facebook Lead Ads Configuration",permalink:"/docs/documentation/channelConfiguration/fb-lead-ads"},next:{title:"Freshdesk",permalink:"/docs/documentation/appConfiguration/freshdesk"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"App Registration on AAD",id:"app-registration-on-aad",children:[]},{value:"Steps to configure App in Azure AD:",id:"steps-to-configure-app-in-azure-ad",children:[]},{value:"Steps to configure registered app in YM bot:",id:"steps-to-configure-registered-app-in-ym-bot",children:[]},{value:"References",id:"references",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Azure AD enables features like SSO and for personalizing the app experiences using existing organization data through APIs. For IT admins, it allows complete control over access to applications and resources utilizing security controls like MFA and conditional access."),Object(o.b)("p",null,"Simplify single sign-on. Azure AD supports more than 2,800 pre-integrated software as a service (SaaS) applications."),Object(o.b)("p",null,"Yellow Messenger comes pre-built with the ADFS (Active Directory Federation Services) integration and generic OAuth implementation."),Object(o.b)("p",null,"If ADFS is enabled for authentication, the bot will redirect the user to the AD (Active Directory) login page, wherein the user will need to provide their credentials and once AD authenticates the user, a callback is triggered by ADFS to YM indicating the success or failure of the authentication. When the authentication is successful, ADFS provides the authentication token along with a refresh token and time to live for the token."),Object(o.b)("h2",{id:"app-registration-on-aad"},"App Registration on AAD"),Object(o.b)("p",null,"For connecting Azure AD with YM bot, following details need to be obtained using AD App registration:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Client ID / Application ID"),Object(o.b)("li",{parentName:"ol"},"Tenant ID"),Object(o.b)("li",{parentName:"ol"},"Client Secret")),Object(o.b)("h2",{id:"steps-to-configure-app-in-azure-ad"},"Steps to configure App in Azure AD:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1:")," Go to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://portal.azure.com/"}),"portal.azure.com")," > Active Directory > App Registrations."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://paper-attachments.dropbox.com/s_DFCB7E05F047CA7FA3CB9A713F6B533B7C793BE35DB3541E48AEDA22175EEBBB_1613053809080_image.png",alt:null}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2:")," Register a new app for the chatbot (if not already registered)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3:")," Copy and Save the Application/Client ID and tenant ID from overview section."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://lh6.googleusercontent.com/TG1sKk4JqfF-GB_PP5cjIiC9q9AGTRE5ml06XPtLPC_r3aPwrYkM-gcoRGLl7ZUCN2_P5AD_YRcduzYnKnfbE2B4QLKtZ13f22tFjmBktPWPd9pS9CPoA2NXjKbFyd1AIbRplOr6",alt:null}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 4:")," Go to Certificates & Secrets > New client secret > Fill the description & select expires to Never, After clicking on Add button a Client Secret will be generated, save the value of the Client Secret."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 5:")," Goto Authentication > Add a platform > Web > Add the redirect url > Save.\nRedirect-Url: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.yellowmessenger.com/integrations/azureauth/"}),"https://app.yellowmessenger.com/integrations/azureauth/")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 6:")," Add / Remove permission and Grant Admin consent for the App.\nGoto API Permissions > Add the required permissions."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://lh6.googleusercontent.com/z37T-8_2hO-v88FOY15bYZs3ZhNy7HK2hX3mR_uKF6Qh1L77cnBuHBc2IPXZX_Qm-glHTF5mBPkQnWNVa2eo3t6MmkDGhQWrpg-jDZdVWr3So_JH7QKeS9milnNcDW7YWTDj1dhP",alt:null}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Common permission:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Scope"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"openid, email, profile, User.Read"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Used to retrieve login details & their profile using Graph Api")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"offline_access"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required to obtain refresh token")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User.Read.All"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Read profile of all the user in the tenant.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Calendars.ReadWrite"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Edit User\u2019s calendar / meetings")))),Object(o.b)("p",null,"Graph Permission: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/graph/permissions-reference"}),"https://docs.microsoft.com/en-us/graph/permissions-reference")),Object(o.b)("h2",{id:"steps-to-configure-registered-app-in-ym-bot"},"Steps to configure registered app in YM bot:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to the YM bot > Configuration > Integrations > Azure Active Directory"),Object(o.b)("li",{parentName:"ol"},"Enter the obtained Tenant ID, Client ID, Client Secret"),Object(o.b)("li",{parentName:"ol"},"Enter the API version to v2.0"),Object(o.b)("li",{parentName:"ol"},"Enter the required scope > Save")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://paper-attachments.dropbox.com/s_DFCB7E05F047CA7FA3CB9A713F6B533B7C793BE35DB3541E48AEDA22175EEBBB_1613055445398_image.png",alt:null}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Obtain Azure AD")," ",Object(o.b)("strong",{parentName:"p"},"Login url:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'let consent = "&prompt=login"  //prompt=login allow user to choose a logging account\n\n{\n   "title": "Login",\n   "url": app.azure.auth() + consent                     \n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Response")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'app.log(app.data)\n{\n   "event": {\n       "code": "azure-auth-success",\n       "data": {\n           "token_type": "Bearer",\n           "scope": "Calendars.ReadWrite email openid profile User.Read",\n           "expires_in": 3599,\n           "ext_expires_in": 3599,\n           "access_token": "eyJ0eXXXXXXXXXXXXXXXXX",\n           "refresh_token": "aiJ0eXXXXXXXXXXXXXXXX"\n       }\n   }\n }\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Access Token")," can be used to get access to resources of allowed applications.\nExpire time : 1 hour."),Object(o.b)("p",null,"Azure allows an expired access-token to be refreshed using the ",Object(o.b)("strong",{parentName:"p"},"Refresh Token")," for a maximum period of time of 90 days."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Retrieve user profile using AD refresh token & Graph Api")),Object(o.b)("p",null,"Request"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"curl --location --request GET 'https://graph.microsoft.com/v1.0/me' \\\n--header 'Authorization: Bearer {accessToken}' \\\n")),Object(o.b)("p",null,"Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'{\n    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity",\n    "businessPhones": [],\n    "displayName": "Shubhi Saxena",\n    "givenName": "Shubhi",\n    "jobTitle": null,\n    "mail": "shubhi@bitonictexxxxxxx.onmicrosoft.com",\n    "mobilePhone": null,\n    "surname": "Saxena",\n    "userPrincipalName": "shubhi@bitonictexxxxxxx.onmicrosoft.com",\n    "id": "e4a5dbe5-4750-41e7-8axxxxxxxxx"\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Other useful Graph APIs:")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/graph/api/user-list-events?view=graph-rest-1.0&tabs=http"}),"Get events of user")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0&tabs=http"}),"Send email on behalf of user")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/graph/api/planneruser-list-tasks?view=graph-rest-1.0&tabs=http"}),"Load tasks of user")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/graph/api/resources/passwordprofile?view=graph-rest-1.0"}),"Update password"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Graph APIs:"),"\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0"}),"https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Graph Explorer:")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.microsoft.com/en-us/graph/graph-explorer"}),"https://developer.microsoft.com/en-us/graph/graph-explorer")),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/windows-server/identity/ad-fs/overview/whats-new-active-directory-federation-services-windows-server"}),"Azure ADFS")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-flow-tab"}),"Active Directory authentication")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0"}),"Graph APIs")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"}),"App Registration"))))}l.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);