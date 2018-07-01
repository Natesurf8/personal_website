var ttd_game = function(p) {
  let canvas;
  p.setup = function() {
    canvas = p.createCanvas(0,0);
    canvas.parent('TTD_GAME');
    p.windowResized();
  };

  p.windowResized = function() {
    let parent = window.document.getElementById("TTD_GAME");
    console.log(parent);
    p.resizeCanvas(canvas.parent().offsetWidth, canvas.parent().offsetHeight);
  };


  p.draw = function() {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
};

let a = new p5(ttd_game, window.document.getElementById("TTD_GAME"));
