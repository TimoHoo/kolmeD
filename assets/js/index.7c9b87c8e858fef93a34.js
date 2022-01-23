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
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ 87757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core */ 48255);
/* harmony import */ var _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Meshes/meshBuilder */ 50559);
/* harmony import */ var _babylonjs_loaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/loaders */ 58059);
/* harmony import */ var _babylonjs_core_Physics_physicsImpostor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Physics/physicsImpostor */ 80731);
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cannon */ 1125);
/* harmony import */ var cannon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cannon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babylonjs_core_Physics_Plugins_cannonJSPlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Physics/Plugins/cannonJSPlugin */ 51016);
/* harmony import */ var _ES6modules_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ES6modules/library */ 53794);
/* harmony import */ var _babylonjs_materials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/materials */ 87845);



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Required side effects to populate the Create methods on the mesh class.
// Without this, the bundle would be smaller but the createXXX methods
// from mesh would not be accessible.



/*
Please note that when using Ammo since version 5.0 you are required to initialize it before creating the ammo plugin:
await Ammo();
scene.enablePhysics(new BABYLON.Vector3(0,-9.81, 0), new BABYLON.AmmoJSPlugin());

//import * as Ammo from "../assets/ammo.js";
//import { AmmoJSPlugin } from "babylonjs";
*/





 //exports provided: CellMaterial, CustomShaderStructure, ShaderSpecialParts, CustomMaterial,
//ShaderAlebdoParts, PBRCustomMaterial, FireMaterial, FurMaterial, GradientMaterial,
//GridMaterial, LavaMaterial, MixMaterial, NormalMaterial, ShadowOnlyMaterial,
//SimpleMaterial, SkyMaterial, TerrainMaterial, TriPlanarMaterial, WaterMaterial
//import { GrassProceduralTexture } from '@babylonjs/procedural-textures';

/*exports provided: BrickProceduralTexture, CloudProceduralTexture,
FireProceduralTexture, GrassProceduralTexture, MarbleProceduralTexture,
NormalMapProceduralTexture, PerlinNoiseProceduralTexture,
RoadProceduralTexture, StarfieldProceduralTexture, WoodProceduralTexture */

var scene, engine;
var canvas = (0,_ES6modules_library__WEBPACK_IMPORTED_MODULE_8__.TeeKanvaasi)();
engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
  disableWebGL2Support: false,
  adaptToDeviceRatio: true
});

var ShowOnScreen = function ShowOnScreen(container, scale, offSet) {
  var sphere;
  var entries = container.instantiateModelsToScene(function (name) {
    return "entries-" + name;
  }, true);

  var _iterator = _createForOfIteratorHelper(entries.rootNodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;

      if (node.name.indexOf("Purkki") > 1) {
        node.position.x += offSet;
        node.rotation.x += Math.PI / 2;
        var mat = new _babylonjs_materials__WEBPACK_IMPORTED_MODULE_9__.PBRCustomMaterial("Custom", scene);
        mat.diffuseTexture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Texture("./assets/textures/Flare.png", scene);
        mat.diffuseTexture.hasAlpha = true;
        mat.backFaceCulling = false;
        sphere = _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_3__.MeshBuilder.CreateSphere("sphere" + node.name, {
          diameter: 1.2
        }, scene);
        sphere.position = node.getAbsolutePosition().add(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 1.5, 0));
        sphere.material = mat;
        node.material = mat;
        sphere.addChild(node); //		sphere.isVisible = false;

        node.scaling.scaleInPlace(scale);
        node.position.y += 0.8;
        sphere.physicsImpostor = new _babylonjs_core_Physics_physicsImpostor__WEBPACK_IMPORTED_MODULE_5__.PhysicsImpostor(sphere, _babylonjs_core_Physics_physicsImpostor__WEBPACK_IMPORTED_MODULE_5__.PhysicsImpostor.SphereImpostor, {
          mass: 0.5,
          friction: 0.1,
          restitution: 0.7
        });
      } else {
        node.scaling.scaleInPlace(scale);
        node.position.x += offSet;
      }

      ;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var loadMeshes = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(scene) {
    var AssetContainers, Models, _i, _Models, element, ModelContainer;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            AssetContainers = [];
            Models = [{
              PathToModel: "./assets/models/",
              ModelFile: "Purkki.babylon",
              ModelName: "Purkki"
            }];
            _i = 0, _Models = Models;

          case 3:
            if (!(_i < _Models.length)) {
              _context.next = 14;
              break;
            }

            element = _Models[_i];
            _context.next = 7;
            return (0,_ES6modules_library__WEBPACK_IMPORTED_MODULE_8__.LoadPromise)(element.PathToModel, element.ModelFile, scene);

          case 7:
            ModelContainer = _context.sent;
            ModelContainer.meshes[0].rotation = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0);
            ModelContainer.meshes[0].name = element.ModelName;
            AssetContainers.push(ModelContainer);

          case 11:
            _i++;
            _context.next = 3;
            break;

          case 14:
            return _context.abrupt("return", AssetContainers);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadMeshes(_x) {
    return _ref.apply(this, arguments);
  };
}();
/***************Start of function createScene()**********************/


var createScene = function createScene() {
  engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false,
    adaptToDeviceRatio: true
  }); // This creates a basic Babylon Scene object (non-mesh)

  scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Scene(engine);
  scene.createDefaultCameraOrLight(true, true, true);
  scene.activeCamera.setPosition(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 2, 15));
  scene.activeCamera.wheelDeltaPercentage = 0.001; // Enable physics

  var physEngine = new _babylonjs_core_Physics_Plugins_cannonJSPlugin__WEBPACK_IMPORTED_MODULE_7__.CannonJSPlugin(true, 10 / 3, cannon__WEBPACK_IMPORTED_MODULE_6__);
  scene.enablePhysics(null, physEngine);
  scene.getPhysicsEngine().setSubTimeStep(2); // Create environment and skybox

  var myEnvironment = scene.createDefaultEnvironment({
    createSkybox: true,
    //default = true
    setupImageProcessing: true,
    //desfault
    skyboxSize: 40,
    //20 by default.
    skyboxTexture: "./assets/textures/environmentSpecular.dds"
  });
  var Mallit = loadMeshes(scene);
  Mallit.then(function (res) {
    var MalliPurkki = res[0]; //	Call Function: ShowOnScreen(spellL, scale, offSet.x);

    for (var i = -2; i < 3; i++) {
      ShowOnScreen(MalliPurkki, 0.5, 3 * i);
    } //	When ready - Call Function: PurkkiActions


    PurkkiActions(res);
  }); // Create ground as physics impostors

  var ground = _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_3__.MeshBuilder.CreateBox("Ground", {}, scene);
  ground.scaling = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Vector3(30, 0.5, 30);
  ground.position.y = myEnvironment.ground.position.y - 3;
  ground.material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.StandardMaterial("alusta", scene);
  ground.material.alpha = 0.05;
  ground.material.alphaMode = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Engine.ALPHA_ADD;
  ground.physicsImpostor = new _babylonjs_core_Physics_physicsImpostor__WEBPACK_IMPORTED_MODULE_5__.PhysicsImpostor(ground, _babylonjs_core_Physics_physicsImpostor__WEBPACK_IMPORTED_MODULE_5__.PhysicsImpostor.BoxImpostor, {
    mass: 0,
    friction: 0.1,
    restitution: 0.6
  }); // End of ground
  //****** Create stand for targets *****/

  var Stand = _babylonjs_core_Meshes_meshBuilder__WEBPACK_IMPORTED_MODULE_3__.MeshBuilder.CreateBox("Stand", {}, scene);
  Stand.scaling = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Vector3(15, 1, 3);
  Stand.position.y = ground.position.y - 0.25;
  Stand.material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.StandardMaterial("lankku", scene);
  Stand.material.diffuseTexture = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Texture("./assets/textures/alpha.jpg", scene);
  Stand.material.alpha = 0.75;
  Stand.material.alphaMode = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Engine.ALPHA_ADD; //***** End of stand ***********/
  // ******** Click-on target mesh for physicsImpostor action **/

  var PointerDown;

  function PurkkiActions(LadatutMallit) {
    var Purkki = LadatutMallit[0];
    var Counter = 0;

    PointerDown = function PointerDown(mesh, hitpoint) {
      if (mesh.name.indexOf("Purkki") > 1) {
        var Impluse_vector = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.Vector3(-1, 5, -1);
        mesh.applyImpulse(Impluse_vector, mesh.getAbsolutePosition().add(hitpoint));

        var myInterval = function Viive() {
          return setInterval(function () {
            mesh.dispose();
          }, 1500);
        };

        myInterval(clearInterval(myInterval));
        Counter += 1;
      } else {
        //				console.log("OSUMIA: " + Counter );
        if (Counter > 4) {
          for (var i = -2; i < 3; i++) {
            //ShowOnScreen(sphereObject, scale, offSet.x);
            ShowOnScreen(Purkki, 0.5, 3 * i);
          }

          Counter = 0;
        }
      }
    };
  }

  scene.onPointerObservable.add(function (pointerInfo) {
    switch (pointerInfo.type) {
      case _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__.PointerEventTypes.POINTERDOWN:
        if (pointerInfo.pickInfo.hit) {
          PointerDown(pointerInfo.pickInfo.pickedMesh, pointerInfo.pickInfo.pickedPoint);
        }

        break;
    }
  });
};
/***************End of function createScene()******************/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2M5Yjg3YzhlODU4ZmVmOTNhMzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRU8sU0FBU0MsV0FBVCxHQUF1QjtBQUM3QixNQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFYO0FBQ0FGLEVBQUFBLElBQUksQ0FBQ0csRUFBTCxHQUFVLGNBQVY7QUFDQUgsRUFBQUEsSUFBSSxDQUFDSSxLQUFMLEdBQWFDLE1BQU0sQ0FBQ0MsVUFBcEI7QUFDQU4sRUFBQUEsSUFBSSxDQUFDTyxNQUFMLEdBQWNGLE1BQU0sQ0FBQ0csV0FBckI7QUFDQVIsRUFBQUEsSUFBSSxDQUFDUyxLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBcEI7QUFDQVYsRUFBQUEsSUFBSSxDQUFDUyxLQUFMLENBQVdFLFFBQVgsR0FBc0IsVUFBdEI7QUFDQVgsRUFBQUEsSUFBSSxDQUFDUyxLQUFMLENBQVdHLE1BQVgsR0FBb0IsV0FBcEI7QUFDQVgsRUFBQUEsUUFBUSxDQUFDWSxJQUFULENBQWNDLFdBQWQsQ0FBMEJkLElBQTFCO0FBQ0EsU0FBT0MsUUFBUSxDQUFDYyxhQUFULENBQXdCLGVBQXhCLENBQVA7QUFDQTtBQUVNLFNBQWVDLFdBQXRCO0FBQUE7QUFBQTs7OzBMQUFPLGlCQUEyQkMsSUFBM0IsRUFBaUNDLElBQWpDLEVBQXVDQyxLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ0MsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE1BQUQsRUFBUUMsTUFBUixFQUFpQjtBQUNuQ3hCLGNBQUFBLDRFQUFBLENBQStCbUIsSUFBL0IsRUFBcUNDLElBQXJDLEVBQTJDQyxLQUEzQyxFQUFrRCxVQUFVSyxTQUFWLEVBQXFCO0FBQ3RFSCxnQkFBQUEsTUFBTSxDQUFDRyxTQUFELENBQU47QUFDQyxlQUZGO0FBR0UsYUFKSSxDQUREOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDTFA7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJTCxLQUFKLEVBQVdtQixNQUFYO0FBQ0EsSUFBTUMsTUFBTSxHQUFHeEMsZ0VBQVcsRUFBMUI7QUFFQXVDLE1BQU0sR0FBRyxJQUFJWixtREFBSixDQUFXYSxNQUFYLEVBQW1CLElBQW5CLEVBQXlCO0FBQ2pDQyxFQUFBQSxxQkFBcUIsRUFBRSxJQURVO0FBRWpDQyxFQUFBQSxPQUFPLEVBQUUsSUFGd0I7QUFHakNDLEVBQUFBLG9CQUFvQixFQUFFLEtBSFc7QUFJakNDLEVBQUFBLGtCQUFrQixFQUFFO0FBSmEsQ0FBekIsQ0FBVDs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFTcEIsU0FBVCxFQUFvQnFCLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQztBQUN2RCxNQUFJQyxNQUFKO0FBQ0EsTUFBSUMsT0FBTyxHQUFHeEIsU0FBUyxDQUFDeUIsd0JBQVYsQ0FBbUMsVUFBQUMsSUFBSTtBQUFBLFdBQUksYUFBYUEsSUFBakI7QUFBQSxHQUF2QyxFQUE4RCxJQUE5RCxDQUFkOztBQUZ1RCw2Q0FJcENGLE9BQU8sQ0FBQ0csU0FKNEI7QUFBQTs7QUFBQTtBQUl2RCx3REFBc0M7QUFBQSxVQUEzQkMsSUFBMkI7O0FBQ25DLFVBQUlBLElBQUksQ0FBQ0YsSUFBTCxDQUFVRyxPQUFWLENBQWtCLFFBQWxCLElBQThCLENBQWxDLEVBQXNDO0FBQ3ZDRCxRQUFBQSxJQUFJLENBQUN6QyxRQUFMLENBQWMyQyxDQUFkLElBQW1CUixNQUFuQjtBQUNBTSxRQUFBQSxJQUFJLENBQUNHLFFBQUwsQ0FBY0QsQ0FBZCxJQUFtQkUsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBN0I7QUFFRyxZQUFNQyxHQUFHLEdBQUcsSUFBSXJCLG1FQUFKLENBQXNCLFFBQXRCLEVBQWdDbEIsS0FBaEMsQ0FBWjtBQUNIdUMsUUFBQUEsR0FBRyxDQUFDQyxjQUFKLEdBQXFCLElBQUk3QixvREFBSixDQUFZLDZCQUFaLEVBQTJDWCxLQUEzQyxDQUFyQjtBQUNBdUMsUUFBQUEsR0FBRyxDQUFDQyxjQUFKLENBQW1CQyxRQUFuQixHQUE4QixJQUE5QjtBQUNHRixRQUFBQSxHQUFHLENBQUNHLGVBQUosR0FBc0IsS0FBdEI7QUFFSmQsUUFBQUEsTUFBTSxHQUFHZCx3RkFBQSxDQUF5QixXQUFXbUIsSUFBSSxDQUFDRixJQUF6QyxFQUErQztBQUFFYSxVQUFBQSxRQUFRLEVBQUU7QUFBWixTQUEvQyxFQUFrRTVDLEtBQWxFLENBQVQ7QUFDQTRCLFFBQUFBLE1BQU0sQ0FBQ3BDLFFBQVAsR0FBa0J5QyxJQUFJLENBQUNZLG1CQUFMLEdBQTJCQyxHQUEzQixDQUErQixJQUFJdEMsb0RBQUosQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQS9CLENBQWxCO0FBQ0FvQixRQUFBQSxNQUFNLENBQUNtQixRQUFQLEdBQWtCUixHQUFsQjtBQUNBTixRQUFBQSxJQUFJLENBQUNjLFFBQUwsR0FBZ0JSLEdBQWhCO0FBQ0FYLFFBQUFBLE1BQU0sQ0FBQ29CLFFBQVAsQ0FBZ0JmLElBQWhCLEVBYndDLENBZTFDOztBQUVFQSxRQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWFDLFlBQWIsQ0FBMEJ4QixLQUExQjtBQUNBTyxRQUFBQSxJQUFJLENBQUN6QyxRQUFMLENBQWMyRCxDQUFkLElBQW1CLEdBQW5CO0FBRUF2QixRQUFBQSxNQUFNLENBQUN3QixlQUFQLEdBQXlCLElBQUlyQyxvRkFBSixDQUFvQmEsTUFBcEIsRUFBNEJiLG1HQUE1QixFQUE0RDtBQUNqRnVDLFVBQUFBLElBQUksRUFBRSxHQUQyRTtBQUVqRkMsVUFBQUEsUUFBUSxFQUFFLEdBRnVFO0FBR2pGQyxVQUFBQSxXQUFXLEVBQUU7QUFIb0UsU0FBNUQsQ0FBekI7QUFNRyxPQTFCRCxNQTBCTztBQUNSdkIsUUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhQyxZQUFiLENBQTBCeEIsS0FBMUI7QUFDQU8sUUFBQUEsSUFBSSxDQUFDekMsUUFBTCxDQUFjMkMsQ0FBZCxJQUFtQlIsTUFBbkI7QUFDRTs7QUFBQTtBQUVGO0FBcENxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUN0RCxDQXJDRjs7QUF1Q0EsSUFBTThCLFVBQVU7QUFBQSxzTEFBRyxpQkFBTXpELEtBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkMEQsWUFBQUEsZUFEYyxHQUNJLEVBREo7QUFFZEMsWUFBQUEsTUFGYyxHQUVMLENBQ1o7QUFDQ0MsY0FBQUEsV0FBVyxFQUFFLGtCQURkO0FBRUNDLGNBQUFBLFNBQVMsRUFBRSxnQkFGWjtBQUdDQyxjQUFBQSxTQUFTLEVBQUU7QUFIWixhQURZLENBRks7QUFBQSw4QkFTSUgsTUFUSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNQSSxZQUFBQSxPQVRPO0FBQUE7QUFBQSxtQkFVYWxFLGdFQUFXLENBQUNrRSxPQUFPLENBQUNILFdBQVQsRUFBc0JHLE9BQU8sQ0FBQ0YsU0FBOUIsRUFBeUM3RCxLQUF6QyxDQVZ4Qjs7QUFBQTtBQVVWZ0UsWUFBQUEsY0FWVTtBQVdoQkEsWUFBQUEsY0FBYyxDQUFDQyxNQUFmLENBQXNCLENBQXRCLEVBQXlCN0IsUUFBekIsR0FBb0MsSUFBSTVCLG9EQUFKLENBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBcEM7QUFDQXdELFlBQUFBLGNBQWMsQ0FBQ0MsTUFBZixDQUFzQixDQUF0QixFQUF5QmxDLElBQXpCLEdBQWdDZ0MsT0FBTyxDQUFDRCxTQUF4QztBQUVDSixZQUFBQSxlQUFlLENBQUNRLElBQWhCLENBQXFCRixjQUFyQjs7QUFkZTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDZDQWdCVk4sZUFoQlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVkQsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjtBQXFCQTs7O0FBRUEsSUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBVztBQUM5QmhELEVBQUFBLE1BQU0sR0FBRyxJQUFJWixtREFBSixDQUFXYSxNQUFYLEVBQW1CLElBQW5CLEVBQXlCO0FBQ2pDQyxJQUFBQSxxQkFBcUIsRUFBRSxJQURVO0FBRWpDQyxJQUFBQSxPQUFPLEVBQUUsSUFGd0I7QUFHakNDLElBQUFBLG9CQUFvQixFQUFFLEtBSFc7QUFJakNDLElBQUFBLGtCQUFrQixFQUFFO0FBSmEsR0FBekIsQ0FBVCxDQUQ4QixDQVE5Qjs7QUFDQXhCLEVBQUFBLEtBQUssR0FBRyxJQUFJTSxrREFBSixDQUFVYSxNQUFWLENBQVI7QUFDQW5CLEVBQUFBLEtBQUssQ0FBQ29FLDBCQUFOLENBQWlDLElBQWpDLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDO0FBQ0FwRSxFQUFBQSxLQUFLLENBQUNxRSxZQUFOLENBQW1CQyxXQUFuQixDQUErQixJQUFJOUQsb0RBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CLENBQS9CO0FBQ0FSLEVBQUFBLEtBQUssQ0FBQ3FFLFlBQU4sQ0FBbUJFLG9CQUFuQixHQUEwQyxLQUExQyxDQVo4QixDQWM5Qjs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsSUFBSXZELDBGQUFKLENBQW1CLElBQW5CLEVBQXlCLEtBQUssQ0FBOUIsRUFBaUNELG1DQUFqQyxDQUFqQjtBQUNBaEIsRUFBQUEsS0FBSyxDQUFDeUUsYUFBTixDQUFvQixJQUFwQixFQUEwQkQsVUFBMUI7QUFDQ3hFLEVBQUFBLEtBQUssQ0FBQzBFLGdCQUFOLEdBQXlCQyxjQUF6QixDQUF3QyxDQUF4QyxFQWpCNkIsQ0FtQi9COztBQUNBLE1BQU1DLGFBQWEsR0FBRzVFLEtBQUssQ0FBQzZFLHdCQUFOLENBQStCO0FBQ3BEQyxJQUFBQSxZQUFZLEVBQUUsSUFEc0M7QUFDaEM7QUFDcEJDLElBQUFBLG9CQUFvQixFQUFFLElBRjhCO0FBRXhCO0FBQzVCQyxJQUFBQSxVQUFVLEVBQUUsRUFId0M7QUFHcEM7QUFDaEJDLElBQUFBLGFBQWEsRUFBRTtBQUpxQyxHQUEvQixDQUF0QjtBQU9FLE1BQUlDLE1BQU0sR0FBR3pCLFVBQVUsQ0FBQ3pELEtBQUQsQ0FBdkI7QUFDRGtGLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVNDLEdBQVQsRUFBYztBQUN6QixRQUFJQyxXQUFXLEdBQUdELEdBQUcsQ0FBQyxDQUFELENBQXJCLENBRHlCLENBRzNCOztBQUNHLFNBQUssSUFBSUUsQ0FBQyxHQUFHLENBQUMsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHLENBQXJCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzdCN0QsTUFBQUEsWUFBWSxDQUFDNEQsV0FBRCxFQUFjLEdBQWQsRUFBbUIsSUFBSUMsQ0FBdkIsQ0FBWjtBQUNDLEtBTnVCLENBUTNCOzs7QUFDRUMsSUFBQUEsYUFBYSxDQUFDSCxHQUFELENBQWI7QUFDQSxHQVZELEVBNUI4QixDQXdDOUI7O0FBQ0csTUFBTUksTUFBTSxHQUFHMUUscUZBQUEsQ0FBc0IsUUFBdEIsRUFBZ0MsRUFBaEMsRUFBb0NkLEtBQXBDLENBQWY7QUFDQXdGLEVBQUFBLE1BQU0sQ0FBQ3ZDLE9BQVAsR0FBaUIsSUFBSXpDLG9EQUFKLENBQVksRUFBWixFQUFnQixHQUFoQixFQUFxQixFQUFyQixDQUFqQjtBQUNGZ0YsRUFBQUEsTUFBTSxDQUFDaEcsUUFBUCxDQUFnQjJELENBQWhCLEdBQW9CeUIsYUFBYSxDQUFDWSxNQUFkLENBQXFCaEcsUUFBckIsQ0FBOEIyRCxDQUE5QixHQUFrQyxDQUF0RDtBQUNFcUMsRUFBQUEsTUFBTSxDQUFDekMsUUFBUCxHQUFrQixJQUFJckMsNkRBQUosQ0FBcUIsUUFBckIsRUFBK0JWLEtBQS9CLENBQWxCO0FBQ0F3RixFQUFBQSxNQUFNLENBQUN6QyxRQUFQLENBQWdCMkMsS0FBaEIsR0FBd0IsSUFBeEI7QUFDQUYsRUFBQUEsTUFBTSxDQUFDekMsUUFBUCxDQUFnQjRDLFNBQWhCLEdBQTRCcEYsNkRBQTVCO0FBQ0FpRixFQUFBQSxNQUFNLENBQUNwQyxlQUFQLEdBQXlCLElBQUlyQyxvRkFBSixDQUFvQnlFLE1BQXBCLEVBQTRCekUsZ0dBQTVCLEVBQXlEO0FBQzlFdUMsSUFBQUEsSUFBSSxFQUFFLENBRHdFO0FBRWxGQyxJQUFBQSxRQUFRLEVBQUUsR0FGd0U7QUFHOUVDLElBQUFBLFdBQVcsRUFBRTtBQUhpRSxHQUF6RCxDQUF6QixDQS9DMkIsQ0FvRDlCO0FBRUE7O0FBQ0MsTUFBTXNDLEtBQUssR0FBR2hGLHFGQUFBLENBQXNCLE9BQXRCLEVBQStCLEVBQS9CLEVBQW1DZCxLQUFuQyxDQUFkO0FBQ0E4RixFQUFBQSxLQUFLLENBQUM3QyxPQUFOLEdBQWdCLElBQUl6QyxvREFBSixDQUFZLEVBQVosRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBaEI7QUFDQXNGLEVBQUFBLEtBQUssQ0FBQ3RHLFFBQU4sQ0FBZTJELENBQWYsR0FBbUJxQyxNQUFNLENBQUNoRyxRQUFQLENBQWdCMkQsQ0FBaEIsR0FBb0IsSUFBdkM7QUFFQTJDLEVBQUFBLEtBQUssQ0FBQy9DLFFBQU4sR0FBaUIsSUFBSXJDLDZEQUFKLENBQXFCLFFBQXJCLEVBQStCVixLQUEvQixDQUFqQjtBQUNBOEYsRUFBQUEsS0FBSyxDQUFDL0MsUUFBTixDQUFlUCxjQUFmLEdBQWdDLElBQUk3QixvREFBSixDQUFZLDZCQUFaLEVBQTJDWCxLQUEzQyxDQUFoQztBQUNBOEYsRUFBQUEsS0FBSyxDQUFDL0MsUUFBTixDQUFlMkMsS0FBZixHQUF1QixJQUF2QjtBQUNBSSxFQUFBQSxLQUFLLENBQUMvQyxRQUFOLENBQWU0QyxTQUFmLEdBQTJCcEYsNkRBQTNCLENBOUQ2QixDQStEOUI7QUFFQTs7QUFDQSxNQUFJd0YsV0FBSjs7QUFDQSxXQUFTUixhQUFULENBQXVCUyxhQUF2QixFQUFzQztBQUNyQyxRQUFJQyxNQUFNLEdBQUdELGFBQWEsQ0FBQyxDQUFELENBQTFCO0FBQ0EsUUFBSUUsT0FBTyxHQUFHLENBQWQ7O0FBRUFILElBQUFBLFdBQVcsR0FBRyxxQkFBQ0ksSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQ2pDLFVBQUtELElBQUksQ0FBQ3BFLElBQUwsQ0FBVUcsT0FBVixDQUFrQixRQUFsQixJQUE4QixDQUFuQyxFQUF1QztBQUNqQyxZQUFJbUUsY0FBYyxHQUFHLElBQUk3RixvREFBSixDQUFhLENBQUMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFDLENBQXJCLENBQXJCO0FBQ0gyRixRQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBbUJELGNBQW5CLEVBQW1DRixJQUFJLENBQUN0RCxtQkFBTCxHQUEyQkMsR0FBM0IsQ0FBK0JzRCxRQUEvQixDQUFuQzs7QUFDRCxZQUFNRyxVQUFVLEdBQUcsU0FBU0MsS0FBVCxHQUFpQjtBQUNuQyxpQkFBT0MsV0FBVyxDQUFDLFlBQVc7QUFBQ04sWUFBQUEsSUFBSSxDQUFDTyxPQUFMO0FBQWUsV0FBNUIsRUFBOEIsSUFBOUIsQ0FBbEI7QUFDQSxTQUZEOztBQUdBSCxRQUFBQSxVQUFVLENBQUNJLGFBQWEsQ0FBQ0osVUFBRCxDQUFkLENBQVY7QUFDQUwsUUFBQUEsT0FBTyxJQUFJLENBQVg7QUFFQSxPQVRGLE1BU1E7QUFDWDtBQUNJLFlBQUlBLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2hCLGVBQUssSUFBSVosQ0FBQyxHQUFHLENBQUMsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHLENBQXJCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzdCO0FBQ0M3RCxZQUFBQSxZQUFZLENBQUN3RSxNQUFELEVBQVMsR0FBVCxFQUFjLElBQUlYLENBQWxCLENBQVo7QUFDQTs7QUFDRFksVUFBQUEsT0FBTyxHQUFHLENBQVY7QUFDQTtBQUVBO0FBQ0QsS0FyQkY7QUFzQkE7O0FBRUFsRyxFQUFBQSxLQUFLLENBQUM0RyxtQkFBTixDQUEwQjlELEdBQTFCLENBQThCLFVBQUMrRCxXQUFELEVBQWlCO0FBQzlDLFlBQVFBLFdBQVcsQ0FBQ0MsSUFBcEI7QUFDQyxXQUFLakcsMEVBQUw7QUFDQSxZQUFHZ0csV0FBVyxDQUFDRyxRQUFaLENBQXFCQyxHQUF4QixFQUE2QjtBQUM1QmxCLFVBQUFBLFdBQVcsQ0FBQ2MsV0FBVyxDQUFDRyxRQUFaLENBQXFCRSxVQUF0QixFQUFrQ0wsV0FBVyxDQUFDRyxRQUFaLENBQXFCRyxXQUF2RCxDQUFYO0FBQ0M7O0FBQ0Y7QUFMRDtBQU9DLEdBUkY7QUFVRCxDQXpHRDtBQTBHQTs7QUFHQTs7O0FBQ0EsU0FBU0MsT0FBVCxHQUFtQjtBQUVsQjtBQUNDakcsRUFBQUEsTUFBTSxDQUFDa0csYUFBUCxDQUFxQixZQUN0QjtBQUNDckgsSUFBQUEsS0FBSyxDQUFDc0gsTUFBTjtBQUNDLEdBSEQ7QUFLRDs7QUFJQTs7QUFHQTs7QUFDQ3BJLEVBQUFBLE1BQU0sQ0FBQ3FJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQ25DO0FBQ0NwRyxJQUFBQSxNQUFNLENBQUNxRyxNQUFQO0FBQ0MsR0FIRDtBQUtEO0FBQ0M7O0FBRUZyRCxXQUFXO0FBQ1hpRCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vM2RiYWJlbC8uL3NyYy9FUzZtb2R1bGVzL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vM2RiYWJlbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWJyYXJ5LmpzIC0gRVM2IG1vZHVsZSBmb3JtYXRcblxuaW1wb3J0IHtcdFNjZW5lTG9hZGVyIH0gZnJvbSAnQGJhYnlsb25qcy9jb3JlLyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZWVLYW52YWFzaSgpIHtcblx0dmFyIGNudnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y252cy5pZCA9IFwia3V2YWthbnZhYXNpXCI7XG5cdGNudnMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0Y252cy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdGNudnMuc3R5bGUuekluZGV4ID0gODtcblx0Y252cy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0Y252cy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZFwiO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNudnMpO1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNrdXZha2FudmFhc2knICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBMb2FkUHJvbWlzZShyb290LCBmaWxlLCBzY2VuZSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc3VsdCxyZWplY3QpPT57XG5cdFx0U2NlbmVMb2FkZXIuTG9hZEFzc2V0Q29udGFpbmVyKHJvb3QsIGZpbGUsIHNjZW5lLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG5cdFx0XHRyZXN1bHQoY29udGFpbmVyKVxuXHRcdFx0fSk7XG5cdCAgfSlcblx0fVxuIiwiaW1wb3J0IHtcblx0U2NlbmUsXG5cdEVuZ2luZSxcblx0VmVjdG9yMyxcblx0Q29sb3IzLFxuXHRTdGFuZGFyZE1hdGVyaWFsLFxuXHRUZXh0dXJlLFxuXHRBc3NldENvbnRhaW5lcixcblx0UG9pbnRlckV2ZW50VHlwZXNcbn0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZVwiO1xuXG4vLyBSZXF1aXJlZCBzaWRlIGVmZmVjdHMgdG8gcG9wdWxhdGUgdGhlIENyZWF0ZSBtZXRob2RzIG9uIHRoZSBtZXNoIGNsYXNzLlxuLy8gV2l0aG91dCB0aGlzLCB0aGUgYnVuZGxlIHdvdWxkIGJlIHNtYWxsZXIgYnV0IHRoZSBjcmVhdGVYWFggbWV0aG9kc1xuLy8gZnJvbSBtZXNoIHdvdWxkIG5vdCBiZSBhY2Nlc3NpYmxlLlxuaW1wb3J0IHsgTWVzaEJ1aWxkZXIgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL01lc2hlcy9tZXNoQnVpbGRlclwiO1xuaW1wb3J0ICdAYmFieWxvbmpzL2xvYWRlcnMnO1xuXG4vKlxuUGxlYXNlIG5vdGUgdGhhdCB3aGVuIHVzaW5nIEFtbW8gc2luY2UgdmVyc2lvbiA1LjAgeW91IGFyZSByZXF1aXJlZCB0byBpbml0aWFsaXplIGl0IGJlZm9yZSBjcmVhdGluZyB0aGUgYW1tbyBwbHVnaW46XG5hd2FpdCBBbW1vKCk7XG5zY2VuZS5lbmFibGVQaHlzaWNzKG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwtOS44MSwgMCksIG5ldyBCQUJZTE9OLkFtbW9KU1BsdWdpbigpKTtcblxuLy9pbXBvcnQgKiBhcyBBbW1vIGZyb20gXCIuLi9hc3NldHMvYW1tby5qc1wiO1xuLy9pbXBvcnQgeyBBbW1vSlNQbHVnaW4gfSBmcm9tIFwiYmFieWxvbmpzXCI7XG4qL1xuaW1wb3J0IHsgUGh5c2ljc0ltcG9zdG9yIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9QaHlzaWNzL3BoeXNpY3NJbXBvc3RvclwiO1xuaW1wb3J0ICogYXMgY2Fubm9uIGZyb20gXCJjYW5ub25cIjtcbmltcG9ydCB7IENhbm5vbkpTUGx1Z2luIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9QaHlzaWNzL1BsdWdpbnMvY2Fubm9uSlNQbHVnaW5cIjtcblxuaW1wb3J0IHsgVGVlS2FudmFhc2ksIExvYWRQcm9taXNlIH0gZnJvbSAnLi9FUzZtb2R1bGVzL2xpYnJhcnknO1xuXG5pbXBvcnQgeyBQQlJDdXN0b21NYXRlcmlhbCB9IGZyb20gJ0BiYWJ5bG9uanMvbWF0ZXJpYWxzJztcbi8vZXhwb3J0cyBwcm92aWRlZDogQ2VsbE1hdGVyaWFsLCBDdXN0b21TaGFkZXJTdHJ1Y3R1cmUsIFNoYWRlclNwZWNpYWxQYXJ0cywgQ3VzdG9tTWF0ZXJpYWwsXG4vL1NoYWRlckFsZWJkb1BhcnRzLCBQQlJDdXN0b21NYXRlcmlhbCwgRmlyZU1hdGVyaWFsLCBGdXJNYXRlcmlhbCwgR3JhZGllbnRNYXRlcmlhbCxcbi8vR3JpZE1hdGVyaWFsLCBMYXZhTWF0ZXJpYWwsIE1peE1hdGVyaWFsLCBOb3JtYWxNYXRlcmlhbCwgU2hhZG93T25seU1hdGVyaWFsLFxuLy9TaW1wbGVNYXRlcmlhbCwgU2t5TWF0ZXJpYWwsIFRlcnJhaW5NYXRlcmlhbCwgVHJpUGxhbmFyTWF0ZXJpYWwsIFdhdGVyTWF0ZXJpYWxcblxuLy9pbXBvcnQgeyBHcmFzc1Byb2NlZHVyYWxUZXh0dXJlIH0gZnJvbSAnQGJhYnlsb25qcy9wcm9jZWR1cmFsLXRleHR1cmVzJztcbi8qZXhwb3J0cyBwcm92aWRlZDogQnJpY2tQcm9jZWR1cmFsVGV4dHVyZSwgQ2xvdWRQcm9jZWR1cmFsVGV4dHVyZSxcbkZpcmVQcm9jZWR1cmFsVGV4dHVyZSwgR3Jhc3NQcm9jZWR1cmFsVGV4dHVyZSwgTWFyYmxlUHJvY2VkdXJhbFRleHR1cmUsXG5Ob3JtYWxNYXBQcm9jZWR1cmFsVGV4dHVyZSwgUGVybGluTm9pc2VQcm9jZWR1cmFsVGV4dHVyZSxcblJvYWRQcm9jZWR1cmFsVGV4dHVyZSwgU3RhcmZpZWxkUHJvY2VkdXJhbFRleHR1cmUsIFdvb2RQcm9jZWR1cmFsVGV4dHVyZSAqL1xuXG5sZXQgc2NlbmUsIGVuZ2luZTtcbmNvbnN0IGNhbnZhcyA9IFRlZUthbnZhYXNpKCk7XG5cbmVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzLCB0cnVlLCB7XG5cdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0c3RlbmNpbDogdHJ1ZSxcblx0ZGlzYWJsZVdlYkdMMlN1cHBvcnQ6IGZhbHNlLFxuXHRhZGFwdFRvRGV2aWNlUmF0aW86IHRydWVcblx0fSk7XG5cbmNvbnN0IFNob3dPblNjcmVlbiA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgc2NhbGUsIG9mZlNldCkge1xuXHRsZXQgc3BoZXJlO1xuXHRsZXQgZW50cmllcyA9IGNvbnRhaW5lci5pbnN0YW50aWF0ZU1vZGVsc1RvU2NlbmUobmFtZSA9PiBcImVudHJpZXMtXCIgKyBuYW1lLCB0cnVlKTtcblxuXHRmb3IgKGNvbnN0IG5vZGUgb2YgZW50cmllcy5yb290Tm9kZXMpIHtcbiAgICBpZiAobm9kZS5uYW1lLmluZGV4T2YoXCJQdXJra2lcIikgPiAxICkge1xuXHRcdFx0bm9kZS5wb3NpdGlvbi54ICs9IG9mZlNldDtcblx0XHRcdG5vZGUucm90YXRpb24ueCArPSBNYXRoLlBJIC8gMjtcblxuICAgICAgY29uc3QgbWF0ID0gbmV3IFBCUkN1c3RvbU1hdGVyaWFsKFwiQ3VzdG9tXCIsIHNjZW5lKTtcblx0XHRcdG1hdC5kaWZmdXNlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiLi9hc3NldHMvdGV4dHVyZXMvRmxhcmUucG5nXCIsIHNjZW5lKTtcblx0XHRcdG1hdC5kaWZmdXNlVGV4dHVyZS5oYXNBbHBoYSA9IHRydWU7XG4gICAgICBtYXQuYmFja0ZhY2VDdWxsaW5nID0gZmFsc2U7XG5cblx0XHRzcGhlcmUgPSBNZXNoQnVpbGRlci5DcmVhdGVTcGhlcmUoXCJzcGhlcmVcIiArIG5vZGUubmFtZSwgeyBkaWFtZXRlcjogMS4yIH0sIHNjZW5lKTtcblx0XHRzcGhlcmUucG9zaXRpb24gPSBub2RlLmdldEFic29sdXRlUG9zaXRpb24oKS5hZGQobmV3IFZlY3RvcjMoIDAsIDEuNSwgMCApKTtcblx0XHRzcGhlcmUubWF0ZXJpYWwgPSBtYXQ7XG5cdFx0bm9kZS5tYXRlcmlhbCA9IG1hdDtcblx0XHRzcGhlcmUuYWRkQ2hpbGQobm9kZSk7XG5cbi8vXHRcdHNwaGVyZS5pc1Zpc2libGUgPSBmYWxzZTtcblxuXHRcdG5vZGUuc2NhbGluZy5zY2FsZUluUGxhY2Uoc2NhbGUpO1xuXHRcdG5vZGUucG9zaXRpb24ueSArPSAwLjg7XG5cblx0XHRzcGhlcmUucGh5c2ljc0ltcG9zdG9yID0gbmV3IFBoeXNpY3NJbXBvc3RvcihzcGhlcmUsIFBoeXNpY3NJbXBvc3Rvci5TcGhlcmVJbXBvc3Rvciwge1xuXHRcdFx0XHRcdFx0bWFzczogMC41LFxuXHRcdFx0XHRcdFx0ZnJpY3Rpb246IDAuMSxcblx0XHRcdFx0XHRcdHJlc3RpdHV0aW9uOiAwLjdcblx0XHRcdFx0fSlcblxuICAgIH0gZWxzZSB7XG5cdFx0XHRub2RlLnNjYWxpbmcuc2NhbGVJblBsYWNlKHNjYWxlKTtcblx0XHRcdG5vZGUucG9zaXRpb24ueCArPSBvZmZTZXQ7XG4gICAgfTtcblxuXHQgfVxuXHR9XG5cbmNvbnN0IGxvYWRNZXNoZXMgPSBhc3luYyhzY2VuZSk9Pntcblx0bGV0IEFzc2V0Q29udGFpbmVycyA9IFtdO1xuXHRsZXQgTW9kZWxzID0gW1xuXHRcdHtcblx0XHRcdFBhdGhUb01vZGVsOiBcIi4vYXNzZXRzL21vZGVscy9cIixcblx0XHRcdE1vZGVsRmlsZTogXCJQdXJra2kuYmFieWxvblwiLFxuXHRcdFx0TW9kZWxOYW1lOiBcIlB1cmtraVwiXG5cdFx0fSxcblx0XHRdO1xuXHRcdGZvcihjb25zdCBlbGVtZW50IG9mIE1vZGVscykge1xuXHRcdFx0Y29uc3QgTW9kZWxDb250YWluZXIgPSBhd2FpdCBMb2FkUHJvbWlzZShlbGVtZW50LlBhdGhUb01vZGVsLCBlbGVtZW50Lk1vZGVsRmlsZSwgc2NlbmUpO1xuXHRcdFx0TW9kZWxDb250YWluZXIubWVzaGVzWzBdLnJvdGF0aW9uID0gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XG5cdFx0XHRNb2RlbENvbnRhaW5lci5tZXNoZXNbMF0ubmFtZSA9IGVsZW1lbnQuTW9kZWxOYW1lO1xuXG4gIFx0XHRBc3NldENvbnRhaW5lcnMucHVzaChNb2RlbENvbnRhaW5lcik7XG5cdFx0fVxuXHRcdHJldHVybiBBc3NldENvbnRhaW5lcnM7XG5cbi8qKioqKioqRW5kIG9mIGxvYWRNZXNoZXMoKSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbn1cblxuLyoqKioqKioqKioqKioqKlN0YXJ0IG9mIGZ1bmN0aW9uIGNyZWF0ZVNjZW5lKCkqKioqKioqKioqKioqKioqKioqKioqL1xuXG5jb25zdCBjcmVhdGVTY2VuZSA9IGZ1bmN0aW9uKCkge1xuXHRlbmdpbmUgPSBuZXcgRW5naW5lKGNhbnZhcywgdHJ1ZSwge1xuXHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRzdGVuY2lsOiB0cnVlLFxuXHRcdGRpc2FibGVXZWJHTDJTdXBwb3J0OiBmYWxzZSxcblx0XHRhZGFwdFRvRGV2aWNlUmF0aW86IHRydWVcblx0XHR9KTtcblxuXHQvLyBUaGlzIGNyZWF0ZXMgYSBiYXNpYyBCYWJ5bG9uIFNjZW5lIG9iamVjdCAobm9uLW1lc2gpXG5cdHNjZW5lID0gbmV3IFNjZW5lKGVuZ2luZSk7XG5cdHNjZW5lLmNyZWF0ZURlZmF1bHRDYW1lcmFPckxpZ2h0KHRydWUsIHRydWUsIHRydWUpO1xuXHRzY2VuZS5hY3RpdmVDYW1lcmEuc2V0UG9zaXRpb24obmV3IFZlY3RvcjMoIDAsIDIsIDE1KSk7XG5cdHNjZW5lLmFjdGl2ZUNhbWVyYS53aGVlbERlbHRhUGVyY2VudGFnZSA9IDAuMDAxO1xuXG5cdC8vIEVuYWJsZSBwaHlzaWNzXG5cdGxldCBwaHlzRW5naW5lID0gbmV3IENhbm5vbkpTUGx1Z2luKHRydWUsIDEwIC8gMywgY2Fubm9uKTtcblx0c2NlbmUuZW5hYmxlUGh5c2ljcyhudWxsLCBwaHlzRW5naW5lKTtcbiAgc2NlbmUuZ2V0UGh5c2ljc0VuZ2luZSgpLnNldFN1YlRpbWVTdGVwKDIpO1xuXG4vLyBDcmVhdGUgZW52aXJvbm1lbnQgYW5kIHNreWJveFxuY29uc3QgbXlFbnZpcm9ubWVudCA9IHNjZW5lLmNyZWF0ZURlZmF1bHRFbnZpcm9ubWVudCh7XG5cdGNyZWF0ZVNreWJveDogdHJ1ZSwgLy9kZWZhdWx0ID0gdHJ1ZVxuXHRzZXR1cEltYWdlUHJvY2Vzc2luZzogdHJ1ZSwgLy9kZXNmYXVsdFxuXHRza3lib3hTaXplOiA0MCwgLy8yMCBieSBkZWZhdWx0LlxuXHRza3lib3hUZXh0dXJlOiBcIi4vYXNzZXRzL3RleHR1cmVzL2Vudmlyb25tZW50U3BlY3VsYXIuZGRzXCJcblx0fSk7XG5cbiAgbGV0IE1hbGxpdCA9IGxvYWRNZXNoZXMoc2NlbmUpO1xuXHRNYWxsaXQudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRsZXQgTWFsbGlQdXJra2kgPSByZXNbMF07XG5cbi8vXHRDYWxsIEZ1bmN0aW9uOiBTaG93T25TY3JlZW4oc3BlbGxMLCBzY2FsZSwgb2ZmU2V0LngpO1xuICAgZm9yIChsZXQgaSA9IC0yOyBpIDwgMzsgaSsrKSB7XG5cdFx0IFNob3dPblNjcmVlbihNYWxsaVB1cmtraSwgMC41LCAzICogaSApO1xuXHRcdCB9XG5cbi8vXHRXaGVuIHJlYWR5IC0gQ2FsbCBGdW5jdGlvbjogUHVya2tpQWN0aW9uc1xuXHRcdFB1cmtraUFjdGlvbnMocmVzKTtcblx0fSlcblxuXHQvLyBDcmVhdGUgZ3JvdW5kIGFzIHBoeXNpY3MgaW1wb3N0b3JzXG4gICAgY29uc3QgZ3JvdW5kID0gTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KFwiR3JvdW5kXCIsIHt9LCBzY2VuZSk7XG4gICAgZ3JvdW5kLnNjYWxpbmcgPSBuZXcgVmVjdG9yMygzMCwgMC41LCAzMCk7XG5cdFx0Z3JvdW5kLnBvc2l0aW9uLnkgPSBteUVudmlyb25tZW50Lmdyb3VuZC5wb3NpdGlvbi55IC0gMztcbiAgICBncm91bmQubWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcImFsdXN0YVwiLCBzY2VuZSlcbiAgICBncm91bmQubWF0ZXJpYWwuYWxwaGEgPSAwLjA1O1xuICAgIGdyb3VuZC5tYXRlcmlhbC5hbHBoYU1vZGUgPSBFbmdpbmUuQUxQSEFfQUREO1xuICAgIGdyb3VuZC5waHlzaWNzSW1wb3N0b3IgPSBuZXcgUGh5c2ljc0ltcG9zdG9yKGdyb3VuZCwgUGh5c2ljc0ltcG9zdG9yLkJveEltcG9zdG9yLCB7XG4gICAgICAgIG1hc3M6IDAsXG5cdFx0XHRcdGZyaWN0aW9uOiAwLjEsXG4gICAgICAgIHJlc3RpdHV0aW9uOiAwLjZcbiAgICB9KVxuXHQvLyBFbmQgb2YgZ3JvdW5kXG5cblx0Ly8qKioqKiogQ3JlYXRlIHN0YW5kIGZvciB0YXJnZXRzICoqKioqL1xuXHRcdGNvbnN0IFN0YW5kID0gTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KFwiU3RhbmRcIiwge30sIHNjZW5lKTtcblx0XHRTdGFuZC5zY2FsaW5nID0gbmV3IFZlY3RvcjMoMTUsIDEsIDMpO1xuXHRcdFN0YW5kLnBvc2l0aW9uLnkgPSBncm91bmQucG9zaXRpb24ueSAtIDAuMjU7XG5cblx0XHRTdGFuZC5tYXRlcmlhbCA9IG5ldyBTdGFuZGFyZE1hdGVyaWFsKFwibGFua2t1XCIsIHNjZW5lKVxuXHRcdFN0YW5kLm1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlID0gbmV3IFRleHR1cmUoXCIuL2Fzc2V0cy90ZXh0dXJlcy9hbHBoYS5qcGdcIiwgc2NlbmUpO1xuXHRcdFN0YW5kLm1hdGVyaWFsLmFscGhhID0gMC43NTtcblx0XHRTdGFuZC5tYXRlcmlhbC5hbHBoYU1vZGUgPSBFbmdpbmUuQUxQSEFfQUREO1xuXHQvLyoqKioqIEVuZCBvZiBzdGFuZCAqKioqKioqKioqKi9cblxuXHQvLyAqKioqKioqKiBDbGljay1vbiB0YXJnZXQgbWVzaCBmb3IgcGh5c2ljc0ltcG9zdG9yIGFjdGlvbiAqKi9cblx0bGV0IFBvaW50ZXJEb3duO1xuXHRmdW5jdGlvbiBQdXJra2lBY3Rpb25zKExhZGF0dXRNYWxsaXQpIHtcblx0XHRsZXQgUHVya2tpID0gTGFkYXR1dE1hbGxpdFswXTtcblx0XHRsZXQgQ291bnRlciA9IDA7XG5cblx0XHRQb2ludGVyRG93biA9IChtZXNoLCBoaXRwb2ludCkgPT4ge1xuXHRcdFx0aWYgKCBtZXNoLm5hbWUuaW5kZXhPZihcIlB1cmtraVwiKSA+IDEgKSB7XG4gICAgICAgIFx0bGV0IEltcGx1c2VfdmVjdG9yID0gbmV3IFZlY3RvcjMoIC0xLCA1LCAtMSApO1xuXHRcdFx0XHQgIG1lc2guYXBwbHlJbXB1bHNlKCBJbXBsdXNlX3ZlY3RvciwgbWVzaC5nZXRBYnNvbHV0ZVBvc2l0aW9uKCkuYWRkKGhpdHBvaW50KSApO1xuXHRcdFx0XHRcdGNvbnN0IG15SW50ZXJ2YWwgPSBmdW5jdGlvbiBWaWl2ZSgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHttZXNoLmRpc3Bvc2UoKX0sIDE1MDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRteUludGVydmFsKGNsZWFySW50ZXJ2YWwobXlJbnRlcnZhbCkpO1xuXHRcdFx0XHRcdENvdW50ZXIgKz0gMTtcblxuXHQgIFx0fSBlbHNlIHtcbi8vXHRcdFx0XHRjb25zb2xlLmxvZyhcIk9TVU1JQTogXCIgKyBDb3VudGVyICk7XG5cdFx0XHRcdGlmIChDb3VudGVyID4gNCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAtMjsgaSA8IDM7IGkrKykge1xuXHRcdFx0XHRcdC8vU2hvd09uU2NyZWVuKHNwaGVyZU9iamVjdCwgc2NhbGUsIG9mZlNldC54KTtcblx0XHRcdFx0XHRcdFNob3dPblNjcmVlbihQdXJra2ksIDAuNSwgMyAqIGkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q291bnRlciA9IDA7XG5cdFx0XHRcdH1cblxuXHQgIFx0fVxuICBcdH1cblx0fVxuXG5cdFx0c2NlbmUub25Qb2ludGVyT2JzZXJ2YWJsZS5hZGQoKHBvaW50ZXJJbmZvKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKHBvaW50ZXJJbmZvLnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBQb2ludGVyRXZlbnRUeXBlcy5QT0lOVEVSRE9XTjpcblx0XHRcdFx0aWYocG9pbnRlckluZm8ucGlja0luZm8uaGl0KSB7XG5cdFx0XHRcdFx0UG9pbnRlckRvd24ocG9pbnRlckluZm8ucGlja0luZm8ucGlja2VkTWVzaCwgcG9pbnRlckluZm8ucGlja0luZm8ucGlja2VkUG9pbnQpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSlcblxufVxuLyoqKioqKioqKioqKioqKkVuZCBvZiBmdW5jdGlvbiBjcmVhdGVTY2VuZSgpKioqKioqKioqKioqKioqKioqL1xuXG5cbi8qKioqKioqKioqKioqKipTdGFydCBvZiBmdW5jdGlvbiBhbmltYXRlKCkqKioqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuXG5cdC8vIE9uY2UgdGhlIHNjZW5lIGlzIGxvYWRlZCwgcmVnaXN0ZXIgYSByZW5kZXIgbG9vcCB0byByZW5kZXIgaXRcbiAgZW5naW5lLnJ1blJlbmRlckxvb3AoZnVuY3Rpb24oKVxuXHR7XG5cdFx0c2NlbmUucmVuZGVyKCk7XG5cdFx0fSk7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tQW5pbWF0aW9uIExvb3AtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cblxuIC8qLS0tLS0tLS0tLS0tLS0tLUVuZCBBbmltYXRpb24gTG9vcC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuIC8qKioqKioqKioqKioqKipUaGUgY2FudmFzL3dpbmRvdyByZXNpemUgZXZlbnQgaGFuZGxlcioqKiovXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpXG5cdHtcblx0IGVuZ2luZS5yZXNpemUoKTtcblx0IH0pO1xuXG4gLyoqKioqKioqKioqKioqKkVuZCBvZiBmdW5jdGlvbiBhbmltYXRlKCkqKioqL1xuIH1cblxuY3JlYXRlU2NlbmUoKTtcbmFuaW1hdGUoKTtcbiJdLCJuYW1lcyI6WyJTY2VuZUxvYWRlciIsIlRlZUthbnZhYXNpIiwiY252cyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInpJbmRleCIsInBvc2l0aW9uIiwiYm9yZGVyIiwiYm9keSIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvciIsIkxvYWRQcm9taXNlIiwicm9vdCIsImZpbGUiLCJzY2VuZSIsIlByb21pc2UiLCJyZXN1bHQiLCJyZWplY3QiLCJMb2FkQXNzZXRDb250YWluZXIiLCJjb250YWluZXIiLCJTY2VuZSIsIkVuZ2luZSIsIlZlY3RvcjMiLCJDb2xvcjMiLCJTdGFuZGFyZE1hdGVyaWFsIiwiVGV4dHVyZSIsIkFzc2V0Q29udGFpbmVyIiwiUG9pbnRlckV2ZW50VHlwZXMiLCJNZXNoQnVpbGRlciIsIlBoeXNpY3NJbXBvc3RvciIsImNhbm5vbiIsIkNhbm5vbkpTUGx1Z2luIiwiUEJSQ3VzdG9tTWF0ZXJpYWwiLCJlbmdpbmUiLCJjYW52YXMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJzdGVuY2lsIiwiZGlzYWJsZVdlYkdMMlN1cHBvcnQiLCJhZGFwdFRvRGV2aWNlUmF0aW8iLCJTaG93T25TY3JlZW4iLCJzY2FsZSIsIm9mZlNldCIsInNwaGVyZSIsImVudHJpZXMiLCJpbnN0YW50aWF0ZU1vZGVsc1RvU2NlbmUiLCJuYW1lIiwicm9vdE5vZGVzIiwibm9kZSIsImluZGV4T2YiLCJ4Iiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJtYXQiLCJkaWZmdXNlVGV4dHVyZSIsImhhc0FscGhhIiwiYmFja0ZhY2VDdWxsaW5nIiwiQ3JlYXRlU3BoZXJlIiwiZGlhbWV0ZXIiLCJnZXRBYnNvbHV0ZVBvc2l0aW9uIiwiYWRkIiwibWF0ZXJpYWwiLCJhZGRDaGlsZCIsInNjYWxpbmciLCJzY2FsZUluUGxhY2UiLCJ5IiwicGh5c2ljc0ltcG9zdG9yIiwiU3BoZXJlSW1wb3N0b3IiLCJtYXNzIiwiZnJpY3Rpb24iLCJyZXN0aXR1dGlvbiIsImxvYWRNZXNoZXMiLCJBc3NldENvbnRhaW5lcnMiLCJNb2RlbHMiLCJQYXRoVG9Nb2RlbCIsIk1vZGVsRmlsZSIsIk1vZGVsTmFtZSIsImVsZW1lbnQiLCJNb2RlbENvbnRhaW5lciIsIm1lc2hlcyIsInB1c2giLCJjcmVhdGVTY2VuZSIsImNyZWF0ZURlZmF1bHRDYW1lcmFPckxpZ2h0IiwiYWN0aXZlQ2FtZXJhIiwic2V0UG9zaXRpb24iLCJ3aGVlbERlbHRhUGVyY2VudGFnZSIsInBoeXNFbmdpbmUiLCJlbmFibGVQaHlzaWNzIiwiZ2V0UGh5c2ljc0VuZ2luZSIsInNldFN1YlRpbWVTdGVwIiwibXlFbnZpcm9ubWVudCIsImNyZWF0ZURlZmF1bHRFbnZpcm9ubWVudCIsImNyZWF0ZVNreWJveCIsInNldHVwSW1hZ2VQcm9jZXNzaW5nIiwic2t5Ym94U2l6ZSIsInNreWJveFRleHR1cmUiLCJNYWxsaXQiLCJ0aGVuIiwicmVzIiwiTWFsbGlQdXJra2kiLCJpIiwiUHVya2tpQWN0aW9ucyIsImdyb3VuZCIsIkNyZWF0ZUJveCIsImFscGhhIiwiYWxwaGFNb2RlIiwiQUxQSEFfQUREIiwiQm94SW1wb3N0b3IiLCJTdGFuZCIsIlBvaW50ZXJEb3duIiwiTGFkYXR1dE1hbGxpdCIsIlB1cmtraSIsIkNvdW50ZXIiLCJtZXNoIiwiaGl0cG9pbnQiLCJJbXBsdXNlX3ZlY3RvciIsImFwcGx5SW1wdWxzZSIsIm15SW50ZXJ2YWwiLCJWaWl2ZSIsInNldEludGVydmFsIiwiZGlzcG9zZSIsImNsZWFySW50ZXJ2YWwiLCJvblBvaW50ZXJPYnNlcnZhYmxlIiwicG9pbnRlckluZm8iLCJ0eXBlIiwiUE9JTlRFUkRPV04iLCJwaWNrSW5mbyIsImhpdCIsInBpY2tlZE1lc2giLCJwaWNrZWRQb2ludCIsImFuaW1hdGUiLCJydW5SZW5kZXJMb29wIiwicmVuZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=