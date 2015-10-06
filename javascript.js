var chart = new Chartist.Line('.ct-chart', {
  labels: ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'],
  series: [ 
  
   [21.8, 21.3, 21.1, 22.4, 22.5, 22.4, 21.4, 21.5, 21.1, 21.0, 20.1, 19.1, 19.2, 18.5, 18.1, 16.9],
   [14.5, 14.3, 14.4, 15.8, 16.0, 16.0, 15.2, 15.4, 15.3, 14.9, 14.2, 13.2, 12.6, 12.3, 12.0, 10.8],
   [36.6, 35.6, 35.6, 38.3, 38.6, 38.4, 36.6, 36.9, 36.4, 35.9, 34.3, 32.3, 31.8, 30.8, 30.2, 27.8]
 
  ]

}, {
  low: 8,
  showArea: true,
  showPoint: false,
  fullWidth: true,
  lineSmooth: false
  
    
});

chart.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});
