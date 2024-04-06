function solve() {
   const searchField = document.getElementById("searchField");
   const searchBtn = document.getElementById("searchBtn");
   const resultDiv = document.getElementById("result");
 
   searchBtn.addEventListener("click", function() {
     const searchTerm = searchField.value.toLowerCase();
     let result = "";
 
     // Check if search term is empty
     if (!searchTerm) {
      const tableBody = document.querySelector(".container tbody");
      const tableRows = tableBody.querySelectorAll("tr");

      // Iterate through table rows and check for matches
      let matches = 0;
      for (const row of tableRows) {
        const tableCells = row.querySelectorAll("td");
        let rowMatch = false;

        // Check if any table cell content includes the search term
        for (const cell of tableCells) {
          const cellText = cell.textContent.toLowerCase();
          if (cellText.includes(searchTerm)) {
            rowMatch = true;
            break;
          }
        }

        if (rowMatch) {
          matches++;
          row.classList.remove("select"); // Add styling for matching rows
        } else {
          row.classList.add("select"); // Remove styling for non-matching rows
        }
      }

      if (matches > 0) {
        result = `${matches} student(s) found.`;
      } else {
        result = "No students found.";
      }
    } else {
       const tableBody = document.querySelector(".container tbody");
       const tableRows = tableBody.querySelectorAll("tr");
 
       // Iterate through table rows and check for matches
       let matches = 0;
       for (const row of tableRows) {
         const tableCells = row.querySelectorAll("td");
         let rowMatch = false;
 
         // Check if any table cell content includes the search term
         for (const cell of tableCells) {
           const cellText = cell.textContent.toLowerCase();
           if (cellText.includes(searchTerm)) {
             rowMatch = true;
             break;
           }
         }
 
         if (rowMatch) {
           matches++;
           row.classList.add("select"); // Add styling for matching rows
         } else {
           row.classList.remove("select"); // Remove styling for non-matching rows
         }
       }
 
       if (matches > 0) {
         result = `${matches} student(s) found.`;
       } else {
         result = "No students found.";
       }
     }
 
     resultDiv.innerHTML = result;
   });
 }
 
 solve();
 