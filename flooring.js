//JS for the flooring page

function getRoomMeasure() { //updated method for V2.0
    var theForm = document.forms["boxes"];
    var measure = parseFloat(theForm.elements["enterArea"].value);
    var sizeBox = parseFloat(theForm.elements["sqperbox"].value);
    var priceOfBox = parseFloat(theForm.elements["pricePerBox"].value);
    var boxesNeeded = Math.ceil((measure*1.1)/sizeBox);
    var totalPrice = (boxesNeeded*priceOfBox).toFixed(2);
    var pricePerFoot = (priceOfBox/sizeBox).toFixed(2);
    document.getElementById('boxesCalc').innerHTML = 
        "You will need "+boxesNeeded+" boxes and the total cost is $"+
        totalPrice+". Price per square foot is: $"+pricePerFoot;
}
function convertUnits() {
    var theForm = document.forms["areaConversion"];
    var choice = theForm.elements["initialUnit"];
    var amount = parseFloat(theForm.elements["amount"].value);
    var sqfeet;
    var sqmeter;
    var sqyard;
    var printOut;
    if (choice.value=="SQFT") {
        sqfeet = amount;
        sqmeter = (amount/10.7639).toFixed(2);
        sqyard = (amount/9).toFixed(2);
        printOut = amount+" square feet equals to "+sqmeter+
        " square meters, or "+sqyard+" square yards.";

    }
    else if (choice.value=="SQMT") {
        sqmeter= amount;
        sqfeet = (amount*10.7639).toFixed(2);
        sqyard = (amount*0.836127).toFixed(2);
        printOut= amount+" square meters equals to "+sqfeet+
        " square feet, or "+sqyard+" square yards."    }

    document.getElementById('outputConversion').innerHTML = printOut;


}

function cutBlind() {
    var theForm = document.forms["blinds"];
    var initialSize = parseFloat(theForm.elements["initialSize"].value);
    var finalSize = parseFloat(theForm.elements["finalSize"].value);
    var eachSide = (initialSize - finalSize) / 2;

    printOut="You must cut: "+eachSide.toFixed(2)+" inches from each side.";
        
    
    document.getElementById('blindOutput').innerHTML = printOut;
}

function myArea() {
    var theForm = document.forms["area"];
    var feet1=parseFloat(theForm.elements["feet1"].value);
    var inches1=parseFloat(theForm.elements["inches1"].value);
    var feet1b=parseFloat(theForm.elements["feet1b"].value);
    var inches1b=parseFloat(theForm.elements["inches1b"].value);  
    var feet2=parseFloat(theForm.elements["feet2"].value);  
    var inches2=parseFloat(theForm.elements["inches2"].value); 
    var feet2b=parseFloat(theForm.elements["feet2b"].value); 
    var inches2b=parseFloat(theForm.elements["inches2b"].value); 
    var feet3=parseFloat(theForm.elements["feet3"].value);
    var inches3=parseFloat(theForm.elements["inches3"].value);
    var feet3b=parseFloat(theForm.elements["feet3b"].value);
    var inches3b=parseFloat(theForm.elements["inches3b"].value); 
    
    


    var area1 = (feet1+(inches1/12))*(feet1b+(inches1b/12));
    var area2 = (feet2+(inches2/12))*(feet2b+(inches2b/12));
    var area3 = (feet3+(inches3/12))*(feet3b+(inches3b/12));

    var totalArea= area1+area2+area3;


    var display1="Total area: "+totalArea.toFixed(2)+" square feet";

    
    document.getElementById('displayArea').innerHTML = ""+display1;



}