function checkRisk() {

    let village = document.getElementById("village").value;
    let water = parseFloat(document.getElementById("water").value);
    let ph = parseFloat(document.getElementById("ph").value);
    let turbidity = parseFloat(document.getElementById("turbidity").value);

    let risk = "";
    let advice = "";

    if (water >= 80 && ph >= 6.5 && ph <= 8.5 && turbidity <= 5) {
        risk = "LOW";
        advice = "✅ Water is safe for drinking.";
    }
    else if (water >= 50) {
        risk = "MEDIUM";
        advice = "⚠️ Boil water before drinking.";
    }
    else {
        risk = "HIGH";
        advice = "❌ Unsafe water. Immediate treatment is required.";
    }

    document.getElementById("villageResult").innerHTML = village;
    document.getElementById("waterResult").innerHTML = water + "%";
    document.getElementById("risk").innerHTML = risk;
    document.getElementById("advice").innerHTML = advice;
        }
