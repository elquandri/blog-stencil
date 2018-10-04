import { Component } from "@stencil/core";

@Component({
  tag: "app-add",
  styleUrl: "../../global/global.css",
  shadow: true
})
export class AppAdd {
  render() {
    return (
      <div class="hero-body">
        <div class="container ">
          <div class="columns is-multiline is-mobile is-centered">
            <div class="column is-8 is-centered">
              <div class="header-content">
                <div class="has-text-centered">
                  <h1 class="title">New Artical</h1>
                </div>
              </div>

              <div class="subheader-content has-text-centered">
                <div class="nav-center">
                  <a class="nav-item">
                    <span class="icon">
                      <i class="fa fa-facebook" />
                    </span>
                  </a>
                  <a class="nav-item">
                    <span class="icon">
                      <i class="fa fa-twitter" />
                    </span>
                  </a>
                  <a class="nav-item">
                    <span class="icon">
                      <i class="fa fa-instagram" />
                    </span>
                  </a>
                  <a class="nav-item">
                    <span class="icon">
                      <i class="fa fa-rss" />
                    </span>
                  </a>
                </div>
                <hr />
              </div>

              <div class="single-content">
                <form>
                  <div class="field">
                    <label class="label">Title</label>
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </p>
                  </div>

                  <div class="field">
                    <label class="label">Artical</label>
                    <p class="control">
                      <textarea class="textarea" placeholder="Textarea" />
                    </p>
                  </div>
                  <div class="field">
                    <label class="label">Autor</label>
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Email input"
                        value=""
                      />
                    </p>
                  </div>
                  <div class="field is-grouped">
                    <p class="control">
                      <button class="button is-danger">Add</button>
                    </p>
                    <p class="control">
                      <button class="button is-link">Cancel</button>
                    </p>
                  </div>
                </form>
              </div>
              <div class="has-text-right">
                <p>
                  <a class="button" href="/">
                    Back to Home
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
