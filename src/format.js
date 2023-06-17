import './style.css';

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
  const projects = document.createElement('p');
  side.classList.add('side');

  tasks.textContent = 'Home';
  today.textContent = 'Today';
  week.textContent = 'Week';
  projects.textContent = 'Projects';
  
  side.append(tasks, today, week, projects);
  container.append(side);

  /* Main */
  const main = document.createElement('div');
  const mainHeader = document.createElement('div');
  const mainText = document.createElement('p');
  const mainBtn = document.createElement('button');
  main.classList.add('main');
  mainText.classList.add('mainText');
  mainBtn.classList.add('mainBtn');

  mainText.textContent = 'Home';
  mainBtn.textContent = 'Add task';

  mainHeader.append(mainText, mainBtn);
  main.append(mainHeader);
  container.append(main);
};

export { format };