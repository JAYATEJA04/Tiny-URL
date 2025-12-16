const actionButton = document.getElementById("actionButton");

const handleGetTinyURLButton = async () => {
  const tinyURLContainer = document.getElementById("tinyURLContainer");
  const originalUrl = document.getElementById("originalURL").value;
  const inputField = document.getElementById("originalURL");
  const copyLinkButton = document.getElementById("copyLink");

  if (!originalUrl) {
    alert("please enter something! PLEASE!");
    return;
  }

  const apiEndPoint = "http://127.0.0.1:3000/short-url";

  const dataPayLoad = {
    keyName: originalUrl,
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch(apiEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPayLoad),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.text();
    console.log("Success: ", result);
    tinyURLContainer.textContent = result;

    navigator.clipboard
      .writeText(tinyURLContainer.textContent)
      .then(() => {
        console.log(`The link is : ${tinyURLContainer.textContent}`);
        copyLinkButton.text = "Copied";

        setTimeout(() => {
          copyLinkButton.textContent = "Copy Text";
        }, 2000);
      })
      .catch((err) => {
        console.error("Could not copy text", err);
        alert("Failed to copy text.");
      });
  } catch (error) {
    console.error(`Error: ${error}`);
    tinyURLContainer.textContent = `Error: ${error}`;
  }

  // inputField.value = "";
};

actionButton.addEventListener("click", handleGetTinyURLButton);
