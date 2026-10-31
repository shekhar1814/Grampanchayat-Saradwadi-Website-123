function totalTax() {

    // Get input values from HTML
    let buildYear =
        Number(document.getElementById(num1).value);

    let areaOfBuilding =
        Number(document.getElementById(num2).value);

    let annualValueRateOfLand =
        Number(document.getElementById(num3).value);
        
    let rateOfConstructionAsPerTypeOfConstructionOfBuilding =
        Number(document.getElementById(num4).value);

    let weightageOfBuildingAsPerItsUsages =
        Number(document.getElementById(num5).value);

    let rateOfDepreciation =
        Number(document.getElementById(num6).value);

    let rateOfConstruction =
        Number(document.getElementById(num7).value);
    // Calculate tax
    let totalTax = (areaOfBuilding * annualValueRateOfLand) + (areaOfBuilding * rateOfConstructionAsPerTypeOfConstructionOfBuilding * rateOfDepreciation);

    // Display result
    document.getElementById("totalTax").innerHTML = "totalTax: " + totalTax.toFixed(2);


}