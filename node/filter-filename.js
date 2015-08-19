module.exports = function(RED) {
    function filterFilename(config) {
      RED.nodes.createNode(this, config);
      this.filter = config.filter;
      this.ignorecase = config.ignorecase;
      
      var node = this;
      var options = (node.ignorecase)?"i":"";
      var rx = null;
      try {
        rx  = new RegExp(node.filter, options);
      }
      catch (exception) {
      }
      
      this.on('input', function(msg) {
        if (rx!=null && rx.test(msg.payload))
          node.send(msg);
      });
    }
    RED.nodes.registerType("filter-filename", filterFilename);
}