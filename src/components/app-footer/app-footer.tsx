import { Component } from "@stencil/core";

@Component({
  tag: "app-footer",
  styleUrl: "../../global/global.css",
  shadow: true
})
export class AppFooter {
  render() {
    return (
      <div class="hero-foot footer-custom">
        <div class="container has-text-centered">
          <hr />
          <a class="nav-item" href="http://github.com/plasticneko">
            <span class="icon">
              <i class="fa fa-github"/>
            </span>
          </a>
          <p>
            created by{" "}
            <a href="https://github.com/elquandri/blog_stencil">github.com/elquandri</a>
          </p>
        </div>
      </div>
    );
  }
}
