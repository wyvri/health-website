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

const x_buttons = document.getElementsByClassName("close-box-button");
Array.from(x_buttons).forEach(
  (x) =>
    (x.onclick = reportClick("close box", (event) => {
      const box_to_close = event.target.closest(".close-this-box");
      box_to_close.style.display = "none";
    }))
);

const export_button = document.getElementById("export-btn");
export_button.onclick = reportClick("click export", (event) => {
  console.log("you exported!");
  const box_to_open = document.getElementById("export-box");
  box_to_open.style.display = "block";
  const export_text = document.getElementById("gathered-text");
  export_text.value = gatherInput();
});

function gatherInput() {
  const text_to_gather = document.getElementsByClassName("organ-text-area");
  const texts = Array.from(text_to_gather).map((t) => t.value);
  return texts.join("\n");
}
