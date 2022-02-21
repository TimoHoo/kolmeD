"use strict";
(self["webpackChunk_3dbabel"] = self["webpackChunk_3dbabel"] || []).push([["index"],{

/***/ 53794:
/*!***********************************!*\
  !*** ./src/ES6modules/library.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeeKanvaasi": () => (/* binding */ TeeKanvaasi),
/* harmony export */   "LoadPromise": () => (/* binding */ LoadPromise)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ 87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babylonjs_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/ */ 48255);


// library.js - ES6 module format

function TeeKanvaasi() {
  var cnvs = document.createElement('canvas');
  cnvs.id = "kuvakanvaasi";
  cnvs.width = window.innerWidth;
  cnvs.height = window.innerHeight;
  cnvs.style.zIndex = 8;
  cnvs.style.position = "absolute";
  cnvs.style.border = "1px solid";
  document.body.appendChild(cnvs);
  return document.querySelector('#kuvakanvaasi');
}
function LoadPromise(_x, _x2, _x3) {
  return _LoadPromise.apply(this, arguments);
}

function _LoadPromise() {
  _LoadPromise = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(root, file, scene) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (result, reject) {
              _babylonjs_core___WEBPACK_IMPORTED_MODULE_2__.SceneLoader.LoadAssetContainer(root, file, scene, function (container) {
                result(container);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _LoadPromise.apply(this, arguments);
}

/***/ }),

/***/ 62352:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core */ 48255);
/* harmony import */ var _babylonjs_core_Materials_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Materials/Node */ 91779);
/* harmony import */ var _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ 50559);
/* harmony import */ var _ES6modules_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ES6modules/library */ 53794);












 // Required side effects to populate the Create methods on the mesh class.
// Without this, the bundle would be smaller but the createXXX methods
// from mesh would not be accessible.

 //import '@babylonjs/loaders';

 //import { PhysicsImpostor } from "@babylonjs/core/Physics/physicsImpostor";
//import * as cannon from "cannon";
//import { CannonJSPlugin } from "@babylonjs/core/Physics/Plugvarins/cannonJSPlugin";

var canvas = (0,_ES6modules_library__WEBPACK_IMPORTED_MODULE_3__.TeeKanvaasi)();
var scene;
var engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
  disableWebGL2Support: false,
  adaptToDeviceRatio: true
});
/*----------------Start Create scene function---------------------------*/

var createScene = function createScene() {
  scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Scene(engine);
  scene.clearColor = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Color3.FromHexString('#506D85'); // This creates and positions camera

  var camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera("kamera", 0, 0, 0, _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero(), scene);
  camera.wheelPrecision = 512;
  camera.pinchPrecision = 1024; // Positions the camera overwriting alpha, beta, radius

  camera.setPosition(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(2, 2, 10)); // This targets the camera to scene origin

  camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3.Zero()); // This limits the camera movement on screen

  camera.lowerBetaLimit = 1.0;
  camera.upperBetaLimit = 1.4; // This attaches the camera to the canvas

  camera.attachControl(canvas, true);
  var sunLight = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight('Sun', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(-2, -1, 2.5), scene);
  sunLight.intensity = 1;
  var hemiLight = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.HemisphericLight('hemiLight', new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), scene);
  hemiLight.intensity = 0.7; // Our built-in 'ground' shape.

  var ground = _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_2__.MeshBuilder.CreateGround("ground", {
    width: 30,
    height: 30,
    //	subdivisions: 256
    subdivisions: 128
  }, scene);
  ground.scaling = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(2, 2, 2);
  _babylonjs_core_Materials_Node__WEBPACK_IMPORTED_MODULE_1__.NodeMaterial.ParseFromSnippetAsync("#3FU5FG#1", scene).then(function (mat) {
    ground.material = mat;
    window.mat = mat;
  });

  var addPostEffects = function addPostEffects() {
    var pipeline = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.DefaultRenderingPipeline("defaultPipeline", // The name of the pipeline
    false, // Do you want the pipeline to use HDR texture?
    scene, // The scene instance
    [camera] // The list of cameras to be attached to
    );
    pipeline.bloomEnabled = true;
    pipeline.bloomThreshold = 0.8;
    pipeline.bloomWeight = 0.3;
    pipeline.bloomKernel = 64;
    pipeline.bloomScale = 0.5;
    pipeline.grainEnabled = true;
    pipeline.grain.intensity = 8;
    pipeline.grain.animated = true;
    pipeline.chromaticAberrationEnabled = true;
    pipeline.chromaticAberration.aberrationAmount = 64;
    pipeline.chromaticAberration.radialIntensity = 2;
    pipeline.sharpenEnabled = true;
    pipeline.sharpen.edgeAmount = 0.15;
  };

  addPostEffects(); // Create a particle system

  var ps1 = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.ParticleSystem("particles", 20000, scene); //Texture of each particle

  ps1.particleTexture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Texture("./assets/textures/snowflake2.png", scene);
  ps1.translationPivot = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 100, 30); // Position where the particles are emitted from

  ps1.emitter = camera; // Colors of all particles

  ps1.color1 = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Color4(0.7, 0.8, 0.9, 1.0);
  ps1.color2 = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Color4(0.2, 0.5, 1.0, 1.0);
  ps1.colorDead = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Color4(0, 0, 0.2, 0.0); // Size of each particle (random between...

  ps1.minSize = 0.6;
  ps1.maxSize = 0.9; // Life time of each particle (random between...

  ps1.minLifeTime = 1;
  ps1.maxLifeTime = 25; // Emission rate

  ps1.emitRate = 500; // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD

  ps1.blendMode = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.ParticleSystem.BLENDMODE_ONEONE; // Set the gravity of all particles

  ps1.gravity = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -5, 0); // Direction of each particle after it has been emitted

  ps1.direction1 = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(-0.5, -2, 1);
  ps1.direction2 = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.5, 5, 5); // Angular speed, in radians

  ps1.minAngularSpeed = 0;
  ps1.maxAngularSpeed = Math.PI; // Speed

  ps1.minEmitPower = 0.01;
  ps1.maxEmitPower = 10; // Start the particle system

  ps1.start();
};
/*----------------End of Create scene function---------------------------*/

/***************Start of function animate()******************/


function animate() {
  // Once the scene is loaded, register a render loop to render it
  engine.runRenderLoop(function () {
    scene.render();
  });
  /*----------------Animation Loop---------------------------*/

  /*----------------End Animation Loop---------------------------*/

  /***************The canvas/window resize event handler****/

  window.addEventListener('resize', function () {
    engine.resize();
  });
  /***************End of function animate()****/
}

createScene();
animate();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(62352)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSXhFLG9EQUFKLENBQVksQ0FBWixFQUFlLENBQUMsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBZCxDQXBHOEIsQ0FzRzlCOztBQUNBMEQsRUFBQUEsR0FBRyxDQUFDZSxVQUFKLEdBQWlCLElBQUl6RSxvREFBSixDQUFZLENBQUMsR0FBYixFQUFrQixDQUFDLENBQW5CLEVBQXNCLENBQXRCLENBQWpCO0FBQ0EwRCxFQUFBQSxHQUFHLENBQUNnQixVQUFKLEdBQWlCLElBQUkxRSxvREFBSixDQUFZLEdBQVosRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBakIsQ0F4RzhCLENBMEc5Qjs7QUFDQTBELEVBQUFBLEdBQUcsQ0FBQ2lCLGVBQUosR0FBc0IsQ0FBdEI7QUFDQWpCLEVBQUFBLEdBQUcsQ0FBQ2tCLGVBQUosR0FBc0JDLElBQUksQ0FBQ0MsRUFBM0IsQ0E1RzhCLENBOEc5Qjs7QUFDQXBCLEVBQUFBLEdBQUcsQ0FBQ3FCLFlBQUosR0FBbUIsSUFBbkI7QUFDQXJCLEVBQUFBLEdBQUcsQ0FBQ3NCLFlBQUosR0FBbUIsRUFBbkIsQ0FoSDhCLENBa0g5Qjs7QUFDQXRCLEVBQUFBLEdBQUcsQ0FBQ3VCLEtBQUo7QUFFRCxDQXJIRDtBQXVIQTs7QUFFQTs7O0FBQ0EsU0FBU0MsT0FBVCxHQUFtQjtBQUVsQjtBQUNDckUsRUFBQUEsTUFBTSxDQUFDc0UsYUFBUCxDQUFxQixZQUN0QjtBQUNDM0YsSUFBQUEsS0FBSyxDQUFDNEYsTUFBTjtBQUNDLEdBSEQ7QUFLRDs7QUFJQTs7QUFHQTs7QUFDQzFHLEVBQUFBLE1BQU0sQ0FBQzJHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQ25DO0FBQ0N4RSxJQUFBQSxNQUFNLENBQUN5RSxNQUFQO0FBQ0MsR0FIRDtBQUtEO0FBQ0M7O0FBRUZwRSxXQUFXO0FBQ1hnRSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vM2RiYWJlbC8uL3NyYy9FUzZtb2R1bGVzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vM2RiYWJlbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJyYXJ5LmpzIC0gRVM2IG1vZHVsZSBmb3JtYXRcblxuaW1wb3J0IHtcdFNjZW5lTG9hZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlLyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZWVLYW52YWFzaSgpIHtcblx0dmFyIGNudnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y252cy5pZCA9IFwia3V2YWthbnZhYXNpXCI7XG5cdGNudnMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0Y252cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdGNudnMuc3R5bGUuekluZGV4ID0gODtcblx0Y252cy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Y252cy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZFwiO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNudnMpO1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNrdXZha2FudmFhc2knICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBMb2FkUHJvbWlzZShyb290LCBmaWxlLCBzY2VuZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc3VsdCxyZWplY3QpPT57XG5cdFx0U2NlbmVMb2FkZXIuTG9hZEFzc2V0Q29udGFpbmVyKHJvb3QsIGZpbGUsIHNjZW5lLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0XHRyZXN1bHQoY29udGFpbmVyKVxuXHRcdFx0fSk7XG5cdCAgfSlcblx0fVxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlXCI7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlXCI7XG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZVwiO1xuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZVwiO1xuaW1wb3J0IHsgQ29sb3I0IH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZVwiO1xuaW1wb3J0IHsgRGlyZWN0aW9uYWxMaWdodCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmVcIjtcbmltcG9ydCB7IEhlbWlzcGhlcmljTGlnaHQgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlXCI7XG5pbXBvcnQgeyBBcmNSb3RhdGVDYW1lcmEgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlXCI7XG5pbXBvcnQgeyBNZXNoIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZVwiO1xuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmVcIjtcbmltcG9ydCB7IE5vZGVNYXRlcmlhbCB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvTWF0ZXJpYWxzL05vZGVcIjtcbmltcG9ydCB7IERlZmF1bHRSZW5kZXJpbmdQaXBlbGluZSB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmVcIjtcbmltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZVwiO1xuXG4vLyBSZXF1aXJlZCBzaWRlIGVmZmVjdHMgdG8gcG9wdWxhdGUgdGhlIENyZWF0ZSBtZXRob2RzIG9uIHRoZSBtZXNoIGNsYXNzLlxuLy8gV2l0aG91dCB0aGlzLCB0aGUgYnVuZGxlIHdvdWxkIGJlIHNtYWxsZXIgYnV0IHRoZSBjcmVhdGVYWFggbWV0aG9kc1xuLy8gZnJvbSBtZXNoIHdvdWxkIG5vdCBiZSBhY2Nlc3NpYmxlLlxuaW1wb3J0IHsgTWVzaEJ1aWxkZXIgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuXG4vL2ltcG9ydCAnQGJhYnlsb25qcy9sb2FkZXJzJztcblxuaW1wb3J0IHsgVGVlS2FudmFhc2kgfSBmcm9tICcuL0VTNm1vZHVsZXMvbGlicmFyeSc7XG5cbi8vaW1wb3J0IHsgUGh5c2ljc0ltcG9zdG9yIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9QaHlzaWNzL3BoeXNpY3NJbXBvc3RvclwiO1xuLy9pbXBvcnQgKiBhcyBjYW5ub24gZnJvbSBcImNhbm5vblwiO1xuLy9pbXBvcnQgeyBDYW5ub25KU1BsdWdpbiB9IGZyb20gXCJAYmFieWxvbmpzL2NvcmUvUGh5c2ljcy9QbHVndmFyaW5zL2Nhbm5vbkpTUGx1Z2luXCI7XG5cbmNvbnN0IGNhbnZhcyA9IFRlZUthbnZhYXNpKCk7XG5cbmxldCBzY2VuZTtcblxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMsIHRydWUsIHtcblx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRzdGVuY2lsOiB0cnVlLFxuXHRkaXNhYmxlV2ViR0wyU3VwcG9ydDogZmFsc2UsXG5cdGFkYXB0VG9EZXZpY2VSYXRpbzogdHJ1ZVxuXHR9KTtcblxuLyotLS0tLS0tLS0tLS0tLS0tU3RhcnQgQ3JlYXRlIHNjZW5lIGZ1bmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmNvbnN0IGNyZWF0ZVNjZW5lID0gZnVuY3Rpb24gKCkge1xuICAgIHNjZW5lID0gbmV3IFNjZW5lKGVuZ2luZSk7XG4gICAgc2NlbmUuY2xlYXJDb2xvciA9IENvbG9yMy5Gcm9tSGV4U3RyaW5nKCcjNTA2RDg1Jyk7XG5cbi8vIFRoaXMgY3JlYXRlcyBhbmQgcG9zaXRpb25zIGNhbWVyYVxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBBcmNSb3RhdGVDYW1lcmEoXCJrYW1lcmFcIiwgMCwgMCwgMCwgVmVjdG9yMy5aZXJvKCksIHNjZW5lKTtcbiAgICBjYW1lcmEud2hlZWxQcmVjaXNpb24gPSA1MTI7XG4gICAgY2FtZXJhLnBpbmNoUHJlY2lzaW9uID0gMTAyNDtcblxuLy8gUG9zaXRpb25zIHRoZSBjYW1lcmEgb3ZlcndyaXRpbmcgYWxwaGEsIGJldGEsIHJhZGl1c1xuXHRcdGNhbWVyYS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yMygyLCAyLCAxMCkpO1xuXG4vLyBUaGlzIHRhcmdldHMgdGhlIGNhbWVyYSB0byBzY2VuZSBvcmlnaW5cbiAgICBjYW1lcmEuc2V0VGFyZ2V0KFZlY3RvcjMuWmVybygpKTtcblxuLy8gVGhpcyBsaW1pdHMgdGhlIGNhbWVyYSBtb3ZlbWVudCBvbiBzY3JlZW5cblx0XHRjYW1lcmEubG93ZXJCZXRhTGltaXQgPSAxLjA7XG5cdFx0Y2FtZXJhLnVwcGVyQmV0YUxpbWl0ID0gMS40O1xuXG4vLyBUaGlzIGF0dGFjaGVzIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xuICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKGNhbnZhcywgdHJ1ZSk7XG5cbmNvbnN0IHN1bkxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoJ1N1bicsIG5ldyBWZWN0b3IzKC0yLCAtMSwgMi41KSwgc2NlbmUpO1xuICAgIHN1bkxpZ2h0LmludGVuc2l0eSA9IDE7XG5cbmNvbnN0IGhlbWlMaWdodCA9IG5ldyBIZW1pc3BoZXJpY0xpZ2h0KCdoZW1pTGlnaHQnLG5ldyBWZWN0b3IzKDAsIDEsIDApLHNjZW5lKTtcbiAgICBoZW1pTGlnaHQuaW50ZW5zaXR5ID0gMC43O1xuXG4vLyBPdXIgYnVpbHQtaW4gJ2dyb3VuZCcgc2hhcGUuXG5jb25zdCBncm91bmQgPSBNZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoXCJncm91bmRcIiwge1xuXHR3aWR0aDogMzAsXG5cdGhlaWdodDogMzAsXG4vL1x0c3ViZGl2aXNpb25zOiAyNTZcblx0c3ViZGl2aXNpb25zOiAxMjhcblx0fSwgc2NlbmUpO1xuXG5ncm91bmQuc2NhbGluZyA9IG5ldyBWZWN0b3IzKDIsIDIsIDIpO1xuXG5Ob2RlTWF0ZXJpYWwuUGFyc2VGcm9tU25pcHBldEFzeW5jKFwiIzNGVTVGRyMxXCIsIHNjZW5lKS50aGVuKChtYXQpID0+IHtcblx0Z3JvdW5kLm1hdGVyaWFsID0gbWF0O1xuXHR3aW5kb3cubWF0ID0gbWF0O1xuIH0pO1xuXG5sZXQgYWRkUG9zdEVmZmVjdHMgPSAoKSA9PiB7XG5cdGNvbnN0IHBpcGVsaW5lID0gbmV3IERlZmF1bHRSZW5kZXJpbmdQaXBlbGluZShcblx0XHRcImRlZmF1bHRQaXBlbGluZVwiLCAvLyBUaGUgbmFtZSBvZiB0aGUgcGlwZWxpbmVcbiAgICBmYWxzZSwgLy8gRG8geW91IHdhbnQgdGhlIHBpcGVsaW5lIHRvIHVzZSBIRFIgdGV4dHVyZT9cbiAgICBzY2VuZSwgLy8gVGhlIHNjZW5lIGluc3RhbmNlXG4gICAgW2NhbWVyYV0gLy8gVGhlIGxpc3Qgb2YgY2FtZXJhcyB0byBiZSBhdHRhY2hlZCB0b1xuICAgICk7XG5cbiAgcGlwZWxpbmUuYmxvb21FbmFibGVkICAgPSB0cnVlO1xuXHRwaXBlbGluZS5ibG9vbVRocmVzaG9sZCA9IDAuODtcbiAgcGlwZWxpbmUuYmxvb21XZWlnaHQgPSAwLjM7XG4gIHBpcGVsaW5lLmJsb29tS2VybmVsID0gNjQ7XG4gIHBpcGVsaW5lLmJsb29tU2NhbGUgPSAwLjU7XG5cbiAgcGlwZWxpbmUuZ3JhaW5FbmFibGVkICAgID0gdHJ1ZTtcbiAgcGlwZWxpbmUuZ3JhaW4uaW50ZW5zaXR5ID0gODtcbiAgcGlwZWxpbmUuZ3JhaW4uYW5pbWF0ZWQgID0gdHJ1ZTtcblxuICBwaXBlbGluZS5jaHJvbWF0aWNBYmVycmF0aW9uRW5hYmxlZCAgICAgICAgICAgICA9IHRydWU7XG4gIHBpcGVsaW5lLmNocm9tYXRpY0FiZXJyYXRpb24uYWJlcnJhdGlvbkFtb3VudCAgID0gNjQ7XG4gIHBpcGVsaW5lLmNocm9tYXRpY0FiZXJyYXRpb24ucmFkaWFsSW50ZW5zaXR5ICAgID0gMjtcblxuICBwaXBlbGluZS5zaGFycGVuRW5hYmxlZCAgICAgPSB0cnVlO1xuICBwaXBlbGluZS5zaGFycGVuLmVkZ2VBbW91bnQgPSAwLjE1O1xuICB9XG5cdGFkZFBvc3RFZmZlY3RzKCk7XG5cblx0Ly8gQ3JlYXRlIGEgcGFydGljbGUgc3lzdGVtXG5cdGxldCBwczEgPSBuZXcgUGFydGljbGVTeXN0ZW0oXCJwYXJ0aWNsZXNcIiwgMjAwMDAsIHNjZW5lKTtcblxuXHQvL1RleHR1cmUgb2YgZWFjaCBwYXJ0aWNsZVxuICBwczEucGFydGljbGVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCIuL2Fzc2V0cy90ZXh0dXJlcy9zbm93Zmxha2UyLnBuZ1wiLCBzY2VuZSk7XG4gIHBzMS50cmFuc2xhdGlvblBpdm90ID0gbmV3IFZlY3RvcjMoMCwgMTAwLDMwKTtcblxuXHQvLyBQb3NpdGlvbiB3aGVyZSB0aGUgcGFydGljbGVzIGFyZSBlbWl0dGVkIGZyb21cblx0cHMxLmVtaXR0ZXIgPSBjYW1lcmE7XG5cblx0Ly8gQ29sb3JzIG9mIGFsbCBwYXJ0aWNsZXNcbiAgcHMxLmNvbG9yMSA9IG5ldyBDb2xvcjQoMC43LCAwLjgsIDAuOSwgMS4wKTtcbiAgcHMxLmNvbG9yMiA9IG5ldyBDb2xvcjQoMC4yLCAwLjUsIDEuMCwgMS4wKTtcbiAgcHMxLmNvbG9yRGVhZCA9IG5ldyBDb2xvcjQoMCwgMCwgMC4yLCAwLjApO1xuXG5cdC8vIFNpemUgb2YgZWFjaCBwYXJ0aWNsZSAocmFuZG9tIGJldHdlZW4uLi5cbiAgcHMxLm1pblNpemUgPSAwLjY7XG4gIHBzMS5tYXhTaXplID0gMC45O1xuXG4gIC8vIExpZmUgdGltZSBvZiBlYWNoIHBhcnRpY2xlIChyYW5kb20gYmV0d2Vlbi4uLlxuICBwczEubWluTGlmZVRpbWUgPSAxO1xuICBwczEubWF4TGlmZVRpbWUgPSAyNTtcblxuICAvLyBFbWlzc2lvbiByYXRlXG4gIHBzMS5lbWl0UmF0ZSA9IDUwMDtcblxuICAvLyBCbGVuZCBtb2RlIDogQkxFTkRNT0RFX09ORU9ORSwgb3IgQkxFTkRNT0RFX1NUQU5EQVJEXG4gIHBzMS5ibGVuZE1vZGUgPSBQYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FO1xuXG4gIC8vIFNldCB0aGUgZ3Jhdml0eSBvZiBhbGwgcGFydGljbGVzXG4gIHBzMS5ncmF2aXR5ID0gbmV3IFZlY3RvcjMoMCwgLTUsIDApO1xuXG4gIC8vIERpcmVjdGlvbiBvZiBlYWNoIHBhcnRpY2xlIGFmdGVyIGl0IGhhcyBiZWVuIGVtaXR0ZWRcbiAgcHMxLmRpcmVjdGlvbjEgPSBuZXcgVmVjdG9yMygtMC41LCAtMiwgMSk7XG4gIHBzMS5kaXJlY3Rpb24yID0gbmV3IFZlY3RvcjMoMC41LCA1LCA1KTtcblxuICAvLyBBbmd1bGFyIHNwZWVkLCBpbiByYWRpYW5zXG4gIHBzMS5taW5Bbmd1bGFyU3BlZWQgPSAwO1xuICBwczEubWF4QW5ndWxhclNwZWVkID0gTWF0aC5QSTtcblxuICAvLyBTcGVlZFxuICBwczEubWluRW1pdFBvd2VyID0gMC4wMTtcbiAgcHMxLm1heEVtaXRQb3dlciA9IDEwO1xuXG4gIC8vIFN0YXJ0IHRoZSBwYXJ0aWNsZSBzeXN0ZW1cbiAgcHMxLnN0YXJ0KCk7XG5cbn07XG5cbi8qLS0tLS0tLS0tLS0tLS0tLUVuZCBvZiBDcmVhdGUgc2NlbmUgZnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKioqKioqKioqKioqKioqU3RhcnQgb2YgZnVuY3Rpb24gYW5pbWF0ZSgpKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcblxuXHQvLyBPbmNlIHRoZSBzY2VuZSBpcyBsb2FkZWQsIHJlZ2lzdGVyIGEgcmVuZGVyIGxvb3AgdG8gcmVuZGVyIGl0XG4gIGVuZ2luZS5ydW5SZW5kZXJMb29wKGZ1bmN0aW9uKClcblx0e1xuXHRcdHNjZW5lLnJlbmRlcigpO1xuXHRcdH0pO1xuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLUFuaW1hdGlvbiBMb29wLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG5cbiAvKi0tLS0tLS0tLS0tLS0tLS1FbmQgQW5pbWF0aW9uIExvb3AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAvKioqKioqKioqKioqKioqVGhlIGNhbnZhcy93aW5kb3cgcmVzaXplIGV2ZW50IGhhbmRsZXIqKioqL1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKVxuXHR7XG5cdCBlbmdpbmUucmVzaXplKCk7XG5cdCB9KTtcblxuIC8qKioqKioqKioqKioqKipFbmQgb2YgZnVuY3Rpb24gYW5pbWF0ZSgpKioqKi9cbiB9XG5cbmNyZWF0ZVNjZW5lKCk7XG5hbmltYXRlKCk7XG4iXSwibmFtZXMiOlsiU2NlbmVMb2FkZXIiLCJUZWVLYW52YWFzaSIsImNudnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImJvcmRlciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJMb2FkUHJvbWlzZSIsInJvb3QiLCJmaWxlIiwic2NlbmUiLCJQcm9taXNlIiwicmVzdWx0IiwicmVqZWN0IiwiTG9hZEFzc2V0Q29udGFpbmVyIiwiY29udGFpbmVyIiwiU2NlbmUiLCJFbmdpbmUiLCJWZWN0b3IzIiwiQ29sb3IzIiwiQ29sb3I0IiwiRGlyZWN0aW9uYWxMaWdodCIsIkhlbWlzcGhlcmljTGlnaHQiLCJBcmNSb3RhdGVDYW1lcmEiLCJNZXNoIiwiVGV4dHVyZSIsIk5vZGVNYXRlcmlhbCIsIkRlZmF1bHRSZW5kZXJpbmdQaXBlbGluZSIsIlBhcnRpY2xlU3lzdGVtIiwiTWVzaEJ1aWxkZXIiLCJjYW52YXMiLCJlbmdpbmUiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJzdGVuY2lsIiwiZGlzYWJsZVdlYkdMMlN1cHBvcnQiLCJhZGFwdFRvRGV2aWNlUmF0aW8iLCJjcmVhdGVTY2VuZSIsImNsZWFyQ29sb3IiLCJGcm9tSGV4U3RyaW5nIiwiY2FtZXJhIiwiWmVybyIsIndoZWVsUHJlY2lzaW9uIiwicGluY2hQcmVjaXNpb24iLCJzZXRQb3NpdGlvbiIsInNldFRhcmdldCIsImxvd2VyQmV0YUxpbWl0IiwidXBwZXJCZXRhTGltaXQiLCJhdHRhY2hDb250cm9sIiwic3VuTGlnaHQiLCJpbnRlbnNpdHkiLCJoZW1pTGlnaHQiLCJncm91bmQiLCJDcmVhdGVHcm91bmQiLCJzdWJkaXZpc2lvbnMiLCJzY2FsaW5nIiwiUGFyc2VGcm9tU25pcHBldEFzeW5jIiwidGhlbiIsIm1hdCIsIm1hdGVyaWFsIiwiYWRkUG9zdEVmZmVjdHMiLCJwaXBlbGluZSIsImJsb29tRW5hYmxlZCIsImJsb29tVGhyZXNob2xkIiwiYmxvb21XZWlnaHQiLCJibG9vbUtlcm5lbCIsImJsb29tU2NhbGUiLCJncmFpbkVuYWJsZWQiLCJncmFpbiIsImFuaW1hdGVkIiwiY2hyb21hdGljQWJlcnJhdGlvbkVuYWJsZWQiLCJjaHJvbWF0aWNBYmVycmF0aW9uIiwiYWJlcnJhdGlvbkFtb3VudCIsInJhZGlhbEludGVuc2l0eSIsInNoYXJwZW5FbmFibGVkIiwic2hhcnBlbiIsImVkZ2VBbW91bnQiLCJwczEiLCJwYXJ0aWNsZVRleHR1cmUiLCJ0cmFuc2xhdGlvblBpdm90IiwiZW1pdHRlciIsImNvbG9yMSIsImNvbG9yMiIsImNvbG9yRGVhZCIsIm1pblNpemUiLCJtYXhTaXplIiwibWluTGlmZVRpbWUiLCJtYXhMaWZlVGltZSIsImVtaXRSYXRlIiwiYmxlbmRNb2RlIiwiQkxFTkRNT0RFX09ORU9ORSIsImdyYXZpdHkiLCJkaXJlY3Rpb24xIiwiZGlyZWN0aW9uMiIsIm1pbkFuZ3VsYXJTcGVlZCIsIm1heEFuZ3VsYXJTcGVlZCIsIk1hdGgiLCJQSSIsIm1pbkVtaXRQb3dlciIsIm1heEVtaXRQb3dlciIsInN0YXJ0IiwiYW5pbWF0ZSIsInJ1blJlbmRlckxvb3AiLCJyZW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==