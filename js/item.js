function SetItem() {
  $('#formItems').html('');
  var primary = new Item();
  primary.formIndex.style.display = 'none';
  primary.formIndex.value = '_id';
  primary.formValue.placeholder = 'Primary lookup (Phone number, 123-456-7890)'
  $('#formItems')[0].appendChild(primary);
  var item = new Item();
  $('#formItems')[0].appendChild(item);
  return item;
}

function AddItem() {
  var item = new Item();
  $('#formItems')[0].appendChild(item);
  return item;
}

function Item(object) {
  var item = document.createElement('div');
  item.className = 'item ui input';
  item.formIndex = document.createElement('input');
  item.formIndex.type = 'text';
  item.formIndex.placeholder = 'Account type (twitter, facebook)';
  item.appendChild(item.formIndex);
  item.formValue = document.createElement('input');
  item.formValue.type = 'text';
  item.formValue.placeholder = 'Account name (th3j35t3r, curtdog39)';
  item.appendChild(item.formValue);
  return item;
}
