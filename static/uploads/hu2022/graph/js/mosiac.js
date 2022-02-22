var graph = new LGraph();

// Resize the canvas to fit the window.
htmlCanvas = document.getElementById('mycanvas');
htmlCanvas.width = window.innerWidth;
htmlCanvas.height = window.innerHeight;
var canvas = new LGraphCanvas("#mycanvas", graph);

function noise_branch(url, start_x, start_y)
{
	//sub-material0/layer1/submaterial0
	var node_noise = LiteGraph.createNode("graphics/image");
	node_noise.properties.url = url 
	node_noise.title = "Noise";
	node_noise.pos = [start_x, start_y];
	graph.add(node_noise);
	
	var node_scale = LiteGraph.createNode("basic/filter");
	node_scale.title = "Scaler";
	node_scale.pos = [start_x + 200, start_y + 50];
	graph.add(node_scale);

	var node_gaussian = LiteGraph.createNode("basic/filter");
	node_gaussian.title = "Gaussian Filter";
	node_gaussian.pos = [start_x + 400, start_y + 50];
	graph.add(node_gaussian);
	
	node_noise.connect(0, node_scale, 0);
	node_scale.connect(0, node_gaussian, 0);
	
	// return output node
	return node_gaussian;
	
}

function color_branch(url, start_x, start_y)
{
	var node_color = LiteGraph.createNode("graphics/image");
	node_color.properties.url = url;
	node_color.title = "Base Color";
	node_color.pos = [start_x, start_y];
	graph.add(node_color);

	var node_scale = LiteGraph.createNode("basic/filter");
	node_scale.title = "Scaler";
	node_scale.pos = [start_x + 200, start_y + 50];
	graph.add(node_scale);
	
	node_color.connect(0, node_scale, 0);
	
	// return output node
	return node_scale;
}

function linear_combine(noise_inputs, color_input, start_x, start_y)
{
	var node_linear = LiteGraph.createNode("basic/linear");
	// add more inputs 
	if (noise_inputs.length > 1)
	{
		for (var i = 0; i < noise_inputs.length - 1; i++) {
			node_linear.addInput("input" + (i + 2).toString(), "image");
		}
	}	
	node_linear.pos = [start_x, start_y];
	graph.add(node_linear);
	
	// build connection
	for (var i = 0; i < noise_inputs.length; i++) {
		noise_inputs[i].connect(0, node_linear, i);
	}		 
	color_input.connect(0, node_linear, noise_inputs.length);
	
	// return output node
	return node_linear;
}


function set_group(title, region, fixed=false){
	var group = new LiteGraph.LGraphGroup();
	group.title = title;
	group._bounding.set(new Float32Array(region));
	group.fixed = fixed;
	graph.add(group);
}


function albedo_graph(start_x, start_y){
	var start_x_init = start_x;
	var start_y_init = start_y;
	
	start_x += 30;
	
	var mask_filter0 = LiteGraph.createNode("basic/filter");
	mask_filter0.title = "Gaussian Filter";
	mask_filter0.pos = [start_x + 200, start_y + 50];
	graph.add(mask_filter0);
	node_submaterial0.connect(0, mask_filter0, 0);
	
	var mask_filter1 = LiteGraph.createNode("basic/filter");
	mask_filter1.title = "Gaussian Filter";
	mask_filter1.pos = [start_x + 400, start_y + 50];
	graph.add(mask_filter1);
	node_submaterial1.connect(0, mask_filter1, 0);
	
	var mask_filter2 = LiteGraph.createNode("basic/filter");
	mask_filter2.title = "Gaussian Filter";
	mask_filter2.pos = [start_x + 600, start_y + 50];
	graph.add(mask_filter2);
	node_submaterial2.connect(0, mask_filter2, 0);
	
	var mask_filter3 = LiteGraph.createNode("basic/filter");
	mask_filter3.title = "Gaussian Filter";
	mask_filter3.pos = [start_x + 800, start_y + 50];
	graph.add(mask_filter3);
	node_submaterial3.connect(0, mask_filter3, 0);
	
	var mask_filter = LiteGraph.createNode("basic/filter");
	mask_filter.title = "Gaussian Filter";
	mask_filter.pos = [start_x + 1000, start_y + 50];
	graph.add(mask_filter);
	node_mask.connect(0, mask_filter, 0);
	
	start_y += 200;
	
	noise_l1_00 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial0/noise_map0.jpg", start_x, start_y);
	noise_l1_01 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial0/noise_map1.jpg", start_x, start_y + 200);
	noise_l1_02 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial0/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l1_0 = color_branch("./asset/mosaic/layer1/data/albedo/submaterial0/base_color.jpg", start_x, start_y + 600);
	mat_l1_0 = linear_combine([noise_l1_00, noise_l1_01, noise_l1_02], basecolor_l1_0, start_x + 600, start_y + 350);
	region0 = [start_x - 20, start_y - 60, 800, 820];
	
	
	start_y += 850;
	noise_l1_10 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial1/noise_map0.jpg", start_x, start_y);
	noise_l1_11 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial1/noise_map1.jpg", start_x, start_y + 200);
	noise_l1_12 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial1/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l1_1 = color_branch("./asset/mosaic/layer1/data/albedo/submaterial1/base_color.jpg", start_x, start_y + 600);
	mat_l1_1 = linear_combine([noise_l1_10, noise_l1_11, noise_l1_12], basecolor_l1_1, start_x + 600, start_y + 350);
	region1 = [start_x - 20, start_y - 60, 800, 820];
	
	
	start_x += 850;
	start_y -= 850;
	noise_l1_20 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial2/noise_map0.jpg", start_x, start_y);
	noise_l1_21 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial2/noise_map1.jpg", start_x, start_y + 200);
	noise_l1_22 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial2/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l1_2 = color_branch("./asset/mosaic/layer1/data/albedo/submaterial2/base_color.jpg", start_x, start_y + 600);
	mat_l1_2 = linear_combine([noise_l1_20, noise_l1_21, noise_l1_22], basecolor_l1_2, start_x + 600, start_y + 350);
	region2 = [start_x - 20, start_y - 60, 800, 820];
	
	
	start_y += 850;
	noise_l1_30 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial3/noise_map0.jpg", start_x, start_y);
	noise_l1_31 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial3/noise_map1.jpg", start_x, start_y + 200);
	noise_l1_32 = noise_branch("./asset/mosaic/layer1/data/albedo/submaterial3/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l1_3 = color_branch("./asset/mosaic/layer1/data/albedo/submaterial3/base_color.jpg", start_x, start_y + 600);
	mat_l1_3 = linear_combine([noise_l1_30, noise_l1_31, noise_l1_32], basecolor_l1_3, start_x + 600, start_y + 350);
	region3 = [start_x - 20, start_y - 60, 800, 820];
	
	
	start_y += 850;
	noise_l0_0 = noise_branch("./asset/mosaic/data/albedo/submaterial0/noise_map0.jpg", start_x, start_y);
	noise_l0_1 = noise_branch("./asset/mosaic/data/albedo/submaterial0/noise_map1.jpg", start_x, start_y + 200);
	noise_l0_2 = noise_branch("./asset/mosaic/data/albedo/submaterial0/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l0 = color_branch("./asset/mosaic/data/albedo/submaterial0/base_color.jpg", start_x, start_y + 600);
	mat_l0 = linear_combine([noise_l0_0, noise_l0_1, noise_l0_2], basecolor_l0, start_x + 600, start_y + 350);
	region4 = [start_x - 20, start_y - 60, 800, 820];
	
	
	start_x += 1200;
	start_y -= 850;
	
	var node_blend0 = LiteGraph.createNode("basic/filter");
	node_blend0.removeInput(0);
	node_blend0.title = "Blend";
	node_blend0.addInput("mask0", "image");
	node_blend0.addInput("mask1", "image");
	node_blend0.addInput("mask2", "image");
	node_blend0.addInput("mask3", "image");
	node_blend0.addInput("input0", "image");
	node_blend0.addInput("input1", "image");
	node_blend0.addInput("input2", "image");
	node_blend0.addInput("input3", "image");
	node_blend0.pos = [start_x, start_y];
	graph.add(node_blend0);
	mask_filter0.connect(0, node_blend0, 0);
	mask_filter1.connect(0, node_blend0, 1);
	mask_filter2.connect(0, node_blend0, 2);
	mask_filter3.connect(0, node_blend0, 3);
	mat_l1_0.connect(0, node_blend0, 4);
	mat_l1_1.connect(0, node_blend0, 5);
	mat_l1_2.connect(0, node_blend0, 6);
	mat_l1_3.connect(0, node_blend0, 7);
	
	start_y += 800;
	var node_blend = LiteGraph.createNode("basic/blend");
	node_blend.title = "Blend";
	node_blend.pos = [start_x, start_y];
	graph.add(node_blend);	
	mask_filter.connect(0, node_blend, 0);
	node_blend0.connect(0, node_blend, 1);
	mat_l0.connect(0, node_blend, 2);
	
	start_x += 400;
	start_y -= 400;
	var output = LiteGraph.createNode("graphics/image");
	output.addInput("", "image");
	output.properties.url = "./asset/mosaic/albedo.jpg";
	output.title = "Albedo";
	output.pos = [start_x, start_y];
	graph.add(output);
	node_blend.connect(0, output, 0);
	
	// set groups
	start_x += 200;
	start_y += 1200;
	
	set_group("albedo", [start_x_init - 20, start_y_init - 20, start_x - start_x_init + 40, start_y - start_y_init + 40], true);
	set_group("sub-material0", region0);
	set_group("sub-material1", region1);
	set_group("sub-material2", region2);
	set_group("sub-material3", region3);
	set_group("sub-material4", region4);
	
	return [output, start_x, start_y];
}

function normal_graph(start_x, start_y){	
	var start_x_init = start_x;
	var start_y_init = start_y;
	
	start_x += 30;
	
	var mask_filter0 = LiteGraph.createNode("basic/filter");
	mask_filter0.title = "Gaussian Filter";
	mask_filter0.pos = [start_x + 200, start_y + 50];
	graph.add(mask_filter0);
	node_submaterial0.connect(0, mask_filter0, 0);
	
	var mask_filter1 = LiteGraph.createNode("basic/filter");
	mask_filter1.title = "Gaussian Filter";
	mask_filter1.pos = [start_x + 400, start_y + 50];
	graph.add(mask_filter1);
	node_submaterial1.connect(0, mask_filter1, 0);
	
	var mask_filter2 = LiteGraph.createNode("basic/filter");
	mask_filter2.title = "Gaussian Filter";
	mask_filter2.pos = [start_x + 600, start_y + 50];
	graph.add(mask_filter2);
	node_submaterial2.connect(0, mask_filter2, 0);
	
	var mask_filter3 = LiteGraph.createNode("basic/filter");
	mask_filter3.title = "Gaussian Filter";
	mask_filter3.pos = [start_x + 800, start_y + 50];
	graph.add(mask_filter3);
	node_submaterial3.connect(0, mask_filter3, 0);
	
	var mask_filter = LiteGraph.createNode("basic/filter");
	mask_filter.title = "Gaussian Filter";
	mask_filter.pos = [start_x + 1000, start_y + 50];
	graph.add(mask_filter);
	node_mask.connect(0, mask_filter, 0);
	
	start_y += 200;
	
	noise_l1_00 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial0/noise_map0.jpg", start_x, start_y);
	noise_l1_01 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial0/noise_map1.jpg", start_x, start_y + 200);
	noise_l1_02 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial0/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l1_0 = color_branch("./asset/mosaic/layer1/data/normal/submaterial0/base_color.jpg", start_x, start_y + 600);
	mat_l1_0 = linear_combine([noise_l1_00, noise_l1_01, noise_l1_02], basecolor_l1_0, start_x + 600, start_y + 350);
	region0 = [start_x - 20, start_y - 60, 800, 820];
	
	start_y += 850;
	noise_l1_10 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial1/noise_map0.jpg", start_x, start_y);
	noise_l1_11 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial1/noise_map1.jpg", start_x, start_y + 200);
	noise_l1_12 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial1/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l1_1 = color_branch("./asset/mosaic/layer1/data/normal/submaterial1/base_color.jpg", start_x, start_y + 600);
	mat_l1_1 = linear_combine([noise_l1_10, noise_l1_11, noise_l1_12], basecolor_l1_1, start_x + 600, start_y + 350);
	region1 = [start_x - 20, start_y - 60, 800, 820];
	
	start_x += 850;
	start_y -= 850;
	noise_l1_20 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial2/noise_map0.jpg", start_x, start_y);
	noise_l1_21 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial2/noise_map1.jpg", start_x, start_y + 200);
	noise_l1_22 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial2/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l1_2 = color_branch("./asset/mosaic/layer1/data/normal/submaterial2/base_color.jpg", start_x, start_y + 600);
	mat_l1_2 = linear_combine([noise_l1_20, noise_l1_21, noise_l1_22], basecolor_l1_2, start_x + 600, start_y + 350);
	region2 = [start_x - 20, start_y - 60, 800, 820];
	
	start_y += 850;
	noise_l1_30 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial3/noise_map0.jpg", start_x, start_y);
	noise_l1_31 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial3/noise_map1.jpg", start_x, start_y + 200);
	noise_l1_32 = noise_branch("./asset/mosaic/layer1/data/normal/submaterial3/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l1_3 = color_branch("./asset/mosaic/layer1/data/normal/submaterial3/base_color.jpg", start_x, start_y + 600);
	mat_l1_3 = linear_combine([noise_l1_30, noise_l1_31, noise_l1_32], basecolor_l1_3, start_x + 600, start_y + 350);
	region3 = [start_x - 20, start_y - 60, 800, 820];
	
	start_y += 850;
	noise_l0_0 = noise_branch("./asset/mosaic/data/normal/submaterial0/noise_map0.jpg", start_x, start_y);
	noise_l0_1 = noise_branch("./asset/mosaic/data/normal/submaterial0/noise_map1.jpg", start_x, start_y + 200);
	noise_l0_2 = noise_branch("./asset/mosaic/data/normal/submaterial0/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l0 = color_branch("./asset/mosaic/data/normal/submaterial0/base_color.jpg", start_x, start_y + 600);
	mat_l0 = linear_combine([noise_l0_0, noise_l0_1, noise_l0_2], basecolor_l0, start_x + 600, start_y + 350);
	region4 = [start_x - 20, start_y - 60, 800, 820];
	
	start_x += 1200;
	start_y -= 850;
	
	var node_blend0 = LiteGraph.createNode("basic/filter");
	node_blend0.removeInput(0);
	node_blend0.title = "Blend";
	node_blend0.addInput("mask0", "image");
	node_blend0.addInput("mask1", "image");
	node_blend0.addInput("mask2", "image");
	node_blend0.addInput("mask3", "image");
	node_blend0.addInput("input0", "image");
	node_blend0.addInput("input1", "image");
	node_blend0.addInput("input2", "image");
	node_blend0.addInput("input3", "image");
	node_blend0.pos = [start_x, start_y];
	graph.add(node_blend0);
	mask_filter0.connect(0, node_blend0, 0);
	mask_filter1.connect(0, node_blend0, 1);
	mask_filter2.connect(0, node_blend0, 2);
	mask_filter3.connect(0, node_blend0, 3);
	mat_l1_0.connect(0, node_blend0, 4);
	mat_l1_1.connect(0, node_blend0, 5);
	mat_l1_2.connect(0, node_blend0, 6);
	mat_l1_3.connect(0, node_blend0, 7);
	
	start_y += 800;
	var node_blend = LiteGraph.createNode("basic/blend");
	node_blend.title = "Blend";
	node_blend.pos = [start_x, start_y];
	graph.add(node_blend);	
	mask_filter.connect(0, node_blend, 0);
	node_blend0.connect(0, node_blend, 1);
	mat_l0.connect(0, node_blend, 2);
	
	start_x += 200;
	start_y -= 400;
	
	var h2n = LiteGraph.createNode("basic/filter");
	h2n.title = "Convert2Normal";
	h2n.pos = [start_x, start_y];
	graph.add(h2n);
	node_blend.connect(0, h2n, 0);
	
	start_x += 200;
	var output = LiteGraph.createNode("graphics/image");
	output.addInput("", "image");
	output.properties.url = "./asset/mosaic/normal.jpg";
	output.title = "Normal";
	output.pos = [start_x, start_y];
	graph.add(output);
	h2n.connect(0, output, 0);

	// set groups
	start_x += 200;
	start_y += 1200;
	
	set_group("albedo", [start_x_init - 20, start_y_init - 20, start_x - start_x_init + 40, start_y - start_y_init + 40], true);
	set_group("sub-material0", region0);
	set_group("sub-material1", region1);
	set_group("sub-material2", region2);
	set_group("sub-material3", region3);
	set_group("sub-material4", region4);
	
	return [output, start_x, start_y];
}

function roughness_graph(start_x, start_y){	
	var start_x_init = start_x;
	var start_y_init = start_y;
	
	start_x += 30;
	
	var mask_filter0 = LiteGraph.createNode("basic/filter");
	mask_filter0.title = "Gaussian Filter";
	mask_filter0.pos = [start_x + 200, start_y + 50];
	graph.add(mask_filter0);
	node_submaterial0.connect(0, mask_filter0, 0);
	
	var mask_filter1 = LiteGraph.createNode("basic/filter");
	mask_filter1.title = "Gaussian Filter";
	mask_filter1.pos = [start_x + 400, start_y + 50];
	graph.add(mask_filter1);
	node_submaterial1.connect(0, mask_filter1, 0);
	
	var mask_filter2 = LiteGraph.createNode("basic/filter");
	mask_filter2.title = "Gaussian Filter";
	mask_filter2.pos = [start_x + 600, start_y + 50];
	graph.add(mask_filter2);
	node_submaterial2.connect(0, mask_filter2, 0);
	
	var mask_filter3 = LiteGraph.createNode("basic/filter");
	mask_filter3.title = "Gaussian Filter";
	mask_filter3.pos = [start_x + 800, start_y + 50];
	graph.add(mask_filter3);
	node_submaterial3.connect(0, mask_filter3, 0);
	
	var mask_filter = LiteGraph.createNode("basic/filter");
	mask_filter.title = "Gaussian Filter";
	mask_filter.pos = [start_x + 1000, start_y + 50];
	graph.add(mask_filter);
	node_mask.connect(0, mask_filter, 0);
	
	start_y += 200;
	
	noise_l1_00 = noise_branch("./asset/mosaic/layer1/data/roughness/submaterial0/noise_map0.jpg", start_x, start_y);
	basecolor_l1_0 = color_branch("./asset/mosaic/layer1/data/roughness/submaterial0/base_color.jpg", start_x, start_y + 200);
	mat_l1_0 = linear_combine([noise_l1_00], basecolor_l1_0, start_x + 600, start_y + 150);
	region0 = [start_x - 20, start_y - 60, 800, 420];
	
	start_y += 450;
	noise_l1_10 = noise_branch("./asset/mosaic/layer1/data/roughness/submaterial1/noise_map0.jpg", start_x, start_y);
	basecolor_l1_1 = color_branch("./asset/mosaic/layer1/data/roughness/submaterial1/base_color.jpg", start_x, start_y + 200);
	mat_l1_1 = linear_combine([noise_l1_10], basecolor_l1_1, start_x + 600, start_y + 150);
	region1 = [start_x - 20, start_y - 60, 800, 420];
	
	start_x += 850;
	start_y -= 450;
	noise_l1_20 = noise_branch("./asset/mosaic/layer1/data/roughness/submaterial2/noise_map0.jpg", start_x, start_y);
	basecolor_l1_2 = color_branch("./asset/mosaic/layer1/data/roughness/submaterial2/base_color.jpg", start_x, start_y + 200);
	mat_l1_2 = linear_combine([noise_l1_20], basecolor_l1_2, start_x + 600, start_y + 150);
	region2 = [start_x - 20, start_y - 60, 800, 420];
	
	start_y += 450;
	noise_l1_30 = noise_branch("./asset/mosaic/layer1/data/roughness/submaterial3/noise_map0.jpg", start_x, start_y);
	basecolor_l1_3 = color_branch("./asset/mosaic/layer1/data/roughness/submaterial3/base_color.jpg", start_x, start_y + 200);
	mat_l1_3 = linear_combine([noise_l1_30], basecolor_l1_3, start_x + 600, start_y + 150);
	region3 = [start_x - 20, start_y - 60, 800, 420];
	
	start_y += 450;
	noise_l0_0 = noise_branch("./asset/mosaic/data/normal/submaterial0/noise_map0.jpg", start_x, start_y);
	noise_l0_1 = noise_branch("./asset/mosaic/data/normal/submaterial0/noise_map1.jpg", start_x, start_y + 200);
	noise_l0_2 = noise_branch("./asset/mosaic/data/normal/submaterial0/noise_map2.jpg", start_x, start_y + 400);
	basecolor_l0 = color_branch("./asset/mosaic/data/normal/submaterial0/base_color.jpg", start_x, start_y + 600);
	mat_l0 = linear_combine([noise_l0_0, noise_l0_1, noise_l0_2], basecolor_l0, start_x + 600, start_y + 350);
	region4 = [start_x - 20, start_y - 60, 800, 820];
	
	start_x += 1200;
	start_y -= 450;
	
	var node_blend0 = LiteGraph.createNode("basic/filter");
	node_blend0.removeInput(0)
	node_blend0.title = "Blend";
	node_blend0.addInput("mask0", "image");
	node_blend0.addInput("mask1", "image");
	node_blend0.addInput("mask2", "image");
	node_blend0.addInput("mask3", "image");
	node_blend0.addInput("input0", "image");
	node_blend0.addInput("input1", "image");
	node_blend0.addInput("input2", "image");
	node_blend0.addInput("input3", "image");
	node_blend0.pos = [start_x, start_y];
	graph.add(node_blend0);
	mask_filter0.connect(0, node_blend0, 0);
	mask_filter1.connect(0, node_blend0, 1);
	mask_filter2.connect(0, node_blend0, 2);
	mask_filter3.connect(0, node_blend0, 3);
	mat_l1_0.connect(0, node_blend0, 4);
	mat_l1_1.connect(0, node_blend0, 5);
	mat_l1_2.connect(0, node_blend0, 6);
	mat_l1_3.connect(0, node_blend0, 7);
	
	start_y += 800;
	var node_blend = LiteGraph.createNode("basic/blend");
	node_blend.title = "Blend";
	node_blend.pos = [start_x, start_y];
	graph.add(node_blend);	
	mask_filter.connect(0, node_blend, 0);
	node_blend0.connect(0, node_blend, 1);
	mat_l0.connect(0, node_blend, 2);
	
	start_x += 400;
	start_y -= 400;
	var output = LiteGraph.createNode("graphics/image");
	output.addInput("", "image");
	output.properties.url = "./asset/mosaic/roughness.jpg";
	output.title = "Roughness";
	output.pos = [start_x, start_y];
	graph.add(output);
	node_blend.connect(0, output, 0);

	// set groups
	start_x += 200;
	start_y += 1000;
	
	set_group("albedo", [start_x_init - 20, start_y_init - 20, start_x - start_x_init + 40, start_y - start_y_init + 40], true);
	set_group("sub-material0", region0);
	set_group("sub-material1", region1);
	set_group("sub-material2", region2);
	set_group("sub-material3", region3);
	set_group("sub-material4", region4);
	
	return [output, start_x, start_y];
}

// define mask
var node_mask = LiteGraph.createNode("graphics/image");
node_mask.properties.url = "./asset/mosaic/mask.jpg";
node_mask.title = "Mask";
node_mask.pos = [900, 250];
graph.add(node_mask);

var node_sampler = LiteGraph.createNode("basic/filter");
node_sampler.title = "Random Sampler";
node_sampler.pos = [1200, 250];
node_sampler.removeOutput(0);
node_sampler.addOutput("output0", "image");
node_sampler.addOutput("output1", "image");
node_sampler.addOutput("output2", "image");
node_sampler.addOutput("output3", "image");
graph.add(node_sampler);
node_mask.connect(0, node_sampler, 0);

var node_submaterial0 = LiteGraph.createNode("graphics/image");
node_submaterial0.addInput("", "image");
node_submaterial0.properties.url = "./asset/mosaic/layer1/mask0.jpg";
node_submaterial0.title = "Mask";
node_submaterial0.pos = [1500, 0];
graph.add(node_submaterial0);
node_sampler.connect(0, node_submaterial0, 0);

var node_submaterial1 = LiteGraph.createNode("graphics/image");
node_submaterial1.addInput("", "image");
node_submaterial1.properties.url = "./asset/mosaic/layer1/mask1.jpg";
node_submaterial1.title = "Mask";
node_submaterial1.pos = [1500, 200];
graph.add(node_submaterial1);
node_sampler.connect(1, node_submaterial1, 0);

var node_submaterial2 = LiteGraph.createNode("graphics/image");
node_submaterial2.addInput("", "image");
node_submaterial2.properties.url = "./asset/mosaic/layer1/mask2.jpg";
node_submaterial2.title = "Mask";
node_submaterial2.pos = [1500, 400];
graph.add(node_submaterial2);
node_sampler.connect(2, node_submaterial2, 0);

var node_submaterial3 = LiteGraph.createNode("graphics/image");
node_submaterial3.addInput("", "image");
node_submaterial3.properties.url = "./asset/mosaic/layer1/mask3.jpg";
node_submaterial3.title = "Mask";
node_submaterial3.pos = [1500, 600];
graph.add(node_submaterial3);
node_sampler.connect(3, node_submaterial3, 0);

set_group("Pattern Generator", [850, -50, 850, 800]);

var start_x = 200;
var start_y = 800;
var gap = 200;
var [albedo, x_albedo, y_albedo] = albedo_graph(start_x, start_y);
var [normal, x_normal, y_normal] = normal_graph(start_x, y_albedo + gap);
var [roughness, x_roughness, y_roughness] = roughness_graph(start_x, y_normal + gap);

//set_group("albedo", [start_x - 20, start_y - 20, x_albedo - start_x + 40, y_albedo - start_y + 40], true);
//set_group("normal", [start_x - 20, y_albedo + gap - 20, x_normal - start_x + 40, y_normal - y_albedo - gap + 40], true);
//set_group("roughness", [start_x - 20, y_normal + gap - 20, x_roughness - start_x + 40, y_roughness - y_normal - gap + 40], true);
////////////////////////////////////////////////////////////////////////////////

start_x = x_roughness + 600;
start_y = y_roughness / 2;
var render = LiteGraph.createNode("basic/render");
render.properties.url = "./asset/mosaic/render.jpg";
render.pos = [start_x, start_y];
graph.add(render);
albedo.connect(0, render, 0);
normal.connect(0, render, 1);
roughness.connect(0, render, 2);

graph.start()
canvas.setZoom(0.10);
canvas.ds.offset[1] = 100;