# Info-Viz
Project for CSC411 - Information Visualization at the University of Victoria

## Done:
   colour scale for LFLs in each CSD legend and repositioned
   marker bar for median income
   formatted $, income, age 


## TODO
1) Implement variable switcher in Chart.js:
    - % visible minorities & non-official languages
    - houses & income
    - houses & population density
    - age & income
    - LFL density and population density
    This should switch the data point from the JSON file,
    Currently the 1 chart just pulls from x & y values, which are age & income
2) Adjust transitions in motionConfig
3) Info panel based on Chart.js onClick
4) Load LFL locations into map on chart click
5) Highligh chart clicked mark
6) Update data JSON to have demographics then all GeoJSON markers for map
7) Leaflet interactivity based on Chart.js onClick (Redux)
8) Center map properly
9) Styling

## BONUS TODO
1) Make swappable colour scheme for LFL#s and LFL/Sqkm
