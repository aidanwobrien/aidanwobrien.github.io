ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32617").setExtent([520425.109633, 4772569.535595, 860691.547368, 4988903.314300]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LowerTier_1 = new ol.format.GeoJSON();
var features_LowerTier_1 = format_LowerTier_1.readFeatures(json_LowerTier_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32617'});
var jsonSource_LowerTier_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowerTier_1.addFeatures(features_LowerTier_1);
var lyr_LowerTier_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LowerTier_1, 
                style: style_LowerTier_1,
                interactive: true,
                title: '<img src="styles/legend/LowerTier_1.png" /> Lower Tier'
            });
var format_UpperTier_2 = new ol.format.GeoJSON();
var features_UpperTier_2 = format_UpperTier_2.readFeatures(json_UpperTier_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32617'});
var jsonSource_UpperTier_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpperTier_2.addFeatures(features_UpperTier_2);
var lyr_UpperTier_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UpperTier_2, 
                style: style_UpperTier_2,
                interactive: true,
                title: '<img src="styles/legend/UpperTier_2.png" /> Upper Tier'
            });
var format_ORM_LAND_USE_DESIGNATION_3 = new ol.format.GeoJSON();
var features_ORM_LAND_USE_DESIGNATION_3 = format_ORM_LAND_USE_DESIGNATION_3.readFeatures(json_ORM_LAND_USE_DESIGNATION_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32617'});
var jsonSource_ORM_LAND_USE_DESIGNATION_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORM_LAND_USE_DESIGNATION_3.addFeatures(features_ORM_LAND_USE_DESIGNATION_3);
var lyr_ORM_LAND_USE_DESIGNATION_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ORM_LAND_USE_DESIGNATION_3, 
                style: style_ORM_LAND_USE_DESIGNATION_3,
                interactive: true,
                opacity: 0.4,
    title: 'ORM_LAND_USE_DESIGNATION<br />\
    <img src="styles/legend/ORM_LAND_USE_DESIGNATION_3_0.png" /> Countryside Area<br />\
    <img src="styles/legend/ORM_LAND_USE_DESIGNATION_3_1.png" /> Natural Core Area<br />\
    <img src="styles/legend/ORM_LAND_USE_DESIGNATION_3_2.png" /> Natural Linkage Area<br />\
    <img src="styles/legend/ORM_LAND_USE_DESIGNATION_3_3.png" /> Palgrave Estates Residential Community<br />\
    <img src="styles/legend/ORM_LAND_USE_DESIGNATION_3_4.png" /> Rural Settlement<br />\
    <img src="styles/legend/ORM_LAND_USE_DESIGNATION_3_5.png" /> Settlement Area<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_LowerTier_1.setVisible(true);lyr_UpperTier_2.setVisible(true);lyr_ORM_LAND_USE_DESIGNATION_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LowerTier_1,lyr_UpperTier_2,lyr_ORM_LAND_USE_DESIGNATION_3];
lyr_LowerTier_1.set('fieldAliases', {'MUNID': 'MUNID', 'MAH_CODE': 'MAH_CODE', 'SGC_CODE': 'SGC_CODE', 'ASSESSMENT': 'ASSESSMENT', 'LEGAL_NAME': 'LEGAL_NAME', 'STATUS': 'STATUS', 'EXTENT': 'EXTENT', 'MSO': 'MSO', 'NAME_PREFI': 'NAME_PREFI', 'UPPER_TIER': 'UPPER_TIER', 'NAME': 'NAME', 'Hectares': 'Hectares', 'O_Plan': 'Official Plan', });
lyr_UpperTier_2.set('fieldAliases', {'EXTENT': 'EXTENT', 'MSO': 'MSO', 'MUNID': 'MUNID', 'MAH_CODE': 'MAH_CODE', 'SGC_CODE': 'SGC_CODE', 'ASSESSMENT': 'ASSESSMENT', 'LEGAL_NAME': 'LEGAL_NAME', 'NAME': 'NAME', 'STATUS': 'STATUS', 'NAME_PREFI': 'NAME_PREFI', 'Hectares': 'Hectares', 'O_Plan': 'Official Plan', });
lyr_ORM_LAND_USE_DESIGNATION_3.set('fieldAliases', {'OGF_ID': 'OGF_ID', 'USE_DESIG': 'USE_DESIG', 'GUNT_DES': 'GUNT_DES', 'GEO_UPD_DT': 'GEO_UPD_DT', 'EFF_DATE': 'EFF_DATE', });
lyr_LowerTier_1.set('fieldImages', {'MUNID': 'Hidden', 'MAH_CODE': 'Hidden', 'SGC_CODE': 'Hidden', 'ASSESSMENT': 'Hidden', 'LEGAL_NAME': 'TextEdit', 'STATUS': 'Hidden', 'EXTENT': 'Hidden', 'MSO': 'Hidden', 'NAME_PREFI': 'Hidden', 'UPPER_TIER': 'Hidden', 'NAME': 'Hidden', 'Hectares': 'TextEdit', 'O_Plan': 'TextEdit', });
lyr_UpperTier_2.set('fieldImages', {'EXTENT': 'Hidden', 'MSO': 'Hidden', 'MUNID': 'Hidden', 'MAH_CODE': 'Hidden', 'SGC_CODE': 'Hidden', 'ASSESSMENT': 'Hidden', 'LEGAL_NAME': 'TextEdit', 'NAME': 'Hidden', 'STATUS': 'Hidden', 'NAME_PREFI': 'Hidden', 'Hectares': 'TextEdit', 'O_Plan': 'TextEdit', });
lyr_ORM_LAND_USE_DESIGNATION_3.set('fieldImages', {'OGF_ID': 'Hidden', 'USE_DESIG': 'TextEdit', 'GUNT_DES': 'Hidden', 'GEO_UPD_DT': 'Hidden', 'EFF_DATE': 'Hidden', });
lyr_LowerTier_1.set('fieldLabels', {'LEGAL_NAME': 'header label', 'Hectares': 'header label', 'O_Plan': 'header label', });
lyr_UpperTier_2.set('fieldLabels', {'LEGAL_NAME': 'header label', 'Hectares': 'header label', 'O_Plan': 'header label', });
lyr_ORM_LAND_USE_DESIGNATION_3.set('fieldLabels', {'USE_DESIG': 'header label', });
lyr_ORM_LAND_USE_DESIGNATION_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});