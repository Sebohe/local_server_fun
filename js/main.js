var elements =  document.getElementsByTagName('a');

for (i=0; i < elements.length; i++){

	var test = elements[i].toString();
	if (test.includes("mp4") || (test.includes("mp3"))){
		mediaPath = elements[i].href;
		indexM = mediaPath.indexOf("files/");
		mediaPath = mediaPath.substring(indexM, mediaPath.lenght);
		elements[i].href="http://192.168.1.18/media/media.html?file="+ mediaPath;
	}
}
