var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setClearColor("#fafafa");
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight
    camera.updateProjectionMatrix();
  })

var geometry = new THREE.PlaneBufferGeometry( 20, 20, 32 );


var texture = new THREE.TextureLoader().load( 'img/stayinside.jpg' );

var material = new THREE.MeshBasicMaterial( { map: texture } );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );


camera.position.z = 16;

function animate() {
  requestAnimationFrame( animate );

  plane.rotation.x += 0.01;
  plane.rotation.y += 0.01;
  renderer.render( scene, camera );
}
animate();
