var graph = new LGraph();

// Resize the canvas to fit the window.
htmlCanvas = document.getElementById('mycanvas');
htmlCanvas.width = window.innerWidth;
htmlCanvas.height = window.innerHeight;
var canvas = new LGraphCanvas("#mycanvas", graph);

// Add nodes.
var start_x = 200;
var start_y = 400;
var node_noise0 = LiteGraph.createNode("graphics/image");
node_noise0.properties.url = "./asset/rust/layer1/data/albedo/submaterial0/noise_map0.jpg";
node_noise0.title = "Noise";
node_noise0.pos = [start_x, start_y];
graph.add(node_noise0);

var node_scale0 = LiteGraph.createNode("basic/filter");
node_scale0.title = "Scaler";
node_scale0.pos = [start_x + 200, start_y + 50];
graph.add(node_scale0);

var node_gaussian0 = LiteGraph.createNode("basic/filter");
node_gaussian0.title = "Gaussian Filter";
node_gaussian0.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian0);

start_y += 200;
var node_noise1 = LiteGraph.createNode("graphics/image");
node_noise1.properties.url = "./asset/rust/layer1/data/albedo/submaterial0/noise_map1.jpg";
node_noise1.title = "Noise";
node_noise1.pos = [start_x, start_y];
graph.add(node_noise1);

var node_scale1 = LiteGraph.createNode("basic/filter");
node_scale1.title = "Scaler";
node_scale1.pos = [start_x + 200, start_y + 50];
graph.add(node_scale1);

var node_gaussian1 = LiteGraph.createNode("basic/filter");
node_gaussian1.title = "Gaussian Filter";
node_gaussian1.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian1);

var node_color0 = LiteGraph.createNode("graphics/image");
node_color0.properties.url = "./asset/rust/layer1/data/albedo/submaterial0/base_color.jpg";
node_color0.title = "Base Color";
node_color0.pos = [start_x, start_y + 200];
graph.add(node_color0);

var node_scale2 = LiteGraph.createNode("basic/filter");
node_scale2.title = "Scaler";
node_scale2.pos = [start_x + 200, start_y + 250];
graph.add(node_scale2);

var node_linear0 = LiteGraph.createNode("basic/linear");
node_linear0.addInput("input2", "image");
node_linear0.pos = [start_x + 600, start_y + 50];
graph.add(node_linear0);

//////////////////////////////////////////////////////////////////////////////////////////////////
start_y += 450;
var node_noise2 = LiteGraph.createNode("graphics/image");
node_noise2.properties.url = "./asset/rust/layer1/data/albedo/submaterial1/noise_map0.jpg";
node_noise2.title = "Noise";
node_noise2.pos = [start_x, start_y];
graph.add(node_noise2);

var node_scale3 = LiteGraph.createNode("basic/filter");
node_scale3.title = "Scaler";
node_scale3.pos = [start_x + 200, start_y + 50];
graph.add(node_scale3);

var node_gaussian2 = LiteGraph.createNode("basic/filter");
node_gaussian2.title = "Gaussian Filter";
node_gaussian2.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian2);

start_y += 200;
var node_noise3 = LiteGraph.createNode("graphics/image");
node_noise3.properties.url = "./asset/rust/layer1/data/albedo/submaterial1/noise_map1.jpg";
node_noise3.title = "Noise";
node_noise3.pos = [start_x, start_y];
graph.add(node_noise3);

var node_scale4 = LiteGraph.createNode("basic/filter");
node_scale4.title = "Scaler";
node_scale4.pos = [start_x + 200, start_y + 50];
graph.add(node_scale4);

var node_gaussian3 = LiteGraph.createNode("basic/filter");
node_gaussian3.title = "Gaussian Filter";
node_gaussian3.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian3);

start_y += 200;
var node_noise4 = LiteGraph.createNode("graphics/image");
node_noise4.properties.url = "./asset/rust/layer1/data/albedo/submaterial1/noise_map2.jpg";
node_noise4.title = "Noise";
node_noise4.pos = [start_x, start_y];
graph.add(node_noise4);

var node_scale5 = LiteGraph.createNode("basic/filter");
node_scale5.title = "Scaler";
node_scale5.pos = [start_x + 200, start_y + 50];
graph.add(node_scale5);

var node_gaussian4 = LiteGraph.createNode("basic/filter");
node_gaussian4.title = "Gaussian Filter";
node_gaussian4.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian4);

var node_color1 = LiteGraph.createNode("graphics/image");
node_color1.properties.url = "./asset/rust/layer1/data/albedo/submaterial1/base_color.jpg";
node_color1.title = "Base Color";
node_color1.pos = [start_x, start_y + 200];
graph.add(node_color1);

var node_scale6 = LiteGraph.createNode("basic/filter");
node_scale6.title = "Scaler";
node_scale6.pos = [start_x + 200, start_y + 250];
graph.add(node_scale6);

var node_linear1 = LiteGraph.createNode("basic/linear");
node_linear1.addInput("input2", "image");
node_linear1.addInput("input3", "image");
node_linear1.pos = [start_x + 600, start_y - 70];
graph.add(node_linear1);

var node_submaterial0 = LiteGraph.createNode("graphics/image");
node_submaterial0.properties.url = "./asset/rust/layer1/mask.jpg";
node_submaterial0.title = "Mask";
node_submaterial0.pos = [900, 30];
graph.add(node_submaterial0);

var node_gaussian5 = LiteGraph.createNode("basic/filter");
node_gaussian5.title = "Gaussian Filter";
node_gaussian5.pos = [1100, 450];
graph.add(node_gaussian5);

start_x += 1200;
start_y -= 400;
var node_blend0 = LiteGraph.createNode("basic/blend");
node_blend0.pos = [start_x, start_y];
graph.add(node_blend0);

//////////////////////////////////////////////////////////////////////////////////////////////////

start_x = 1400;
start_y = 1200;
var node_noise5 = LiteGraph.createNode("graphics/image");
node_noise5.properties.url = "./asset/rust/data/albedo/submaterial0/noise_map0.jpg";
node_noise5.title = "Noise";
node_noise5.pos = [start_x, start_y];
graph.add(node_noise5);

var node_scale7 = LiteGraph.createNode("basic/filter");
node_scale7.title = "Scaler";
node_scale7.pos = [start_x + 200, start_y + 50];
graph.add(node_scale7);

var node_gaussian6 = LiteGraph.createNode("basic/filter");
node_gaussian6.title = "Gaussian Filter";
node_gaussian6.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian6);

start_y += 200;
var node_noise6 = LiteGraph.createNode("graphics/image");
node_noise6.properties.url = "./asset/rust/data/albedo/submaterial0/noise_map1.jpg";
node_noise6.title = "Noise";
node_noise6.pos = [start_x, start_y];
graph.add(node_noise6);

var node_scale8 = LiteGraph.createNode("basic/filter");
node_scale8.title = "Scaler";
node_scale8.pos = [start_x + 200, start_y + 50];
graph.add(node_scale8);

var node_gaussian7 = LiteGraph.createNode("basic/filter");
node_gaussian7.title = "Gaussian Filter";
node_gaussian7.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian7);

start_y += 200;
var node_noise7 = LiteGraph.createNode("graphics/image");
node_noise7.properties.url = "./asset/rust/data/albedo/submaterial0/noise_map2.jpg";
node_noise7.title = "Noise";
node_noise7.pos = [start_x, start_y];
graph.add(node_noise7);

var node_scale9 = LiteGraph.createNode("basic/filter");
node_scale9.title = "Scaler";
node_scale9.pos = [start_x + 200, start_y + 50];
graph.add(node_scale9);

var node_gaussian8 = LiteGraph.createNode("basic/filter");
node_gaussian8.title = "Gaussian Filter";
node_gaussian8.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian8);

var node_color2 = LiteGraph.createNode("graphics/image");
node_color2.properties.url = "./asset/rust/data/albedo/submaterial0/base_color.jpg";
node_color2.title = "Base Color";
node_color2.pos = [start_x, start_y + 200];
graph.add(node_color2);

var node_scale10 = LiteGraph.createNode("basic/filter");
node_scale10.title = "Scaler";
node_scale10.pos = [start_x + 200, start_y + 250];
graph.add(node_scale10);

var node_linear2 = LiteGraph.createNode("basic/linear");
node_linear2.addInput("input2", "image");
node_linear2.addInput("input3", "image");
node_linear2.pos = [start_x + 600, start_y - 70];
graph.add(node_linear2);

var node_submaterial1 = LiteGraph.createNode("graphics/image");
node_submaterial1.properties.url = "./asset/rust/mask.jpg";
node_submaterial1.title = "Mask";
node_submaterial1.pos = [2100, 30];
graph.add(node_submaterial1);

var node_gaussian9 = LiteGraph.createNode("basic/filter");
node_gaussian9.title = "Gaussian Filter";
node_gaussian9.pos = [2300, 450];
graph.add(node_gaussian9);

start_x += 1200;
start_y -= 400;
var node_blend1 = LiteGraph.createNode("basic/blend");
node_blend1.pos = [start_x, start_y];
graph.add(node_blend1);

var albedo = LiteGraph.createNode("graphics/image");
albedo.addInput("", "image");
albedo.properties.url = "./asset/rust/albedo.jpg";
albedo.title = "Albedo";
albedo.pos = [start_x + 200, start_y];
graph.add(albedo);

//////////////////////////////////////////////////////////////////////////////////////////////////
// Normal
//////////////////////////////////////////////////////////////////////////////////////////////////

start_x = 200;
start_y = 2200;
var node_noise8 = LiteGraph.createNode("graphics/image");
node_noise8.properties.url = "./asset/rust/layer1/data/normal/submaterial0/noise_map0.jpg";
node_noise8.title = "Noise";
node_noise8.pos = [start_x, start_y];
graph.add(node_noise8);

var node_scale11 = LiteGraph.createNode("basic/filter");
node_scale11.title = "Scaler";
node_scale11.pos = [start_x + 200, start_y + 50];
graph.add(node_scale11);

var node_gaussian10 = LiteGraph.createNode("basic/filter");
node_gaussian10.title = "Gaussian Filter";
node_gaussian10.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian10);

var node_color3 = LiteGraph.createNode("graphics/image");
node_color3.properties.url = "./asset/rust/layer1/data/normal/submaterial0/base_color.jpg";
node_color3.title = "Base Color";
node_color3.pos = [start_x, start_y + 200];
graph.add(node_color3);

var node_scale12 = LiteGraph.createNode("basic/filter");
node_scale12.title = "Scaler";
node_scale12.pos = [start_x + 200, start_y + 250];
graph.add(node_scale12);

var node_linear3 = LiteGraph.createNode("basic/linear");
node_linear3.pos = [start_x + 600, start_y + 150];
graph.add(node_linear3);

//////////////////////////////////////////////////////////////////////////////////////////////////

start_y += 450;
var node_noise9 = LiteGraph.createNode("graphics/image");
node_noise9.properties.url = "./asset/rust/layer1/data/normal/submaterial1/noise_map0.jpg";
node_noise9.title = "Noise";
node_noise9.pos = [start_x, start_y];
graph.add(node_noise9);

var node_scale13 = LiteGraph.createNode("basic/filter");
node_scale13.title = "Scaler";
node_scale13.pos = [start_x + 200, start_y + 50];
graph.add(node_scale13);

var node_gaussian11 = LiteGraph.createNode("basic/filter");
node_gaussian11.title = "Gaussian Filter";
node_gaussian11.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian11);

start_y += 200;
var node_noise10 = LiteGraph.createNode("graphics/image");
node_noise10.properties.url = "./asset/rust/layer1/data/normal/submaterial1/noise_map1.jpg";
node_noise10.title = "Noise";
node_noise10.pos = [start_x, start_y];
graph.add(node_noise10);

var node_scale14 = LiteGraph.createNode("basic/filter");
node_scale14.title = "Scaler";
node_scale14.pos = [start_x + 200, start_y + 50];
graph.add(node_scale14);

var node_gaussian12 = LiteGraph.createNode("basic/filter");
node_gaussian12.title = "Gaussian Filter";
node_gaussian12.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian12);

var node_color4 = LiteGraph.createNode("graphics/image");
node_color4.properties.url = "./asset/rust/layer1/data/normal/submaterial1/base_color.jpg";
node_color4.title = "Base Color";
node_color4.pos = [start_x, start_y + 200];
graph.add(node_color4);

var node_scale15 = LiteGraph.createNode("basic/filter");
node_scale15.title = "Scaler";
node_scale15.pos = [start_x + 200, start_y + 250];
graph.add(node_scale15);

var node_linear4 = LiteGraph.createNode("basic/linear");
node_linear4.addInput("input2", "image");
node_linear4.pos = [start_x + 600, start_y + 50];
graph.add(node_linear4);

var node_gaussian13 = LiteGraph.createNode("basic/filter");
node_gaussian13.title = "Gaussian Filter";
node_gaussian13.pos = [1100, 2150];
graph.add(node_gaussian13);

start_x += 1200;
start_y -= 150;
var node_blend2 = LiteGraph.createNode("basic/blend");
node_blend2.pos = [start_x, start_y];
graph.add(node_blend2);

start_x = 1400;
start_y = 2850;
var node_noise11 = LiteGraph.createNode("graphics/image");
node_noise11.properties.url = "./asset/rust/data/normal/submaterial0/noise_map0.jpg";
node_noise11.title = "Noise";
node_noise11.pos = [start_x, start_y];
graph.add(node_noise11);

var node_scale16 = LiteGraph.createNode("basic/filter");
node_scale16.title = "Scaler";
node_scale16.pos = [start_x + 200, start_y + 50];
graph.add(node_scale16);

var node_gaussian14 = LiteGraph.createNode("basic/filter");
node_gaussian14.title = "Gaussian Filter";
node_gaussian14.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian14);

start_y += 200;
var node_noise12 = LiteGraph.createNode("graphics/image");
node_noise12.properties.url = "./asset/rust/data/normal/submaterial0/noise_map1.jpg";
node_noise12.title = "Noise";
node_noise12.pos = [start_x, start_y];
graph.add(node_noise12);

var node_scale17 = LiteGraph.createNode("basic/filter");
node_scale17.title = "Scaler";
node_scale17.pos = [start_x + 200, start_y + 50];
graph.add(node_scale17);

var node_gaussian15 = LiteGraph.createNode("basic/filter");
node_gaussian15.title = "Gaussian Filter";
node_gaussian15.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian15);

start_y += 200;
var node_noise13 = LiteGraph.createNode("graphics/image");
node_noise13.properties.url = "./asset/rust/data/normal/submaterial0/noise_map2.jpg";
node_noise13.title = "Noise";
node_noise13.pos = [start_x, start_y];
graph.add(node_noise13);

var node_scale18 = LiteGraph.createNode("basic/filter");
node_scale18.title = "Scaler";
node_scale18.pos = [start_x + 200, start_y + 50];
graph.add(node_scale18);

var node_gaussian16 = LiteGraph.createNode("basic/filter");
node_gaussian16.title = "Gaussian Filter";
node_gaussian16.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian16);

var node_color5 = LiteGraph.createNode("graphics/image");
node_color5.properties.url = "./asset/rust/data/normal/submaterial0/base_color.jpg";
node_color5.title = "Base Color";
node_color5.pos = [start_x, start_y + 200];
graph.add(node_color5);

var node_scale19 = LiteGraph.createNode("basic/filter");
node_scale19.title = "Scaler";
node_scale19.pos = [start_x + 200, start_y + 250];
graph.add(node_scale19);

var node_linear5 = LiteGraph.createNode("basic/linear");
node_linear5.addInput("input2", "image");
node_linear5.addInput("input3", "image");
node_linear5.pos = [start_x + 600, start_y - 70];
graph.add(node_linear5);

var node_gaussian17 = LiteGraph.createNode("basic/filter");
node_gaussian17.title = "Gaussian Filter";
node_gaussian17.pos = [2300, 2150];
graph.add(node_gaussian17);

start_x += 1200;
start_y -= 400;
var node_blend3 = LiteGraph.createNode("basic/blend");
node_blend3.pos = [start_x, start_y];
graph.add(node_blend3);

var h2n = LiteGraph.createNode("basic/filter");
h2n.title = "Convert2Normal";
h2n.pos = [start_x + 200, start_y - 200];
graph.add(h2n);

var normal = LiteGraph.createNode("graphics/image");
normal.addInput("", "image");
normal.properties.url = "./asset/rust/normal.jpg";
normal.title = "Normal";
normal.pos = [start_x + 200, start_y];
graph.add(normal);

//////////////////////////////////////////////////////////////////////////////////////////////////
// Roughness
//////////////////////////////////////////////////////////////////////////////////////////////////

start_x = 200;
start_y = 3800;
var node_noise14 = LiteGraph.createNode("graphics/image");
node_noise14.properties.url = "./asset/rust/layer1/data/roughness/submaterial0/noise_map0.jpg";
node_noise14.title = "Noise";
node_noise14.pos = [start_x, start_y];
graph.add(node_noise14);

var node_scale20 = LiteGraph.createNode("basic/filter");
node_scale20.title = "Scaler";
node_scale20.pos = [start_x + 200, start_y + 50];
graph.add(node_scale20);

var node_gaussian18 = LiteGraph.createNode("basic/filter");
node_gaussian18.title = "Gaussian Filter";
node_gaussian18.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian18);

var node_color6 = LiteGraph.createNode("graphics/image");
node_color6.properties.url = "./asset/rust/layer1/data/roughness/submaterial0/base_color.jpg";
node_color6.title = "Base Color";
node_color6.pos = [start_x, start_y + 200];
graph.add(node_color6);

var node_scale21 = LiteGraph.createNode("basic/filter");
node_scale21.title = "Scaler";
node_scale21.pos = [start_x + 200, start_y + 250];
graph.add(node_scale21);

var node_linear6 = LiteGraph.createNode("basic/linear");
node_linear6.pos = [start_x + 600, start_y + 150];
graph.add(node_linear6);

//////////////////////////////////////////////////////////////////////////////////////////////////

start_y += 450;
var node_noise15 = LiteGraph.createNode("graphics/image");
node_noise15.properties.url = "./asset/rust/layer1/data/roughness/submaterial1/noise_map0.jpg";
node_noise15.title = "Noise";
node_noise15.pos = [start_x, start_y];
graph.add(node_noise15);

var node_scale22 = LiteGraph.createNode("basic/filter");
node_scale22.title = "Scaler";
node_scale22.pos = [start_x + 200, start_y + 50];
graph.add(node_scale22);

var node_gaussian19 = LiteGraph.createNode("basic/filter");
node_gaussian19.title = "Gaussian Filter";
node_gaussian19.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian19);

start_y += 200;
var node_noise16 = LiteGraph.createNode("graphics/image");
node_noise16.properties.url = "./asset/rust/layer1/data/roughness/submaterial1/noise_map1.jpg";
node_noise16.title = "Noise";
node_noise16.pos = [start_x, start_y];
graph.add(node_noise16);

var node_scale23 = LiteGraph.createNode("basic/filter");
node_scale23.title = "Scaler";
node_scale23.pos = [start_x + 200, start_y + 50];
graph.add(node_scale23);

var node_gaussian20 = LiteGraph.createNode("basic/filter");
node_gaussian20.title = "Gaussian Filter";
node_gaussian20.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian20);

start_y += 200;
var node_noise17 = LiteGraph.createNode("graphics/image");
node_noise17.properties.url = "./asset/rust/layer1/data/roughness/submaterial1/noise_map2.jpg";
node_noise17.title = "Noise";
node_noise17.pos = [start_x, start_y];
graph.add(node_noise17);

var node_scale24 = LiteGraph.createNode("basic/filter");
node_scale24.title = "Scaler";
node_scale24.pos = [start_x + 200, start_y + 50];
graph.add(node_scale24);

var node_gaussian21 = LiteGraph.createNode("basic/filter");
node_gaussian21.title = "Gaussian Filter";
node_gaussian21.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian21);

var node_color7 = LiteGraph.createNode("graphics/image");
node_color7.properties.url = "./asset/rust/layer1/data/roughness/submaterial1/base_color.jpg";
node_color7.title = "Base Color";
node_color7.pos = [start_x, start_y + 200];
graph.add(node_color7);

var node_scale25 = LiteGraph.createNode("basic/filter");
node_scale25.title = "Scaler";
node_scale25.pos = [start_x + 200, start_y + 250];
graph.add(node_scale25);

var node_linear7 = LiteGraph.createNode("basic/linear");
node_linear7.addInput("input2", "image");
node_linear7.addInput("input3", "image");
node_linear7.pos = [start_x + 600, start_y - 70];
graph.add(node_linear7);

var node_gaussian22 = LiteGraph.createNode("basic/filter");
node_gaussian22.title = "Gaussian Filter";
node_gaussian22.pos = [1100, 3750];
graph.add(node_gaussian22);

start_x += 1200;
start_y -= 150;
var node_blend4 = LiteGraph.createNode("basic/blend");
node_blend4.pos = [start_x, start_y];
graph.add(node_blend4);

//////////////////////////////////////////////////////////////////////////////////////////////////

start_x = 1400;
start_y = 4700;
var node_noise18 = LiteGraph.createNode("graphics/image");
node_noise18.properties.url = "./asset/rust/data/roughness/submaterial0/noise_map0.jpg";
node_noise18.title = "Noise";
node_noise18.pos = [start_x, start_y];
graph.add(node_noise18);

var node_scale26 = LiteGraph.createNode("basic/filter");
node_scale26.title = "Scaler";
node_scale26.pos = [start_x + 200, start_y + 50];
graph.add(node_scale26);

var node_gaussian23 = LiteGraph.createNode("basic/filter");
node_gaussian23.title = "Gaussian Filter";
node_gaussian23.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian23);

start_y += 200;
var node_noise19 = LiteGraph.createNode("graphics/image");
node_noise19.properties.url = "./asset/rust/data/roughness/submaterial0/noise_map1.jpg";
node_noise19.title = "Noise";
node_noise19.pos = [start_x, start_y];
graph.add(node_noise19);

var node_scale27 = LiteGraph.createNode("basic/filter");
node_scale27.title = "Scaler";
node_scale27.pos = [start_x + 200, start_y + 50];
graph.add(node_scale27);

var node_gaussian24 = LiteGraph.createNode("basic/filter");
node_gaussian24.title = "Gaussian Filter";
node_gaussian24.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian24);

start_y += 200;
var node_noise20 = LiteGraph.createNode("graphics/image");
node_noise20.properties.url = "./asset/rust/data/roughness/submaterial0/noise_map2.jpg";
node_noise20.title = "Noise";
node_noise20.pos = [start_x, start_y];
graph.add(node_noise20);

var node_scale28 = LiteGraph.createNode("basic/filter");
node_scale28.title = "Scaler";
node_scale28.pos = [start_x + 200, start_y + 50];
graph.add(node_scale28);

var node_gaussian25 = LiteGraph.createNode("basic/filter");
node_gaussian25.title = "Gaussian Filter";
node_gaussian25.pos = [start_x + 400, start_y + 50];
graph.add(node_gaussian25);

var node_color8 = LiteGraph.createNode("graphics/image");
node_color8.properties.url = "./asset/rust/data/roughness/submaterial0/base_color.jpg";
node_color8.title = "Base Color";
node_color8.pos = [start_x, start_y + 200];
graph.add(node_color8);

var node_scale29 = LiteGraph.createNode("basic/filter");
node_scale29.title = "Scaler";
node_scale29.pos = [start_x + 200, start_y + 250];
graph.add(node_scale29);

var node_linear8 = LiteGraph.createNode("basic/linear");
node_linear8.addInput("input2", "image");
node_linear8.addInput("input3", "image");
node_linear8.pos = [start_x + 600, start_y - 70];
graph.add(node_linear8);

var node_gaussian26 = LiteGraph.createNode("basic/filter");
node_gaussian26.title = "Gaussian Filter";
node_gaussian26.pos = [2300, 3750];
graph.add(node_gaussian26);

start_x += 1200;
start_y -= 400;
var node_blend5 = LiteGraph.createNode("basic/blend");
node_blend5.pos = [start_x, start_y];
graph.add(node_blend5);

var roughness = LiteGraph.createNode("graphics/image");
roughness.addInput("", "image");
roughness.properties.url = "./asset/rust/roughness.jpg";
roughness.title = "Roughness";
roughness.pos = [start_x + 200, start_y];
graph.add(roughness);

start_x += 600;
start_y = 2700;
var render = LiteGraph.createNode("basic/render");
render.properties.url = "./asset/rust/render.jpg";
render.pos = [start_x, start_y];
graph.add(render);

// Connect nodes.
node_noise0.connect(0, node_scale0, 0);
node_scale0.connect(0, node_gaussian0, 0);
node_gaussian0.connect(0, node_linear0, 0);
node_noise1.connect(0, node_scale1, 0);
node_scale1.connect(0, node_gaussian1, 0);
node_gaussian1.connect(0, node_linear0, 1);
node_color0.connect(0, node_scale2, 0);
node_scale2.connect(0, node_linear0, 2);
node_linear0.connect(0, node_blend0, 1);
node_noise2.connect(0, node_scale3, 0);
node_scale3.connect(0, node_gaussian2, 0);
node_gaussian2.connect(0, node_linear1, 0);
node_noise3.connect(0, node_scale4, 0);
node_scale4.connect(0, node_gaussian3, 0);
node_gaussian3.connect(0, node_linear1, 1);
node_noise4.connect(0, node_scale5, 0);
node_scale5.connect(0, node_gaussian4, 0);
node_gaussian4.connect(0, node_linear1, 2);
node_color1.connect(0, node_scale6, 0);
node_scale6.connect(0, node_linear1, 3);
node_linear1.connect(0, node_blend0, 2);
node_noise5.connect(0, node_scale7, 0);
node_scale7.connect(0, node_gaussian6, 0);
node_gaussian6.connect(0, node_linear2, 0);
node_noise6.connect(0, node_scale8, 0);
node_scale8.connect(0, node_gaussian7, 0);
node_gaussian7.connect(0, node_linear2, 1);
node_noise7.connect(0, node_scale9, 0);
node_scale9.connect(0, node_gaussian8, 0);
node_gaussian8.connect(0, node_linear2, 2);
node_color2.connect(0, node_scale10, 0);
node_scale10.connect(0, node_linear2, 3);
node_linear2.connect(0, node_blend1, 2);

node_noise8.connect(0, node_scale11, 0);
node_scale11.connect(0, node_gaussian10, 0);
node_gaussian10.connect(0, node_linear3, 0);
node_color3.connect(0, node_scale12, 0);
node_scale12.connect(0, node_linear3, 1);
node_linear3.connect(0, node_blend2, 1);
node_noise9.connect(0, node_scale13, 0);
node_scale13.connect(0, node_gaussian11, 0);
node_gaussian11.connect(0, node_linear4, 0);
node_noise10.connect(0, node_scale14, 0);
node_scale14.connect(0, node_gaussian12, 0);
node_gaussian12.connect(0, node_linear4, 1);
node_color4.connect(0, node_scale15, 0);
node_scale15.connect(0, node_linear4, 2);
node_linear4.connect(0, node_blend2, 2);
node_noise11.connect(0, node_scale16, 0);
node_scale16.connect(0, node_gaussian14, 0);
node_gaussian14.connect(0, node_linear5, 0);
node_noise12.connect(0, node_scale17, 0);
node_scale17.connect(0, node_gaussian15, 0);
node_gaussian15.connect(0, node_linear5, 1);
node_noise13.connect(0, node_scale18, 0);
node_scale18.connect(0, node_gaussian16, 0);
node_gaussian16.connect(0, node_linear5, 2);
node_color5.connect(0, node_scale19, 0);
node_scale19.connect(0, node_linear5, 3);
node_linear5.connect(0, node_blend3, 2);

node_noise14.connect(0, node_scale20, 0);
node_scale20.connect(0, node_gaussian18, 0);
node_gaussian18.connect(0, node_linear6, 0);
node_color6.connect(0, node_scale21, 0);
node_scale21.connect(0, node_linear6, 1);
node_linear6.connect(0, node_blend4, 1);
node_noise15.connect(0, node_scale22, 0);
node_scale22.connect(0, node_gaussian19, 0);
node_gaussian19.connect(0, node_linear7, 0);
node_noise16.connect(0, node_scale23, 0);
node_scale23.connect(0, node_gaussian20, 0);
node_gaussian20.connect(0, node_linear7, 1);
node_noise17.connect(0, node_scale24, 0);
node_scale24.connect(0, node_gaussian21, 0);
node_gaussian21.connect(0, node_linear7, 2);
node_color7.connect(0, node_scale25, 0);
node_scale25.connect(0, node_linear7, 3);
node_linear7.connect(0, node_blend4, 2);
node_noise18.connect(0, node_scale26, 0);
node_scale26.connect(0, node_gaussian23, 0);
node_gaussian23.connect(0, node_linear8, 0);
node_noise19.connect(0, node_scale27, 0);
node_scale27.connect(0, node_gaussian24, 0);
node_gaussian24.connect(0, node_linear8, 1);
node_noise20.connect(0, node_scale28, 0);
node_scale28.connect(0, node_gaussian25, 0);
node_gaussian25.connect(0, node_linear8, 2);
node_color8.connect(0, node_scale29, 0);
node_scale29.connect(0, node_linear8, 3);
node_linear8.connect(0, node_blend5, 2);

node_submaterial0.connect(0, node_gaussian5, 0);
node_gaussian5.connect(0, node_blend0, 0);
node_blend0.connect(0, node_blend1, 1);
node_submaterial1.connect(0, node_gaussian9, 0);
node_gaussian9.connect(0, node_blend1, 0);
node_blend1.connect(0, albedo, 0);
node_submaterial0.connect(0, node_gaussian13, 0);
node_gaussian13.connect(0, node_blend2, 0);
node_blend2.connect(0, node_blend3, 1);
node_submaterial1.connect(0, node_gaussian17, 0);
node_gaussian17.connect(0, node_blend3, 0);
node_blend3.connect(0, h2n, 0);
h2n.connect(0, normal, 0);
node_submaterial0.connect(0, node_gaussian22, 0);
node_gaussian22.connect(0, node_blend4, 0);
node_blend4.connect(0, node_blend5, 1);
node_submaterial1.connect(0, node_gaussian26, 0);
node_gaussian26.connect(0, node_blend5, 0);
node_blend5.connect(0, roughness, 0);

albedo.connect(0, render, 0);
normal.connect(0, render, 1);
roughness.connect(0, render, 2);

// Add groups
var group_mask = new LiteGraph.LGraphGroup();
group_mask.title = "Pattern Generator";
group_mask._bounding.set(new Float32Array([800, -50, 1600, 250]));
graph.add(group_mask);

//////////////////////////////////////////////////////////////////////////
var group_albedo = new LiteGraph.LGraphGroup();
group_albedo.title = "Albedo";
group_albedo._bounding.set(new Float32Array([150, 220, 2850, 1800]));
group_albedo.fixed = true;
graph.add(group_albedo);

var group_albedo0 = new LiteGraph.LGraphGroup();
group_albedo0.title = "sub-material0";
group_albedo0._bounding.set(new Float32Array([180, 320, 800, 640]));
graph.add(group_albedo0);

var group_albedo1 = new LiteGraph.LGraphGroup();
group_albedo1.title = "sub-material1";
group_albedo1._bounding.set(new Float32Array([180, 980, 800, 840]));
graph.add(group_albedo1);

var group_albedo2 = new LiteGraph.LGraphGroup();
group_albedo2.title = "sub-material2";
group_albedo2._bounding.set(new Float32Array([1360, 1130, 800, 840]));
graph.add(group_albedo2);

////////////////////////////////////////////////////////////////////////////
var group_normal = new LiteGraph.LGraphGroup();
group_normal.title = "Normal";
group_normal._bounding.set(new Float32Array([150, 2070, 2850, 1550]));
group_normal.fixed = true;
graph.add(group_normal);

var group_normal0 = new LiteGraph.LGraphGroup();
group_normal0.title = "sub-material0";
group_normal0._bounding.set(new Float32Array([180, 2120, 800, 440]));
graph.add(group_normal0);

var group_normal1 = new LiteGraph.LGraphGroup();
group_normal1.title = "sub-material1";
group_normal1._bounding.set(new Float32Array([180, 2580, 800, 640]));
graph.add(group_normal1);

var group_normal2 = new LiteGraph.LGraphGroup();
group_normal2.title = "sub-material2";
group_normal2._bounding.set(new Float32Array([1360, 2780, 800, 830]));
graph.add(group_normal2);

////////////////////////////////////////////////////////////////////////////

var group_roughness = new LiteGraph.LGraphGroup();
group_roughness.title = "Roughness";
group_roughness._bounding.set(new Float32Array([150, 3650, 2850, 1850]));
group_roughness.fixed = true;
graph.add(group_roughness);

var group_roughness0 = new LiteGraph.LGraphGroup();
group_roughness0.title = "sub-material0";
group_roughness0._bounding.set(new Float32Array([180, 3720, 800, 440]));
graph.add(group_roughness0);

var group_roughness1 = new LiteGraph.LGraphGroup();
group_roughness1.title = "sub-material1";
group_roughness1._bounding.set(new Float32Array([180, 4180, 800, 840]));
graph.add(group_roughness1);

var group_roughness2 = new LiteGraph.LGraphGroup();
group_roughness2.title = "sub-material2";
group_roughness2._bounding.set(new Float32Array([1360, 4630, 800, 830]));
graph.add(group_roughness2);

graph.start()

canvas.setZoom(0.15);
canvas.ds.offset[1] = 100;