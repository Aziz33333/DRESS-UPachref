// public/kommunicateScript.js
(function (d, m) {
    var kommunicateSettings = {
      "appId": "2091ef87dce1068da3ad41139d72f500e",
      "popupWidget": true,
      "automaticChatOpenOnNavigation": true
    };
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0];
    h.appendChild(s);
    window.kommunicate = m;
    m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  