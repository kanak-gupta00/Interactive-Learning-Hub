// Function to simulate the GPT-like answer based on the user input
function askGPT() {
  const userQuery = document.getElementById("searchInput").value.trim().toLowerCase();
  const gptResponseElement = document.getElementById("gptResponse");

  // Check if the user entered anything in the search bar
  if (userQuery === "") {
    gptResponseElement.innerHTML = "<h3>Please enter a question or topic to search.</h3>";
    return;
  }

  // Simulate responses based on predefined topics
  let gptResponse = "";

  if (userQuery.includes("compiler design")) {
    gptResponse = "Compiler Design is about building a compiler that can translate high-level programming languages to machine language. It includes steps like lexical analysis, syntax analysis, semantic analysis, and code generation.";
  } else if (userQuery.includes("software testing")) {
    gptResponse = "Software Testing is a process to identify defects or bugs in software and ensure that it works as expected. It involves activities like unit testing, integration testing, and system testing.";
  } else if (userQuery.includes("mobile application development")) {
    gptResponse = "Mobile Application Development is the process of creating software applications that run on mobile devices, using tools like Android Studio or Xcode for iOS. It involves coding, UI design, and testing.";
  } else if (userQuery.includes("project management")) {
    gptResponse = "Project Management is the discipline of planning, organizing, and managing resources to achieve specific goals within a project. It uses frameworks like Agile or Scrum for better organization and efficiency.";
  } else {
    // Default response when no predefined topic matches
    gptResponse = "Sorry, I couldn't find any information on that topic. Could you try another query?";
  }

  // Display the GPT-like response
  gptResponseElement.innerHTML = '<h3>Answer:</h3><p>${gptResponse}</p>';
}