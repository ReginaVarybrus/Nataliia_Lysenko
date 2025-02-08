import{d as n,N as h,r as l,j as e,a as i,C as g,O as u}from"./index-CDoiXs_v.js";const m="/Nataliia_Lysenko/assets/logo-HC_ioNgE.svg",f=n.header.withConfig({displayName:"HeaderStyled",componentId:"sc-i0i27l-0"})(["background-color:var(--color-orange-1);width:100%;padding:4px 16px;"]),y=n.div.withConfig({displayName:"HeaderStyled__HeaderContainer",componentId:"sc-i0i27l-1"})(["margin:0 auto;width:100%;max-width:900px;display:flex;justify-content:space-between;align-items:center;"]),j=n.img.withConfig({displayName:"HeaderStyled__Logo",componentId:"sc-i0i27l-2"})(["width:43px;height:43px;@media (min-width:768px){width:60px;height:60px;}"]),w=n.div.withConfig({displayName:"HeaderStyled__LangButtons",componentId:"sc-i0i27l-3"})(["display:flex;justify-content:flex-end;gap:10px;@media (min-width:768px){gap:24px;}"]),c=n.button.withConfig({displayName:"HeaderStyled__Button",componentId:"sc-i0i27l-4"})(["background:none;border:none;font-size:16px;transition:0.3s ease-in-out;&.active{color:var(--color-brand-orange);}"]),b=n.button.withConfig({displayName:"HeaderStyled__BurgerMenuBtn",componentId:"sc-i0i27l-5"})(["display:block;background:none;border:none;height:27px;width:27px;overflow:visible;position:relative;z-index:2;cursor:pointer;span,span::before,span::after{background:var(--color-brand-orange);content:'';display:block;height:2px;width:27px;position:absolute;transition:0.5s ease-in-out;}span::before{top:-10px;}span::after{top:10px;}&.open span{background:transparent;}&.open span::before{transform:rotate(45deg);top:0;}&.open span::after{transform:rotate(-45deg);top:0;}@media (min-width:768px){display:none;}"]),v=n.nav.withConfig({displayName:"HeaderStyled__Nav",componentId:"sc-i0i27l-6"})(["position:absolute;top:-100%;left:0;width:100%;background-color:var(--color-brand-transparent);transition:0.5s ease-in-out;display:flex;justify-content:center;z-index:2;padding:40px;&.open{top:51px;}@media (min-width:768px){position:initial;width:auto;background-color:transparent;display:flex;top:auto;padding:0;}"]),k=n.ul.withConfig({displayName:"HeaderStyled__NavList",componentId:"sc-i0i27l-7"})(["display:flex;flex-direction:column;gap:24px;@media (min-width:768px){flex-direction:row;}"]),o=n(h).withConfig({displayName:"HeaderStyled__StyledNavLink",componentId:"sc-i0i27l-8"})(["color:var(--black-color);font-weight:600;text-shadow:0px 0px 10px rgba(254,254,254,0.95);font-size:20px;text-align:center;&.active{color:var(--color-background-1);}@media (min-width:768px){font-size:16px;font-weight:400;&.active{color:var(--color-border-red);}}"]),C=()=>{const[a,p]=l.useState(!1),[s,x]=l.useState("en"),t=()=>{p(!a)},r=d=>{x(d),localStorage.setItem("language",d)};return e.jsx(f,{children:e.jsxs(y,{children:[e.jsx(j,{src:m,alt:"logo",width:"60",height:"60"}),e.jsx(b,{onClick:t,className:a?"open":"",children:e.jsx("span",{})}),e.jsx(v,{className:a?"open":"",children:e.jsxs(k,{children:[e.jsx("li",{children:e.jsx(o,{to:i.HOME_PAGE,onClick:t,children:"Home"})}),e.jsx("li",{children:e.jsx(o,{to:i.ABOUT,onClick:t,children:"About me"})}),e.jsx("li",{children:e.jsx(o,{to:i.BODY_CARE,onClick:t,children:"Services"})}),e.jsx("li",{children:e.jsx(o,{to:i.EVENTS,onClick:t,children:"Events"})}),e.jsx("li",{children:e.jsx(o,{to:i.PRICE,onClick:t,children:"Price"})}),e.jsx("li",{children:e.jsx(o,{to:"contacts",children:"Contacts"})})]})}),e.jsxs(w,{children:[e.jsx(c,{"data-lang":"uk",onClick:()=>r("uk"),className:s==="uk"?"active":"",children:"Ukr"}),e.jsx(c,{"data-lang":"uk",onClick:()=>r("en"),className:s==="en"?"active":"",children:"Eng"})]})]})})},N=n.section.withConfig({displayName:"FooterStyled",componentId:"sc-1vabuch-0"})(["width:100%;background-color:var(--color-brand-orange);padding-top:99px;padding-bottom:99px;"]),S=()=>e.jsx(N,{children:e.jsx(g,{children:e.jsx("div",{children:e.jsx("h2",{children:"footer"})})})}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx("main",{children:e.jsx(u,{})}),e.jsx(S,{})]});export{H as default};
