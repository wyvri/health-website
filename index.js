console.log("ren was here lol");

// just in case my hny-otel-web script didn't load, make it so this won't fail the whole page
const inSpan = window.Hny?.inSpan || ((serviceName, spanName, fn) => fn());

// construct a function that works as an onClick event, while reporting to Honeycomb
function reportClick(description, onClickFn) {
  return (event) => {
    inSpan("health-website", description, () => {
      onClickFn(event);
    });
  };
}

const brain = document.getElementById("brain-area");
brain.onclick = reportClick("click brain", () => {
  const box_to_open = document.getElementById("brain-box");
  box_to_open.style.display = "block";
});

const x_button = document.getElementById("close-box-button");
x_button.onclick = reportClick("close brain box", (event) => {
  const box_to_close = event.target.closest(".organ-box");
  box_to_close.style.display = "none";
});
