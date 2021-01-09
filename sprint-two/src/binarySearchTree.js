var BinarySearchTree = function(val) {
  var storage = {};
  storage.value = val;
  storage.left = null;
  storage.right = null;
  _.extend(storage, bstTreeMethods);

  return storage;
};

var bstTreeMethods = {
  insert: function (val) {
    if (val < this.value) {
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = BinarySearchTree(val);
      }
    } else if (val > this.value) {
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = BinarySearchTree(val);
      }
    }
  },
  contains: function(val) {
    if (this.value === val) {
      return true;
    } else if (val < this.value && this.left !== null) {
      return this.left.contains(val);
    } else if (val > this.value && this.right !== null) {
      return this.right.contains(val);
    }

    return false;
  },
  depthFirstLog: function(callback) {
    callback(this.value);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
  }

};

// .insert = first value top

// var newBST = BinarySearchTree(8)
// newBST.dephFirstLog(callback)


//     5
// 2       7
//   3   6

/*
 * Complexity: What is the time complexity of the above functions?
 */

