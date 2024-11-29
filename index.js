console.log("ren was here lol");

const brain = document.getElementById("brain-area");
brain.onclick = () => {
  const box_to_open = document.getElementById("brain-box");
  box_to_open.hidden=false;
};

const x_button = document.getElementById("close-box-button");
x_button.onclick = (event) => {
    const box_to_close = event.target.closest(".organ-box");
    box_to_close.hidden=true;
};
