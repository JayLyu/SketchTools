export default function fixPingfangFont() {
	//reference the sketch document
	var doc = context.document;
	var selection = context.selection;
	var layer = selection.firstObject();

	if(layer.className() == "MSTextLayer" ){
		log(layer.style.NSFontNameAttribute);
	} else {
		doc.showMessage("Fail!");
	}



	// for(var i=0; i<textLayers.count(); i++){
	// 	var textLayer = textLayers[i];
	//
	// 	log(textLayer);
	//
	// };

}

// 	for (var i=0; i<pages.count(); i++){
// 		var page = pages[i];
// 		var artboards = pages.artboards;
//
// 		for (var z=0; z<artboards.count(); z++){
// 			var artboard = artboards[i];
// 			var layers = artboards.layers();
//
// 			for (var k=0; k<layers.count(); k++){
// 				var layer = layers[i];
//
// 				if(layer.class() == "MSTextLayer" ){
// 					var textLayer = layer.textStyle.NSFontNameAttribute();
// 					var textLayer2 = "PingFangSC-Regular";
//
// 					if (textLayer != textLayer2) {
// 						layer.textStyle.NSFontNameAttribute = "PingFangSC-Regular";
// 					}
// 				}
// 			}
// 		}
//
// 		log(textType);
// 	}
// 	//show the page name in message
//   context.document.showMessage("Fixed");
// }
//
// var artboard = pages.artboards();
// var texts = artboards.text();
//
// var text = texts[i];
//
// var textType = text.textType();
