export function importJs(id, src) {
  if (document) {
    let items = document.head.querySelectorAll(`#${id}`);
    for ( let i = 0; i < items.length; i++){
        document.head.removeChild(items[i]);
    }

    if(src) {
      var script = document.createElement("script");
      script.id = id;
      // script.type = "text/javascript";
      script.type = "text/babel";
      script.src = src;
      document.head.appendChild(script);
    }
  }
}

export function importCss(id, href) {
  if (document) {
    let items = document.head.querySelectorAll(`#${id}`);
    for ( let i = 0; i < items.length; i++){
        document.head.removeChild(items[i]);
    }

    if(href) {
      var link = document.createElement("link");
      link.id = id;
      link.rel="stylesheet"
      link.type = "text/css";
      link.href = href;
      document.head.appendChild(link);
    }
  }
}