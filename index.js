document.addEventListener("DOMContentLoaded", (event) => {
  const actionButton = document.getElementById("actionButton");
  const tinyURLContainer = document.getElementById("tinyURLContainer");

  actionButton.addEventListener("click", () => {
    tinyURLContainer.innerHTML = "<p>This is a tiny url section</p>";
  });
});
