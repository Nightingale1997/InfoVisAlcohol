google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyDYiFq7i8Oo4f93jN7jQCfxXGFg_aDro-w'
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
          ['Country', 'Monopolies since', {role: 'tooltip', p:{html:true}}],
          ['Sweden', 1905, '<p> In 1905 Sweden introduced <br> its monopolies and limited <br> the access to alcohol.</p>'],
          ['Norway', 1919, '<p> In 1919 Norway introduced <br> its monopolies and limited <br> the access to alcohol.</p>'],
          ['Iceland', 1915, '<p> In 1915 Iceland introduced <br> its monopolies and limited <br> the access to alcohol.</p>'],
          ['Finland', 1933, '<p> In 1933 Finland introduced <br> its monopolies and limited <br> the access to alcohol.</p>']
        ]);

    var options = {
        region: '154',
        colorAxis: {
            colors: ['#42b3f5', '#217aad', '#0f4b6e']
        },
        datalessRegionColor: '#e8d8be',
        legend: {
            numberFormat: '#'
        },
         tooltip:{
             isHtml: true
         },
        backgroundColor: '#f5f5dc',
        
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}
