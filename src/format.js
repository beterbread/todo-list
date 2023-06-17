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
};

export { format };