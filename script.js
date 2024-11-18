function changeText() {
    const paragraph = document.getElementById("text");

    // Change the text content of the paragraph
    paragraph.innerText = "Just learning the development. Also trying to learn to use Git. ";

    // Change the text color
    paragraph.style.color = "blue";  // You can change this color as desired

    // Log a message to the console
    console.log("The text has been changed!");

    // Animate the paragraph by fading it in and out
    paragraph.style.transition = "opacity 1s ease";
    paragraph.style.opacity = 0;

    setTimeout(function() {
        paragraph.style.opacity = 1;
    }, 1000);
}
