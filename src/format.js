import './style.css';

const form = () =>  {
  const form = document.createElement('form');
  const title = document.createElement('input');
  const descr = document.createElement('input');
  const date = document.createElement('input');
  const priority = document.createElement('select');
  const titleHead = document.createElement('p');
  const descrHead = document.createElement('p');
  const dateHead = document.createElement('p');
  const priorityHead = document.createElement('p');
  const urgent = document.createElement('option');
  const high = document.createElement('option');
  const medium = document.createElement('option');
  const low = document.createElement('option');
  const submit = document.createElement('button');
  const cancel = document.createElement('button');
  const required = document.createElement('p');
  const dateCont = document.createElement('div');
  const priorityCont = document.createElement('div');
  const lastRow = document.createElement('div');
  dateCont.append(dateHead, date);
  priorityCont.append(priorityHead, priority);
  lastRow.append(dateCont, priorityCont, submit, cancel);
  form.classList.add('form');
  submit.classList.add('submit');
  cancel.classList.add('cancel');
  required.classList.add('required');
  lastRow.classList.add('lastRow');
  title.classList.add('title');
  descr.classList.add('descr');
  date.classList.add('date');
  priority.classList.add('priority');
  
  urgent.textContent = 'Urgent';
  high.textContent = 'High';
  medium.textContent = 'Medium';
  low.textContent = 'Low';
  submit.textContent = 'Add';
  cancel.textContent = 'Cancel';
  priority.append(low, medium, high, urgent);
  title.setAttribute('type', 'text');
  descr.setAttribute('type', 'text');
  date.setAttribute('type', 'date');
  titleHead.textContent = 'Title';
  descrHead.textContent = 'Description';
  dateHead.textContent = 'Date';
  priorityHead.textContent = 'Priority';
  title.setAttribute('placeholder', 'Title');
  descr.setAttribute('placeholder', 'Description');
  form.append(titleHead, title, descrHead, descr, lastRow, required);
  return form;
}

const format = () => {
  const container = document.querySelector('.container');

  /* Header */
  const header = document.createElement('div');
  const headerText = document.createElement('p');
  header.classList.add('header');
  headerText.classList.add('headerText');

  headerText.textContent = 'todolist';

  header.append(headerText);
  container.append(header);

  /* Side */
  const side = document.createElement('div');
  const tasks = document.createElement('p');
  const today = document.createElement('p');
  const week = document.createElement('p');
  const past = document.createElement('p');
  side.classList.add('side');
  tasks.classList.add('tasks');
  today.classList.add('today');
  week.classList.add('week');
  past.classList.add('past');

  tasks.textContent = 'Home';
  today.textContent = 'Today';
  week.textContent = 'Week';
  past.textContent = 'Past';
  
  side.append(tasks, today, week, past);
  container.append(side);

  /* Main */
  const main = document.createElement('div');
  const mainHeader = document.createElement('div');
  const mainText = document.createElement('p');
  const mainBtn = document.createElement('button');
  main.classList.add('main');
  mainHeader.classList.add('mainHeader');
  mainText.classList.add('mainText');
  mainBtn.classList.add('mainBtn');

  mainText.textContent = 'All tasks';
  mainBtn.textContent = 'Add task';

  const taskCont = document.createElement('div');
  taskCont.classList.add('taskCont');
  
  const nothing = document.createElement('p');
  nothing.classList.add('nothing');
  nothing.textContent = 'You currently have no tasks... Add some tasks you bum!';

  mainHeader.append(mainText, mainBtn);
  main.append(mainHeader);
  main.append(nothing);
  main.append(form());
  main.append(taskCont);
  container.append(main);
};

export { format, form };