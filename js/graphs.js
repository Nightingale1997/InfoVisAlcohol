var chart = bb.generate({
    data: {
        columns: [
	["One third", 33.3],
	["Three thirds", 66.6]
    ],
        type: "pie"
    },
    bindto: "#pieChart"
    // Hide all legend.
});
chart.legend.hide();

var chart2 = bb.generate({
  data: {
    columns: [
	["Male", 17.4, 13.2, 17.6, 20.6, 18.3],
	["Female", 6.1, 4.6, 6.2, 7.2, 4.7],
  ["Both sexes", 12.5, 9.4, 12.8, 14.8, 11.3]
    ],
    type: "bar"
  },
  bar: {
    width: {
      ratio: 0.5
    }
  },
  axis: {
    labels: true,
    x: {
      type: 'category',
      tick: {
        format: function(index) {
          if(index === 0) {
            return "Sweden";
          } 
          if(index === 1) {
            return "Norway";
          } 
          if(index === 2) {
            return "Iceland";
          } 
          if(index === 3) {
            return "Finland";
          } 
          if(index === 4) {
            return "Europe";
          } 
        }
      }
    }
  },
  bindto: "#barChart"
}); 
