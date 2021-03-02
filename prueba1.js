var myMap;

require([
    "esri/map",
    "esri/geometry/Extent",
    "esri/dijit/BasemapToggle",
    "esri/layers/FeatureLayer",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/arcgis/utils",
    "esri/dijit/Legend",
    "esri/dijit/Search",
    "esri/tasks/locator",
    "dojo/dom",
    "dojo/on",
    "dojo/ready",
    "dojo/domReady!"], 
    
    function(Map, Extent,BasemapToggle, FeatureLayer, ArcGISDynamicMapServiceLayer,arcgisUtils,Legend ,Search ,Locator, dom, on) {
    // myMap = new Map ("divMap", {
    //     basemap : "hybrid",
    //     // center: [ -5.97317, 37.38283],
    //     // zoom: 10,
    //     // extent: new Extent (
    //     // {
    //     // xmax: 128.76239404672356,
    //     // xmin: 124.64252099984873,
    //     // ymax: 40.40250931744487,
    //     // ymin: 37.31501410053299,
    //     // spatialReference: {
    //     //     wkid: 4326
    //     //     }
    //     extent: new Extent ({
    //         xmax: 30692833.332924638,
    //         xmin: 25918270.79812066,
    //         ymax: 6016439.822628418,
    //         ymin: 2484437.619627932,
    //         spatialReference: {wkid: 102100, latestWkid: 3857}
    //     })
    // });
    // var toggle = new BasemapToggle({
    //     map: myMap,
    //     basemap: "satellite"
    //   }, "mapita");
    //   toggle.startup();
    

    // var terremotos = new FeatureLayer ("https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0")
    // myMap.addLayer(terremotos)
    // terremotos.setDefinitionExpression("MAGNITUDE>3")

    // var usa = new ArcGISDynamicMapServiceLayer ("http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer")
    // myMap.addLayer(usa)
    // usa.setOpacity(0.45)

    // var leyenda = new Legend ({
    // map: myMap
    // },"legendDiv");
    // leyenda.startup();

    
    // var webmap = "95a0746db08c4659a4b9aee3fc30b985"

    // arcgisUtils.createMap("95a0746db08c4659a4b9aee3fc30b985","cpCenter" )
    // .then (function(response){
    //     console.log(response)

    //     myMap2 = response.map;
        

    //     // var legendLayers = arcgisUtils.getLegendLayers(response);
    //     // var leyenda = new Legend ({
    //     //     map: myMap2,
    //     //     layerInfo: legendLayers
    //     //     },"legendDiv");
    //     //     leyenda.startup();
            

    //     var search = new Search({
    //         map: myMap2,
    //       },"search");
    //       search.startup();

        // ---------

        const mapMain = new Map({
            basemap: 'topo', 
            center: [-122.25, 3.52]
        })
        var taskLocator;

        taskLocator = new Locator ("http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");

        on(dom.byId("btnLocate"), "click",
        doAddressToLocation);

        function doAddressToLocation() {
            console.log("bien")
            var locparams = {
                address:{"SingleLine":"380 New York st, Redlands"}
            };
            taskLocator.addressToLocation(locparams)
        }
        taskLocator.on("address-to-locations-complete", showresults)


        function showresults(){
             console.log("lo has hecho bien")
             var symbolMarker = new SimpleMarkerSymbol();
                symbolMarker.setStyle(SimpleMarkerSymbol.STYLE_CIRCLE);
                symbolMarker.setColor(new Color([255, 0, 0, 0.75]));
                var font = new Font("14pt", Font.STYLE_NORMAL, Font.VARIANT_NORMAL, "Helvetica");
           
        }   

        })


        

    // })
    
    
