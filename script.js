var data = {"labels": ["17 June", "18 June", "19 June", "20 June", "21 June", "22 June", "23 June"], "datasets": [{"languages": [[], ["HTML", "Rust"], ["Rust", "HTML", "JSON"], ["Rust"], ["Rust", "JavaScript", "CSS"], ["Rust", "Other"], ["YAML"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "14 mins", "5 hrs 59 mins", "2 hrs 2 mins", "3 hrs 18 mins", "5 hrs 25 mins", "0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.25083333333333335, 6.004166666666666, 2.0508333333333333, 3.325, 5.45, 0.0030555555555555557], "label": "Dataset"}]};
var totalTime = "17 hours 05 minutes";
var languages = ["Rust", "HTML", "JavaScript"];
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
document.getElementById("summary").innerHTML = "I have coded for <span class='stat'>" + totalTime + "</span> in the last week primarily in <span class='stat'>" + languages.join(", ") + "</span>";
