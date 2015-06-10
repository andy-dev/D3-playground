if(!d3.chart) d3.chart = {};

d3.chart.table = function(){
  var data; //using js scope
  var width; // basically these will be our getter and setter


  function chart(container){
    console.log(data)
  }

  chart.data = function(value){
    if(!arguments.length) return data;
    data = value;
    return chart;
  }

  chart.width = function(value){
    if(!arguments.length) return data;
    width = value;
    return chart;
  }

// return chart function
return chart;
}


