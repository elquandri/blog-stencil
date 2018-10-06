import { Component, Prop, State } from "@stencil/core";
import {MatchResults, RouterHistory} from "@stencil/router";
@Component({
  tag: "app-detail",
  styleUrl: "../../global/global.css",
  shadow: true
})
export class AppDetail {
  @Prop()   match: MatchResults;
  @State()  articl: any;
  @Prop()   home : RouterHistory;


  reculer(){
    this.home.goBack();
  }
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

  deleteBlogPost() {
    return fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/" + this.match.params.id, {
      method: 'DELETE',headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
    }).then(function(res) {  this.reculer();
      return res.json();
    })
      .then(function(data) {
        console.log(JSON.stringify(data));
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
                  <h1 class="title c3">{this.articl.title}</h1>
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
                  <stencil-route-link url={"/edit/" + this.articl._id}>
                  <p class="control">
                    <button class="button is-danger">Edit</button>
                  </p>
                  </stencil-route-link>
                  <stencil-route-link url="/" >
                  <p class="control c1">
                    <button class="button is-warning" onClick={() => this.deleteBlogPost()} > Delete</button>
                  </p>
                  </stencil-route-link>
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
