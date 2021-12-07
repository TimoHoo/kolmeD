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
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs-loaders */ 793);
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__);




let canvas, engine, scene;
let dome;

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

	const camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera("Camera", -Math.PI / 4,  Math.PI / 2, 5, babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), scene);
	camera.attachControl(canvas, true);
	camera.lowerBetaLimit = 1;
	camera.upperBetaLimit = 2;
	camera.minZ = 1;
	camera.useAutoRotationBehavior = true;

  camera.inputs.attached.mousewheel.detachControl(canvas);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.HemisphericLight("hemi-light1", new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), scene);
  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

	dome = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.PhotoDome(
        "testdome",
				"./assets/pictures/Alasiikalampi_blended_fused.jpg",
        {
            resolution: 32,
            size: 1000,
            useDirectMapping: false
        },
        scene
    );
		dome.fovMultiplier = 1.1;
		dome.imageMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__.PhotoDome.MODE_TOPBOTTOM;

    // Fountain object
    const fountain = babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateBox("fountain", {height: 0.01, width: 0.01, depth: 0.01});

    // Create a particle system
    const particleSystem = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.ParticleSystem("particles", 1500, scene);

    //Texture of each particle
    particleSystem.particleTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Texture("./assets/textures/snowflake2.png", scene);

    // Where the particles come from
    particleSystem.emitter = fountain; // the starting object, the emitter
    particleSystem.minEmitBox = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 4, 0); // Starting all from
    particleSystem.maxEmitBox = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(2, 3, 0); // To...

    // Colors of all particles
    particleSystem.color1 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.5;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 1.0;
    particleSystem.maxLifeTime = 5.0;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -10, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(-1, 4, 1);
    particleSystem.direction2 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 4, -1);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 1;
    particleSystem.updateSpeed = 0.005;

    // Noise
    var noiseTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.NoiseProceduralTexture("perlin", 256, scene);
    noiseTexture.animationSpeedFactor = 5;
    noiseTexture.persistence = 2;
    noiseTexture.brightness = 0.5;
    noiseTexture.octaves = 3;

    particleSystem.noiseTexture = noiseTexture;
    particleSystem.noiseStrength = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(100, 100, 100);

    // Start the particle system
    particleSystem.start();

}
/************* End of init()*********************************/

/***************Start of function animate()******************/
function animate() {
	// Once the scene is loaded, register a render loop to render it
        engine.runRenderLoop(function()
				{
					scene.render();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDBmMzZjYmU5NTlkM2EwY2UxOGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjbUI7O0FBRVE7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsNkNBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxhQUFhLDRDQUFLOztBQUVsQixvQkFBb0Isc0RBQWUsMENBQTBDLG1EQUFZO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IsdURBQWdCLG9CQUFvQiw4Q0FBTztBQUMvRDtBQUNBOztBQUVBLFlBQVksZ0RBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBd0I7O0FBRTNDO0FBQ0EscUJBQXFCLDREQUFxQixjQUFjLHVDQUF1Qzs7QUFFL0Y7QUFDQSwrQkFBK0IscURBQWM7O0FBRTdDO0FBQ0EseUNBQXlDLDhDQUFPOztBQUVoRDtBQUNBLHVDQUF1QztBQUN2QyxvQ0FBb0MsOENBQU8sV0FBVztBQUN0RCxvQ0FBb0MsOENBQU8sV0FBVzs7QUFFdEQ7QUFDQSxnQ0FBZ0MsNkNBQU07QUFDdEMsZ0NBQWdDLDZDQUFNO0FBQ3RDLG1DQUFtQyw2Q0FBTTs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHNFQUErQjs7QUFFOUQ7QUFDQSxpQ0FBaUMsOENBQU87O0FBRXhDO0FBQ0Esb0NBQW9DLDhDQUFPO0FBQzNDLG9DQUFvQyw4Q0FBTzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDZEQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qyw4Q0FBTzs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7OztBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8zZFRocmVlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdFNjZW5lLFxuXHRFbmdpbmUsXG5cdEFyY1JvdGF0ZUNhbWVyYSxcblx0SGVtaXNwaGVyaWNMaWdodCxcblx0VmVjdG9yMyxcblx0Q29sb3IzLFxuXHRDb2xvcjQsXG5cdE1lc2gsXG5cdE1lc2hCdWlsZGVyLFxuXHRUZXh0dXJlLFxuXHRQaG90b0RvbWUsXG5cdFBhcnRpY2xlU3lzdGVtLFxuXHROb2lzZVByb2NlZHVyYWxUZXh0dXJlXG59IGZyb20gJ2JhYnlsb25qcyc7XG5cbmltcG9ydCAnYmFieWxvbmpzLWxvYWRlcnMnO1xuXG5sZXQgY2FudmFzLCBlbmdpbmUsIHNjZW5lO1xubGV0IGRvbWU7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cblx0Y29uc3Qga2FudmFhc2kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0a2FudmFhc2kuaWQgPSBcImt1dmFrYW52YWFzaVwiO1xuXHRrYW52YWFzaS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRrYW52YWFzaS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdGthbnZhYXNpLnN0eWxlLnpJbmRleCA9IDg7XG5cdGthbnZhYXNpLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRrYW52YWFzaS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZFwiO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGthbnZhYXNpKTtcblx0Y2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNrdXZha2FudmFhc2knICk7XG5cblx0ZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMsIHRydWUsIHtcblx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdHN0ZW5jaWw6IHRydWUsXG5cdFx0XHRkaXNhYmxlV2ViR0wyU3VwcG9ydDogZmFsc2Vcblx0XHR9KTtcblxuXHRzY2VuZSA9IG5ldyBTY2VuZShlbmdpbmUpO1xuXG5cdGNvbnN0IGNhbWVyYSA9IG5ldyBBcmNSb3RhdGVDYW1lcmEoXCJDYW1lcmFcIiwgLU1hdGguUEkgLyA0LCAgTWF0aC5QSSAvIDIsIDUsIFZlY3RvcjMuWmVybygpLCBzY2VuZSk7XG5cdGNhbWVyYS5hdHRhY2hDb250cm9sKGNhbnZhcywgdHJ1ZSk7XG5cdGNhbWVyYS5sb3dlckJldGFMaW1pdCA9IDE7XG5cdGNhbWVyYS51cHBlckJldGFMaW1pdCA9IDI7XG5cdGNhbWVyYS5taW5aID0gMTtcblx0Y2FtZXJhLnVzZUF1dG9Sb3RhdGlvbkJlaGF2aW9yID0gdHJ1ZTtcblxuICBjYW1lcmEuaW5wdXRzLmF0dGFjaGVkLm1vdXNld2hlZWwuZGV0YWNoQ29udHJvbChjYW52YXMpO1xuXG4gIC8vIFRoaXMgY3JlYXRlcyBhIGxpZ2h0LCBhaW1pbmcgMCwxLDAgLSB0byB0aGUgc2t5IChub24tbWVzaClcbiAgY29uc3QgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImhlbWktbGlnaHQxXCIsIG5ldyBWZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG4gIC8vIERlZmF1bHQgaW50ZW5zaXR5IGlzIDEuIExldCdzIGRpbSB0aGUgbGlnaHQgYSBzbWFsbCBhbW91bnRcbiAgbGlnaHQuaW50ZW5zaXR5ID0gMC43O1xuXG5cdGRvbWUgPSBuZXcgUGhvdG9Eb21lKFxuICAgICAgICBcInRlc3Rkb21lXCIsXG5cdFx0XHRcdFwiLi9hc3NldHMvcGljdHVyZXMvQWxhc2lpa2FsYW1waV9ibGVuZGVkX2Z1c2VkLmpwZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICByZXNvbHV0aW9uOiAzMixcbiAgICAgICAgICAgIHNpemU6IDEwMDAsXG4gICAgICAgICAgICB1c2VEaXJlY3RNYXBwaW5nOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzY2VuZVxuICAgICk7XG5cdFx0ZG9tZS5mb3ZNdWx0aXBsaWVyID0gMS4xO1xuXHRcdGRvbWUuaW1hZ2VNb2RlID0gUGhvdG9Eb21lLk1PREVfVE9QQk9UVE9NO1xuXG4gICAgLy8gRm91bnRhaW4gb2JqZWN0XG4gICAgY29uc3QgZm91bnRhaW4gPSBNZXNoQnVpbGRlci5DcmVhdGVCb3goXCJmb3VudGFpblwiLCB7aGVpZ2h0OiAwLjAxLCB3aWR0aDogMC4wMSwgZGVwdGg6IDAuMDF9KTtcblxuICAgIC8vIENyZWF0ZSBhIHBhcnRpY2xlIHN5c3RlbVxuICAgIGNvbnN0IHBhcnRpY2xlU3lzdGVtID0gbmV3IFBhcnRpY2xlU3lzdGVtKFwicGFydGljbGVzXCIsIDE1MDAsIHNjZW5lKTtcblxuICAgIC8vVGV4dHVyZSBvZiBlYWNoIHBhcnRpY2xlXG4gICAgcGFydGljbGVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCIuL2Fzc2V0cy90ZXh0dXJlcy9zbm93Zmxha2UyLnBuZ1wiLCBzY2VuZSk7XG5cbiAgICAvLyBXaGVyZSB0aGUgcGFydGljbGVzIGNvbWUgZnJvbVxuICAgIHBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSBmb3VudGFpbjsgLy8gdGhlIHN0YXJ0aW5nIG9iamVjdCwgdGhlIGVtaXR0ZXJcbiAgICBwYXJ0aWNsZVN5c3RlbS5taW5FbWl0Qm94ID0gbmV3IFZlY3RvcjMoMCwgNCwgMCk7IC8vIFN0YXJ0aW5nIGFsbCBmcm9tXG4gICAgcGFydGljbGVTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBWZWN0b3IzKDIsIDMsIDApOyAvLyBUby4uLlxuXG4gICAgLy8gQ29sb3JzIG9mIGFsbCBwYXJ0aWNsZXNcbiAgICBwYXJ0aWNsZVN5c3RlbS5jb2xvcjEgPSBuZXcgQ29sb3I0KDAuNywgMC44LCAxLjAsIDEuMCk7XG4gICAgcGFydGljbGVTeXN0ZW0uY29sb3IyID0gbmV3IENvbG9yNCgwLjIsIDAuNSwgMS4wLCAxLjApO1xuICAgIHBhcnRpY2xlU3lzdGVtLmNvbG9yRGVhZCA9IG5ldyBDb2xvcjQoMCwgMCwgMC4yLCAwLjApO1xuXG4gICAgLy8gU2l6ZSBvZiBlYWNoIHBhcnRpY2xlIChyYW5kb20gYmV0d2Vlbi4uLlxuICAgIHBhcnRpY2xlU3lzdGVtLm1pblNpemUgPSAwLjE7XG4gICAgcGFydGljbGVTeXN0ZW0ubWF4U2l6ZSA9IDAuNTtcblxuICAgIC8vIExpZmUgdGltZSBvZiBlYWNoIHBhcnRpY2xlIChyYW5kb20gYmV0d2Vlbi4uLlxuICAgIHBhcnRpY2xlU3lzdGVtLm1pbkxpZmVUaW1lID0gMS4wO1xuICAgIHBhcnRpY2xlU3lzdGVtLm1heExpZmVUaW1lID0gNS4wO1xuXG4gICAgLy8gRW1pc3Npb24gcmF0ZVxuICAgIHBhcnRpY2xlU3lzdGVtLmVtaXRSYXRlID0gMTUwMDtcblxuICAgIC8vIEJsZW5kIG1vZGUgOiBCTEVORE1PREVfT05FT05FLCBvciBCTEVORE1PREVfU1RBTkRBUkRcbiAgICBwYXJ0aWNsZVN5c3RlbS5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FO1xuXG4gICAgLy8gU2V0IHRoZSBncmF2aXR5IG9mIGFsbCBwYXJ0aWNsZXNcbiAgICBwYXJ0aWNsZVN5c3RlbS5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgLTEwLCAwKTtcblxuICAgIC8vIERpcmVjdGlvbiBvZiBlYWNoIHBhcnRpY2xlIGFmdGVyIGl0IGhhcyBiZWVuIGVtaXR0ZWRcbiAgICBwYXJ0aWNsZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IFZlY3RvcjMoLTEsIDQsIDEpO1xuICAgIHBhcnRpY2xlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgVmVjdG9yMygxLCA0LCAtMSk7XG5cbiAgICAvLyBBbmd1bGFyIHNwZWVkLCBpbiByYWRpYW5zXG4gICAgcGFydGljbGVTeXN0ZW0ubWluQW5ndWxhclNwZWVkID0gMDtcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSBNYXRoLlBJO1xuXG4gICAgLy8gU3BlZWRcbiAgICBwYXJ0aWNsZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAwO1xuICAgIHBhcnRpY2xlU3lzdGVtLm1heEVtaXRQb3dlciA9IDE7XG4gICAgcGFydGljbGVTeXN0ZW0udXBkYXRlU3BlZWQgPSAwLjAwNTtcblxuICAgIC8vIE5vaXNlXG4gICAgdmFyIG5vaXNlVGV4dHVyZSA9IG5ldyBOb2lzZVByb2NlZHVyYWxUZXh0dXJlKFwicGVybGluXCIsIDI1Niwgc2NlbmUpO1xuICAgIG5vaXNlVGV4dHVyZS5hbmltYXRpb25TcGVlZEZhY3RvciA9IDU7XG4gICAgbm9pc2VUZXh0dXJlLnBlcnNpc3RlbmNlID0gMjtcbiAgICBub2lzZVRleHR1cmUuYnJpZ2h0bmVzcyA9IDAuNTtcbiAgICBub2lzZVRleHR1cmUub2N0YXZlcyA9IDM7XG5cbiAgICBwYXJ0aWNsZVN5c3RlbS5ub2lzZVRleHR1cmUgPSBub2lzZVRleHR1cmU7XG4gICAgcGFydGljbGVTeXN0ZW0ubm9pc2VTdHJlbmd0aCA9IG5ldyBWZWN0b3IzKDEwMCwgMTAwLCAxMDApO1xuXG4gICAgLy8gU3RhcnQgdGhlIHBhcnRpY2xlIHN5c3RlbVxuICAgIHBhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XG5cbn1cbi8qKioqKioqKioqKioqIEVuZCBvZiBpbml0KCkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKipTdGFydCBvZiBmdW5jdGlvbiBhbmltYXRlKCkqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuXHQvLyBPbmNlIHRoZSBzY2VuZSBpcyBsb2FkZWQsIHJlZ2lzdGVyIGEgcmVuZGVyIGxvb3AgdG8gcmVuZGVyIGl0XG4gICAgICAgIGVuZ2luZS5ydW5SZW5kZXJMb29wKGZ1bmN0aW9uKClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNjZW5lLnJlbmRlcigpO1xuXHRcdFx0XHR9KTtcblxuIC8qKioqKioqKioqKioqKipUaGUgY2FudmFzL3dpbmRvdyByZXNpemUgZXZlbnQgaGFuZGxlcioqKiovXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpXG4ge1xuXHQgZW5naW5lLnJlc2l6ZSgpO1xuXHRcdCB9KTtcblxufVxuLyoqKioqKioqKioqKioqKkVuZCBvZiBmdW5jdGlvbiBhbmltYXRlKCkqKioqL1xuXG5cbmluaXQoKTtcbmFuaW1hdGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==