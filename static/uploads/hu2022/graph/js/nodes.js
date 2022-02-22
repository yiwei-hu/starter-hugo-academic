(function (global) {
    var LiteGraph = global.LiteGraph;

    //node constructor class
    function FilterNode() {
        this.addInput("input", "image");
        this.addOutput("output", "image");
    }

    //name to show
    FilterNode.title = "Filter";

    //register in the system
    LiteGraph.registerNodeType("basic/filter", FilterNode);

    //node constructor class
    function LinearNode() {
        this.addInput("input0", "image");
        this.addInput("input1", "image");
        this.addOutput("output", "image");
    }

    //name to show
    LinearNode.title = "Linear";

    //register in the system
    LiteGraph.registerNodeType("basic/linear", LinearNode);

    //node constructor class
    function BlendNode() {
        this.addInput("mask", "image");
        this.addInput("input0", "image");
        this.addInput("input1", "image");
        this.addOutput("output", "image");
    }

    //name to show
    BlendNode.title = "Blend";

    //register in the system
    LiteGraph.registerNodeType("basic/blend", BlendNode);

    function RenderNode() {
        this.addInput("", "image");
        this.addInput("", "image");
        this.addInput("", "image");
        this.properties = { url: "" };
    }

    RenderNode.title = "Render";
    RenderNode.widgets = [{ name: "load", text: "Load", type: "button" }];

    RenderNode.supported_extensions = ["jpg", "jpeg", "png", "gif"];

    RenderNode.prototype.onAdded = function () {
        if (this.properties["url"] != "" && this.img == null) {
            this.loadImage(this.properties["url"]);
        }
    };

    RenderNode.prototype.onDrawBackground = function (ctx) {
        if (this.flags.collapsed) {
            return;
        }
        if (this.img && this.size[0] > 5 && this.size[1] > 5 && this.img.width) {
            this.size[1] = this.size[0];
            ctx.drawImage(this.img, 0, 0, this.size[0] + 1, this.size[1] + 1);
        }
    };

    RenderNode.prototype.onExecute = function () {
        if (!this.img) {
            this.boxcolor = "#000";
        }
        if (this.img && this.img.width) {
            this.setOutputData(0, this.img);
        } else {
            this.setOutputData(0, null);
        }
        if (this.img && this.img.dirty) {
            this.img.dirty = false;
        }
    };

    RenderNode.prototype.onPropertyChanged = function (name, value) {
        this.properties[name] = value;
        if (name == "url" && value != "") {
            this.loadImage(value);
        }

        return true;
    };

    RenderNode.prototype.loadImage = function (url, callback) {
        if (url == "") {
            this.img = null;
            return;
        }

        this.img = document.createElement("img");

        if (url.substr(0, 4) == "http" && LiteGraph.proxy) {
            url = LiteGraph.proxy + url.substr(url.indexOf(":") + 3);
        }

        this.img.src = url;
        this.boxcolor = "#F95";
        var that = this;
        this.img.onload = function () {
            if (callback) {
                callback(this);
            }
            console.log("Image loaded, size: " + that.img.width + "x" + that.img.height);
            this.dirty = true;
            that.boxcolor = "#9F9";
            that.setDirtyCanvas(true);
        };
        this.img.onerror = function () {
            console.log("error loading the image:" + url);
        }
    };

    RenderNode.prototype.onWidget = function (e, widget) {
        if (widget.name == "load") {
            this.loadImage(this.properties["url"]);
        }
    };

    RenderNode.prototype.onDropFile = function (file) {
        var that = this;
        if (this._url) {
            URL.revokeObjectURL(this._url);
        }
        this._url = URL.createObjectURL(file);
        this.properties.url = this._url;
        this.loadImage(this._url, function (img) {
            that.size[1] = (img.height / img.width) * that.size[0];
        });
    };

    LiteGraph.registerNodeType("basic/render", RenderNode);
})(this);