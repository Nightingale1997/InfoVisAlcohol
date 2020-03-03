

var chart = bb.generate({
  data: {
    columns: [


      ["Denmark", 11.7, 12.1, 13.1, 12.7, 10.3, 10.5, 9.3, 9.4, null, null, 9.4, 9.1],
      ["Sweden", 6.4, 6.2, 6.2, 6.5, 7.3, 7.4, 7.2, 7.3, 7.2, 7.2, 7.2, 7.1],
      ["Iceland", 5.1, 4.7, 6.2, 7.1, 8.3, 8.1, 7.8, 7.3, 7.5, 7.7, 7.5, 7.7],
      ["Finland", 9.5, 8.3, 8.6, 10, 9.7, 9.8, 9.3, 9.1, 8.8, 8.5, 8.4, 8.4]
    ]
  },

  axis: {
    labels: true,
    x: {
      type: 'category',
      tick: {
        format: function (index) {
          if (index < 4) {
            return (5 * index) + 1990;
          }
          else {
            return 2010 + (index - 4);
          }
        }
      }
    }
  },
  bindto: "#lineChart"
});
