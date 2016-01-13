module.exports = function (map) {
  view = {group_list: []};
  for (var group in map) {
    var index = view.group_list.push({
      name: group,
      animation_list: []
    }) - 1;

    for (var i in map[group]) {
      view.group_list[index].animation_list.push({
        name: map[group][i]
      });
    }
  }

  return view;
};
