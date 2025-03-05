import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
console.log('This would be the main JS file.');

const markdownFiles = [
  'blog/2024.02.28.md',
  'blog/2023.10.14.md',
];

document.addEventListener('DOMContentLoaded', function() {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = '© 2025 Vitalii Koshura';
  footer.appendChild(p);
  document.body.appendChild(footer);

  const blogContent = document.getElementById('blog_content');
  markdownFiles.forEach(file => {
    fetch(file)
      .then(response => response.text())
      .then(text => {
        const markdownContent = marked.parse(text);
        const section = document.createElement('section');
        section.innerHTML = markdownContent;
        blogContent.appendChild(section);
      })
      .catch(error => console.error('Error fetching the markdown file:', error));
  });
});
