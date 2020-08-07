<template>
    <div id="box"></div>
</template>

<script>
export default {
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            geometry: null,
            material: null,
            cube: null,

        }
    },
    name: "main",
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.scene = new THREE.Scene();
            // this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById('box').appendChild( this.renderer.domElement );

            // this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
            // console.log(this.geometry.parameters)
            // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            // this.cube = new THREE.Mesh( this.geometry, this.material );
            // this.scene.add( this.cube );
            // this.camera.position.z = 5;
            // this.animate()

            this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
            this.camera.position.set( 0, 0, 100 );
            this.camera.lookAt( 0, 0, 0 );

            //create a blue LineBasicMaterial
            var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

            this.geometry = new THREE.Geometry();
            this.geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
            this.geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
            this.geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

            var line = new THREE.Line( this.geometry, material );
            this.scene.add( line );
            this.renderer.render( this.scene, this.camera );
        },
        animate() {
            requestAnimationFrame( this.animate );

            this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;

            this.renderer.render( this.scene, this.camera );
        }
    }
}
</script>

<style lang="less">
#box {
    width: 100%;
    height: 100%;
}
</style>
