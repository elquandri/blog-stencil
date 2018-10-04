import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: '../../global/global.css',
  shadow: true
})
export class AppHeader {

  render() {
    return (
        <div class="hero-head">
  <header>
    <div class="container headOne">
      <div class="section">
        <div class="has-text-centered">
          <h1 class="title is-1 is-spaced">Blog DOSI</h1>
          <h4 class="subtitle is-4">a simple dosi blog </h4>
        </div>
      </div>
      <div class="section">
        <div class="tabs is-centered">
          <ul>
          <stencil-route-link url="/home">  <li class="is-active" > Home </li> </stencil-route-link>
          <stencil-route-link url="/detail"> <li>Detail</li> </stencil-route-link>
          <stencil-route-link url="/add"> <li> New Artical</li> </stencil-route-link>
          </ul>
        </div>
      </div>

    </div>
  </header>
</div>
        );
    }
  }