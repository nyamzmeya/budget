var _ = require("lodash");
_.mixin({
  sortKeysBy: function(obj, comparator) {
    var keys = _.sortBy(_.keys(obj), function(key) {
      return comparator ? comparator(obj[key], key) : key;
    });

    return _.zipObject(
      keys,
      _.map(keys, function(key) {
        return obj[key];
      })
    );
  },
});

export function filterList(list, type) {
  if (type == "INCOME") {
    return Object.keys(list).reduce(function(acc, val) {
        if(list[val].value >= 0)  acc[val] = list[val];
      return acc;
    }, {});
    
  } else if (type == "OUTCOME") {
    return Object.keys(list).reduce(function(acc, val) {
        if(list[val].value < 0)  acc[val] = list[val];
      return acc;
    }, {});
    
  } else {
    return list;
  }
}
