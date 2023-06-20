import Info from './icons/information-outline.svg';
import Edit from './icons/square-edit-outline.svg';
import Trash from './icons/trash-can-outline.svg';
import Asc from './icons/sort-ascending.svg';
import Desc from './icons/sort-descending.svg';
import { form } from './format.js';
import { compareDesc, isToday, isThisWeek, isPast } from 'date-fns';

let globalList = [];
let check = 'normal';
let sort = 'asc';

function save() {
  localStorage.setItem('data', JSON.stringify(globalList));
}

function Task(title, descr, date, priority) {
  this.title = title;
  this.descr = descr;
  this.date = date;
  this.priority = priority;
}

function create(dateString) {
  const parts = dateString.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  
  return new Date(year, month - 1, day);
}

function convert(dateString) {
  const [year, month, day] = dateString.split('-');
  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
}

function revert(dateString) {
  const [month, day, year] = dateString.split('/');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

function display() {
  save();
  let list = [];
  if (sort === 'asc') {
    globalList.sort((a, b) => compareDesc(create(b.date), create(a.date)));
  }
  else {
    globalList.sort((a, b) => compareDesc(create(a.date), create(b.date)));
  }
  const nothing = document.querySelector('.nothing');
  if (check === 'normal') {
    list = globalList;
    if (list.length === 0) {
      nothing.style.display = 'revert';
      nothing.textContent = 'You have no tasks... Add some tasks you bum!';
    }
    else {
      nothing.style.display = 'none';
    }
  }
  if (check === 'today') {
    list = globalList.filter(obj => isToday(create(obj.date)));
    if (list.length === 0) {
      nothing.style.display = 'revert';
      nothing.textContent = 'You have no tasks for today...';
    }
    else {
      nothing.style.display = 'none';
    }
  }
  if (check === 'week') {
    list = globalList.filter(obj => isThisWeek(create(obj.date)));
    if (list.length === 0) {
      nothing.style.display = 'revert';
      nothing.textContent = 'You have no tasks for this week...';
    }
    else {
      nothing.style.display = 'none';
    }
  }
  if (check === 'past') {
    list = globalList.filter(obj => isPast(create(obj.date)) && !isToday(create(obj.date)));
    if (list.length === 0) {
      nothing.style.display = 'revert';
      nothing.textContent = 'You have no past tasks...';
    }
    else {
      nothing.style.display = 'none';
    }
  }
  const taskCont = document.querySelector('.taskCont');
  taskCont.innerHTML = '';
  if (list.length !== 0) {
    const task = document.createElement('div');
    task.classList.add('taskHeader');
    const title = document.createElement('p');
    const date = document.createElement('p'); 
    const priority = document.createElement('p');
    const sortBy = new Image();
    if (sort === 'asc') {
      sortBy.src = Asc;
    }
    else {
      sortBy.src = Desc;
    }
    sortBy.addEventListener('click', () => {
      if (list.length !== 1) {
        if (sort === 'asc') {
          sort = 'desc';
        }
        else {
          sort = 'asc';
        }
        display();  
      }
    });
    task.classList.add('task');
    date.classList.add('dateHead');
    title.textContent = 'Title';
    date.textContent = 'Date';
    priority.textContent = 'Priority';
    const dateCont = document.createElement('div');
    dateCont.classList.add('dateCont');
    dateCont.append(date, sortBy);
    task.append(title, dateCont, priority);
    taskCont.append(task);
  }
  for (let i = 0; i < list.length; i++) {
    const task = document.createElement('div');
    const title = document.createElement('p');
    const descr = document.createElement('p');
    const date = document.createElement('p');
    const priority = document.createElement('p');
    const info = new Image();
    const edit = new Image();
    const trash = new Image();
    task.classList.add('task');
    info.src = Info;
    edit.src = Edit;
    trash.src = Trash;
    const main = document.querySelector('.main');
    const iconCont = document.createElement('div');
    iconCont.classList.add('iconCont');
    iconCont.append(info, edit, trash);
    title.textContent = list[i].title;
    descr.textContent = list[i].descr;
    date.textContent = convert(list[i].date);
    priority.textContent = list[i].priority;
    const taskFormCont = document.createElement('div');
    const infoDescr = document.createElement('p');
    infoDescr.style.display = 'none';
    infoDescr.textContent = 'Description: ' + descr.textContent;
    infoDescr.classList.add('infoDescr');
    task.append(title, date, priority, iconCont);
    taskFormCont.append(task, infoDescr, form());
    taskFormCont.classList.add('taskFormCont');
    taskCont.append(taskFormCont);
    const taskForm = document.querySelectorAll('.form')[i + 1];
    const save = document.querySelectorAll('.submit')[i + 1];
    const cancel = document.querySelectorAll('.cancel')[i + 1];
    const formTitle = document.querySelectorAll('.title')[i + 1];
    const formDescr = document.querySelectorAll('.descr')[i + 1];
    const formDate = document.querySelectorAll('.date')[i + 1];
    const formPriority = document.querySelectorAll('.priority')[i + 1];
    const required = document.querySelectorAll('.required')[i + 1];
    required.style.paddingtop = '0';
    formTitle.value = title.textContent;
    formDescr.value = descr.textContent;
    formDate.value = revert(date.textContent);
    formPriority.value = priority.textContent;
    save.textContent = 'Save';
    taskForm.style.display = 'none';

    info.addEventListener('click', () => {
      if (infoDescr.style.display === 'none') {
        infoDescr.style.display = 'revert';
      }
      else {
        infoDescr.style.display = 'none';
      }
    });

    trash.addEventListener('click', () => {
      const nothing = document.querySelector('.nothing');
      list.splice(i, 1);
      display(list);
      if (list.length === 0) {
        nothing.style.display = 'revert';
      }
    });

    edit.addEventListener('click', () => {
      if (document.querySelectorAll('.form')[0].style.display === 'none') {
        taskForm.style.display = 'flex';
        task.style.display = 'none'; 
        infoDescr.style.display = 'none';
      }
    });
    
    cancel.addEventListener('click', (e) => {
      e.preventDefault();
      taskForm.style.display = 'none';
      required.textContent = '';
      required.style.paddingTop = '0';
      task.style.display = 'grid';
    });

    save.addEventListener('click', (e) => {
      e.preventDefault();
      let check = false;
      if (formTitle.value === '' || formDescr.value === '' ||
      formDate.value === '' || formPriority.value === '') {
        check = true;
        required.textContent = '*All fields are required';  
        required.style.paddingTop = '1vw';  
      }
      if (check === false) {
        list[i].title = formTitle.value;
        infoDescr.textContent = 'Description: ' + formDescr.value;
        list[i].descr = formDescr.value;
        list[i].priority = formPriority.value;
        list[i].date = formDate.value;
        taskForm.style.display = 'none';
        required.textContent = '';
        required.style.paddingTop = '0';
        task.style.display = 'grid';
        display(list);
      }
    });
  }
}

const tasks = () => {
  const mainText = document.querySelector('.mainText');
  const mainBtn = document.querySelector('.mainBtn');
  const tasks = document.querySelector('.tasks');
  const today = document.querySelector('.today');
  const week = document.querySelector('.week');
  const past = document.querySelector('.past');
  const form = document.querySelector('.form');
  const nothing = document.querySelector('.nothing');

  tasks.addEventListener('click', () => {
    mainText.textContent = 'All tasks';
    form.style.display = 'none';
    check = 'normal';
    display(globalList);
  });

  today.addEventListener('click', () => {
    mainText.textContent = 'Tasks for today';
    form.style.display = 'none';
    check = 'today';
    display(globalList);
  });

  past.addEventListener('click', () => {
    mainText.textContent = 'Past tasks';
    form.style.display = 'none';
    check = 'past';
    display(globalList);
  });

  week.addEventListener('click', () => {
    mainText.textContent = 'Tasks for this week';
    form.style.display = 'none';
    check = 'week';
    display(globalList);
  });
};

const add = () => {
  const main = document.querySelector('.main');
  const form = document.querySelector('.form');
  const mainBtn = document.querySelector('.mainBtn');
  const submit = document.querySelector('.submit');
  const cancel = document.querySelector('.cancel');
  const required = document.querySelector('.required');
  const input = document.querySelectorAll('input');
  const nothing = document.querySelector('.nothing');

  input.forEach(function(element) {
    element.addEventListener('input', () => {
      required.textContent = ''; 
      required.style.paddingTop = '0';
    });
  });  
  
  mainBtn.addEventListener('click', () => {
    nothing.style.display = 'none';
    const taskForm = document.querySelectorAll('.form');
    let check = true;
    taskForm.forEach(function(form) {
      if (form.style.display === 'flex') {
        check = false;
      }
    });
    if (check) {
      input.forEach(function(element) {
        element.value = '';
      });
      form.style.display = 'flex';
    }
  });

  cancel.addEventListener('click', (e) => {
    e.preventDefault();
    input.forEach(function(element) {
      element.value = '';
    });   
    form.style.display = 'none';
    required.textContent = '';  
    required.style.paddingTop = '0';
    if (globalList.length === 0) {
      nothing.style.display = 'revert'; 
    }
  });

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let check = false;
    input.forEach(function(element) {
        if (element.value.trim() === '') {
          check = true;
          required.textContent = '*All fields are required';   
          required.style.paddingTop = '1vw'; 
        }
    });
    if (check === false) {
      form.style.display = 'none';
      required.textContent = '';
      required.style.paddingTop = '0';
      const title = document.querySelectorAll('.title')[0];
      const descr = document.querySelectorAll('.descr')[0];
      const date = document.querySelectorAll('.date')[0];
      const priority = document.querySelectorAll('.priority')[0];
      globalList.push(new Task(title.value, descr.value, date.value, priority.value));
      display();
      priority.value = 'Low';
      nothing.style.display = 'none';
    }
  });

  if (localStorage.getItem('data')) {
    input.forEach(function(element) {
      element.value = '';
    });   
    form.style.display = 'none';
    required.textContent = '';  
    required.style.paddingTop = '0';
    if (globalList.length === 0) {
      nothing.style.display = 'revert'; 
    }
    globalList = JSON.parse(localStorage.getItem('data'));
    display();
  }
}

export { tasks, add }