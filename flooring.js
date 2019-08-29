//JS for the flooring page

function getRoomMeasure() { //updated method for V2.0
    var theForm = document.forms.boxes;
    var measure = parseFloat(theForm.elements.enterArea.value);
    var sizeBox = parseFloat(theForm.elements.sqperbox.value);
    var priceOfBox = parseFloat(theForm.elements.pricePerBox.value);
    var margin = theForm.elements.tenpercent;
    if (margin.checked === true) {
        measure = measure * 1.1;
    }

    var EPSILON = 0.00001;
    var boxesNeeded = Math.ceil(((measure) / sizeBox) - EPSILON);
    var totalPrice = (boxesNeeded * priceOfBox).toFixed(2);
    var pricePerFoot = (priceOfBox / sizeBox).toFixed(2);

    document.getElementById('boxesCalc').innerHTML =
        `You need <strong> ${boxesNeeded} boxes. </strong><br> Cost is <strong>$ ${totalPrice}
        </strong>. <br> Price per square foot is: <strong>$ ${pricePerFoot} </strong>`;
}
function convertUnits() {
    var theForm = document.forms.areaConversion;
    var choice = theForm.elements.initialUnit;
    var amount = parseFloat(theForm.elements.amount.value);
    var sqfeet;
    var sqmeter;
    var sqyard;
    var sqInches;

    var printOut;

    if (choice.value === "SQFT") {
        sqfeet = amount;
        sqmeter = (amount / 10.7639).toFixed(2);
        sqyard = (amount / 9).toFixed(2);
        sqInches = (amount * 144).toFixed(2);

    }
    else if (choice.value === "SQMT") {
        sqmeter = amount;
        sqfeet = (amount * 10.7639).toFixed(2);
        sqyard = (amount * 0.836127).toFixed(2);
        sqInches = (sqfeet * 144).toFixed(2);
    }

    else if (choice.value === "SQIN") {
        sqInches = amount;
        sqfeet = (sqInches / 144).toFixed(2);
        sqyard = (sqfeet / 9).toFixed(2);
        sqmeter = (sqfeet / 10.7639).toFixed(2);
    }

    else if (choice.value === "SQYA") {
        sqyard = amount;
        sqfeet = (sqyard * 9).toFixed(2);
        sqInches = (sqfeet * 144).toFixed(2);
        sqmeter = (sqfeet / 10.7639).toFixed(2);
    }

    printOut = `SqFeet: ${sqfeet} </br> SqInches: ${sqInches} </br> SqYards: ${sqyard} </br> SqMeters: ${sqmeter}`;




    document.getElementById('outputConversion').innerHTML = printOut;


}

function cutBlind() {
    var theForm = document.forms.blinds;
    var initialSize = parseFloat(theForm.elements.initialSize.value);
    var finalSize = parseFloat(theForm.elements.finalSize.value);
    var sidescut = theForm.elements.cutsides;
    var oneside = (initialSize - finalSize);
    var eachSide = (initialSize - finalSize) / 2;

    //Handle fraction display
    const fractions = {
        0.0625: "1/16",
        0.1250: "1/8",
        0.1875: "3/16",
        0.25: "1/4",
        0.3125: "5/16",
        0.4375: "7/16",
        0.5: "1/2",
        0.5625: "9/16",
        0.6250: "5/8",
        0.6875: "11/16",
        0.75: "3/4",
        0.8125: "13/16",
        0.8750: "7/8",
        0.9375: "15/16"
    };

    const keys = Object.keys(fractions);

    function calcFraction(x) {
        let y = x % 1; // decimal part
        //console.log(`decimal is  ${y}`);
        x = x - y;
       // console.log(`integer part is ${x}`);

        let dif = 1;
        let decimalKey = 0;
        let finalFraction = "";

        keys.forEach(element => {
            if (Math.abs(y - element) < dif) {
                dif = Math.abs(y - element);
                decimalKey = element;
                //console.log("difference is: ",dif, "element is: ", decimalKey, "fraction is: ", fractions[decimalKey]);
            }

        });

        finalFraction = fractions[decimalKey];
        

        return  (y>0.03125) ? `Same as ${x} and ${finalFraction}.` : ``;

    }

    if (sidescut.value === "2sided") {
        let fractionVersion = calcFraction(eachSide);
        printOut = `You must cut: ${eachSide.toFixed(2)} inches from each side. <br>
            ${fractionVersion}
        `;
    }
    else if (sidescut.value === "1sided") {
        let fractionVersion = calcFraction(oneside);
        printOut = `You must cut: ${oneside.toFixed(2)} inches from one side. <br>
        ${fractionVersion}`;
    }


    document.getElementById('blindOutput').innerHTML = printOut;
}

function myArea() {
    var theForm = document.forms.area;
    var feet1 = parseFloat(theForm.elements.feet1.value);
    var inches1 = parseFloat(theForm.elements.inches1.value);
    var feet1b = parseFloat(theForm.elements.feet1b.value);
    var inches1b = parseFloat(theForm.elements.inches1b.value);
    var feet2 = parseFloat(theForm.elements.feet2.value);
    var inches2 = parseFloat(theForm.elements.inches2.value);
    var feet2b = parseFloat(theForm.elements.feet2b.value);
    var inches2b = parseFloat(theForm.elements.inches2b.value);
    var feet3 = parseFloat(theForm.elements.feet3.value);
    var inches3 = parseFloat(theForm.elements.inches3.value);
    var feet3b = parseFloat(theForm.elements.feet3b.value);
    var inches3b = parseFloat(theForm.elements.inches3b.value);




    var area1 = (feet1 + (inches1 / 12)) * (feet1b + (inches1b / 12));
    var area2 = (feet2 + (inches2 / 12)) * (feet2b + (inches2b / 12));
    var area3 = (feet3 + (inches3 / 12)) * (feet3b + (inches3b / 12));

    var totalArea = area1 + area2 + area3;


    var display1 = `Total area: ${totalArea.toFixed(2)} square feet`;


    document.getElementById('displayArea').innerHTML = "" + display1;



}

function clearBoxes() {
    document.getElementById('boxesCalc').innerHTML = "";
}
function clearConversion() {
    document.getElementById('outputConversion').innerHTML = "";
}
function clearMeasurements() {
    document.getElementById('displayArea').innerHTML = "";
}

function clearBlinds() {
    document.getElementById('blindOutput').innerHTML = "";
}