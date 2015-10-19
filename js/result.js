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
      var link = MakeLink(prop, object[prop])
      description.appendChild(link);
      content.appendChild(description);
    }
  }
  return item;
}

function MakeLink(index, value) {
  var link = document.createElement('a');
  link.className = 'link';
  link.target = '_blank';
  link.href = 'https://' + index + ".com/" + value;
  link.innerText = '@' + value;
  return link;
}
