(this["webpackJsonpupscoot-hop"]=this["webpackJsonpupscoot-hop"]||[]).push([[0],{185:function(e,t,a){e.exports=a(377)},375:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),r=a.n(o),c=a(40),s=a(125),i=a(22),u=a(379),m=a(384),p=a(168),d=a(83),g=a(84),h=a(94),f=a(85),E=a(52),y=a(96),v=a(380),b=a(55),k=a(29),j=a(381),w=a(387),O=a(382),S=a(385),C=a(10),I=a(383),N=a(386),F=a(126),x=v.a.Dragger,L=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).updateFileType=function(e){a.setState({fileType:e.target.value})},a.onChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,l=t.name;a.setState(Object(p.a)({},l,n))},a.postForm=function(){var e=a.state,t=e.fileList,n=e.url,l=e.pass,o=e.h,r=Object(E.a)(a);if((t.length>0||""!==n)&&""!==l){var c=new FormData;c.append("file",t[0]),c.append("url",n),c.append("pass",l),c.append("h",o),fetch("https://i.sc0tt.net/",{method:"POST",body:c}).then((function(e){console.log(e),e.ok?r.setState({uploading:!1,msg:{type:"success",content:"Successfully uploaded!"}}):301===e.status?e.redirected&&(window.location.href=e.url):r.setState({uploading:!1,msg:{type:"error",content:"Failed to upload: "+e.status}})}),(function(e){console.log(e),r.setState({uploading:!1,msg:{type:"error",content:"Error uploading: "+JSON.stringify(e)}})})).catch((function(e){console.log(e),r.setState({uploading:!1,msg:{type:"error",content:"Error uploading: "+JSON.stringify(e)}})}))}else a.setState({uploading:!1,msg:{type:"warning",content:"Please fill out all fields"}})},a.onSubmit=function(){a.setState({uploading:!0,msg:void 0},a.postForm)},a.state={fileType:"file",fileList:[],msg:void 0,url:"",pass:"",h:!1,uploading:!1},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.fileType,n=t.uploading,o=t.fileList,r=t.url,c=t.pass,s=t.h,i=t.msg,u={onRemove:function(t){e.setState((function(e){var a=e.fileList.indexOf(t),n=e.fileList.slice();return n.splice(a,1),{fileList:n}}))},beforeUpload:function(t){return e.setState((function(e){return{fileList:[t]}})),!1},fileList:o};return l.a.createElement(b.a,null,l.a.createElement(k.a,{xs:24,lg:{span:12,offset:6}},l.a.createElement(j.a,{title:"New File"},i&&l.a.createElement(w.a,{style:{marginBottom:"15px"},message:i.content,type:i.type,showIcon:!0}),l.a.createElement(O.a,{layout:"vertical"},l.a.createElement(O.a.Item,{label:"File"},l.a.createElement(S.a.Group,{defaultValue:"file",value:a,onChange:this.updateFileType},l.a.createElement(S.a.Button,{value:"file"},"File"),l.a.createElement(S.a.Button,{value:"url"},"URL")),"file"===a&&l.a.createElement(x,u,l.a.createElement("p",{className:"ant-upload-drag-icon"},l.a.createElement(C.a,{type:"inbox"})),l.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload")),"url"===a&&l.a.createElement(I.a,{placeholder:"url to file...",name:"url",value:r,onChange:this.onChange})),l.a.createElement(O.a.Item,{label:"Password"},l.a.createElement(I.a,{placeholder:"upscoot password...",type:"password",name:"pass",value:c,onChange:this.onChange})),l.a.createElement(O.a.Item,null,l.a.createElement(N.a,{name:"h",checked:s,onChange:this.onChange},"Public")),l.a.createElement(O.a.Item,{style:{marginBottom:"0px"}},l.a.createElement(F.a,{type:"primary",size:"large",loading:n,onClick:this.onSubmit},"Upload"))))))}}]),t}(n.Component),T=a(378),M=["jpg","png","gif","jpeg","webp"],U=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).parseData=function(e){console.log(e),a.setState({data:e,loading:!1})},a.getMedia=function(e){var t=e.split(".").pop().toLowerCase();return"mp4"===t||"webm"===t?l.a.createElement("video",{controls:!0,class:"media"},l.a.createElement("source",{src:e,type:"video/".concat(t)})):"mp3"===t?l.a.createElement("audio",{controls:!0,class:"media"},l.a.createElement("source",{src:e,type:"audio/".concat(t)})):M.includes(t)?l.a.createElement("a",{href:e},l.a.createElement("img",{src:e,alt:e})):e},a.splitUp=function(e,t){for(var a=e.length%t,n=a,l=Math.floor(e.length/t),o=[],r=0;r<e.length;r+=l){var c=l+r,s=!1;0!==a&&n&&(c++,n--,s=!0),o.push(e.slice(r,c)),s&&r++}return o},a.renderMedia=function(e){var t=a.state.data[e].map((function(e){return this.getMedia(e)}),Object(E.a)(a)),n=a.splitUp(t,4);return setTimeout((function(){return a.setState({loadingImages:!1})}),1),l.a.createElement("div",{className:"urow"},l.a.createElement("div",{className:"ucolumn"},n.length>0&&n[0]),l.a.createElement("div",{className:"ucolumn"},n.length>1&&n[1]),l.a.createElement("div",{className:"ucolumn"},n.length>2&&n[2]),l.a.createElement("div",{className:"ucolumn"},n.length>3&&n[3]))},a.handleClick=function(e){a.setState({loadingImages:!0,selectedItem:e.key})},a.state={query:window.location.search,data:{},loading:!0,loadingImages:!1,selectedItem:0},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentWillMount",value:function(){var e=this.state.query,t=this;fetch("https://i.sc0tt.net/hop.json".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.parseData(e)}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.loadingImages,n=e.data,o=e.selectedItem;return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement(T.a,{size:"large",className:"center"}),!t&&l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{style:{backgroundColor:"transparent"},onClick:this.handleClick,mode:"horizontal",selectedKeys:[o+""]},Object.keys(n).map((function(e,t){return l.a.createElement(m.a.Item,{key:t},e)}))),a&&l.a.createElement(T.a,{size:"large",className:"center"}),!a&&this.renderMedia(Object.keys(n)[o])))}}]),t}(n.Component),z=(a(375),u.a.Header),B=u.a.Footer,D=u.a.Content,J=Object(i.b)();r.a.render(l.a.createElement((function(){return l.a.createElement(c.c,{history:J},l.a.createElement(u.a,{className:"layout"},l.a.createElement(z,null,l.a.createElement("div",{className:"logo"}),l.a.createElement(m.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[window.location.pathname],style:{lineHeight:"64px",float:"right"}},l.a.createElement(m.a.Item,{key:"/upload"},l.a.createElement(s.a,{to:"/upload"},"Upload")),l.a.createElement(m.a.Item,{key:"/hop"},l.a.createElement(s.a,{to:"/hop"},"Hop")))),l.a.createElement(D,{style:{padding:"50px"}},l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/upload",component:L}),l.a.createElement(c.b,{path:"/",component:U}),l.a.createElement(c.a,{from:"/",to:"hop"}))),l.a.createElement(B,{style:{textAlign:"center"}},"upscoot \xa9 2018 - ",(new Date).getFullYear())))}),null),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.635c6510.chunk.js.map