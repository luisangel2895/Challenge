(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-696dbc0a"],{"4b85":function(t,a,e){},a523:function(t,a,e){"use strict";e("4de4"),e("d3b7"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var r=e("2b0e");function n(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var r=e.props,n=e.data,i=e.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var c=n.attrs;if(c){n.attrs={};var s=Object.keys(c).filter((function(t){if("slot"===t)return!1;var a=c[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}));s.length&&(n.staticClass+=" ".concat(s.join(" ")))}return r.id&&(n.domProps=n.domProps||{},n.domProps.id=r.id),a(r.tag,n,i)}})}var i=e("d9f7");a["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,r=a.props,n=a.data,c=a.children,s=n.attrs;return s&&(n.attrs={},e=Object.keys(s).filter((function(t){if("slot"===t)return!1;var a=s[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}))),r.id&&(n.domProps=n.domProps||{},n.domProps.id=r.id),t(r.tag,Object(i["a"])(n,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),c)}})},bb51:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticStyle:{width:"80%"}},t._l(t.getProducts,(function(t,a){return e("product",{key:a,attrs:{product:t}})})),1)},n=[],i=e("5530"),c=e("2f62"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"elevation-1 ma-3"},[e("div",{staticClass:"d-flex flex-row justify-space-between"},[e("div",{staticClass:"d-flex flex-row"},[e("div",{staticClass:"image-product d-flex flex-row"},[e("v-img",{attrs:{src:t.product.ThumbnailURL,"max-width":"150"}})],1),e("div",{staticClass:"text-product d-flex flex-column justify-center pl-3"},[e("div",{staticClass:"name-product text-h6"},[t._v(t._s(t.product.Name))]),e("div",{staticClass:"d-flex flex-row"},[e("div",{staticClass:"final-price-product mt-3"},[t._v(t._s(t._f("price")(t.product.Price)))]),e("div",{staticClass:"retail-price-product text-button text-decoration-line-through"},[t._v(t._s(t._f("price")(t.product["Retail Price"])))])])])]),e("div",{staticClass:"d-flex flex-row align-center"},[e("v-btn",{staticClass:"darken-4",attrs:{dark:"",color:"teal"},on:{click:t.goDetail}},[t._v("View Details")])],1)])])},o=[],d={name:"Product",props:["product"],filters:{price:function(t){return"$ ".concat(t)}},methods:{goDetail:function(){this.$router.push({name:"DetailProduct",params:{id:this.product.ProductID}})}}},l=d,u=e("2877"),f=e("6544"),p=e.n(f),v=e("8336"),m=e("a523"),b=e("adda"),g=Object(u["a"])(l,s,o,!1,null,null,null),h=g.exports;p()(g,{VBtn:v["a"],VContainer:m["a"],VImg:b["a"]});var x={name:"Home",computed:Object(i["a"])({},Object(c["c"])(["getProducts"])),methods:Object(i["a"])({},Object(c["b"])(["getProductsAsync"])),components:{Product:h},mounted:function(){this.getProductsAsync()}},C=x,P=Object(u["a"])(C,r,n,!1,null,null,null);a["default"]=P.exports;p()(P,{VContainer:m["a"]})}}]);
//# sourceMappingURL=chunk-696dbc0a.8b20e466.js.map