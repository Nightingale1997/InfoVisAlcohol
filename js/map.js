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
          ['Sweden', 1905, '<ul><li><b>Monopolies introduced in:</b> 1905</li><li><b>Minimum legal age for purchase:</b> 18 years at bars and 20 at stores</li></ul>'],
          ['Norway', 1919, '<ul><li><b>Monopolies introduced in:</b> 1919</li><li><b>Minimum legal age for  purchase:</b> 18 years at bars and 20 at stores</li></ul>'],
          ['Iceland', 1915, '<ul><li><b>Monopolies introduced in:</b> 1915</li><li><b>Minimum legal age for  purchase:</b> 20 years at all locations</li></ul>'],
          ['Finland', 1933, '<ul><li><b>Monopolies introduced in:</b> 1933</li><li><b>Minimum legal age for  purchase:</b> 18 years at bars and 20 at stores</li></ul>']
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
