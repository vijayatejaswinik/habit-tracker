const form = document.getElementById('habit-form');
const input = document.getElementById('habit-input');
const category = document.getElementById('category-select');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const habitText = input.value.trim();
  const categoryValue = category.value;

  if (!habitText || !categoryValue) return;

  const list = document.querySelector(`#${categoryValue} .habit-list`);
  const li = document.createElement('li');
  li.textContent = habitText;

  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
  category.value = '';
});
