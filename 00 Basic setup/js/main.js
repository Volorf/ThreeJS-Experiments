const scene = new THREE.Scene();

// Base setup
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Add geometry

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube )

camera.position.z = 10
camera.lookAt( 0, 0, 0)


//create a blue LineBasicMaterial
var material2 = new THREE.LineBasicMaterial( { color: 0x0000ff } );

var geometry2 = new THREE.Geometry();
geometry2.vertices.push(new THREE.Vector3( -10, 0, 0) );
geometry2.vertices.push(new THREE.Vector3( 0, 5, 0) );
geometry2.vertices.push(new THREE.Vector3( 10, 0, 0) );

var line = new THREE.Line( geometry2, material2 );

scene.add( line )

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();


console.log("it works")
