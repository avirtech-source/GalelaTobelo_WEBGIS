var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_DesaEfiEfi_1 = new ol.layer.Tile({
            'title': 'Desa Efi-Efi',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.maptiler.com/tiles/774a2de2-c90d-489a-8275-267f7efa9bae/{z}/{x}/{y}.webp?key=R5q1lcrbXF13ytr6z0CN'
            })
        });
var format_Pohon_Desa_Efiefi_2 = new ol.format.GeoJSON();
var features_Pohon_Desa_Efiefi_2 = format_Pohon_Desa_Efiefi_2.readFeatures(json_Pohon_Desa_Efiefi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pohon_Desa_Efiefi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pohon_Desa_Efiefi_2.addFeatures(features_Pohon_Desa_Efiefi_2);
var lyr_Pohon_Desa_Efiefi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pohon_Desa_Efiefi_2, 
                style: style_Pohon_Desa_Efiefi_2,
                popuplayertitle: "Pohon_Desa_Efi-efi",
                interactive: true,
                title: '<img src="styles/legend/Pohon_Desa_Efiefi_2.png" /> Pohon_Desa_Efi-efi'
            });
var format_AOI_GalelaTobelo_3 = new ol.format.GeoJSON();
var features_AOI_GalelaTobelo_3 = format_AOI_GalelaTobelo_3.readFeatures(json_AOI_GalelaTobelo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOI_GalelaTobelo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOI_GalelaTobelo_3.addFeatures(features_AOI_GalelaTobelo_3);
var lyr_AOI_GalelaTobelo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOI_GalelaTobelo_3, 
                style: style_AOI_GalelaTobelo_3,
                popuplayertitle: "AOI_Galela-Tobelo",
                interactive: true,
                title: '<img src="styles/legend/AOI_GalelaTobelo_3.png" /> AOI_Galela-Tobelo'
            });
var format_Jalan_Kat2_Efiefi_4 = new ol.format.GeoJSON();
var features_Jalan_Kat2_Efiefi_4 = format_Jalan_Kat2_Efiefi_4.readFeatures(json_Jalan_Kat2_Efiefi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Kat2_Efiefi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Kat2_Efiefi_4.addFeatures(features_Jalan_Kat2_Efiefi_4);
var lyr_Jalan_Kat2_Efiefi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Kat2_Efiefi_4, 
                style: style_Jalan_Kat2_Efiefi_4,
                popuplayertitle: "Jalan_Kat2_Efi-efi",
                interactive: false,
                title: '<img src="styles/legend/Jalan_Kat2_Efiefi_4.png" /> Jalan_Kat2_Efi-efi'
            });
var format_Jalan_Kat1_Efiefi_5 = new ol.format.GeoJSON();
var features_Jalan_Kat1_Efiefi_5 = format_Jalan_Kat1_Efiefi_5.readFeatures(json_Jalan_Kat1_Efiefi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Kat1_Efiefi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Kat1_Efiefi_5.addFeatures(features_Jalan_Kat1_Efiefi_5);
var lyr_Jalan_Kat1_Efiefi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Kat1_Efiefi_5, 
                style: style_Jalan_Kat1_Efiefi_5,
                popuplayertitle: "Jalan_Kat1_Efi-efi",
                interactive: false,
                title: '<img src="styles/legend/Jalan_Kat1_Efiefi_5.png" /> Jalan_Kat1_Efi-efi'
            });
var format_Pemukiman_Efiefi_6 = new ol.format.GeoJSON();
var features_Pemukiman_Efiefi_6 = format_Pemukiman_Efiefi_6.readFeatures(json_Pemukiman_Efiefi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_Efiefi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_Efiefi_6.addFeatures(features_Pemukiman_Efiefi_6);
var lyr_Pemukiman_Efiefi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_Efiefi_6, 
                style: style_Pemukiman_Efiefi_6,
                popuplayertitle: "Pemukiman_Efi-efi",
                interactive: false,
                title: '<img src="styles/legend/Pemukiman_Efiefi_6.png" /> Pemukiman_Efi-efi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DesaEfiEfi_1.setVisible(true);lyr_Pohon_Desa_Efiefi_2.setVisible(true);lyr_AOI_GalelaTobelo_3.setVisible(true);lyr_Jalan_Kat2_Efiefi_4.setVisible(true);lyr_Jalan_Kat1_Efiefi_5.setVisible(true);lyr_Pemukiman_Efiefi_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DesaEfiEfi_1,lyr_Pohon_Desa_Efiefi_2,lyr_AOI_GalelaTobelo_3,lyr_Jalan_Kat2_Efiefi_4,lyr_Jalan_Kat1_Efiefi_5,lyr_Pemukiman_Efiefi_6];
lyr_Pohon_Desa_Efiefi_2.set('fieldAliases', {'X_Center': 'X_Center', 'Y_Center': 'Y_Center', 'BUFF_DIST': 'BUFF_DIST', 'MAX': 'MAX', 'Kelas_CHM': 'Kelas_CHM', 'ORIG_FID': 'ORIG_FID', 'Elevation': 'Elevation', 'Elev_M': 'Elev_M', 'Height_M': 'Height_M', 'Class': 'Class', });
lyr_AOI_GalelaTobelo_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'J_Pohon': 'J_Pohon', 'L_Desa_Ha': 'L_Desa_Ha', 'L_pmkmn_Ha': 'L_pmkmn_Ha', 'Jl_Kat1_Ha': 'Jl_Kat1_Ha', 'Jl_Kat2_Ha': 'Jl_Kat2_Ha', });
lyr_Jalan_Kat2_Efiefi_4.set('fieldAliases', {'BUFF_DIST': 'BUFF_DIST', 'Luasan_Ha': 'Luasan_Ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Jalan_Kat1_Efiefi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BUFF_DIST': 'BUFF_DIST', 'Luasan_Ha': 'Luasan_Ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Pemukiman_Efiefi_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Luasan_Ha': 'Luasan_Ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Pohon_Desa_Efiefi_2.set('fieldImages', {'X_Center': 'TextEdit', 'Y_Center': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'MAX': 'TextEdit', 'Kelas_CHM': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Elevation': 'TextEdit', 'Elev_M': 'TextEdit', 'Height_M': 'TextEdit', 'Class': 'TextEdit', });
lyr_AOI_GalelaTobelo_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'J_Pohon': 'TextEdit', 'L_Desa_Ha': 'TextEdit', 'L_pmkmn_Ha': 'TextEdit', 'Jl_Kat1_Ha': 'TextEdit', 'Jl_Kat2_Ha': 'TextEdit', });
lyr_Jalan_Kat2_Efiefi_4.set('fieldImages', {'BUFF_DIST': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jalan_Kat1_Efiefi_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'Luasan_Ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pemukiman_Efiefi_6.set('fieldImages', {'OBJECTID': '', 'Luasan_Ha': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Pohon_Desa_Efiefi_2.set('fieldLabels', {'X_Center': 'hidden field', 'Y_Center': 'hidden field', 'BUFF_DIST': 'hidden field', 'MAX': 'hidden field', 'Kelas_CHM': 'hidden field', 'ORIG_FID': 'hidden field', 'Elevation': 'hidden field', 'Elev_M': 'inline label - always visible', 'Height_M': 'inline label - always visible', 'Class': 'inline label - always visible', });
lyr_AOI_GalelaTobelo_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'J_Pohon': 'inline label - always visible', 'L_Desa_Ha': 'inline label - always visible', 'L_pmkmn_Ha': 'inline label - always visible', 'Jl_Kat1_Ha': 'inline label - always visible', 'Jl_Kat2_Ha': 'inline label - always visible', });
lyr_Jalan_Kat2_Efiefi_4.set('fieldLabels', {'BUFF_DIST': 'no label', 'Luasan_Ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Jalan_Kat1_Efiefi_5.set('fieldLabels', {'OBJECTID': 'no label', 'BUFF_DIST': 'no label', 'Luasan_Ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Pemukiman_Efiefi_6.set('fieldLabels', {'OBJECTID': 'no label', 'Luasan_Ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Pemukiman_Efiefi_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});