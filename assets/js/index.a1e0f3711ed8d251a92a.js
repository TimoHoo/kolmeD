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
/* harmony import */ var babylonjs_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs-gui */ 290);
/* harmony import */ var babylonjs_gui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_gui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs-loaders */ 793);
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs_loaders__WEBPACK_IMPORTED_MODULE_2__);





/****************Tree generator code***************/
var coordSystem=function(b){var g=b.normalize();b=0==Math.abs(b.x)&&0==Math.abs(b.y)?(new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(b.z,0,0)).normalize():(new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(b.y,-b.x,0)).normalize();var r=babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3.Cross(b,g);return{x:b,y:g,z:r}},randPct=function(b,g){return 0==g?b:(1+(1-2*Math.random())*g)*b},createBranch=function(b,g,r,w,h,l,v,n,x){for(var t=[],d,c=[],f,q=[],a=0;12>a;a++)t[a]=[];for(var m=0;m<h;m++)for(a=m/h,d=g.y.scale(a*r),d.addInPlace(g.x.scale(v*Math.exp(-a)*Math.sin(l*a*Math.PI))),d.addInPlace(b),c[m]=d,d=n*(1+(.4*Math.random()-.2))*(1-(1-w)*a),q.push(d),a=0;12>a;a++)f=a*Math.PI/6,f=g.x.scale(d*Math.cos(f)).add(g.z.scale(d*Math.sin(f))),f.addInPlace(c[m]),t[a].push(f);for(a=0;12>a;a++)t[a].push(c[c.length-1]);return{branch:babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateRibbon("branch",{pathArray:t,closeArray:!0},x),core:c,_radii:q}},createTreeBase=function(b,g,r,w,h,l,v,n,x,t){var d=2/(1+Math.sqrt(5)),c=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,1,0),f,c=coordSystem(c),q=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0,0,0),a=[],m=[],e=[],A=[],q=createBranch(q,c,b,g,r,1,x,1,t);a.push(q.branch);var y=q.core;m.push(y);e.push(q._radii);A.push(c);for(var q=y[y.length-1],y=2*Math.PI/h,z,u,p,C,B=0;B<h;B++)if(f=randPct(B*y,.25),f=c.y.scale(Math.cos(randPct(l,.15))).add(c.x.scale(Math.sin(randPct(l,.15))*Math.sin(f))).add(c.z.scale(Math.sin(randPct(l,.15))*Math.cos(f))),z=coordSystem(f),f=createBranch(q,z,b*v,g,r,n,x*d,g,t),p=f.core,p=p[p.length-1],a.push(f.branch),m.push(f.core),e.push(f._radii),A.push(z),1<w)for(var D=0;D<h;D++)u=randPct(D*y,.25),u=z.y.scale(Math.cos(randPct(l,.15))).add(z.x.scale(Math.sin(randPct(l,.15))*Math.sin(u))).add(z.z.scale(Math.sin(randPct(l,.15))*Math.cos(u))),u=coordSystem(u),C=createBranch(p,u,b*v*v,g,r,n,x*d*d,g*g,t),a.push(C.branch),m.push(C.core),e.push(f._radii),A.push(u);return{tree:babylonjs__WEBPACK_IMPORTED_MODULE_0__.Mesh.MergeMeshes(a),paths:m,radii:e,directions:A}},createTree=function(b,g,r,w,h,l,v,n,x,t,d,c,f,q,a,m){1!=h&&2!=h&&(h=1);var e=createTreeBase(b,g,r,h,l,v,n,d,c,m);e.tree.material=w;var A=b*Math.pow(n,h),y=A/(2*f),z=1.5*Math.pow(g,h-1);n=babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateDisc("leaf",{radius:z/2,tessellation:12,sideOrientation:babylonjs__WEBPACK_IMPORTED_MODULE_0__.Mesh.DOUBLESIDE},m);b=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.SolidParticleSystem("leaveSPS",m,{updatable:!1});b.addShape(n,2*f*Math.pow(l,h),{positionFunction:function(b,a,g){a=Math.floor(g/(2*f));1==h?a++:a=2+a%l+Math.floor(a/l)*(l+1);var E=(g%(2*f)*y+3*y/2)/A,d=Math.ceil(r*E);d>e.paths[a].length-1&&(d=e.paths[a].length-1);var k=d-1,c=k/(r-1),m=d/(r-1);b.position=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(e.paths[a][k].x+(e.paths[a][d].x-e.paths[a][k].x)*(E-c)/(m-c),e.paths[a][k].y+(e.paths[a][d].y-e.paths[a][k].y)*(E-c)/(m-c)+(.6*z/q+e.radii[a][d])*(g%2*2-1),e.paths[a][k].z+(e.paths[a][d].z-e.paths[a][k].z)*(E-c)/(m-c));b.rotation.z=Math.random()*Math.PI/4;b.rotation.y=Math.random()*Math.PI/2;b.rotation.z=Math.random()*Math.PI/4;b.scale.y=1/q}});b=b.buildMesh();b.billboard=!0;n.dispose();d=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.SolidParticleSystem("miniSPS",m,{updatable:!1});n=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.SolidParticleSystem("minileavesSPS",m,{updatable:!1});var u=[];c=2*Math.PI/l;for(var p=0;p<Math.pow(l,h+1);p++)u.push(randPct(Math.floor(p/Math.pow(l,h))*c,.2));c=function(a,b,d){var c=d%Math.pow(l,h);1==h?c++:c=2+c%l+Math.floor(c/l)*(l+1);var f=e.directions[c],c=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(e.paths[c][e.paths[c].length-1].x,e.paths[c][e.paths[c].length-1].y,e.paths[c][e.paths[c].length-1].z),k=u[d],k=f.y.scale(Math.cos(randPct(v,0))).add(f.x.scale(Math.sin(randPct(v,0))*Math.sin(k))).add(f.z.scale(Math.sin(randPct(v,0))*Math.cos(k))),f=babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3.Cross(babylonjs__WEBPACK_IMPORTED_MODULE_0__.Axis.Y,k),k=Math.acos(babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3.Dot(k,babylonjs__WEBPACK_IMPORTED_MODULE_0__.Axis.Y)/k.length());a.scale=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(Math.pow(g,h+1),Math.pow(g,h+1),Math.pow(g,h+1));a.quaternion=babylonjs__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxis(f,k);a.position=c;};for(var C=[],B=[],p=e.paths.length,D=e.paths[0].length,F=0;F<x;F++)C.push(2*Math.PI*Math.random()-Math.PI),B.push([Math.floor(Math.random()*p),Math.floor(Math.random()*(D-1)+1)]);p=function(a,c,b){var d=B[b][0],f=B[b][1],k=e.directions[d];c=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(e.paths[d][f].x,e.paths[d][f].y,e.paths[d][f].z);c.addInPlace(k.z.scale(e.radii[d][f]/2));b=C[b];k=k.y.scale(Math.cos(randPct(t,0))).add(k.x.scale(Math.sin(randPct(t,0))*Math.sin(b))).add(k.z.scale(Math.sin(randPct(t,0))*Math.cos(b)));b=babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3.Cross(babylonjs__WEBPACK_IMPORTED_MODULE_0__.Axis.Y,k);k=Math.acos(babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3.Dot(k,babylonjs__WEBPACK_IMPORTED_MODULE_0__.Axis.Y)/k.length());a.scale=new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(Math.pow(g,h+1),Math.pow(g,h+1),Math.pow(g,h+1));a.quaternion=babylonjs__WEBPACK_IMPORTED_MODULE_0__.Quaternion.RotationAxis(b,k);a.position=c};d.addShape(e.tree,Math.pow(l,h+1),{positionFunction:c});d.addShape(e.tree,x,{positionFunction:p});d=d.buildMesh();d.material=w;n.addShape(b,Math.pow(l,h+1),{positionFunction:c});n.addShape(b,x,{positionFunction:p});w=n.buildMesh();b.dispose();w.material=a;a=babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateBox("",{},m);a.isVisible=!1;e.tree.parent=a;d.parent=a;return w.parent=a};
/****************End of Tree generator code*************/

let canvas, scene, engine;
let TreeClone;

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
		disableWebGL2Support: false,
		adaptToDeviceRatio: true
	  });

  // This creates a basic Babylon Scene object (non-mesh)
  scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scene(engine);

  // Camera
	const camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.2, 60, new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0));
	camera.attachControl(canvas, true);
//	camera.useFramingBehavior = true;
	camera.useAutoRotationBehavior = true;

  // Lights
  const light = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.HemisphericLight("light1", new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), scene);
  light.intensity = 0.7;
  light.specular = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3.Black();

  const light2 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight("dir01", new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -0.5, -1.0), scene);
  light2.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 5, 5);

	// skybox
  const skybox = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Mesh.CreateBox("BackgroundSkybox", 500, scene, undefined, babylonjs__WEBPACK_IMPORTED_MODULE_0__.Mesh.BACKSIDE);

  // Create and tweak the background material.
  const backgroundMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.BackgroundMaterial("backgroundMaterial", scene);

  backgroundMaterial.reflectionTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.CubeTexture("assets/textures/skybox", scene);
  backgroundMaterial.reflectionTexture.coordinatesMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Texture.SKYBOX_MODE;
  skybox.material = backgroundMaterial;

/***********_mini_trees from TreeGenerator*********************/
//leaf material
	const leaf = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial("leaf", scene);
	leaf.emissiveTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Texture("./assets/textures/800px_Leafpattern.jpg", scene);
	leaf.diffuseTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Texture("./assets/textures/800px_Leafpattern.jpg", scene);

	leaf.diffuseTexture.uScale = 2.0;//Repeat x times on the Vertical Axes
	leaf.diffuseTexture.vScale = 2.0;//Repeat x times on the Horizontal Axes

	//trunk and branch material
	const bark = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial("bark", scene);
	bark.emissiveTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Texture("./assets/textures/tree_bark.jpg", scene);
	bark.diffuseTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Texture("./assets/textures/tree_bark.jpg", scene);

	bark.diffuseTexture.uScale = 4.0;//Repeat 5 times on the Vertical Axes
	bark.diffuseTexture.vScale = 4.0;//Repeat 5 times on the Horizontal Axes

	/************Tree parameters*******/
	/** @Param trunkHeight - height of trunk of tree.
	** @Param trunkTaper - 0< trunkTaper <1 - fraction of starting radius for the end radius of a branch.
	** @Param trunkSlices - the number of points on the paths used for the ribbon mesh that forms the branch.
	** @Param trunk material - the material used on all branches.
	** @Param boughs - 1 or 2 only - the number of times the tree will split into forked branches, 1 trunk splits into branches, 2 these branches also spilt into branches.
	** @Param forks - 5 or more really slows the generation. The number of branches a branch can split into.
	** @Param forkAngle - the angle a forked branch makes with its parent branch measured from the direction of the branch.
	** @Param forkRatio - 0 < forkRatio < 1 - the ratio of the length of a branch to its parent's length.
	** @Param branches - the number of mini-trees that are randomally added to the tree..
	** @Param branchAngle - the angle the mini-tree makes with its parent branch from the direction of the branch.
	** @Param bowFreq - the number of bows (bends) in a branch. A trunk is set to have only one bow.
	** @Param bowHeight - the height of a bow from the line of direction of the branch.
	** @Param leavesOnBranch - the number of leaves to be added to one side of a branch.
	** @Param leafWHRatio - 0 <  leafWHRatio  < 1, closer to 0 longer leaf, closer to 1 more circular.
	** @Param leafMaterial -material used for all leaves.
  ***********/

		const trunk_height = window.innerHeight / 100;
		const trunk_taper = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scalar.RandomRange(0.6, 0.9); //0.77;
		const trunk_slices = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scalar.RandomRange(6, 20); //7;
		const barkMaterial = bark;
		const boughs = 2; // 1 or 2
		const forks = 3;
		const fork_angle = Math.PI / 4;
		const fork_ratio = 2/( 1 + Math.sqrt(5) ); //PHI the golden ratio
		const branch_angle = Math.random() * Math.PI/3;
		const bow_freq = 2;
		const bow_height = 3.5;
		const branches = 6;
		const leaves_on_branch = Math.random() * 10;
		const leaf_wh_ratio = 0.7; //0.4;
		const leafMaterial = leaf;

	const TreefromScript = createTree(trunk_height, trunk_taper, trunk_slices, barkMaterial, boughs, forks, fork_angle, fork_ratio, branches, branch_angle, bow_freq, bow_height, leaves_on_branch, leaf_wh_ratio, leafMaterial, scene);
	TreefromScript.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3( -4, 0, -4 );

	//Make AssetContainer for tree template
  const Container = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.AssetContainer(scene);

	/***----- Start of function duplicate ------*/
	const duplicate = function(cont, delay) {
		let entries = cont.instantiateModelsToScene();
		for (let node of entries.rootNodes) {
					node.position.x = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scalar.RandomRange(-25, 25);
			    node.position.z = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scalar.RandomRange(-25, 25);
			}
			setTimeout(() => {
					for (let puu of entries.rootNodes) {
						puu.rotation.y = babylonjs__WEBPACK_IMPORTED_MODULE_0__.Scalar.RandomRange(0, Math.PI);
					}
			}, delay);
		}
		/***----- End of function duplicate ------*/

		const TeePuut = function(Kontti) {
			Kontti.meshes.push(TreefromScript.clone());
			Kontti.addAllToScene();

      duplicate(Kontti, 1500);
			duplicate(Kontti, 2500);
      duplicate(Kontti, 3500);
		}

		TeePuut(Container);

/***********Ground********************************/
  let ground = babylonjs__WEBPACK_IMPORTED_MODULE_0__.MeshBuilder.CreateGround("ground", {
		height: 150, width: 150, subdivisions: 8
	}, scene);
    let groundMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial("groundMaterial", scene);
    groundMaterial.diffuseTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Texture("assets/textures/grass.png", scene);
    groundMaterial.diffuseTexture.uScale = 5;
    groundMaterial.diffuseTexture.vScale = 5;
    groundMaterial.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Color3( 0.2, 0.2, 0.2 );
    ground.material = groundMaterial;

		// Create the 3D UI manager and anchor for button
    const manager = new babylonjs_gui__WEBPACK_IMPORTED_MODULE_1__.GUI3DManager(scene);
		var anchor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.AbstractMesh("anchor", scene);

    // Let's add a button
		const YksiNappula = new babylonjs_gui__WEBPACK_IMPORTED_MODULE_1__.Button3D("Start");
    manager.addControl(YksiNappula);
    YksiNappula.linkToTransformNode(anchor);

    anchor.position.z = 10;
		anchor.position.y = 1;

		anchor.scaling = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3(2, 2, 4);
		anchor.rotation = new babylonjs__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, Math.PI, 0 );

    YksiNappula.onPointerUpObservable.add(function(){
			TeePuut(Container);
    });
    const NappulanTeksti = new babylonjs_gui__WEBPACK_IMPORTED_MODULE_1__.TextBlock();
    NappulanTeksti.text = "Lisää puita";
    NappulanTeksti.color = "White";
    NappulanTeksti.fontSize = 48;
    YksiNappula.content = NappulanTeksti;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHlEQUFrQixZQUFZO0FBQ3BELHVCQUF1Qix5REFBa0IsU0FBUztBQUNsRDtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQSwrQkFBK0IsOENBQU87O0FBRXRDO0FBQ0Esd0JBQXdCLHFEQUFjOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBa0I7QUFDekMseUJBQXlCLHlEQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseURBQWtCO0FBQ3pDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSwrREFBd0I7QUFDdkM7QUFDQSxFQUFFO0FBQ0YsNkJBQTZCLHVEQUFnQjtBQUM3Qyx3Q0FBd0MsOENBQU87QUFDL0M7QUFDQTtBQUNBLHVDQUF1Qyw2Q0FBTTtBQUM3Qzs7QUFFQTtBQUNBLHdCQUF3Qix1REFBZ0I7QUFDeEMsbUJBQW1CLG1EQUFZOztBQUUvQjtBQUNBLDBCQUEwQixtREFBWTtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLDhDQUFPO0FBQzlCLHdCQUF3Qiw4Q0FBTzs7QUFFL0I7QUFDQTtBQUNBLEtBQUs7QUFDTCwrQkFBK0Isb0RBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOzs7QUFHQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vM2RUaHJlZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRTY2VuZSxcblx0RW5naW5lLFxuXHRWZWN0b3IzLFxuXHRDb2xvcjMsXG5cdERpcmVjdGlvbmFsTGlnaHQsXG5cdEhlbWlzcGhlcmljTGlnaHQsXG5cdE1lc2gsXG5cdE1lc2hCdWlsZGVyLFxuXHRTdGFuZGFyZE1hdGVyaWFsLFxuXHRCYWNrZ3JvdW5kTWF0ZXJpYWwsXG5cdEN1YmVUZXh0dXJlLFxuXHRUZXh0dXJlLFxuXHRBcmNSb3RhdGVDYW1lcmEsXG5cdEF4aXMsXG5cdFF1YXRlcm5pb24sXG5cdFNvbGlkUGFydGljbGVTeXN0ZW0sXG5cdFRyYW5zZm9ybU5vZGUsXG5cdFNjYWxhcixcblx0QXNzZXRDb250YWluZXIsXG5cdEJ1dHRvbjNELFxuXHRBYnN0cmFjdE1lc2hcbn0gZnJvbSAnYmFieWxvbmpzJztcblxuaW1wb3J0ICogYXMgR1VJIGZyb20gJ2JhYnlsb25qcy1ndWknO1xuaW1wb3J0ICdiYWJ5bG9uanMtbG9hZGVycyc7XG5cbi8qKioqKioqKioqKioqKioqVHJlZSBnZW5lcmF0b3IgY29kZSoqKioqKioqKioqKioqKi9cbnZhciBjb29yZFN5c3RlbT1mdW5jdGlvbihiKXt2YXIgZz1iLm5vcm1hbGl6ZSgpO2I9MD09TWF0aC5hYnMoYi54KSYmMD09TWF0aC5hYnMoYi55KT8obmV3IFZlY3RvcjMoYi56LDAsMCkpLm5vcm1hbGl6ZSgpOihuZXcgVmVjdG9yMyhiLnksLWIueCwwKSkubm9ybWFsaXplKCk7dmFyIHI9VmVjdG9yMy5Dcm9zcyhiLGcpO3JldHVybnt4OmIseTpnLHo6cn19LHJhbmRQY3Q9ZnVuY3Rpb24oYixnKXtyZXR1cm4gMD09Zz9iOigxKygxLTIqTWF0aC5yYW5kb20oKSkqZykqYn0sY3JlYXRlQnJhbmNoPWZ1bmN0aW9uKGIsZyxyLHcsaCxsLHYsbix4KXtmb3IodmFyIHQ9W10sZCxjPVtdLGYscT1bXSxhPTA7MTI+YTthKyspdFthXT1bXTtmb3IodmFyIG09MDttPGg7bSsrKWZvcihhPW0vaCxkPWcueS5zY2FsZShhKnIpLGQuYWRkSW5QbGFjZShnLnguc2NhbGUodipNYXRoLmV4cCgtYSkqTWF0aC5zaW4obCphKk1hdGguUEkpKSksZC5hZGRJblBsYWNlKGIpLGNbbV09ZCxkPW4qKDErKC40Kk1hdGgucmFuZG9tKCktLjIpKSooMS0oMS13KSphKSxxLnB1c2goZCksYT0wOzEyPmE7YSsrKWY9YSpNYXRoLlBJLzYsZj1nLnguc2NhbGUoZCpNYXRoLmNvcyhmKSkuYWRkKGcuei5zY2FsZShkKk1hdGguc2luKGYpKSksZi5hZGRJblBsYWNlKGNbbV0pLHRbYV0ucHVzaChmKTtmb3IoYT0wOzEyPmE7YSsrKXRbYV0ucHVzaChjW2MubGVuZ3RoLTFdKTtyZXR1cm57YnJhbmNoOk1lc2hCdWlsZGVyLkNyZWF0ZVJpYmJvbihcImJyYW5jaFwiLHtwYXRoQXJyYXk6dCxjbG9zZUFycmF5OiEwfSx4KSxjb3JlOmMsX3JhZGlpOnF9fSxjcmVhdGVUcmVlQmFzZT1mdW5jdGlvbihiLGcscix3LGgsbCx2LG4seCx0KXt2YXIgZD0yLygxK01hdGguc3FydCg1KSksYz1uZXcgVmVjdG9yMygwLDEsMCksZixjPWNvb3JkU3lzdGVtKGMpLHE9bmV3IFZlY3RvcjMoMCwwLDApLGE9W10sbT1bXSxlPVtdLEE9W10scT1jcmVhdGVCcmFuY2gocSxjLGIsZyxyLDEseCwxLHQpO2EucHVzaChxLmJyYW5jaCk7dmFyIHk9cS5jb3JlO20ucHVzaCh5KTtlLnB1c2gocS5fcmFkaWkpO0EucHVzaChjKTtmb3IodmFyIHE9eVt5Lmxlbmd0aC0xXSx5PTIqTWF0aC5QSS9oLHosdSxwLEMsQj0wO0I8aDtCKyspaWYoZj1yYW5kUGN0KEIqeSwuMjUpLGY9Yy55LnNjYWxlKE1hdGguY29zKHJhbmRQY3QobCwuMTUpKSkuYWRkKGMueC5zY2FsZShNYXRoLnNpbihyYW5kUGN0KGwsLjE1KSkqTWF0aC5zaW4oZikpKS5hZGQoYy56LnNjYWxlKE1hdGguc2luKHJhbmRQY3QobCwuMTUpKSpNYXRoLmNvcyhmKSkpLHo9Y29vcmRTeXN0ZW0oZiksZj1jcmVhdGVCcmFuY2gocSx6LGIqdixnLHIsbix4KmQsZyx0KSxwPWYuY29yZSxwPXBbcC5sZW5ndGgtMV0sYS5wdXNoKGYuYnJhbmNoKSxtLnB1c2goZi5jb3JlKSxlLnB1c2goZi5fcmFkaWkpLEEucHVzaCh6KSwxPHcpZm9yKHZhciBEPTA7RDxoO0QrKyl1PXJhbmRQY3QoRCp5LC4yNSksdT16Lnkuc2NhbGUoTWF0aC5jb3MocmFuZFBjdChsLC4xNSkpKS5hZGQoei54LnNjYWxlKE1hdGguc2luKHJhbmRQY3QobCwuMTUpKSpNYXRoLnNpbih1KSkpLmFkZCh6Lnouc2NhbGUoTWF0aC5zaW4ocmFuZFBjdChsLC4xNSkpKk1hdGguY29zKHUpKSksdT1jb29yZFN5c3RlbSh1KSxDPWNyZWF0ZUJyYW5jaChwLHUsYip2KnYsZyxyLG4seCpkKmQsZypnLHQpLGEucHVzaChDLmJyYW5jaCksbS5wdXNoKEMuY29yZSksZS5wdXNoKGYuX3JhZGlpKSxBLnB1c2godSk7cmV0dXJue3RyZWU6TWVzaC5NZXJnZU1lc2hlcyhhKSxwYXRoczptLHJhZGlpOmUsZGlyZWN0aW9uczpBfX0sY3JlYXRlVHJlZT1mdW5jdGlvbihiLGcscix3LGgsbCx2LG4seCx0LGQsYyxmLHEsYSxtKXsxIT1oJiYyIT1oJiYoaD0xKTt2YXIgZT1jcmVhdGVUcmVlQmFzZShiLGcscixoLGwsdixuLGQsYyxtKTtlLnRyZWUubWF0ZXJpYWw9dzt2YXIgQT1iKk1hdGgucG93KG4saCkseT1BLygyKmYpLHo9MS41Kk1hdGgucG93KGcsaC0xKTtuPU1lc2hCdWlsZGVyLkNyZWF0ZURpc2MoXCJsZWFmXCIse3JhZGl1czp6LzIsdGVzc2VsbGF0aW9uOjEyLHNpZGVPcmllbnRhdGlvbjpNZXNoLkRPVUJMRVNJREV9LG0pO2I9bmV3IFNvbGlkUGFydGljbGVTeXN0ZW0oXCJsZWF2ZVNQU1wiLG0se3VwZGF0YWJsZTohMX0pO2IuYWRkU2hhcGUobiwyKmYqTWF0aC5wb3cobCxoKSx7cG9zaXRpb25GdW5jdGlvbjpmdW5jdGlvbihiLGEsZyl7YT1NYXRoLmZsb29yKGcvKDIqZikpOzE9PWg/YSsrOmE9MithJWwrTWF0aC5mbG9vcihhL2wpKihsKzEpO3ZhciBFPShnJSgyKmYpKnkrMyp5LzIpL0EsZD1NYXRoLmNlaWwocipFKTtkPmUucGF0aHNbYV0ubGVuZ3RoLTEmJihkPWUucGF0aHNbYV0ubGVuZ3RoLTEpO3ZhciBrPWQtMSxjPWsvKHItMSksbT1kLyhyLTEpO2IucG9zaXRpb249bmV3IFZlY3RvcjMoZS5wYXRoc1thXVtrXS54KyhlLnBhdGhzW2FdW2RdLngtZS5wYXRoc1thXVtrXS54KSooRS1jKS8obS1jKSxlLnBhdGhzW2FdW2tdLnkrKGUucGF0aHNbYV1bZF0ueS1lLnBhdGhzW2FdW2tdLnkpKihFLWMpLyhtLWMpKyguNip6L3ErZS5yYWRpaVthXVtkXSkqKGclMioyLTEpLGUucGF0aHNbYV1ba10ueisoZS5wYXRoc1thXVtkXS56LWUucGF0aHNbYV1ba10ueikqKEUtYykvKG0tYykpO2Iucm90YXRpb24uej1NYXRoLnJhbmRvbSgpKk1hdGguUEkvNDtiLnJvdGF0aW9uLnk9TWF0aC5yYW5kb20oKSpNYXRoLlBJLzI7Yi5yb3RhdGlvbi56PU1hdGgucmFuZG9tKCkqTWF0aC5QSS80O2Iuc2NhbGUueT0xL3F9fSk7Yj1iLmJ1aWxkTWVzaCgpO2IuYmlsbGJvYXJkPSEwO24uZGlzcG9zZSgpO2Q9bmV3IFNvbGlkUGFydGljbGVTeXN0ZW0oXCJtaW5pU1BTXCIsbSx7dXBkYXRhYmxlOiExfSk7bj1uZXcgU29saWRQYXJ0aWNsZVN5c3RlbShcIm1pbmlsZWF2ZXNTUFNcIixtLHt1cGRhdGFibGU6ITF9KTt2YXIgdT1bXTtjPTIqTWF0aC5QSS9sO2Zvcih2YXIgcD0wO3A8TWF0aC5wb3cobCxoKzEpO3ArKyl1LnB1c2gocmFuZFBjdChNYXRoLmZsb29yKHAvTWF0aC5wb3cobCxoKSkqYywuMikpO2M9ZnVuY3Rpb24oYSxiLGQpe3ZhciBjPWQlTWF0aC5wb3cobCxoKTsxPT1oP2MrKzpjPTIrYyVsK01hdGguZmxvb3IoYy9sKSoobCsxKTt2YXIgZj1lLmRpcmVjdGlvbnNbY10sYz1uZXcgVmVjdG9yMyhlLnBhdGhzW2NdW2UucGF0aHNbY10ubGVuZ3RoLTFdLngsZS5wYXRoc1tjXVtlLnBhdGhzW2NdLmxlbmd0aC0xXS55LGUucGF0aHNbY11bZS5wYXRoc1tjXS5sZW5ndGgtMV0ueiksaz11W2RdLGs9Zi55LnNjYWxlKE1hdGguY29zKHJhbmRQY3QodiwwKSkpLmFkZChmLnguc2NhbGUoTWF0aC5zaW4ocmFuZFBjdCh2LDApKSpNYXRoLnNpbihrKSkpLmFkZChmLnouc2NhbGUoTWF0aC5zaW4ocmFuZFBjdCh2LDApKSpNYXRoLmNvcyhrKSkpLGY9VmVjdG9yMy5Dcm9zcyhBeGlzLlksayksaz1NYXRoLmFjb3MoVmVjdG9yMy5Eb3QoayxBeGlzLlkpL2subGVuZ3RoKCkpO2Euc2NhbGU9bmV3IFZlY3RvcjMoTWF0aC5wb3coZyxoKzEpLE1hdGgucG93KGcsaCsxKSxNYXRoLnBvdyhnLGgrMSkpO2EucXVhdGVybmlvbj1RdWF0ZXJuaW9uLlJvdGF0aW9uQXhpcyhmLGspO2EucG9zaXRpb249Yzt9O2Zvcih2YXIgQz1bXSxCPVtdLHA9ZS5wYXRocy5sZW5ndGgsRD1lLnBhdGhzWzBdLmxlbmd0aCxGPTA7Rjx4O0YrKylDLnB1c2goMipNYXRoLlBJKk1hdGgucmFuZG9tKCktTWF0aC5QSSksQi5wdXNoKFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcCksTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihELTEpKzEpXSk7cD1mdW5jdGlvbihhLGMsYil7dmFyIGQ9QltiXVswXSxmPUJbYl1bMV0saz1lLmRpcmVjdGlvbnNbZF07Yz1uZXcgVmVjdG9yMyhlLnBhdGhzW2RdW2ZdLngsZS5wYXRoc1tkXVtmXS55LGUucGF0aHNbZF1bZl0ueik7Yy5hZGRJblBsYWNlKGsuei5zY2FsZShlLnJhZGlpW2RdW2ZdLzIpKTtiPUNbYl07az1rLnkuc2NhbGUoTWF0aC5jb3MocmFuZFBjdCh0LDApKSkuYWRkKGsueC5zY2FsZShNYXRoLnNpbihyYW5kUGN0KHQsMCkpKk1hdGguc2luKGIpKSkuYWRkKGsuei5zY2FsZShNYXRoLnNpbihyYW5kUGN0KHQsMCkpKk1hdGguY29zKGIpKSk7Yj1WZWN0b3IzLkNyb3NzKEF4aXMuWSxrKTtrPU1hdGguYWNvcyhWZWN0b3IzLkRvdChrLEF4aXMuWSkvay5sZW5ndGgoKSk7YS5zY2FsZT1uZXcgVmVjdG9yMyhNYXRoLnBvdyhnLGgrMSksTWF0aC5wb3coZyxoKzEpLE1hdGgucG93KGcsaCsxKSk7YS5xdWF0ZXJuaW9uPVF1YXRlcm5pb24uUm90YXRpb25BeGlzKGIsayk7YS5wb3NpdGlvbj1jfTtkLmFkZFNoYXBlKGUudHJlZSxNYXRoLnBvdyhsLGgrMSkse3Bvc2l0aW9uRnVuY3Rpb246Y30pO2QuYWRkU2hhcGUoZS50cmVlLHgse3Bvc2l0aW9uRnVuY3Rpb246cH0pO2Q9ZC5idWlsZE1lc2goKTtkLm1hdGVyaWFsPXc7bi5hZGRTaGFwZShiLE1hdGgucG93KGwsaCsxKSx7cG9zaXRpb25GdW5jdGlvbjpjfSk7bi5hZGRTaGFwZShiLHgse3Bvc2l0aW9uRnVuY3Rpb246cH0pO3c9bi5idWlsZE1lc2goKTtiLmRpc3Bvc2UoKTt3Lm1hdGVyaWFsPWE7YT1NZXNoQnVpbGRlci5DcmVhdGVCb3goXCJcIix7fSxtKTthLmlzVmlzaWJsZT0hMTtlLnRyZWUucGFyZW50PWE7ZC5wYXJlbnQ9YTtyZXR1cm4gdy5wYXJlbnQ9YX07XG4vKioqKioqKioqKioqKioqKkVuZCBvZiBUcmVlIGdlbmVyYXRvciBjb2RlKioqKioqKioqKioqKi9cblxubGV0IGNhbnZhcywgc2NlbmUsIGVuZ2luZTtcbmxldCBUcmVlQ2xvbmU7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGNvbnN0IGthbnZhYXNpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGthbnZhYXNpLmlkID0gXCJrdXZha2FudmFhc2lcIjtcblx0a2FudmFhc2kud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0a2FudmFhc2kuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRrYW52YWFzaS5zdHlsZS56SW5kZXggPSA4O1xuXHRrYW52YWFzaS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0a2FudmFhc2kuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWRcIjtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChrYW52YWFzaSk7XG5cdGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcja3V2YWthbnZhYXNpJyApO1xuXG5cdGVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzLCB0cnVlLCB7XG5cdFx0cHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuXHRcdHN0ZW5jaWw6IHRydWUsXG5cdFx0ZGlzYWJsZVdlYkdMMlN1cHBvcnQ6IGZhbHNlLFxuXHRcdGFkYXB0VG9EZXZpY2VSYXRpbzogdHJ1ZVxuXHQgIH0pO1xuXG4gIC8vIFRoaXMgY3JlYXRlcyBhIGJhc2ljIEJhYnlsb24gU2NlbmUgb2JqZWN0IChub24tbWVzaClcbiAgc2NlbmUgPSBuZXcgU2NlbmUoZW5naW5lKTtcblxuICAvLyBDYW1lcmFcblx0Y29uc3QgY2FtZXJhID0gbmV3IEFyY1JvdGF0ZUNhbWVyYShcImNhbWVyYVwiLCBNYXRoLlBJIC8gMiwgTWF0aC5QSSAvIDIuMiwgNjAsIG5ldyBWZWN0b3IzKDAsIDAsIDApKTtcblx0Y2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcbi8vXHRjYW1lcmEudXNlRnJhbWluZ0JlaGF2aW9yID0gdHJ1ZTtcblx0Y2FtZXJhLnVzZUF1dG9Sb3RhdGlvbkJlaGF2aW9yID0gdHJ1ZTtcblxuICAvLyBMaWdodHNcbiAgY29uc3QgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0MVwiLCBuZXcgVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpO1xuICBsaWdodC5pbnRlbnNpdHkgPSAwLjc7XG4gIGxpZ2h0LnNwZWN1bGFyID0gQ29sb3IzLkJsYWNrKCk7XG5cbiAgY29uc3QgbGlnaHQyID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoXCJkaXIwMVwiLCBuZXcgVmVjdG9yMygwLCAtMC41LCAtMS4wKSwgc2NlbmUpO1xuICBsaWdodDIucG9zaXRpb24gPSBuZXcgVmVjdG9yMygwLCA1LCA1KTtcblxuXHQvLyBza3lib3hcbiAgY29uc3Qgc2t5Ym94ID0gTWVzaC5DcmVhdGVCb3goXCJCYWNrZ3JvdW5kU2t5Ym94XCIsIDUwMCwgc2NlbmUsIHVuZGVmaW5lZCwgTWVzaC5CQUNLU0lERSk7XG5cbiAgLy8gQ3JlYXRlIGFuZCB0d2VhayB0aGUgYmFja2dyb3VuZCBtYXRlcmlhbC5cbiAgY29uc3QgYmFja2dyb3VuZE1hdGVyaWFsID0gbmV3IEJhY2tncm91bmRNYXRlcmlhbChcImJhY2tncm91bmRNYXRlcmlhbFwiLCBzY2VuZSk7XG5cbiAgYmFja2dyb3VuZE1hdGVyaWFsLnJlZmxlY3Rpb25UZXh0dXJlID0gbmV3IEN1YmVUZXh0dXJlKFwiYXNzZXRzL3RleHR1cmVzL3NreWJveFwiLCBzY2VuZSk7XG4gIGJhY2tncm91bmRNYXRlcmlhbC5yZWZsZWN0aW9uVGV4dHVyZS5jb29yZGluYXRlc01vZGUgPSBUZXh0dXJlLlNLWUJPWF9NT0RFO1xuICBza3lib3gubWF0ZXJpYWwgPSBiYWNrZ3JvdW5kTWF0ZXJpYWw7XG5cbi8qKioqKioqKioqKl9taW5pX3RyZWVzIGZyb20gVHJlZUdlbmVyYXRvcioqKioqKioqKioqKioqKioqKioqKi9cbi8vbGVhZiBtYXRlcmlhbFxuXHRjb25zdCBsZWFmID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoXCJsZWFmXCIsIHNjZW5lKTtcblx0bGVhZi5lbWlzc2l2ZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcIi4vYXNzZXRzL3RleHR1cmVzLzgwMHB4X0xlYWZwYXR0ZXJuLmpwZ1wiLCBzY2VuZSk7XG5cdGxlYWYuZGlmZnVzZVRleHR1cmUgPSBuZXcgVGV4dHVyZShcIi4vYXNzZXRzL3RleHR1cmVzLzgwMHB4X0xlYWZwYXR0ZXJuLmpwZ1wiLCBzY2VuZSk7XG5cblx0bGVhZi5kaWZmdXNlVGV4dHVyZS51U2NhbGUgPSAyLjA7Ly9SZXBlYXQgeCB0aW1lcyBvbiB0aGUgVmVydGljYWwgQXhlc1xuXHRsZWFmLmRpZmZ1c2VUZXh0dXJlLnZTY2FsZSA9IDIuMDsvL1JlcGVhdCB4IHRpbWVzIG9uIHRoZSBIb3Jpem9udGFsIEF4ZXNcblxuXHQvL3RydW5rIGFuZCBicmFuY2ggbWF0ZXJpYWxcblx0Y29uc3QgYmFyayA9IG5ldyBTdGFuZGFyZE1hdGVyaWFsKFwiYmFya1wiLCBzY2VuZSk7XG5cdGJhcmsuZW1pc3NpdmVUZXh0dXJlID0gbmV3IFRleHR1cmUoXCIuL2Fzc2V0cy90ZXh0dXJlcy90cmVlX2JhcmsuanBnXCIsIHNjZW5lKTtcblx0YmFyay5kaWZmdXNlVGV4dHVyZSA9IG5ldyBUZXh0dXJlKFwiLi9hc3NldHMvdGV4dHVyZXMvdHJlZV9iYXJrLmpwZ1wiLCBzY2VuZSk7XG5cblx0YmFyay5kaWZmdXNlVGV4dHVyZS51U2NhbGUgPSA0LjA7Ly9SZXBlYXQgNSB0aW1lcyBvbiB0aGUgVmVydGljYWwgQXhlc1xuXHRiYXJrLmRpZmZ1c2VUZXh0dXJlLnZTY2FsZSA9IDQuMDsvL1JlcGVhdCA1IHRpbWVzIG9uIHRoZSBIb3Jpem9udGFsIEF4ZXNcblxuXHQvKioqKioqKioqKioqVHJlZSBwYXJhbWV0ZXJzKioqKioqKi9cblx0LyoqIEBQYXJhbSB0cnVua0hlaWdodCAtIGhlaWdodCBvZiB0cnVuayBvZiB0cmVlLlxuXHQqKiBAUGFyYW0gdHJ1bmtUYXBlciAtIDA8IHRydW5rVGFwZXIgPDEgLSBmcmFjdGlvbiBvZiBzdGFydGluZyByYWRpdXMgZm9yIHRoZSBlbmQgcmFkaXVzIG9mIGEgYnJhbmNoLlxuXHQqKiBAUGFyYW0gdHJ1bmtTbGljZXMgLSB0aGUgbnVtYmVyIG9mIHBvaW50cyBvbiB0aGUgcGF0aHMgdXNlZCBmb3IgdGhlIHJpYmJvbiBtZXNoIHRoYXQgZm9ybXMgdGhlIGJyYW5jaC5cblx0KiogQFBhcmFtIHRydW5rIG1hdGVyaWFsIC0gdGhlIG1hdGVyaWFsIHVzZWQgb24gYWxsIGJyYW5jaGVzLlxuXHQqKiBAUGFyYW0gYm91Z2hzIC0gMSBvciAyIG9ubHkgLSB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoZSB0cmVlIHdpbGwgc3BsaXQgaW50byBmb3JrZWQgYnJhbmNoZXMsIDEgdHJ1bmsgc3BsaXRzIGludG8gYnJhbmNoZXMsIDIgdGhlc2UgYnJhbmNoZXMgYWxzbyBzcGlsdCBpbnRvIGJyYW5jaGVzLlxuXHQqKiBAUGFyYW0gZm9ya3MgLSA1IG9yIG1vcmUgcmVhbGx5IHNsb3dzIHRoZSBnZW5lcmF0aW9uLiBUaGUgbnVtYmVyIG9mIGJyYW5jaGVzIGEgYnJhbmNoIGNhbiBzcGxpdCBpbnRvLlxuXHQqKiBAUGFyYW0gZm9ya0FuZ2xlIC0gdGhlIGFuZ2xlIGEgZm9ya2VkIGJyYW5jaCBtYWtlcyB3aXRoIGl0cyBwYXJlbnQgYnJhbmNoIG1lYXN1cmVkIGZyb20gdGhlIGRpcmVjdGlvbiBvZiB0aGUgYnJhbmNoLlxuXHQqKiBAUGFyYW0gZm9ya1JhdGlvIC0gMCA8IGZvcmtSYXRpbyA8IDEgLSB0aGUgcmF0aW8gb2YgdGhlIGxlbmd0aCBvZiBhIGJyYW5jaCB0byBpdHMgcGFyZW50J3MgbGVuZ3RoLlxuXHQqKiBAUGFyYW0gYnJhbmNoZXMgLSB0aGUgbnVtYmVyIG9mIG1pbmktdHJlZXMgdGhhdCBhcmUgcmFuZG9tYWxseSBhZGRlZCB0byB0aGUgdHJlZS4uXG5cdCoqIEBQYXJhbSBicmFuY2hBbmdsZSAtIHRoZSBhbmdsZSB0aGUgbWluaS10cmVlIG1ha2VzIHdpdGggaXRzIHBhcmVudCBicmFuY2ggZnJvbSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBicmFuY2guXG5cdCoqIEBQYXJhbSBib3dGcmVxIC0gdGhlIG51bWJlciBvZiBib3dzIChiZW5kcykgaW4gYSBicmFuY2guIEEgdHJ1bmsgaXMgc2V0IHRvIGhhdmUgb25seSBvbmUgYm93LlxuXHQqKiBAUGFyYW0gYm93SGVpZ2h0IC0gdGhlIGhlaWdodCBvZiBhIGJvdyBmcm9tIHRoZSBsaW5lIG9mIGRpcmVjdGlvbiBvZiB0aGUgYnJhbmNoLlxuXHQqKiBAUGFyYW0gbGVhdmVzT25CcmFuY2ggLSB0aGUgbnVtYmVyIG9mIGxlYXZlcyB0byBiZSBhZGRlZCB0byBvbmUgc2lkZSBvZiBhIGJyYW5jaC5cblx0KiogQFBhcmFtIGxlYWZXSFJhdGlvIC0gMCA8ICBsZWFmV0hSYXRpbyAgPCAxLCBjbG9zZXIgdG8gMCBsb25nZXIgbGVhZiwgY2xvc2VyIHRvIDEgbW9yZSBjaXJjdWxhci5cblx0KiogQFBhcmFtIGxlYWZNYXRlcmlhbCAtbWF0ZXJpYWwgdXNlZCBmb3IgYWxsIGxlYXZlcy5cbiAgKioqKioqKioqKiovXG5cblx0XHRjb25zdCB0cnVua19oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAxMDA7XG5cdFx0Y29uc3QgdHJ1bmtfdGFwZXIgPSBTY2FsYXIuUmFuZG9tUmFuZ2UoMC42LCAwLjkpOyAvLzAuNzc7XG5cdFx0Y29uc3QgdHJ1bmtfc2xpY2VzID0gU2NhbGFyLlJhbmRvbVJhbmdlKDYsIDIwKTsgLy83O1xuXHRcdGNvbnN0IGJhcmtNYXRlcmlhbCA9IGJhcms7XG5cdFx0Y29uc3QgYm91Z2hzID0gMjsgLy8gMSBvciAyXG5cdFx0Y29uc3QgZm9ya3MgPSAzO1xuXHRcdGNvbnN0IGZvcmtfYW5nbGUgPSBNYXRoLlBJIC8gNDtcblx0XHRjb25zdCBmb3JrX3JhdGlvID0gMi8oIDEgKyBNYXRoLnNxcnQoNSkgKTsgLy9QSEkgdGhlIGdvbGRlbiByYXRpb1xuXHRcdGNvbnN0IGJyYW5jaF9hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJLzM7XG5cdFx0Y29uc3QgYm93X2ZyZXEgPSAyO1xuXHRcdGNvbnN0IGJvd19oZWlnaHQgPSAzLjU7XG5cdFx0Y29uc3QgYnJhbmNoZXMgPSA2O1xuXHRcdGNvbnN0IGxlYXZlc19vbl9icmFuY2ggPSBNYXRoLnJhbmRvbSgpICogMTA7XG5cdFx0Y29uc3QgbGVhZl93aF9yYXRpbyA9IDAuNzsgLy8wLjQ7XG5cdFx0Y29uc3QgbGVhZk1hdGVyaWFsID0gbGVhZjtcblxuXHRjb25zdCBUcmVlZnJvbVNjcmlwdCA9IGNyZWF0ZVRyZWUodHJ1bmtfaGVpZ2h0LCB0cnVua190YXBlciwgdHJ1bmtfc2xpY2VzLCBiYXJrTWF0ZXJpYWwsIGJvdWdocywgZm9ya3MsIGZvcmtfYW5nbGUsIGZvcmtfcmF0aW8sIGJyYW5jaGVzLCBicmFuY2hfYW5nbGUsIGJvd19mcmVxLCBib3dfaGVpZ2h0LCBsZWF2ZXNfb25fYnJhbmNoLCBsZWFmX3doX3JhdGlvLCBsZWFmTWF0ZXJpYWwsIHNjZW5lKTtcblx0VHJlZWZyb21TY3JpcHQucG9zaXRpb24gPSBuZXcgVmVjdG9yMyggLTQsIDAsIC00ICk7XG5cblx0Ly9NYWtlIEFzc2V0Q29udGFpbmVyIGZvciB0cmVlIHRlbXBsYXRlXG4gIGNvbnN0IENvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XG5cblx0LyoqKi0tLS0tIFN0YXJ0IG9mIGZ1bmN0aW9uIGR1cGxpY2F0ZSAtLS0tLS0qL1xuXHRjb25zdCBkdXBsaWNhdGUgPSBmdW5jdGlvbihjb250LCBkZWxheSkge1xuXHRcdGxldCBlbnRyaWVzID0gY29udC5pbnN0YW50aWF0ZU1vZGVsc1RvU2NlbmUoKTtcblx0XHRmb3IgKGxldCBub2RlIG9mIGVudHJpZXMucm9vdE5vZGVzKSB7XG5cdFx0XHRcdFx0bm9kZS5wb3NpdGlvbi54ID0gU2NhbGFyLlJhbmRvbVJhbmdlKC0yNSwgMjUpO1xuXHRcdFx0ICAgIG5vZGUucG9zaXRpb24ueiA9IFNjYWxhci5SYW5kb21SYW5nZSgtMjUsIDI1KTtcblx0XHRcdH1cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGZvciAobGV0IHB1dSBvZiBlbnRyaWVzLnJvb3ROb2Rlcykge1xuXHRcdFx0XHRcdFx0cHV1LnJvdGF0aW9uLnkgPSBTY2FsYXIuUmFuZG9tUmFuZ2UoMCwgTWF0aC5QSSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdH1cblx0XHQvKioqLS0tLS0gRW5kIG9mIGZ1bmN0aW9uIGR1cGxpY2F0ZSAtLS0tLS0qL1xuXG5cdFx0Y29uc3QgVGVlUHV1dCA9IGZ1bmN0aW9uKEtvbnR0aSkge1xuXHRcdFx0S29udHRpLm1lc2hlcy5wdXNoKFRyZWVmcm9tU2NyaXB0LmNsb25lKCkpO1xuXHRcdFx0S29udHRpLmFkZEFsbFRvU2NlbmUoKTtcblxuICAgICAgZHVwbGljYXRlKEtvbnR0aSwgMTUwMCk7XG5cdFx0XHRkdXBsaWNhdGUoS29udHRpLCAyNTAwKTtcbiAgICAgIGR1cGxpY2F0ZShLb250dGksIDM1MDApO1xuXHRcdH1cblxuXHRcdFRlZVB1dXQoQ29udGFpbmVyKTtcblxuLyoqKioqKioqKioqR3JvdW5kKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIGxldCBncm91bmQgPSBNZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoXCJncm91bmRcIiwge1xuXHRcdGhlaWdodDogMTUwLCB3aWR0aDogMTUwLCBzdWJkaXZpc2lvbnM6IDhcblx0fSwgc2NlbmUpO1xuICAgIGxldCBncm91bmRNYXRlcmlhbCA9IG5ldyBTdGFuZGFyZE1hdGVyaWFsKFwiZ3JvdW5kTWF0ZXJpYWxcIiwgc2NlbmUpO1xuICAgIGdyb3VuZE1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlID0gbmV3IFRleHR1cmUoXCJhc3NldHMvdGV4dHVyZXMvZ3Jhc3MucG5nXCIsIHNjZW5lKTtcbiAgICBncm91bmRNYXRlcmlhbC5kaWZmdXNlVGV4dHVyZS51U2NhbGUgPSA1O1xuICAgIGdyb3VuZE1hdGVyaWFsLmRpZmZ1c2VUZXh0dXJlLnZTY2FsZSA9IDU7XG4gICAgZ3JvdW5kTWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IG5ldyBDb2xvcjMoIDAuMiwgMC4yLCAwLjIgKTtcbiAgICBncm91bmQubWF0ZXJpYWwgPSBncm91bmRNYXRlcmlhbDtcblxuXHRcdC8vIENyZWF0ZSB0aGUgM0QgVUkgbWFuYWdlciBhbmQgYW5jaG9yIGZvciBidXR0b25cbiAgICBjb25zdCBtYW5hZ2VyID0gbmV3IEdVSS5HVUkzRE1hbmFnZXIoc2NlbmUpO1xuXHRcdHZhciBhbmNob3IgPSBuZXcgQWJzdHJhY3RNZXNoKFwiYW5jaG9yXCIsIHNjZW5lKTtcblxuICAgIC8vIExldCdzIGFkZCBhIGJ1dHRvblxuXHRcdGNvbnN0IFlrc2lOYXBwdWxhID0gbmV3IEdVSS5CdXR0b24zRChcIlN0YXJ0XCIpO1xuICAgIG1hbmFnZXIuYWRkQ29udHJvbChZa3NpTmFwcHVsYSk7XG4gICAgWWtzaU5hcHB1bGEubGlua1RvVHJhbnNmb3JtTm9kZShhbmNob3IpO1xuXG4gICAgYW5jaG9yLnBvc2l0aW9uLnogPSAxMDtcblx0XHRhbmNob3IucG9zaXRpb24ueSA9IDE7XG5cblx0XHRhbmNob3Iuc2NhbGluZyA9IG5ldyBWZWN0b3IzKDIsIDIsIDQpO1xuXHRcdGFuY2hvci5yb3RhdGlvbiA9IG5ldyBWZWN0b3IzKCAwLCBNYXRoLlBJLCAwICk7XG5cbiAgICBZa3NpTmFwcHVsYS5vblBvaW50ZXJVcE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uKCl7XG5cdFx0XHRUZWVQdXV0KENvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgY29uc3QgTmFwcHVsYW5UZWtzdGkgPSBuZXcgR1VJLlRleHRCbG9jaygpO1xuICAgIE5hcHB1bGFuVGVrc3RpLnRleHQgPSBcIkxpc8Okw6QgcHVpdGFcIjtcbiAgICBOYXBwdWxhblRla3N0aS5jb2xvciA9IFwiV2hpdGVcIjtcbiAgICBOYXBwdWxhblRla3N0aS5mb250U2l6ZSA9IDQ4O1xuICAgIFlrc2lOYXBwdWxhLmNvbnRlbnQgPSBOYXBwdWxhblRla3N0aTtcblxufVxuLyoqKioqKioqKioqKiogRW5kIG9mIGluaXQoKSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKlN0YXJ0IG9mIGZ1bmN0aW9uIGFuaW1hdGUoKSoqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG5cdC8vIE9uY2UgdGhlIHNjZW5lIGlzIGxvYWRlZCwgcmVnaXN0ZXIgYSByZW5kZXIgbG9vcCB0byByZW5kZXIgaXRcbiAgICAgICAgZW5naW5lLnJ1blJlbmRlckxvb3AoZnVuY3Rpb24oKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NlbmUucmVuZGVyKCk7XG5cdFx0XHRcdH0pO1xuXG4gLyoqKioqKioqKioqKioqKlRoZSBjYW52YXMvd2luZG93IHJlc2l6ZSBldmVudCBoYW5kbGVyKioqKi9cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKClcbiB7XG5cdCBlbmdpbmUucmVzaXplKCk7XG5cdFx0IH0pO1xuXG59XG4vKioqKioqKioqKioqKioqRW5kIG9mIGZ1bmN0aW9uIGFuaW1hdGUoKSoqKiovXG5cblxuaW5pdCgpO1xuYW5pbWF0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9