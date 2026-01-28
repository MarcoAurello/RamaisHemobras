let data = [];

fetch('ramais.json')
  .then(res => res.json())
  .then(json => {
    data = json;
    renderTable(data);
  });

const searchInput = document.getElementById('search');
const results = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = data.filter(item =>
    item.nome.toLowerCase().includes(term) ||
    item.setor.toLowerCase().includes(term)
  );
  renderTable(filtered);
});

function renderTable(items) {
  results.innerHTML = '';
  items.forEach(item => {
    const row = `<tr>
      <td>${item.nome}</td>
      <td>${item.setor}</td>
      <td>${item.ramal}</td>
    </tr>`;
    results.innerHTML += row;
  });
}
