function setupProject(titleClass, contentClass) {
  const title = document.querySelector(titleClass);
  const content = document.querySelector(contentClass);
  const arrow = title.querySelector(".arrow");

  // رسالة توضيحية عند مرور الماوس
  title.title = "Click to view more details";

  title.addEventListener("click", function () {

    const isOpen = content.style.display === "block";

    if (isOpen) {
      content.style.display = "none";
      arrow.textContent = "▼";
    } else {
      content.style.display = "block";
      arrow.textContent = "▲";
    }

  });
}

setupProject(".horse", ".horseManagement");
setupProject(".folder", ".folderManagement");