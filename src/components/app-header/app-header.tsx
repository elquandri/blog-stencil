import { Component } from "@stencil/core";

@Component({
  tag: "app-header",
  styleUrl: "../../global/global.css",
  shadow: true
})
export class AppHeader {
  render() {
    return (

        <header>
          <div class="sec">
            <div>

                <h1 class="title is-1 is-spaced ">Mouhcine Blog</h1>
                <h4 class="subtitle is-7 "> a simple dosi Blog </h4>
              </div>
            </div>
            <div class="sec">
              <div class="tabs is-centered ">
                <ul>
                  <stencil-route-link url="/home">
                    {" "}
                    <li class="is-active c2"> Home </li>{" "}
                  </stencil-route-link>
                  <stencil-route-link url="/add">
                    {" "}
                    <li class="c2"> New Artical</li>{" "}
                  </stencil-route-link>
                </ul>

            </div>
          </div>
        </header>

    );
  }
}
