(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{29:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(29),a(13)),s=a(4),l=a(5),u=a(7),h=a(6),d=a(10),m=a(23),g=a.n(m),j={fetchArticlesWithQuery:function(e){var t=e.searchQuery,a=e.page;return g.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("21948648-940e5752284e9bc56aa424f61","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}},b=(a(9),a(1)),p=document.querySelector("#modal-root"),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:"Modal__content",children:Object(b.jsx)("img",{src:this.props.src,alt:this.props.alt})})}),p)}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("button",{type:"button",className:"Button",onClick:this.props.onClick,children:"Load more"})}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleNameChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):d.b.info("Enter query!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",onSubmit:this.handleSubmit,children:Object(b.jsxs)("form",{className:"SearchForm",children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Searc"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleNameChange})]})})}}]),a}(n.Component),v=O,x=function(e){var t=e.children;return Object(b.jsx)("ul",{className:"ImageGallery",children:t})},w=function(e){var t=e.alt,a=e.src,n=e.url,r=e.onClick;return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{onClick:r,src:a,alt:t,url:n,className:"ImageGalleryItemImage"})})},C=a.p+"static/media/oops.3ad17dcf.jpg";function S(){return Object(b.jsxs)("div",{className:"CatchError",children:[Object(b.jsx)("img",{src:C,alt:"oops, error",width:"240"}),Object(b.jsx)("p",{children:"Oops!!! Something went wrong."})]})}var k=a(24),I=a.n(k),M=(a(69),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(I.a,{type:"Bars",color:"#00BFFF",height:80,width:80})}}]),a}(n.Component)),Q=(a(70),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,imagesLenght:[],searchQuery:"",isLoading:!1,error:null,largeImage:"",showModal:!1,urlModal:"",altToModal:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a={searchQuery:t.searchQuery,page:t.page};e.setState({loading:!0}),j.fetchArticlesWithQuery(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1,imagesLenght:Object(i.a)(t)}})),0===t.length&&d.b.error("Sorry, we didn it find anything. Try again!")})).catch((function(t){return e.setState({error:!t})})).finally((function(){e.setState({isLoading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onClickImageGalleryItem=function(t){e.setState({urlModal:t.currentTarget.getAttribute("url"),altToModal:t.currentTarget.getAttribute("alt")}),e.toggleModal(),console.log(t)},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),t.page>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.imagesLenght,r=t.isLoading,c=t.error,o=t.showModal,i=t.altToModal,s=t.urlModal;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.a,{}),Object(b.jsx)(v,{onSubmit:this.handleFormSubmit}),c&&Object(b.jsx)(S,{}),Object(b.jsx)(x,{children:a.map((function(t){var a=t.id,n=t.tags,r=t.webformatURL,c=t.largeImageURL;return Object(b.jsx)(w,{alt:n,src:r,url:c,onClick:e.onClickImageGalleryItem},a)}))}),r&&Object(b.jsx)(M,{}),!(n.length<12)&&Object(b.jsx)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center",margin:10},children:Object(b.jsx)(y,{onClick:this.fetchImages})}),o&&Object(b.jsx)(f,{onClose:this.toggleModal,src:s,alt:i})]})}}]),a}(n.Component)),N=Q;o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.ee4f17b6.chunk.js.map