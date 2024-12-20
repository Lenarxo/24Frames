

//der Editor

function CopyEachOne() {
    ChangeEditorOnce();
var AllText ="";    
const arrayInputs = [ //here the IDS of the inputs which are used for the clipboard
    "YourName",
    "Color",
    "Bg-Image",
    "HeaderName",
    
];
    
    
    // sends stuff to the clipboard
arrayInputs.forEach(function(Inputs) {

    var copyTrenner = document.getElementById(Inputs).value + "Ω"; //trenn von Inputs
    AllText += document.getElementById(Inputs).value + "Ω" ; //append to existing
 console.log("These are your inputs right now:"+AllText);
    navigator.clipboard.writeText(AllText);
}); 
}


//changes Site
function ChangeEditorOnce(){
        document.body.style.background = document.getElementById("Color").value ;
       // document.getElementById("Numbersgoer").textContent = "hello "+document.getElementById("HeaderName").value ;
    
}
    /*

function CopyTheForm() {
    
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  //navigator.clipboard.writeText(copyText.value);
    navigator.clipboard.writeContinue(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
} 
*/
