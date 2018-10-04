import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: '../../global/global.css',
  shadow: true
})
export class AppHome {

  @State() articls: any;

  componentWillLoad() {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/')
    .then(response => response.json())
    .then(data => {
    this.articls = data;
    console.log(this.articls);
    });
    }

    trim(str:string){
    let r= Math.min(141,str.length)
      let point= str.length<=140?'':'...'
    return str.substring(0,r)+point
    }

  render() {
    return (
    <div>
       { this.articls.map((item) => {
         return (
  <div class="hero-body">

      <div class="container ">
	<div class="columns is-multiline is-mobile is-centered">
	  <div class="column is-8 is-centered">

	    <div class="header-content">
	      <div class="has-text-centered">


		<h1 class="title">
		  {item.title}
		</h1>
	      </div>
	    </div>

	    <div class="subheader-content has-text-centered">
	      <p>posted on <a>{item.creationDate}</a> by <a>{item.autor}</a></p>
	      <hr/>
	    </div>

	    <div class="content">
	      <p >{this.trim(item.article)}</p>
	      <div class="has-text-centered">
	 <stencil-route-link url={'/detail/'+item._id}>
  <button class='button'>Continue reading</button>
   </stencil-route-link>
	      </div>
	    </div>
      </div>
      </div>
    </div>
</div>
)})}
</div>
      );
    }
  }






