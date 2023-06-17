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
  
  side.append(tasks);
  side.append(today);
  side.append(week);
  side.append(projects);
  container.append(side);

};

export { format };