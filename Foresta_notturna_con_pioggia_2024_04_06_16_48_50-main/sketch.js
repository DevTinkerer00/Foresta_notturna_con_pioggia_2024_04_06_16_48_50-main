function setup() {
  hideGrid();
  createCanvas3D(windowWidth,windowHeight);
  background3D("#1e3e73");
  let lato = 50;
  diffuse("rgb(59,185,59)");
  box(0, 0, 0, lato, 0, lato);
  align(TOP);
  setCamera(20, 40, -lato);

  let albero = beginGroup();
  diffuse("green");
  sphere(0, 2.5, 0, 1);
  diffuse("brown");
  align(TOP);
  cylinder(0, 0, 0, 0.4, 3);
  endGroup();

  for (let i = 0; i <= random(300, 340); i++) {
    let x = random(-lato / 2.1, lato / 2.05);
    let y = random(-lato / 2.1, lato / 2.05);
    let scala = random(0.6, 1.3);
    let nuovo_albero = clone(albero, x, 0, y);
    nuovo_albero.setScale(scala);
  }
  let nuvola = beginGroup();
  diffuse("#e0d6d5");
  sphere(1, 20, 1, 1.5);
  diffuse("#b3b7bd");
  sphere(1, 20, 1, 1.5);
  diffuse("#727981");
  sphere(3, 20, 1, 1.5);
  diffuse("#8a9099");
  sphere(2, 20, 3, 1.5);
  diffuse("#aeb5bf");
  sphere(1, 20, 2, 1.5);
  diffuse("#9ca0a6");
  sphere(1, 21, 1, 1.5);
  endGroup();

  for (let i = 0; i <= random(40, 50); i++) {
    let x = random(-lato / 2, lato / 2);
    let y = random(-lato / 2, lato / 2);
    let scala = random(1, 1.3);
    let nuova_nuvola = clone(nuvola, x, 0, y);
    nuova_nuvola.setScale(scala);
  }
  let goccia = beginGroup();
  diffuse("#2d2ad1");
  capsule(1, 15, 1, 0.25, 0.75);
  endGroup();
  for (let i = 0; i <= random(100, 200); i++) {
    let x = random(-lato / 2, lato / 2.5);
    let y = random(-lato / 2, lato / 2.5);
    let scala = random(1, 1.3);
    let nuova_goccia = clone(goccia, x, 0, y);
    nuova_goccia.setScale(scala);
  }
  //luna
  diffuse("#b4bfd1");
  sphere(1, 36, 37, 5);
}

function draw() {}
function windowResized () {
  resizeCanvas3D(windowWidth,windowHeight);
}
