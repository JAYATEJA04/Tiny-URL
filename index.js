const actionButton = document.getElementById("actionButton");

const handleGetTinyURLButton = async () => {
  const tinyURLContainer = document.getElementById("tinyURLContainer");
  const originalUrl = document.getElementById("originalURL").value;

  if (!originalUrl) {
    alert("please enter something! PLEASE!");
    return;
  }

  const apiEndPoint = "http://192.168.1.36:3000/originalLink";

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
    tinyURLContainer.textContent = "Success server responded.";
  } catch (error) {
    console.error(`Error: ${error}`);
    tinyURLContainer.textContent = `Error: ${error}`;
  }
};

actionButton.addEventListener("click", handleGetTinyURLButton);
