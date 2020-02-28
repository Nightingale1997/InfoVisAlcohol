var chart = bb.generate({
    data: {
        columns: [
	["Habitable Planets", 0.4],
	["Uninhabitable Planets", 99.6]
    ],
        type: "pie"
    },
    bindto: "#pieChart"
    // Hide all legend.
});
chart.legend.hide();
