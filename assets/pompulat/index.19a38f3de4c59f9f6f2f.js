"use strict";
(self["webpackChunk_3dthree"] = self["webpackChunk_3dthree"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ 212);
/* harmony import */ var _earth_atmos_2048_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./earth_atmos_2048.jpg */ 210);
/* harmony import */ var _kandao3_depthmap_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kandao3_depthmap.jpg */ 269);
/* harmony import */ var _lensflare0_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lensflare0.png */ 760);
/* harmony import */ var _lensflare3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lensflare3.png */ 942);
/* harmony import */ var three_examples_jsm_controls_FlyControls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/FlyControls.js */ 647);
/* harmony import */ var three_examples_jsm_objects_Lensflare_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/objects/Lensflare.js */ 294);


 // './moon_1024.jpg';






let container, stats;

let camera, scene, renderer;
let controls;

const clock = new three__WEBPACK_IMPORTED_MODULE_6__.Clock();

function main()
{
	init();
	animate();

	function init() {
		container = document.createElement( 'div' );
		document.body.appendChild( container );

		// camera
		camera = new three__WEBPACK_IMPORTED_MODULE_6__.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 15000 );
		camera.position.z = 250;

//		showObject(camera);

		// scene
		scene = new three__WEBPACK_IMPORTED_MODULE_6__.Scene();
//		scene.background = new Color().setHSL( 0.51, 0.4, 0.01 );
//    scene.background = new Color('skyblue');
    const tekstureLaturi = new three__WEBPACK_IMPORTED_MODULE_6__.TextureLoader();
    const TaustaKuva = tekstureLaturi.load( _kandao3_depthmap_jpg__WEBPACK_IMPORTED_MODULE_1__ );
		const PallonPaalle = tekstureLaturi.load( _earth_atmos_2048_jpg__WEBPACK_IMPORTED_MODULE_0__ );

    scene.background = TaustaKuva;
		scene.fog = new three__WEBPACK_IMPORTED_MODULE_6__.Fog( 'Gainsboro', 3500, 10000 );

		// world
		const geometry = new three__WEBPACK_IMPORTED_MODULE_6__.SphereGeometry( 50, 24, 24 );

//		const material = new MeshPhongMaterial( { color: 0xffffff, specular: 0xffffff, shininess: 50 } );
    const material = new three__WEBPACK_IMPORTED_MODULE_6__.MeshPhongMaterial( {
			color:  0xFAEBD7,    //0xe5e7e9, // 0x49df4,
			specular: 0x4682B4, //0xffffff,
			shininess: 70,
			bumpMap : PallonPaalle,
			wireframe : false //default
		} );

		for ( let i = 0; i < 2000; i ++ ) {
			const mesh = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh( geometry, material );
			mesh.position.x = 8000 * ( 2.0 * Math.random() - 1.0 );
			mesh.position.y = 8000 * ( 2.0 * Math.random() - 1.0 );
			mesh.position.z = 8000 * ( 2.0 * Math.random() - 1.0 );

			mesh.rotation.x = mesh.rotation.z = Math.PI * Math.random(); // y up
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

			mesh.matrixAutoUpdate = false;
			mesh.updateMatrix();

			scene.add( mesh );
			}

		// lights
		const dirLight = new three__WEBPACK_IMPORTED_MODULE_6__.DirectionalLight( 0xffffff, 0.05 );
		dirLight.position.set( 0, - 1, 0 ).normalize();
		dirLight.color.setHSL( 0.1, 0.7, 0.5 );
		scene.add( dirLight );

		// lensflares
		const textureLoader = new three__WEBPACK_IMPORTED_MODULE_6__.TextureLoader();
		const textureFlare0 = textureLoader.load( _lensflare0_png__WEBPACK_IMPORTED_MODULE_2__ );
		const textureFlare3 = textureLoader.load( _lensflare3_png__WEBPACK_IMPORTED_MODULE_3__ );

		addLight( 0.55, 0.9, 0.5, 5000, 0, - 1000 );
		addLight( 0.08, 0.8, 0.5, 0, 0, - 1000 );
		addLight( 0.995, 0.5, 0.9, 5000, 5000, - 1000 );

		function addLight( h, s, l, x, y, z ) {
			const light = new three__WEBPACK_IMPORTED_MODULE_6__.PointLight( 0xffffff, 1.5, 2000 );
			light.color.setHSL( h, s, l );
			light.position.set( x, y, z );
			scene.add( light );

			const lensflare = new three_examples_jsm_objects_Lensflare_js__WEBPACK_IMPORTED_MODULE_5__.Lensflare();
			lensflare.addElement( new three_examples_jsm_objects_Lensflare_js__WEBPACK_IMPORTED_MODULE_5__.LensflareElement( textureFlare0, 700, 0, light.color ) );
			lensflare.addElement( new three_examples_jsm_objects_Lensflare_js__WEBPACK_IMPORTED_MODULE_5__.LensflareElement( textureFlare3, 60, 0.6 ) );
			lensflare.addElement( new three_examples_jsm_objects_Lensflare_js__WEBPACK_IMPORTED_MODULE_5__.LensflareElement( textureFlare3, 70, 0.7 ) );
			lensflare.addElement( new three_examples_jsm_objects_Lensflare_js__WEBPACK_IMPORTED_MODULE_5__.LensflareElement( textureFlare3, 120, 0.9 ) );
			lensflare.addElement( new three_examples_jsm_objects_Lensflare_js__WEBPACK_IMPORTED_MODULE_5__.LensflareElement( textureFlare3, 70, 1 ) );
			light.add( lensflare );
			}

  	// renderer
		renderer = new three__WEBPACK_IMPORTED_MODULE_6__.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_6__.sRGBEncoding;
		container.appendChild( renderer.domElement );

		// controls to fly
		controls = new three_examples_jsm_controls_FlyControls_js__WEBPACK_IMPORTED_MODULE_4__.FlyControls( camera, renderer.domElement );
		controls.movementSpeed = 1500;
		controls.domElement = container;
		controls.rollSpeed = Math.PI / 6;
		controls.autoForward = false;
		controls.dragToLook = false;

		// events
		window.addEventListener( 'resize', onWindowResize );

	} // End of init()

  	// window resize controls
		function onWindowResize() {
			renderer.setSize( window.innerWidth, window.innerHeight );
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			}

		// functions animate + render + consolelog-objectToShow
		function animate() {
			requestAnimationFrame( animate );
			render();
			}

			function render() {
				const delta = clock.getDelta();
				controls.update( delta );
				renderer.render( scene, camera );
			}
			function showObject(someObject) {
				const objectToShow = someObject;
				for (const [key, value] of Object.entries( objectToShow ))
				{ console.log(key, value); }

			}
  }

main();


/***/ }),

/***/ 210:
/*!**********************************!*\
  !*** ./src/earth_atmos_2048.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ce4718a2b9554bc4057.jpg";

/***/ }),

/***/ 269:
/*!**********************************!*\
  !*** ./src/kandao3_depthmap.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d574dbadbc0e461e04e.jpg";

/***/ }),

/***/ 760:
/*!****************************!*\
  !*** ./src/lensflare0.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f76abc7ed1959fe0790.png";

/***/ }),

/***/ 942:
/*!****************************!*\
  !*** ./src/lensflare3.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a0b0da3f40ff1c822f8.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTlhMzhmM2RlNGM1OWY5ZjZmMmYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlaUI7O0FBRThCLENBQUM7QUFDRDtBQUNWO0FBQ0E7QUFDb0M7QUFDYTs7QUFFdEY7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0NBQUs7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsb0RBQWlCO0FBQ2hDOztBQUVBOztBQUVBO0FBQ0EsY0FBYyx3Q0FBSztBQUNuQjtBQUNBO0FBQ0EsK0JBQStCLGdEQUFhO0FBQzVDLDRDQUE0QyxrREFBUztBQUNyRCw0Q0FBNEMsa0RBQVM7O0FBRXJEO0FBQ0Esa0JBQWtCLHNDQUFHOztBQUVyQjtBQUNBLHVCQUF1QixpREFBYzs7QUFFckMsOENBQThDLHFEQUFxRDtBQUNuRyx5QkFBeUIsb0RBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLG1CQUFtQixVQUFVO0FBQzdCLG9CQUFvQix1Q0FBSTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixtREFBZ0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGdEQUFhO0FBQ3pDLDRDQUE0Qyw0Q0FBSztBQUNqRCw0Q0FBNEMsNENBQUs7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiw2Q0FBVTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLDhFQUFTO0FBQ2xDLDZCQUE2QixxRkFBZ0I7QUFDN0MsNkJBQTZCLHFGQUFnQjtBQUM3Qyw2QkFBNkIscUZBQWdCO0FBQzdDLDZCQUE2QixxRkFBZ0I7QUFDN0MsNkJBQTZCLHFGQUFnQjtBQUM3QztBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdEQUFhLElBQUksa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQSw0QkFBNEIsK0NBQVk7QUFDeEM7O0FBRUE7QUFDQSxpQkFBaUIsbUZBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLzNkdGhyZWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2xvY2ssXG4gIFdlYkdMUmVuZGVyZXIsXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxuICBTY2VuZSxcblx0Q29sb3IsXG5cdEZvZyxcblx0Qm94R2VvbWV0cnksXG5cdFNwaGVyZUdlb21ldHJ5LFxuXHRNZXNoUGhvbmdNYXRlcmlhbCxcblx0TWVzaCxcblx0RGlyZWN0aW9uYWxMaWdodCxcblx0VGV4dHVyZUxvYWRlcixcblx0UG9pbnRMaWdodCxcblx0c1JHQkVuY29kaW5nXG4gIH0gZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgTWFhbnBpbnRhIGZyb21cdCcuL2VhcnRoX2F0bW9zXzIwNDguanBnJzsgLy8gJy4vbW9vbl8xMDI0LmpwZyc7XG5pbXBvcnQgVGVrc3R1dXJpIGZyb21cdCcuL2thbmRhbzNfZGVwdGhtYXAuanBnJztcbmltcG9ydCBMZW5zMCBmcm9tXHQnLi9sZW5zZmxhcmUwLnBuZyc7XG5pbXBvcnQgTGVuczMgZnJvbVx0Jy4vbGVuc2ZsYXJlMy5wbmcnO1xuaW1wb3J0IHsgRmx5Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvRmx5Q29udHJvbHMuanMnO1xuaW1wb3J0IHsgTGVuc2ZsYXJlLCBMZW5zZmxhcmVFbGVtZW50IH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL29iamVjdHMvTGVuc2ZsYXJlLmpzJztcblxubGV0IGNvbnRhaW5lciwgc3RhdHM7XG5cbmxldCBjYW1lcmEsIHNjZW5lLCByZW5kZXJlcjtcbmxldCBjb250cm9scztcblxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcblxuZnVuY3Rpb24gbWFpbigpXG57XG5cdGluaXQoKTtcblx0YW5pbWF0ZSgpO1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0Y29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcblxuXHRcdC8vIGNhbWVyYVxuXHRcdGNhbWVyYSA9IG5ldyBQZXJzcGVjdGl2ZUNhbWVyYSggNDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAxNTAwMCApO1xuXHRcdGNhbWVyYS5wb3NpdGlvbi56ID0gMjUwO1xuXG4vL1x0XHRzaG93T2JqZWN0KGNhbWVyYSk7XG5cblx0XHQvLyBzY2VuZVxuXHRcdHNjZW5lID0gbmV3IFNjZW5lKCk7XG4vL1x0XHRzY2VuZS5iYWNrZ3JvdW5kID0gbmV3IENvbG9yKCkuc2V0SFNMKCAwLjUxLCAwLjQsIDAuMDEgKTtcbi8vICAgIHNjZW5lLmJhY2tncm91bmQgPSBuZXcgQ29sb3IoJ3NreWJsdWUnKTtcbiAgICBjb25zdCB0ZWtzdHVyZUxhdHVyaSA9IG5ldyBUZXh0dXJlTG9hZGVyKCk7XG4gICAgY29uc3QgVGF1c3RhS3V2YSA9IHRla3N0dXJlTGF0dXJpLmxvYWQoIFRla3N0dXVyaSApO1xuXHRcdGNvbnN0IFBhbGxvblBhYWxsZSA9IHRla3N0dXJlTGF0dXJpLmxvYWQoIE1hYW5waW50YSApO1xuXG4gICAgc2NlbmUuYmFja2dyb3VuZCA9IFRhdXN0YUt1dmE7XG5cdFx0c2NlbmUuZm9nID0gbmV3IEZvZyggJ0dhaW5zYm9ybycsIDM1MDAsIDEwMDAwICk7XG5cblx0XHQvLyB3b3JsZFxuXHRcdGNvbnN0IGdlb21ldHJ5ID0gbmV3IFNwaGVyZUdlb21ldHJ5KCA1MCwgMjQsIDI0ICk7XG5cbi8vXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IE1lc2hQaG9uZ01hdGVyaWFsKCB7IGNvbG9yOiAweGZmZmZmZiwgc3BlY3VsYXI6IDB4ZmZmZmZmLCBzaGluaW5lc3M6IDUwIH0gKTtcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNZXNoUGhvbmdNYXRlcmlhbCgge1xuXHRcdFx0Y29sb3I6ICAweEZBRUJENywgICAgLy8weGU1ZTdlOSwgLy8gMHg0OWRmNCxcblx0XHRcdHNwZWN1bGFyOiAweDQ2ODJCNCwgLy8weGZmZmZmZixcblx0XHRcdHNoaW5pbmVzczogNzAsXG5cdFx0XHRidW1wTWFwIDogUGFsbG9uUGFhbGxlLFxuXHRcdFx0d2lyZWZyYW1lIDogZmFsc2UgLy9kZWZhdWx0XG5cdFx0fSApO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgMjAwMDsgaSArKyApIHtcblx0XHRcdGNvbnN0IG1lc2ggPSBuZXcgTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cdFx0XHRtZXNoLnBvc2l0aW9uLnggPSA4MDAwICogKCAyLjAgKiBNYXRoLnJhbmRvbSgpIC0gMS4wICk7XG5cdFx0XHRtZXNoLnBvc2l0aW9uLnkgPSA4MDAwICogKCAyLjAgKiBNYXRoLnJhbmRvbSgpIC0gMS4wICk7XG5cdFx0XHRtZXNoLnBvc2l0aW9uLnogPSA4MDAwICogKCAyLjAgKiBNYXRoLnJhbmRvbSgpIC0gMS4wICk7XG5cblx0XHRcdG1lc2gucm90YXRpb24ueCA9IG1lc2gucm90YXRpb24ueiA9IE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpOyAvLyB5IHVwXG4gICAgICBtZXNoLnNjYWxlLnggPSBtZXNoLnNjYWxlLnkgPSBtZXNoLnNjYWxlLnogPSBNYXRoLnJhbmRvbSgpICogMyArIDE7XG5cblx0XHRcdG1lc2gubWF0cml4QXV0b1VwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcblxuXHRcdFx0c2NlbmUuYWRkKCBtZXNoICk7XG5cdFx0XHR9XG5cblx0XHQvLyBsaWdodHNcblx0XHRjb25zdCBkaXJMaWdodCA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KCAweGZmZmZmZiwgMC4wNSApO1xuXHRcdGRpckxpZ2h0LnBvc2l0aW9uLnNldCggMCwgLSAxLCAwICkubm9ybWFsaXplKCk7XG5cdFx0ZGlyTGlnaHQuY29sb3Iuc2V0SFNMKCAwLjEsIDAuNywgMC41ICk7XG5cdFx0c2NlbmUuYWRkKCBkaXJMaWdodCApO1xuXG5cdFx0Ly8gbGVuc2ZsYXJlc1xuXHRcdGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVGV4dHVyZUxvYWRlcigpO1xuXHRcdGNvbnN0IHRleHR1cmVGbGFyZTAgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoIExlbnMwICk7XG5cdFx0Y29uc3QgdGV4dHVyZUZsYXJlMyA9IHRleHR1cmVMb2FkZXIubG9hZCggTGVuczMgKTtcblxuXHRcdGFkZExpZ2h0KCAwLjU1LCAwLjksIDAuNSwgNTAwMCwgMCwgLSAxMDAwICk7XG5cdFx0YWRkTGlnaHQoIDAuMDgsIDAuOCwgMC41LCAwLCAwLCAtIDEwMDAgKTtcblx0XHRhZGRMaWdodCggMC45OTUsIDAuNSwgMC45LCA1MDAwLCA1MDAwLCAtIDEwMDAgKTtcblxuXHRcdGZ1bmN0aW9uIGFkZExpZ2h0KCBoLCBzLCBsLCB4LCB5LCB6ICkge1xuXHRcdFx0Y29uc3QgbGlnaHQgPSBuZXcgUG9pbnRMaWdodCggMHhmZmZmZmYsIDEuNSwgMjAwMCApO1xuXHRcdFx0bGlnaHQuY29sb3Iuc2V0SFNMKCBoLCBzLCBsICk7XG5cdFx0XHRsaWdodC5wb3NpdGlvbi5zZXQoIHgsIHksIHogKTtcblx0XHRcdHNjZW5lLmFkZCggbGlnaHQgKTtcblxuXHRcdFx0Y29uc3QgbGVuc2ZsYXJlID0gbmV3IExlbnNmbGFyZSgpO1xuXHRcdFx0bGVuc2ZsYXJlLmFkZEVsZW1lbnQoIG5ldyBMZW5zZmxhcmVFbGVtZW50KCB0ZXh0dXJlRmxhcmUwLCA3MDAsIDAsIGxpZ2h0LmNvbG9yICkgKTtcblx0XHRcdGxlbnNmbGFyZS5hZGRFbGVtZW50KCBuZXcgTGVuc2ZsYXJlRWxlbWVudCggdGV4dHVyZUZsYXJlMywgNjAsIDAuNiApICk7XG5cdFx0XHRsZW5zZmxhcmUuYWRkRWxlbWVudCggbmV3IExlbnNmbGFyZUVsZW1lbnQoIHRleHR1cmVGbGFyZTMsIDcwLCAwLjcgKSApO1xuXHRcdFx0bGVuc2ZsYXJlLmFkZEVsZW1lbnQoIG5ldyBMZW5zZmxhcmVFbGVtZW50KCB0ZXh0dXJlRmxhcmUzLCAxMjAsIDAuOSApICk7XG5cdFx0XHRsZW5zZmxhcmUuYWRkRWxlbWVudCggbmV3IExlbnNmbGFyZUVsZW1lbnQoIHRleHR1cmVGbGFyZTMsIDcwLCAxICkgKTtcblx0XHRcdGxpZ2h0LmFkZCggbGVuc2ZsYXJlICk7XG5cdFx0XHR9XG5cbiAgXHQvLyByZW5kZXJlclxuXHRcdHJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIoIHsgYW50aWFsaWFzOiB0cnVlIH0gKTtcblx0XHRyZW5kZXJlci5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xuXHRcdHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcblx0XHRyZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IHNSR0JFbmNvZGluZztcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcblxuXHRcdC8vIGNvbnRyb2xzIHRvIGZseVxuXHRcdGNvbnRyb2xzID0gbmV3IEZseUNvbnRyb2xzKCBjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcblx0XHRjb250cm9scy5tb3ZlbWVudFNwZWVkID0gMTUwMDtcblx0XHRjb250cm9scy5kb21FbGVtZW50ID0gY29udGFpbmVyO1xuXHRcdGNvbnRyb2xzLnJvbGxTcGVlZCA9IE1hdGguUEkgLyA2O1xuXHRcdGNvbnRyb2xzLmF1dG9Gb3J3YXJkID0gZmFsc2U7XG5cdFx0Y29udHJvbHMuZHJhZ1RvTG9vayA9IGZhbHNlO1xuXG5cdFx0Ly8gZXZlbnRzXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSApO1xuXG5cdH0gLy8gRW5kIG9mIGluaXQoKVxuXG4gIFx0Ly8gd2luZG93IHJlc2l6ZSBjb250cm9sc1xuXHRcdGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuXHRcdFx0cmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xuXHRcdFx0Y2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdFx0Y2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdH1cblxuXHRcdC8vIGZ1bmN0aW9ucyBhbmltYXRlICsgcmVuZGVyICsgY29uc29sZWxvZy1vYmplY3RUb1Nob3dcblx0XHRmdW5jdGlvbiBhbmltYXRlKCkge1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XG5cdFx0XHRyZW5kZXIoKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0XHRjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XG5cdFx0XHRcdGNvbnRyb2xzLnVwZGF0ZSggZGVsdGEgKTtcblx0XHRcdFx0cmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XG5cdFx0XHR9XG5cdFx0XHRmdW5jdGlvbiBzaG93T2JqZWN0KHNvbWVPYmplY3QpIHtcblx0XHRcdFx0Y29uc3Qgb2JqZWN0VG9TaG93ID0gc29tZU9iamVjdDtcblx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIG9iamVjdFRvU2hvdyApKVxuXHRcdFx0XHR7IGNvbnNvbGUubG9nKGtleSwgdmFsdWUpOyB9XG5cblx0XHRcdH1cbiAgfVxuXG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=