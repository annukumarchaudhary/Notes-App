// ✅ Function to add a new note
function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value.trim(); // Get input and remove extra spaces

  // If note is empty, show alert and stop
  if (text === "") {
    alert("Please write something before adding a note!");
    return;
  }

  // Retrieve existing notes from localStorage (or empty array if none)
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Add the new note to the list
  notes.push(text);

  // Save updated notes array back to localStorage
  localStorage.setItem("notes", JSON.stringify(notes));

  // Clear input box
  input.value = "";

  // Refresh displayed notes
  showNotes();
}

// ✅ Function to display all notes on the page
function showNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const container = document.getElementById("notes");

  // Clear existing notes in UI
  container.innerHTML = "";

  // Loop through notes and display each one
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

// ✅ Function to delete a note by its index
function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Remove the note at the given index
  notes.splice(index, 1);

  // Update localStorage
  localStorage.setItem("notes", JSON.stringify(notes));

  // Refresh UI
  showNotes();
}

// ✅ Show existing notes when the page loads
showNotes();
