import { ifDefined } from '../../node_modules/lit-html/directives/if-defined.js';
import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = (navInfo) => html`
<a id="catalogLink" href="/dashboard" class="${ifDefined(navInfo['currentPage'].startsWith('/dashboard') ? 'active' : undefined)}">Dashboard</a>
            ${navInfo['isLoggedIn']
            ? html`<div id="user">
                <a id="createLink" href="/create-furniture" class="${ifDefined(navInfo['currentPage'].startsWith('/create-furniture') ? 'active' : undefined)}">Create Furniture</a>
                <a id="profileLink" href="/my-publications" class="${ifDefined(navInfo['currentPage'].startsWith('/my-publications') ? 'active' : undefined)}">My Publications</a>
                <a id="logoutBtn" href="/logout" class="${ifDefined(navInfo['currentPage'].startsWith('/logout') ? 'active' : undefined)}">Logout</a>
            </div>`
            : html`<div id="guest">
                 <a id="loginLink" href="/login" class="${ifDefined(navInfo['currentPage'].startsWith('/login') ? 'active' : undefined)}">Login</a>
                 <a id="registerLink" href="/register" class ="${ifDefined(navInfo['currentPage'].startsWith('/register') ? 'active' : undefined)}">Register</a>
             </div>`}        
`