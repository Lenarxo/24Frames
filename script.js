
var SPREADSHEET_ID = "1OjjfZ0Nq83i2813iPbAHE3ejN0U_hqwzx7vwUHPswY8";
var TAB_NAME = "Sorted";



/*https://docs.google.com/spreadsheets/d/1T-i7tdeMTNP-t92tlzmoRQeai5vcJ1OVRE-WcnjyYsQ/edit?usp=sharing

https://docs.google.com/spreadsheets/d/1OjjfZ0Nq83i2813iPbAHE3ejN0U_hqwzx7vwUHPswY8/edit?gid=1527667611#gid=1527667611
These are two variables (containers for data) that you need to replace with your own information.

1. SPREADSHEET_ID: To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  2. TAB_NAME is just the name of your spreadsheet tab. Write it as it is (it's case-sensitive!). 
    –– The default Google Sheet tab is Sheet1.
    –– This also accepts the tab number, in order

 * Row is the same as entry
   Link to the example spreadsheet: https://docs.google.com/spreadsheets/d/1ndp1b_EgDONxhSEa9rd6N80Y_oEvI57cNbqO9EMUIGQ/edit#gid=0
*/

/*--- titelseite----*/
window.addEventListener('scroll', () => {
   const body = document.body;
    body.classList.toggle('scrolling', window.scrollY > 0);
});




$(document).ready(function () {
  
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {  // gets the Data from the google sheet as JSON from the variables definied above
    
   // console.log(data); 
    
 
    
    
     // go over everything in data we get and run the code below to add one Tabellenzeile at a time to the html
    data.forEach(function (entry) { //forEach is a loop that runs over everything in the data we got above
       var InputValuesArray = entry.LongString.split("Ω"); // Input Values is a array to easily work with the long text string we get out of the editor. We are spliting it at the OMEGA Unicode Charater

      // the number of the InputValuesArray and what it refers to can be seen in the editor. Its the array "arrayInputs" it starts with 0
       // Erklärung für Backticks also hinzufügung https://www.shecodes.io/athena/315298-how-to-use-backtick-in-javascript
     console.log(entry); // Debug console log
   
          // let myFrames = $(`<div class='p'}>
            //  <h2 class="name">` +
              //` <span class='Kunstwerk'>` + InputValuesArray.at(0) + " " + InputValuesArray.at(3) + `  
              //</div>`).appendTo("#people");  //all these lines gets the InputValues from the Array at the position definied in the editor and adds it into html with backticks

      
    // Datum aus InputValuesArray[8] formatieren
   const date = InputValuesArray[8] ? new Date(InputValuesArray[8]) : new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2); // Letzte zwei Zahlen vom Jahr
    const dateContent = `
        <span class="day">${day}</span>
        <span class="month">${month}</span>
        <span class="year">${year}</span>`;
  
    // Erstellen der Elemente
    let myFrames = $(`
        <div class='p'>
            <h2 class="name">
                ${dateContent ? `<span class='kunstwerk-up'>${dateContent}</span>` : ''}
                <span class='kunstwerk-left'>` + InputValuesArray[0] + `</span>
                <span class='kunstwerk-right'>` + InputValuesArray[3] + `</span>
            </h2>
        </div>
        `).appendTo("#people");
      //für das datum
      


          var UsersBackground;

           // Second Step add the main image
               if (InputValuesArray.at(2) !== "" && InputValuesArray.at(2).length > 3) { //the image link is not nothing( !== means is not; "" compares it to an empty string) AND (&&)...
                 //AND not too short that it couldnt work (because its string length is bigger than 3)-- if these things are both true we guess that the user uploaded file to the drive 
                UsersBackground = $(`<div class='img'><img src="` + InputValuesArray.at(2) + `"></div>`).appendTo(myFrames); //Inserst the images from the URL part of LongString at the second postion (not counting 0)
              }else{
                  if (entry.UploadImage+ "" !== "undefined"){ // if the image is undefined then there was no upload so before we add it we check if it exists

                var uploadedImgParsed = entry.UploadImage +""; //make the object type from the image to string so we can better call string operations on it - parsed here just means as string
                var beforeReplace = "https://drive.google.com/open?id="; //the URL that is send with
                var afterReplace = "https://lh3.googleusercontent.com/d/"; // where is the high res image hosted in a machine readable way without any distrations of the google drive
                    
                UsersBackground =  $(`<div class='img'><img src="` + uploadedImgParsed.replace(beforeReplace,afterReplace) + `"></div>`).appendTo(myFrames);  
                    //inserting the google drive image Url and changing the beforeReplace to AfterReplace with the string operator replace
                 }}
      
          // all the rest
    

            // damit es nicht auch mit drin ist sondern dahinter 
 //  `<div class='p' style=background-color:${InputValuesArray.at(1)}>

      var RahmenHintermBackground;
if (InputValuesArray.at(1) && UsersBackground) {
    RahmenHintermBackground = $(`<div class='bilderrahmen' style="background-color: ${InputValuesArray.at(1)}; outline: 5px solid ${InputValuesArray.at(1)};"></div>`).appendTo(myFrames);
}

      
      
             var RahmenHintermBackground02;
      if (InputValuesArray.at(1) && UsersBackground ) {
      RahmenHintermBackground = $(`<div class='bilderrahmen02' style=background-color:${InputValuesArray.at(1)}></div>`).appendTo(myFrames);   }
    //  `<div class='p' style=background-color:${InputValuesArray.at(1)}>

      
      
      
      
      
              // alles hierdrin ist zum davorvorschieben FAlls man etwas davor haben möchte
        var RahmenVormBackground = $(`<div class='ImageEffectsContainter'></div>`).appendTo(myFrames);  
      
      // checkbox Horns is added
        //  if (InputValuesArray.at(4) && InputValuesArray.at(4) == "horns") {
          //  $(`<div class='imgEffects'><img src="` + "./ImageEffects/001Overlay.png" + `"></div>`).appendTo(RahmenHintermBackground);   }
      
      
          //      if (InputValuesArray.at(5) && InputValuesArray.at(5) == "GreenDot") {
         //   $(`<div class='imgEffects'><img src="` + "./ImageEffects/002Overlay.png" + `"></div>`).appendTo(RahmenHintermBackground);   }
      
            
      
        if (InputValuesArray.at(4) && InputValuesArray.at(4) == "004Frame") {
            $(`<div class='imgEffects'><img src="` + "./ImageEffects/004Frame.png" + `"></div>`).appendTo(RahmenHintermBackground);   }
       
              if (InputValuesArray.at(5) && InputValuesArray.at(5) == "005Frame") {
            $(`<div class='imgEffects'><img src="` + "./ImageEffects/005Frame.png" + `"></div>`).appendTo(RahmenHintermBackground);   }
       
              if (InputValuesArray.at(6) && InputValuesArray.at(6) == "006Frame") {
            $(`<div class='imgEffects'><img src="` + "./ImageEffects/006Frame.png" + `"></div>`).appendTo(RahmenHintermBackground);   }
       
                    if (InputValuesArray.at(7) && InputValuesArray.at(7) == "007Frame") {
            $(`<div class='imgEffects'><img src="` + "./ImageEffects/007Frame.png" + `"></div>`).appendTo(RahmenHintermBackground);   }
      
        if (InputValuesArray.at(6) && InputValuesArray.at(6) == "009Frame") {
            $(`<div class='imgEffects'><img src="` + "./ImageEffects/009Frame.png" + `"></div>`).appendTo(RahmenHintermBackground);   }
       
      
      //     console.log(uploadedImgParsed.replace(beforeReplace,afterReplace));
    }); // the end of data forEach our function
    
  });  // end of the getJSON   
}); // end of document ready
  
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('body *').forEach(element => {
      element.addEventListener('mouseenter', function() {
        document.body.classList.add('grow-cursor');
      });

      element.addEventListener('mouseleave', function() {
        document.body.classList.remove('grow-cursor');
      });
    });
  });

// thank you https://github.com/benborgers/opensheet 


  

// thank you https://github.com/benborgers/opensheet
