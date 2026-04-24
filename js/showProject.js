function setupProject(titleClass, contentClass) {
  const title = document.querySelector(titleClass);
  const content = document.querySelector(contentClass);
  const arrow = title.querySelector(".arrow");


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
function filterProjects(type){

const projects =
document.querySelectorAll(".project-item");

projects.forEach(project=>{

if(type==="all"){
project.style.display="block";
}

else if(project.classList.contains(type)){
project.style.display="block";
}

else{
project.style.display="none";
}

});

}

setupProject(".horse", ".horseManagement");
setupProject(".folder", ".folderManagement");