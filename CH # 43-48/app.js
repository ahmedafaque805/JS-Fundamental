//Task # 01
document.querySelector('#link').addEventListener('click', () => {
    alert('Hello');
  });
  
  //Task # 02
  function imageClick() {
    alert('Thanks for purchasing a phone from us');
  }
  
  //Task # 03
  const info = [
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
      name: 'ali',
      _class: '4',
    },
    {
      id: 5,
      name: 'bilal',
      _class: '5',
    },
    {
      id: 6,
      name: 'yaseen',
      _class: '6',
    },
    {
      id: 7,
      name: 'khizar',
      _class: '7',
    },
    {
      id: 8,
      name: 'fahad',
      _class: '8',
    },
    {
      id: 9,
      name: 'maaz',
      _class: '9',
    },
    {
      id: 10,
      name: 'fareed',
      _class: '10',
    },
  ];
  
  const _tableBody = document.querySelector('tbody');
  
  //create delete button
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
      _row.insertCell(3).appendChild(createButton('Delete'));
    }
  };
  
  //delete data from info list
  const deleteData = (id) => {
    const requiredData = info.find((student) => student.id === id);
    const dataIndex = info.indexOf(requiredData);
    dataIndex > -1 && info.splice(dataIndex, 1);
  };
  
  //delete table row
  const deleteRow = (e) => {
    const _row = e.parentNode.parentNode;
    deleteData(_row.value);
    _tableBody.deleteRow(_row.rowIndex - 1);
    _tableBody.innerHTML = '';
    info.forEach((student) => _insertRow(student));
  };
  
  //display data in table on page load
  info.forEach((student) => _insertRow(student));
  
  //Task # 04
  const img = document.querySelector('#changeImg');
  
  img.addEventListener('mouseover', () => {
    img.src = './images/phone2.png';
  });
  
  img.addEventListener('mouseout', () => {
    img.src = './images/phone1.jpg';
  });
  
  //Task # 05
  const counter = document.querySelector('#counter');
  
  document.querySelector('#decrement').addEventListener('click', () => {
    counter.innerHTML -= 1;
  });
  
  document.querySelector('#increment').addEventListener('click', () => {
    counter.innerHTML = Number(counter.innerHTML) + 1;
  });