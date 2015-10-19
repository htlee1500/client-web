function SetResult(result) {
  $('#results').html('');
  result = Result(result);
  $('#results')[0].appendChild(result);
}

function AddResult(result) {
  result = Result(result);
  $('#results')[0].appendChild(result);
}

function Result(object) {
  var item = document.createElement('div');
  item.className = 'item';
  var content = document.createElement('div');
  content.className = 'content';
  item.appendChild(content);
  var header = document.createElement('a');
  header.className = 'header';
  header.innerText = object['_id'];
  content.appendChild(header);
  for (var prop in object) {
    if (object.hasOwnProperty(prop) && prop !== '_id') {
      var description = document.createElement('div');
      description.className = 'description';
      description.innerText = prop.charAt(0).toUpperCase() + prop.slice(1) +
        ':  ';
      var linkMaker = Links.get(prop);
      var link = linkMaker(prop, object[prop]);
      description.appendChild(link);
      content.appendChild(description);
    }
  }
  return item;
}
