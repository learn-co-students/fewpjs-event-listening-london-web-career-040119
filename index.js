function addingEventListener() {
  const input = document.querySelector('#input');
  input.addEventListener('click', (event) => {
    alert('I was clicked!');
  });
}
