console.log("ren was here lol");

const inSpan = window.Hny.inSpan; // this is added by my hny-otel-web script, which is loaded in the HTML.

const brain = document.getElementById("brain-area");
brain.onclick =  () => inSpan("health-website", "click brain",() => {
  const box_to_open = document.getElementById("brain-box");
  box_to_open.style.display="block";
});

const x_button = document.getElementById("close-box-button");
x_button.onclick = (event) => inSpan("health-website", "close brain box", () => {
    const box_to_close = event.target.closest(".organ-box");
    box_to_close.style.display="none";
});
