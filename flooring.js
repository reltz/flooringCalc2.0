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

    printOut="You must cut: "+eachSide.toFixed(2)+" inches from each side."
        
    
    document.getElementById('blindOutput').innerHTML = printOut;
}