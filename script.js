var data = {"labels": ["12 April", "13 April", "14 April", "15 April", "16 April", "17 April", "18 April"], "datasets": [{"languages": [["JavaScript", "Bash", "Makefile"], ["Ruby", "JavaScript", "HTML"], ["Other", "JavaScript", "Ruby"], [], ["JavaScript", "Ruby"], ["JavaScript", "C++", "Other"], ["JavaScript", "JSON", "Other"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 19 mins", "1 hr 6 mins", "17 mins", "0 secs", "1 hr 29 mins", "2 hrs 15 mins", "1 hr 45 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.3516666666666666, 1.1405555555555555, 0.3013888888888889, 0.0, 1.4891666666666667, 2.2758333333333334, 1.781111111111111], "label": "Dataset"}]};
var totalTime = "10 hours 20 minutes";
var languages = ["JavaScript", "Ruby", "Bash"];
var ctx = document.getElementById("chart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data, {
  tooltipTemplate: function(valuesObject){
    var label = valuesObject.label;
    var idx = data.labels.indexOf(label);
    var result = data.datasets[0].time[idx];
    if (data.datasets[0].languages[idx].length !== 0)
      result += " [" + data.datasets[0].languages[idx].join(", ") + "]"
    return result;
  }
});
document.getElementById("summary").innerHTML = "I have written code for " + totalTime + " in the last week in mostly " + languages.join(", ") + ".";
