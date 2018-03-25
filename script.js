console.log("test");

var titleList = ["Social Security, Unemployment, and Labor", "Medicare and Health", "Defense", "Interest", "Veterans Services", "Education", "Transportation", "Justice", "Interantional Affairs", "Environment", "Science", "Other"];
var data = [1410, 1110, 508, 389, 163, 108, 97.8, 52.4, 46.2, 37.8, 27.3, 66.2]
var otherData = [1450, 1140, 503, 434, 166, 112, 103, 52.2, 44, 37.7, 27.2, 66.7]

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");

var title = document.getElementById("title");

function update(data) {
    console.log(data);
    bar = chart.selectAll("div");
    barUpdate = bar.data(data);
    barUpdate.transition().duration(500).style("width", function(d) {return 140 + d * 0.4 + "px";}).style("height", "20px");
    barUpdate.text(function(d) {return "$" + d + " Billion"});
    bar.data(titleList).append("b").attr("style","float:left").text(function(d){return d;});
    if (data[0] == 1410) {
	title.innerHTML = "2019 Federal Budget";
    }
    else {
	title.innerHTML = "2020 Federal Budget";
    }
    
}

update(data);

var dataToggle = document.getElementById("data");
var otherDataToggle = document.getElementById("otherData");
dataToggle.addEventListener('click', function() {update(data)});
otherDataToggle.addEventListener('click', function() {update(otherData)});

