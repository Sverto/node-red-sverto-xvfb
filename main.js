module.exports = function(RED) {
    "use strict";

    var Xvfb = require('xvfb');
    var xvfb = new Xvfb();

    function StartXvfb(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {
            xvfb.startSync();
            node.send(msg);
        });
    }

    function EndXvfb(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {
            xvfb.end(function() {});
            node.send(msg);
        });
    }
    
    RED.nodes.registerType("start-xvfb", StartXvfb);
    RED.nodes.registerType("end-xvfb", EndXvfb);
}