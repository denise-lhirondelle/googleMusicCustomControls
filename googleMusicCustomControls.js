
let audioElements = document.getElementsByTagName('audio'),
/* 
 * The index in the audioItems list is literally a 
 * random guess that worked last time
 */
    audio = audioElements.item(1);

document.addEventListener('keydown', function(event) {

	/* This stops the usual keyboard shortcuts from working */
	event.stopPropagation();

	/* This sets my own shortcuts */
	switch (event.keyCode) {
		/*space*/
		case 32: 
			if (audio.paused === true) {
				audio.play();
			} else {
				audio.pause();
			}
			break;
		/*left arrow*/
		case 37:
			audio.currentTime -= 10;
			break;
		/*right arrow*/
		case 39:
			audio.currentTime += 10;
			break;
	}
}, true);

alert('Left/Right: seek \n Space: play/pause');
