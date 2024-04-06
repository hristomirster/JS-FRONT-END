// function search() {
//    // Clear previous results
//    $('#towns li').each(function() {
//        $(this).html($(this).text());
//        $(this).css('font-weight', 'normal');
//        $(this).css('text-decoration', 'none');
//    });

//    // let searchText = $('#searchText').val().trim().toLowerCase();
//    let searchText = $('#searchText').val().trim().toLowerCase();
//    console.log(searchText);
//    let matches = 0;

//    $('#towns li').each(function() {
//        let townName = $(this).text().toLowerCase();
//        if (townName.includes(searchText)) {
//            // Apply styles for matching items
//            $(this).css('font-weight', 'bold');
//            $(this).css('text-decoration', 'underline');
//            // Count matches
//            matches++;
//        }
//    });

//    // Display number of matches
//    $('#result').text(`${matches} matches found`);
// }

/*
function search() {
   // Get the search text
   const searchTerm = document.getElementById("searchText").value.toLowerCase();
 
   // Clear previous results (bold, underline, and match count)
   document.getElementById("result").innerHTML = "";
   const listItems = document.getElementById("towns").getElementsByTagName("li");
   for (let i = 0; i < listItems.length; i++) {
     listItems[i].style.fontWeight = "normal";
     listItems[i].style.textDecoration = "none";
   }
 
   // Search and update styles
   let matches = 0;
   for (let i = 0; i < listItems.length; i++) {
     const townText = listItems[i].textContent.toLowerCase();
     if (townText.includes(searchTerm)) {
       listItems[i].style.fontWeight = "bold";
       listItems[i].style.textDecoration = "underline";
       matches++;
     }
   }
 
   // Display the number of matches
   const resultDiv = document.getElementById("result");
   resultDiv.innerHTML = `${matches} matches found`;
 }
 
 */

function search() {
    let townElements = document.getElementsByTagName("li");
    let serchElement = document.getElementById("searchText").value;

    for (const iterator of townElements.value) {

		if(serchElement.includes(iterator)){
			console.log('ok');
		}
    }
}
