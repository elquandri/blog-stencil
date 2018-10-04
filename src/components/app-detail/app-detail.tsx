import { Component, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";
@Component({
  tag: "app-detail",
  styleUrl: "../../global/global.css",
  shadow: true
})
export class AppDetail {
  @Prop()
  match: MatchResults;
  @State()
  articl: any;

  componentWillLoad() {
    let id = this.match.params.id;
    console.log(this.match.params);
    return fetch(
      "https://polymer-101-workshop.cleverapps.io/api/blogpost/" + id
    )
      .then(response => response.json())
      .then(data => {
        this.articl = data;
        console.log(id);
      });
  }

  render() {
    return (
      <div class="hero-body">
        <div class="container ">
          <div class="columns is-multiline is-mobile is-centered">
            <div class="column is-8 is-centered">
              <div class="header-content">
                <div class="has-text-centered">
                  <h1 class="title">{this.articl.title}</h1>
                </div>
              </div>

              <div class="subheader-content has-text-centered">
                <p>
                  posted on <a>{this.articl.creationDate}</a> by{" "}
                  <a>{this.articl.autor}</a>
                </p>
                <hr />
              </div>

              <div class="single-content">{this.articl.article}</div>
              <form>
                <div class="field is-grouped">
                  <p class="control">
                    <button class="button is-danger">Edit</button>
                  </p>
                  <p class="control">
                    <button class="button is-link">Delete</button>
                  </p>
                </div>
              </form>
              <div class="has-text-right">
                <p>
                  <stencil-route-link url="/">
                    <button class="button">
                      Back to Home
                    </button>
                  </stencil-route-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
