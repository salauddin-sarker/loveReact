// Select the container and heart elements from the Dom
const image = document.querySelector(".container"),
heartIcon = document.querySelector(".heart");

// Add a doudl-click event listener to the Image
image.addEventListener("click", (e) => {
   // Calculate the x and y position of the double-click event
   let xValue = e.clientX - e.target.offsetLeft;
   let yValue = e.clientY - e.target.offsetTop;
   
   // Set tge  position of the heart element using the x and y values
   heartIcon.style.left = `${xValue}px`;
   heartIcon.style.top = `${yValue}px`;

   // Add the active class th the heartIcon 
   heartIcon.classList.add("active");

   // Remove the active class after 1 second

   setTimeout(() => {
      heartIcon.classList.remove("active");
   },1000);
});
