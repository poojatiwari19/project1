

    google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year',  'checkin', 'Checout'],
          ['2014',  400, 200],
          ['2015',  460, 250],
          ['2016',  1120, 300],
          ['2017',  540, 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Checkin, Checkout : 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }



      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
       ['Task', 'Hours per Day'],
        ['Checked Out',     11],
        ['In Stock',      2],
        ['In Storage',  2],
        ['In Use', 2],
        ['Out for Repair',    7]
      ]);

      var options = {
          title: 'My Daily Activities',
          pieHole: 0.4,
        };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }