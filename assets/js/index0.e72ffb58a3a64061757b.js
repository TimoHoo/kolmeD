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
	//new ArcRotateCamera(name: string, alpha: number, beta: number, radius: number, target: Vector3, scene: Scene, setActiveOnSceneIfNoneActive?: boolean)
	scene.clearColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3( 0, 0.5, 0.5);
	scene.ambientColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3(0.3, 0.3, 0.3);

	const camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera("kamera", 0, 0, 0, new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0), scene);
	// Positions the camera overwriting alpha, beta, radius
  camera.setPosition(new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(2, 1, 9));
  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);
	camera.useAutoRotationBehavior = true;
	camera.useBouncingBehavior = true;
	camera.checkCollisions = true;

	const light = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight("dir01", new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -0.5, -1.0), scene);
	light.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(50, 250, 200);

	// Fog
 scene.fogMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scene.FOGMODE_EXP;
 scene.fogColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3(0.9, 0.9, 0.9);
 scene.fogDensity = 0.008;

	// OBjektien latausfunktio async
	const loadPromise = async(root, file, scene)=>{
		return new Promise((res, rej)=>{
			babylonjs__WEBPACK_IMPORTED_MODULE_0__.SceneLoader.LoadAssetContainer(root, file, scene, function (container)
			{
				res(container)
				rej(console.log("Ladataan: " + file))
				});
    })
		}

  // Define async glb files
	const Laturi = async(scene)=>{
		// list of objects to load
		const scenes = [
		{
			root: "./assets/models/",
			file: "UkkoSamba.glb"
		},
		{
			root: "./assets/models/",
			file: "Ukkoja.glb"
		}
		]
		// Load all scenes one by one and display the first one
		const assetContainers = [];
    let currentSceneIndex = 0;
		let newSceneIndex = 0;

		for(let i = 0;i<scenes.length;i++){
			let assets = await loadPromise(scenes[i].root, scenes[i].file, scene);
			assetContainers.push(assets);
		}
    // Duplicate model + start animation
		let AddModels = function(container) {
			const ContainerEntries = container.instantiateModelsToScene(name => "Malli" + name, true);
			for (var node of ContainerEntries.rootNodes) {
				node.position.x += Math.random() * 5;
				node.position.z += Math.random() * 5;
			}
			for (let group of ContainerEntries.animationGroups) {
				group.play(true);
			}
		}
		for (let i = 0; i < 5; i++) {
			AddModels( assetContainers[currentSceneIndex] );
		}

		// Switch to next scene when "Space" is pressed
    document.onkeydown = (e)=>{
			if(e.key != " ") {
				return;
			}

		currentSceneIndex++;
		newSceneIndex = currentSceneIndex%assetContainers.length;

		for (let y = 0; y < 3; y++) {
			AddModels( assetContainers[newSceneIndex] );
		}
//		assetContainers[newSceneIndex].addAllToScene();


    }
/************ end of onkeydown *******************/
  }
	Laturi(scene);


	// Ground
	  let ground = babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateGround("ground", {
			height: 100, width: 100, subdivisions: 8
		}, scene);
	    let groundMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial("groundMaterial", scene);
	    groundMaterial.diffuseTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Texture("./assets/textures/floor.png", scene);
	    groundMaterial.diffuseTexture.uScale = 30;
	    groundMaterial.diffuseTexture.vScale = 30;
	    groundMaterial.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3( 0.1, 0.1, 0.1 );
	    ground.material = groundMaterial;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTcyZmZiNThhM2E2NDA2MTc1N2IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjbUI7O0FBRVE7O0FBRTNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsNkNBQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxhQUFhLDRDQUFLO0FBQ2xCO0FBQ0Esd0JBQXdCLDZDQUFNO0FBQzlCLDBCQUEwQiw2Q0FBTTs7QUFFaEMsb0JBQW9CLHNEQUFlLHdCQUF3Qiw4Q0FBTztBQUNsRTtBQUNBLHlCQUF5Qiw4Q0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1REFBZ0IsY0FBYyw4Q0FBTztBQUN4RCxzQkFBc0IsOENBQU87O0FBRTdCO0FBQ0EsaUJBQWlCLHdEQUFpQjtBQUNsQyxzQkFBc0IsNkNBQU07QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxxRUFBOEI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxnQkFBZ0IsK0RBQXdCO0FBQ3hDO0FBQ0EsR0FBRztBQUNILDhCQUE4Qix1REFBZ0I7QUFDOUMseUNBQXlDLDhDQUFPO0FBQ2hEO0FBQ0E7QUFDQSx3Q0FBd0MsNkNBQU07QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOzs7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vM2RUaHJlZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBc3NldENvbnRhaW5lcixcblx0U2NlbmUsXG5cdEVuZ2luZSxcblx0QXJjUm90YXRlQ2FtZXJhLFxuXHRIZW1pc3BoZXJpY0xpZ2h0LFxuXHRWZWN0b3IzLFxuXHRDb2xvcjMsXG5cdE1lc2gsXG5cdE1lc2hCdWlsZGVyLFxuXHRUZXh0dXJlLFxuXHRTY2VuZUxvYWRlcixcblx0U3RhbmRhcmRNYXRlcmlhbCxcblx0RGlyZWN0aW9uYWxMaWdodFxufSBmcm9tICdiYWJ5bG9uanMnO1xuXG5pbXBvcnQgJ2JhYnlsb25qcy1sb2FkZXJzJztcblxubGV0IGNhbnZhcywgZW5naW5lLCBzY2VuZTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblx0Y29uc3Qga2FudmFhc2kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0a2FudmFhc2kuaWQgPSBcImt1dmFrYW52YWFzaVwiO1xuXHRrYW52YWFzaS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRrYW52YWFzaS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdGthbnZhYXNpLnN0eWxlLnpJbmRleCA9IDg7XG5cdGthbnZhYXNpLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRrYW52YWFzaS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZFwiO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGthbnZhYXNpKTtcblx0Y2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyNrdXZha2FudmFhc2knICk7XG5cblx0ZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMsIHRydWUsIHtcblx0XHRcdHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcblx0XHRcdHN0ZW5jaWw6IHRydWUsXG5cdFx0XHRkaXNhYmxlV2ViR0wyU3VwcG9ydDogZmFsc2Vcblx0XHR9KTtcblxuXHRzY2VuZSA9IG5ldyBTY2VuZShlbmdpbmUpO1xuXHQvL25ldyBBcmNSb3RhdGVDYW1lcmEobmFtZTogc3RyaW5nLCBhbHBoYTogbnVtYmVyLCBiZXRhOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCB0YXJnZXQ6IFZlY3RvcjMsIHNjZW5lOiBTY2VuZSwgc2V0QWN0aXZlT25TY2VuZUlmTm9uZUFjdGl2ZT86IGJvb2xlYW4pXG5cdHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQ29sb3IzKCAwLCAwLjUsIDAuNSk7XG5cdHNjZW5lLmFtYmllbnRDb2xvciA9IG5ldyBDb2xvcjMoMC4zLCAwLjMsIDAuMyk7XG5cblx0Y29uc3QgY2FtZXJhID0gbmV3IEFyY1JvdGF0ZUNhbWVyYShcImthbWVyYVwiLCAwLCAwLCAwLCBuZXcgVmVjdG9yMygwLDAsMCksIHNjZW5lKTtcblx0Ly8gUG9zaXRpb25zIHRoZSBjYW1lcmEgb3ZlcndyaXRpbmcgYWxwaGEsIGJldGEsIHJhZGl1c1xuICBjYW1lcmEuc2V0UG9zaXRpb24obmV3IFZlY3RvcjMoMiwgMSwgOSkpO1xuICAvLyBUaGlzIGF0dGFjaGVzIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xuICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXHRjYW1lcmEudXNlQXV0b1JvdGF0aW9uQmVoYXZpb3IgPSB0cnVlO1xuXHRjYW1lcmEudXNlQm91bmNpbmdCZWhhdmlvciA9IHRydWU7XG5cdGNhbWVyYS5jaGVja0NvbGxpc2lvbnMgPSB0cnVlO1xuXG5cdGNvbnN0IGxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoXCJkaXIwMVwiLCBuZXcgVmVjdG9yMygwLCAtMC41LCAtMS4wKSwgc2NlbmUpO1xuXHRsaWdodC5wb3NpdGlvbiA9IG5ldyBWZWN0b3IzKDUwLCAyNTAsIDIwMCk7XG5cblx0Ly8gRm9nXG4gc2NlbmUuZm9nTW9kZSA9IFNjZW5lLkZPR01PREVfRVhQO1xuIHNjZW5lLmZvZ0NvbG9yID0gbmV3IENvbG9yMygwLjksIDAuOSwgMC45KTtcbiBzY2VuZS5mb2dEZW5zaXR5ID0gMC4wMDg7XG5cblx0Ly8gT0JqZWt0aWVuIGxhdGF1c2Z1bmt0aW8gYXN5bmNcblx0Y29uc3QgbG9hZFByb21pc2UgPSBhc3luYyhyb290LCBmaWxlLCBzY2VuZSk9Pntcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuXHRcdFx0U2NlbmVMb2FkZXIuTG9hZEFzc2V0Q29udGFpbmVyKHJvb3QsIGZpbGUsIHNjZW5lLCBmdW5jdGlvbiAoY29udGFpbmVyKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXMoY29udGFpbmVyKVxuXHRcdFx0XHRyZWooY29uc29sZS5sb2coXCJMYWRhdGFhbjogXCIgKyBmaWxlKSlcblx0XHRcdFx0fSk7XG4gICAgfSlcblx0XHR9XG5cbiAgLy8gRGVmaW5lIGFzeW5jIGdsYiBmaWxlc1xuXHRjb25zdCBMYXR1cmkgPSBhc3luYyhzY2VuZSk9Pntcblx0XHQvLyBsaXN0IG9mIG9iamVjdHMgdG8gbG9hZFxuXHRcdGNvbnN0IHNjZW5lcyA9IFtcblx0XHR7XG5cdFx0XHRyb290OiBcIi4vYXNzZXRzL21vZGVscy9cIixcblx0XHRcdGZpbGU6IFwiVWtrb1NhbWJhLmdsYlwiXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRyb290OiBcIi4vYXNzZXRzL21vZGVscy9cIixcblx0XHRcdGZpbGU6IFwiVWtrb2phLmdsYlwiXG5cdFx0fVxuXHRcdF1cblx0XHQvLyBMb2FkIGFsbCBzY2VuZXMgb25lIGJ5IG9uZSBhbmQgZGlzcGxheSB0aGUgZmlyc3Qgb25lXG5cdFx0Y29uc3QgYXNzZXRDb250YWluZXJzID0gW107XG4gICAgbGV0IGN1cnJlbnRTY2VuZUluZGV4ID0gMDtcblx0XHRsZXQgbmV3U2NlbmVJbmRleCA9IDA7XG5cblx0XHRmb3IobGV0IGkgPSAwO2k8c2NlbmVzLmxlbmd0aDtpKyspe1xuXHRcdFx0bGV0IGFzc2V0cyA9IGF3YWl0IGxvYWRQcm9taXNlKHNjZW5lc1tpXS5yb290LCBzY2VuZXNbaV0uZmlsZSwgc2NlbmUpO1xuXHRcdFx0YXNzZXRDb250YWluZXJzLnB1c2goYXNzZXRzKTtcblx0XHR9XG4gICAgLy8gRHVwbGljYXRlIG1vZGVsICsgc3RhcnQgYW5pbWF0aW9uXG5cdFx0bGV0IEFkZE1vZGVscyA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuXHRcdFx0Y29uc3QgQ29udGFpbmVyRW50cmllcyA9IGNvbnRhaW5lci5pbnN0YW50aWF0ZU1vZGVsc1RvU2NlbmUobmFtZSA9PiBcIk1hbGxpXCIgKyBuYW1lLCB0cnVlKTtcblx0XHRcdGZvciAodmFyIG5vZGUgb2YgQ29udGFpbmVyRW50cmllcy5yb290Tm9kZXMpIHtcblx0XHRcdFx0bm9kZS5wb3NpdGlvbi54ICs9IE1hdGgucmFuZG9tKCkgKiA1O1xuXHRcdFx0XHRub2RlLnBvc2l0aW9uLnogKz0gTWF0aC5yYW5kb20oKSAqIDU7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBncm91cCBvZiBDb250YWluZXJFbnRyaWVzLmFuaW1hdGlvbkdyb3Vwcykge1xuXHRcdFx0XHRncm91cC5wbGF5KHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuXHRcdFx0QWRkTW9kZWxzKCBhc3NldENvbnRhaW5lcnNbY3VycmVudFNjZW5lSW5kZXhdICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3dpdGNoIHRvIG5leHQgc2NlbmUgd2hlbiBcIlNwYWNlXCIgaXMgcHJlc3NlZFxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IChlKT0+e1xuXHRcdFx0aWYoZS5rZXkgIT0gXCIgXCIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0Y3VycmVudFNjZW5lSW5kZXgrKztcblx0XHRuZXdTY2VuZUluZGV4ID0gY3VycmVudFNjZW5lSW5kZXglYXNzZXRDb250YWluZXJzLmxlbmd0aDtcblxuXHRcdGZvciAobGV0IHkgPSAwOyB5IDwgMzsgeSsrKSB7XG5cdFx0XHRBZGRNb2RlbHMoIGFzc2V0Q29udGFpbmVyc1tuZXdTY2VuZUluZGV4XSApO1xuXHRcdH1cbi8vXHRcdGFzc2V0Q29udGFpbmVyc1tuZXdTY2VuZUluZGV4XS5hZGRBbGxUb1NjZW5lKCk7XG5cblxuICAgIH1cbi8qKioqKioqKioqKiogZW5kIG9mIG9ua2V5ZG93biAqKioqKioqKioqKioqKioqKioqL1xuICB9XG5cdExhdHVyaShzY2VuZSk7XG5cblxuXHQvLyBHcm91bmRcblx0ICBsZXQgZ3JvdW5kID0gTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kXCIsIHtcblx0XHRcdGhlaWdodDogMTAwLCB3aWR0aDogMTAwLCBzdWJkaXZpc2lvbnM6IDhcblx0XHR9LCBzY2VuZSk7XG5cdCAgICBsZXQgZ3JvdW5kTWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcImdyb3VuZE1hdGVyaWFsXCIsIHNjZW5lKTtcblx0ICAgIGdyb3VuZE1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlID0gbmV3IFRleHR1cmUoXCIuL2Fzc2V0cy90ZXh0dXJlcy9mbG9vci5wbmdcIiwgc2NlbmUpO1xuXHQgICAgZ3JvdW5kTWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUudVNjYWxlID0gMzA7XG5cdCAgICBncm91bmRNYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS52U2NhbGUgPSAzMDtcblx0ICAgIGdyb3VuZE1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBuZXcgQ29sb3IzKCAwLjEsIDAuMSwgMC4xICk7XG5cdCAgICBncm91bmQubWF0ZXJpYWwgPSBncm91bmRNYXRlcmlhbDtcblxufVxuLyoqKioqKioqKioqKiogRW5kIG9mIGluaXQoKSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKlN0YXJ0IG9mIGZ1bmN0aW9uIGFuaW1hdGUoKSoqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG5cdC8vIE9uY2UgdGhlIHNjZW5lIGlzIGxvYWRlZCwgcmVnaXN0ZXIgYSByZW5kZXIgbG9vcCB0byByZW5kZXIgaXRcbiAgICAgICAgZW5naW5lLnJ1blJlbmRlckxvb3AoZnVuY3Rpb24oKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NlbmUucmVuZGVyKCk7XG5cdFx0XHRcdH0pO1xuXG4gLyoqKioqKioqKioqKioqKlRoZSBjYW52YXMvd2luZG93IHJlc2l6ZSBldmVudCBoYW5kbGVyKioqKi9cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKClcbiB7XG5cdCBlbmdpbmUucmVzaXplKCk7XG5cdFx0IH0pO1xuXG59XG4vKioqKioqKioqKioqKioqRW5kIG9mIGZ1bmN0aW9uIGFuaW1hdGUoKSoqKiovXG5cblxuaW5pdCgpO1xuYW5pbWF0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9