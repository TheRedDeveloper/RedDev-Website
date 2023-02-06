var Intro = document.getElementById("Intro");
var RedDev = document.getElementById("RedDev");
var header = document.getElementById("header");
Intro.onanimationend = EndIntro;
var iframe = document.createElement("iframe");
iframe.style.width = "100%";
iframe.style.height = "50vh";
iframe.src = "hero/index.html";
iframe.loading = "lazy";
iframe.style.border = "none";
iframe.style["min-height"] = "350px";
iframe.title = "RedDev";
setTimeout(EndIntro, 3000);
function EndIntro() {
  if (Intro.style.display !== "none") {
    Intro.style.display = "none";
    RedDev.style.transform = "scale(1)";
    RedDev.style.top = "1em";
    RedDev.style.left = "1em";
    header.style.height = "7em";
    document.body
      .getElementsByTagName("main")[0]
      .insertBefore(
        iframe,
        document.body.getElementsByTagName("main")[0].firstChild
      );
  }
}
const getFPS = () =>
  new Promise((resolve) =>
    requestAnimationFrame((t1) =>
      requestAnimationFrame((t2) => resolve(1000 / (t2 - t1)))
    )
  );
iframe.onload = function () {
  setTimeout(() => {
    getFPS().then((fps) => {
      if (fps < 1) {
        iframe.remove();
      }
      if (fps < 15) {
        document.getElementById("spin0").src = "icons/Disable3D.png";
        document.getElementById("spin0").onclick = () => {
          iframe.remove();
        };
      } else {
        try {
          document.getElementById("spin0").remove();
        } catch {}
      }
    });
  }, 13000);
};
RedDev.onclick = function () {
  window.location.href = "https://pml9h.csb.app/";
};
RedDev.style.left = (Intro.scrollWidth - RedDev.scrollWidth) / 2 + "px";
RedDev.style.top = (Intro.scrollHeight - RedDev.scrollHeight) / 2 + "px";
RedDev.style.transform =
  "scale(" + (Intro.scrollHeight / RedDev.scrollHeight - 1.2) + ")";
