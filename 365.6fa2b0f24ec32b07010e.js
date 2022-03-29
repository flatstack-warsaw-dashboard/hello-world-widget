"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[365],{365:(e,t,a)=>{a.r(t),a(373);var r=a(342),n=a(914),s=a.n(n),i=a(592);const d=s().div`
  padding: 1em;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`,l=s().span`
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
`,g=({name:e})=>(0,i.jsx)(d,{children:(0,i.jsxs)(l,{children:["Hello ",e||"world"]})}),b=n.createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;class h extends HTMLElement{shadow=this.attachShadow({mode:"open"});static get observedAttributes(){return["name"]}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}render(){const e=this.getAttribute("name");r.render((0,i.jsx)(n.StyleSheetManager,{target:this.shadow,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{}),(0,i.jsx)(g,{name:e})]})}),this.shadow)}}window.customElements.define("fwd-hello-world-widget",h)}}]);