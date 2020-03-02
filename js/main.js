      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyDYiFq7i8Oo4f93jN7jQCfxXGFg_aDro-w'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Monopolies since'],
          ['Sweden', 1905],
          ['Norway', 1919],
          ['Iceland', 1915],
          ['Finland', 1933]
        ]);

        var options = {
         region: '154',
         colorAxis: {colors: ['#42b3f5', '#217aad', '#0f4b6e']},
         datalessRegionColor: 'white',
         legend: {numberFormat:'#'}
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
