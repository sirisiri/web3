//=====================================================================
//  DOM Image Rollover v4 (hover)
//
//  Demo: http://chrispoole.com/scripts/dom_image_rollover_hover
//  Script featured on: Dynamic Drive (http://www.dynamicdrive.com)
//  Updated Nov 22nd' 11 to version 4 by DD, which adds optional sound playback as well onmouseover. 
//=====================================================================
//  copyright Chris Poole
//  http://chrispoole.com
//  This software is licensed under the MIT License 
//  <http://opensource.org/licenses/mit-license.php>
//=====================================================================

function domRollover() {
//define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this:
var html5_audiotypes={"mp3": "audio/mpeg", "mp4": "audio/mp4", "ogg": "audio/ogg", "wav": "audio/wav"}
if (navigator.userAgent.match(/Opera (\S+)/)) {
	var operaVersion = parseInt(navigator.userAgent.match(/Opera (\S+)/)[1]);
}
if (!document.getElementById||operaVersion <7) return;
var imgarr=document.getElementsByTagName('img');
var imgPreload=new Array();
var imgSrc=new Array();
var imgClass=new Array();
for (i=0;i<imgarr.length;i++){
	if (imgarr[i].className.indexOf('domroll')!=-1){
		imgSrc[i]=imgarr[i].getAttribute('src');
		imgClass[i]=imgarr[i].className;
		imgPreload[i]=new Image();
		if (imgClass[i].match(/domroll (\S+)/)) {
			imgPreload[i].src = imgClass[i].match(/domroll (\S+)/)[1]
		}
		imgarr[i].setAttribute('xsrc', imgSrc[i]);

		(function(){
if (imgarr[i].getAttribute('data-sound')){ //if data-sound defined and browser supports html5 audio
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){
		var audiofiles=imgarr[i].getAttribute('data-sound').split(',')
		for (var x=0; x<audiofiles.length; x++){
			var sourcetag=document.createElement('source')
			sourcetag.setAttribute('src', audiofiles[x].trim())
			if (audiofiles[x].match(/\.(\w+)$/i))
				sourcetag.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourcetag)
		}
	}
}
imgarr[i].onmouseover=function(){
	this.setAttribute('src',this.className.match(/domroll (\S+)/)[1])
	if (this.getAttribute('data-sound')){
		try{
			html5audio.pause()
			html5audio.currentTime=0
			html5audio.play()
		}catch(e){
		}
	}
}
imgarr[i].onmouseout=function(){
	this.setAttribute('src',this.getAttribute('xsrc'))
}
})()
}
}
}
domRollover();