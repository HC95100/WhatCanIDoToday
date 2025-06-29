(function() {
  const original = Node.prototype.removeChild;
  Node.prototype.removeChild = function(child) {
    try {
      return original.call(this, child);
    } catch (err) {
      if (err instanceof Error && /not a child of this node/.test(err.message)) {
        console.warn('Ignored removeChild error:', child);
        return child;
      }
      throw err;
    }
  };
})();