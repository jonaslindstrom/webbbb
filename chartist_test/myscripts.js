

var data = {
  labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
  series: [
    [10, 5, 1, 7, 5, 20],
    [3, 2, 9, 5, 4, 6],
    [2, 1, -3, -4, -2, 0],
    [25, 25, 25, 10, -2, 0]
  ]
};

// We are setting a few options for our chart and override the defaults
var options = {
  // Don't draw the line chart points
  showPoint: true,
  // Disable line smoothing
  lineSmooth: true,
  // X-Axis specific configuration
  axisX: {
    // We can disable the grid for this axis
    showGrid: true,
    // and also don't show the label
    showLabel: true
  },
  // Y-Axis specific configuration
  axisY: {
    // Lets offset the chart a bit from the labels
    offset: 60,
    showGrid: false,
    // The label interpolation function enables you to modify the values
    // used for the labels on each axis. Here we are converting the
    // values into million pound.
    labelInterpolationFnc: function(value) {
      return '$' + value + 'm';
    }

  }
};

// All you need to do is pass your configuration as third parameter to the chart function
new Chartist.Line('.ct-chart', data, options);