window.onload = function() { 
  var vids = document.getElementById("video2");

    vids.addEventListener( `mouseover`, function(e) { 
        console.log('mus over lissom');
      vids.play();
    })
    vids.addEventListener( `mouseout`, function(e) {
      vids.pause()
    })
  }


  unmute.addEventListener('click', function() {
    video2.muted = false;
  });
