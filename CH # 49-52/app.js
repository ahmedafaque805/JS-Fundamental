//Task # 01
    var element = (tag, data) => {
    var element = document.createElement(tag);
    element.append(document.createTextNode(data));
    return element;
  };
    var getData = (element) => {
    return document.querySelector(element).value;
  };
  document.querySelector('#signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = document.querySelector('#formData');
    formData.append(element('h3', `Username : ${getData('input[type="text"]')}`));
    formData.append(element('h3', `Email : ${getData('input[type="email"]')}`));
    formData.append(
      element('h3', `Password : ${getData('input[type="password"]')}`)
    );
  });
  
  //Task # 02
  document.querySelector('#readMore').addEventListener('click', () => {
    document.querySelector('#moreContent').style.display = 'block';
  });
  
  //Task # 03
    var info = [
    {
      id: 1,
      name: 'Afaque',
      _class: '1',
    },
    {
      id: 2,
      name: 'Aziz',
      _class: '2',
    },
    {
      id: 3,
      name: 'ashfaque',
      _class: '3',
    },
    {
      id: 4,
      name: 'babar',
      _class: '4',
    },
    {
      id: 5,
      name: 'yaseen',
      _class: '5',
    },
    {
      id: 6,
      name: 'ali',
      _class: '6',
    },
    {
      id: 7,
      name: 'Khizar',
      _class: '7',
    },
    {
      id: 8,
      name: 'Moiz',
      _class: '8',
    },
    {
      id: 9,
      name: 'Majid',
      _class: '9',
    },
    {
      id: 10,
      name: 'Zahoor',
      _class: '10',
    },
  ];
  
  const _tableBody = document.querySelector('tbody');
  
  //create edit/delete button
  const createButton = (name) => {
    const btn = document.createElement('button');
    btn.setAttribute('onClick', `${name.toLowerCase()}Row(this)`);
    btn.innerHTML = name;
    return btn;
  };
  
  //insert row in table
  const _insertRow = ({ id, name, _class }) => {
    if (info.length) {
      const _row = _tableBody.insertRow();
      _row.value = id;
      _row.insertCell(0).innerHTML = _row.rowIndex - 1;
      _row.insertCell(1).innerHTML = name;
      _row.insertCell(2).innerHTML = _class;
      _row.insertCell(3).appendChild(createButton('Edit'));
      _row.insertCell(4).appendChild(createButton('Delete'));
    }
  };
  
  const deleteData = (id) => {
    const requiredData = info.find((student) => student.id === id);
    const dataIndex = info.indexOf(requiredData);
    dataIndex > -1 && info.splice(dataIndex, 1);
  };
  
  const deleteRow = (e) => {
    const _row = e.parentNode.parentNode;
    deleteData(_row.value);
    _tableBody.deleteRow(_row.rowIndex - 1);
    _tableBody.innerHTML = '';
    info.forEach((student) => _insertRow(student));
  };
  
  info.forEach((student) => _insertRow(student));
  

  const showData = ({ id, name, _class }) => {
    const form = document.querySelector('#editForm');
    form.style.display = 'block';
    form.value = id;
    const inputField = document.querySelectorAll('#editForm input[type="text"]');
    inputField[0].value = name;
    inputField[1].value = _class;
  };
  
  const editRow = (e) => {
    const _row = e.parentNode.parentNode.value;
    const requiredData = info.find((student) => student.id === _row);
    showData(requiredData);
  };

  document.querySelector('#editForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.querySelector('#editForm');
    const inputField = document.querySelectorAll('#editForm input[type="text"]');
    const requiredData = info.find(
      (student) => student.id === Number(form.value)
    );
    requiredData.name = inputField[0].value;
    requiredData._class = inputField[1].value;
    form.style.display = 'none';
    _tableBody.innerHTML = '';
    info.forEach((student) => _insertRow(student));
  });