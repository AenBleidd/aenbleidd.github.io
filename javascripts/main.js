console.log('This would be the main JS file.');

document.addEventListener('DOMContentLoaded', function() {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = '© 2023 Your Company. All rights reserved.';
  footer.appendChild(p);
  document.body.appendChild(footer);
});
