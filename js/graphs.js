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
