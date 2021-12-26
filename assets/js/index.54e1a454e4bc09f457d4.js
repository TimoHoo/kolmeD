"use strict";
(self["webpackChunk_3dThree"] = self["webpackChunk_3dThree"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ 385);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cannon */ 125);
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cannon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs-materials */ 634);
/* harmony import */ var babylonjs_materials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__);
//import * as CANNON from 'cannon';




//import * as cannon from "../assets/cannon.min.js";



//exports provided: CellMaterial, CustomShaderStructure, ShaderSpecialParts, CustomMaterial,
//ShaderAlebdoParts, PBRCustomMaterial, FireMaterial, FurMaterial, GradientMaterial,
//GridMaterial, LavaMaterial, MixMaterial, NormalMaterial, ShadowOnlyMaterial,
//SimpleMaterial, SkyMaterial, TerrainMaterial, TriPlanarMaterial, WaterMaterial

let canvas, engine, scene;
let physEngine;

function init() {
	const kanvaasi = document.createElement('canvas');
	kanvaasi.id = "kuvakanvaasi";
	kanvaasi.width = window.innerWidth;
	kanvaasi.height = window.innerHeight;
	kanvaasi.style.zIndex = 8;
	kanvaasi.style.position = "absolute";
	kanvaasi.style.border = "1px solid";
	document.body.appendChild(kanvaasi);
	canvas = document.querySelector( '#kuvakanvaasi' );

	engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Engine(canvas, true, {
			preserveDrawingBuffer: true,
			stencil: true,
			disableWebGL2Support: false
		});

	scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scene(engine);

	const camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera("Camera", -Math.PI / 4,  Math.PI / 2.5, 55, babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.HemisphericLight("hemi-light1", new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), scene);
  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.8;

	const light2 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight("dirlight", new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3( 2, 3, 4 ), scene);

	// Ground (using a box not a plane)
	 const ground = babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateBox("Ground", {width: 50, height: 1, depth: 50}, scene);
   ground.position.y = -1;
	 ground.material = new babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__.GridMaterial("groundMaterial", scene);

	 const GroundFromHeightMap = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Mesh.CreateGroundFromHeightMap("GroundFromHeightMap", "./assets/textures/heightMap.png", 50, 50, 20, 0, 10, scene, false, function () {
		 GroundFromHeightMap.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.PhysicsImpostor(GroundFromHeightMap, babylonjs__WEBPACK_IMPORTED_MODULE_0__.PhysicsImpostor.HeightmapImpostor, { mass: 0 });
	 });

	 const groundMaterial = new babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__.GridMaterial("groundMat", scene);

	 GroundFromHeightMap.position.y = -0.5;
	 GroundFromHeightMap.material = groundMaterial;

	 // Physics
	 physEngine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.CannonJSPlugin(true, 10, cannon__WEBPACK_IMPORTED_MODULE_1__);
	 scene.enablePhysics(null, physEngine);
//	 scene.getPhysicsEngine().setSubTimeStep(1);

}
/************* End of init()*********************************/

/***************Start of function animate()******************/
function animate() {
	// Once the scene is loaded, register a render loop to render it
        engine.runRenderLoop(function()
				{
					scene.render();
				});

				let ticker = 0;
    		let spheres = [];
				let boxes = [];

				const normalMaterial = new babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__.NormalMaterial("NormalMat", scene);

				//Force Settings
				const forceDirection = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3( 1, 2, 3 );
				const forceMagnitude = 70;
				const contactLocalRefPoint = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, 0.7, 0.7 );

		    scene.registerBeforeRender(function() {
				if(ticker++ % 60) return;

//				let s = MeshBuilder.CreateSphere("s", {diameter: 3});
				let s = babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateBox("s", {size: 2});
				s.position.y = 100;
				s.position.z = -20 + Math.random() * 10;
				s.position.x = -15 + Math.random() * 10;

				s.material = normalMaterial;

				s.physicsImpostor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.PhysicsImpostor(s, babylonjs__WEBPACK_IMPORTED_MODULE_0__.PhysicsImpostor.SphereImpostor, { mass: 2, friction: 0.0, restitution: 0.5 });
				spheres.push(s);

				s.physicsImpostor.applyForce(forceDirection.scale(forceMagnitude), s.getAbsolutePosition().add(contactLocalRefPoint));

				spheres.forEach(function(sphere) {
						if(sphere.position.y < -4) {
								sphere.dispose();
						}
				});

				spheres = spheres.filter(s => !s.isDisposed());
			});


 /***************The canvas/window resize event handler****/
  window.addEventListener('resize', function()
 {
	 engine.resize();
		 });

}
/***************End of function animate()****/


init();
animate();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(138)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTRlMWE0NTRlNGJjMDlmNDU3ZDQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQWFtQjs7QUFFYztBQUNqQztBQUMyQzs7QUFFd0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDZDQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsYUFBYSw0Q0FBSzs7QUFFbEIsb0JBQW9CLHNEQUFlLDZDQUE2QyxtREFBWTtBQUM1Rjs7QUFFQTtBQUNBLG9CQUFvQix1REFBZ0Isb0JBQW9CLDhDQUFPO0FBQy9EO0FBQ0E7O0FBRUEsb0JBQW9CLHVEQUFnQixpQkFBaUIsOENBQU87O0FBRTVEO0FBQ0EsaUJBQWlCLDREQUFxQixZQUFZLGdDQUFnQztBQUNsRjtBQUNBLHdCQUF3Qiw2REFBWTs7QUFFcEMsOEJBQThCLHFFQUE4QjtBQUM1RCw2Q0FBNkMsc0RBQWUsc0JBQXNCLHdFQUFpQyxJQUFJLFNBQVM7QUFDaEksR0FBRzs7QUFFSCw2QkFBNkIsNkRBQVk7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIscURBQWMsV0FBVyxtQ0FBTTtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLCtEQUFjOztBQUU3QztBQUNBLCtCQUErQiw4Q0FBTztBQUN0QztBQUNBLHFDQUFxQyw4Q0FBTzs7QUFFNUM7QUFDQTs7QUFFQSw2Q0FBNkMsWUFBWTtBQUN6RCxZQUFZLDREQUFxQixPQUFPLFFBQVE7QUFDaEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixzREFBZSxJQUFJLHFFQUE4QixJQUFJLDBDQUEwQztBQUMzSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7O0FBR0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzNkVGhyZWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSAnY2Fubm9uJztcblxuaW1wb3J0IHtcblx0U2NlbmUsXG5cdEVuZ2luZSxcblx0QXJjUm90YXRlQ2FtZXJhLFxuXHRIZW1pc3BoZXJpY0xpZ2h0LFxuXHREaXJlY3Rpb25hbExpZ2h0LFxuXHRWZWN0b3IzLFxuXHRNZXNoLFxuXHRNZXNoQnVpbGRlcixcblx0VGV4dHVyZSxcblx0UGh5c2ljc0ltcG9zdG9yLFxufSBmcm9tICdiYWJ5bG9uanMnO1xuXG5pbXBvcnQgKiBhcyBjYW5ub24gZnJvbSBcImNhbm5vblwiO1xuLy9pbXBvcnQgKiBhcyBjYW5ub24gZnJvbSBcIi4uL2Fzc2V0cy9jYW5ub24ubWluLmpzXCI7XG5pbXBvcnQgeyBDYW5ub25KU1BsdWdpbiB9IGZyb20gXCJiYWJ5bG9uanNcIjtcblxuaW1wb3J0IHsgTm9ybWFsTWF0ZXJpYWwsIEdyaWRNYXRlcmlhbCB9IGZyb20gJ2JhYnlsb25qcy1tYXRlcmlhbHMnO1xuLy9leHBvcnRzIHByb3ZpZGVkOiBDZWxsTWF0ZXJpYWwsIEN1c3RvbVNoYWRlclN0cnVjdHVyZSwgU2hhZGVyU3BlY2lhbFBhcnRzLCBDdXN0b21NYXRlcmlhbCxcbi8vU2hhZGVyQWxlYmRvUGFydHMsIFBCUkN1c3RvbU1hdGVyaWFsLCBGaXJlTWF0ZXJpYWwsIEZ1ck1hdGVyaWFsLCBHcmFkaWVudE1hdGVyaWFsLFxuLy9HcmlkTWF0ZXJpYWwsIExhdmFNYXRlcmlhbCwgTWl4TWF0ZXJpYWwsIE5vcm1hbE1hdGVyaWFsLCBTaGFkb3dPbmx5TWF0ZXJpYWwsXG4vL1NpbXBsZU1hdGVyaWFsLCBTa3lNYXRlcmlhbCwgVGVycmFpbk1hdGVyaWFsLCBUcmlQbGFuYXJNYXRlcmlhbCwgV2F0ZXJNYXRlcmlhbFxuXG5sZXQgY2FudmFzLCBlbmdpbmUsIHNjZW5lO1xubGV0IHBoeXNFbmdpbmU7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGNvbnN0IGthbnZhYXNpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGthbnZhYXNpLmlkID0gXCJrdXZha2FudmFhc2lcIjtcblx0a2FudmFhc2kud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0a2FudmFhc2kuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRrYW52YWFzaS5zdHlsZS56SW5kZXggPSA4O1xuXHRrYW52YWFzaS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0a2FudmFhc2kuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWRcIjtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChrYW52YWFzaSk7XG5cdGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcja3V2YWthbnZhYXNpJyApO1xuXG5cdGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzLCB0cnVlLCB7XG5cdFx0XHRwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG5cdFx0XHRzdGVuY2lsOiB0cnVlLFxuXHRcdFx0ZGlzYWJsZVdlYkdMMlN1cHBvcnQ6IGZhbHNlXG5cdFx0fSk7XG5cblx0c2NlbmUgPSBuZXcgU2NlbmUoZW5naW5lKTtcblxuXHRjb25zdCBjYW1lcmEgPSBuZXcgQXJjUm90YXRlQ2FtZXJhKFwiQ2FtZXJhXCIsIC1NYXRoLlBJIC8gNCwgIE1hdGguUEkgLyAyLjUsIDU1LCBWZWN0b3IzLlplcm8oKSwgc2NlbmUpO1xuICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXG4gIC8vIFRoaXMgY3JlYXRlcyBhIGxpZ2h0LCBhaW1pbmcgMCwxLDAgLSB0byB0aGUgc2t5IChub24tbWVzaClcbiAgY29uc3QgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImhlbWktbGlnaHQxXCIsIG5ldyBWZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG4gIC8vIERlZmF1bHQgaW50ZW5zaXR5IGlzIDEuIExldCdzIGRpbSB0aGUgbGlnaHQgYSBzbWFsbCBhbW91bnRcbiAgbGlnaHQuaW50ZW5zaXR5ID0gMC44O1xuXG5cdGNvbnN0IGxpZ2h0MiA9IG5ldyBEaXJlY3Rpb25hbExpZ2h0KFwiZGlybGlnaHRcIiwgbmV3IFZlY3RvcjMoIDIsIDMsIDQgKSwgc2NlbmUpO1xuXG5cdC8vIEdyb3VuZCAodXNpbmcgYSBib3ggbm90IGEgcGxhbmUpXG5cdCBjb25zdCBncm91bmQgPSBNZXNoQnVpbGRlci5DcmVhdGVCb3goXCJHcm91bmRcIiwge3dpZHRoOiA1MCwgaGVpZ2h0OiAxLCBkZXB0aDogNTB9LCBzY2VuZSk7XG4gICBncm91bmQucG9zaXRpb24ueSA9IC0xO1xuXHQgZ3JvdW5kLm1hdGVyaWFsID0gbmV3IEdyaWRNYXRlcmlhbChcImdyb3VuZE1hdGVyaWFsXCIsIHNjZW5lKTtcblxuXHQgY29uc3QgR3JvdW5kRnJvbUhlaWdodE1hcCA9IE1lc2guQ3JlYXRlR3JvdW5kRnJvbUhlaWdodE1hcChcIkdyb3VuZEZyb21IZWlnaHRNYXBcIiwgXCIuL2Fzc2V0cy90ZXh0dXJlcy9oZWlnaHRNYXAucG5nXCIsIDUwLCA1MCwgMjAsIDAsIDEwLCBzY2VuZSwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcblx0XHQgR3JvdW5kRnJvbUhlaWdodE1hcC5waHlzaWNzSW1wb3N0b3IgPSBuZXcgUGh5c2ljc0ltcG9zdG9yKEdyb3VuZEZyb21IZWlnaHRNYXAsIFBoeXNpY3NJbXBvc3Rvci5IZWlnaHRtYXBJbXBvc3RvciwgeyBtYXNzOiAwIH0pO1xuXHQgfSk7XG5cblx0IGNvbnN0IGdyb3VuZE1hdGVyaWFsID0gbmV3IEdyaWRNYXRlcmlhbChcImdyb3VuZE1hdFwiLCBzY2VuZSk7XG5cblx0IEdyb3VuZEZyb21IZWlnaHRNYXAucG9zaXRpb24ueSA9IC0wLjU7XG5cdCBHcm91bmRGcm9tSGVpZ2h0TWFwLm1hdGVyaWFsID0gZ3JvdW5kTWF0ZXJpYWw7XG5cblx0IC8vIFBoeXNpY3Ncblx0IHBoeXNFbmdpbmUgPSBuZXcgQ2Fubm9uSlNQbHVnaW4odHJ1ZSwgMTAsIGNhbm5vbik7XG5cdCBzY2VuZS5lbmFibGVQaHlzaWNzKG51bGwsIHBoeXNFbmdpbmUpO1xuLy9cdCBzY2VuZS5nZXRQaHlzaWNzRW5naW5lKCkuc2V0U3ViVGltZVN0ZXAoMSk7XG5cbn1cbi8qKioqKioqKioqKioqIEVuZCBvZiBpbml0KCkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKipTdGFydCBvZiBmdW5jdGlvbiBhbmltYXRlKCkqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuXHQvLyBPbmNlIHRoZSBzY2VuZSBpcyBsb2FkZWQsIHJlZ2lzdGVyIGEgcmVuZGVyIGxvb3AgdG8gcmVuZGVyIGl0XG4gICAgICAgIGVuZ2luZS5ydW5SZW5kZXJMb29wKGZ1bmN0aW9uKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNjZW5lLnJlbmRlcigpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgdGlja2VyID0gMDtcbiAgICBcdFx0bGV0IHNwaGVyZXMgPSBbXTtcblx0XHRcdFx0bGV0IGJveGVzID0gW107XG5cblx0XHRcdFx0Y29uc3Qgbm9ybWFsTWF0ZXJpYWwgPSBuZXcgTm9ybWFsTWF0ZXJpYWwoXCJOb3JtYWxNYXRcIiwgc2NlbmUpO1xuXG5cdFx0XHRcdC8vRm9yY2UgU2V0dGluZ3Ncblx0XHRcdFx0Y29uc3QgZm9yY2VEaXJlY3Rpb24gPSBuZXcgVmVjdG9yMyggMSwgMiwgMyApO1xuXHRcdFx0XHRjb25zdCBmb3JjZU1hZ25pdHVkZSA9IDcwO1xuXHRcdFx0XHRjb25zdCBjb250YWN0TG9jYWxSZWZQb2ludCA9IG5ldyBWZWN0b3IzKCAwLCAwLjcsIDAuNyApO1xuXG5cdFx0ICAgIHNjZW5lLnJlZ2lzdGVyQmVmb3JlUmVuZGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZih0aWNrZXIrKyAlIDYwKSByZXR1cm47XG5cbi8vXHRcdFx0XHRsZXQgcyA9IE1lc2hCdWlsZGVyLkNyZWF0ZVNwaGVyZShcInNcIiwge2RpYW1ldGVyOiAzfSk7XG5cdFx0XHRcdGxldCBzID0gTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KFwic1wiLCB7c2l6ZTogMn0pO1xuXHRcdFx0XHRzLnBvc2l0aW9uLnkgPSAxMDA7XG5cdFx0XHRcdHMucG9zaXRpb24ueiA9IC0yMCArIE1hdGgucmFuZG9tKCkgKiAxMDtcblx0XHRcdFx0cy5wb3NpdGlvbi54ID0gLTE1ICsgTWF0aC5yYW5kb20oKSAqIDEwO1xuXG5cdFx0XHRcdHMubWF0ZXJpYWwgPSBub3JtYWxNYXRlcmlhbDtcblxuXHRcdFx0XHRzLnBoeXNpY3NJbXBvc3RvciA9IG5ldyBQaHlzaWNzSW1wb3N0b3IocywgUGh5c2ljc0ltcG9zdG9yLlNwaGVyZUltcG9zdG9yLCB7IG1hc3M6IDIsIGZyaWN0aW9uOiAwLjAsIHJlc3RpdHV0aW9uOiAwLjUgfSk7XG5cdFx0XHRcdHNwaGVyZXMucHVzaChzKTtcblxuXHRcdFx0XHRzLnBoeXNpY3NJbXBvc3Rvci5hcHBseUZvcmNlKGZvcmNlRGlyZWN0aW9uLnNjYWxlKGZvcmNlTWFnbml0dWRlKSwgcy5nZXRBYnNvbHV0ZVBvc2l0aW9uKCkuYWRkKGNvbnRhY3RMb2NhbFJlZlBvaW50KSk7XG5cblx0XHRcdFx0c3BoZXJlcy5mb3JFYWNoKGZ1bmN0aW9uKHNwaGVyZSkge1xuXHRcdFx0XHRcdFx0aWYoc3BoZXJlLnBvc2l0aW9uLnkgPCAtNCkge1xuXHRcdFx0XHRcdFx0XHRcdHNwaGVyZS5kaXNwb3NlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHNwaGVyZXMgPSBzcGhlcmVzLmZpbHRlcihzID0+ICFzLmlzRGlzcG9zZWQoKSk7XG5cdFx0XHR9KTtcblxuXG4gLyoqKioqKioqKioqKioqKlRoZSBjYW52YXMvd2luZG93IHJlc2l6ZSBldmVudCBoYW5kbGVyKioqKi9cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKClcbiB7XG5cdCBlbmdpbmUucmVzaXplKCk7XG5cdFx0IH0pO1xuXG59XG4vKioqKioqKioqKioqKioqRW5kIG9mIGZ1bmN0aW9uIGFuaW1hdGUoKSoqKiovXG5cblxuaW5pdCgpO1xuYW5pbWF0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9