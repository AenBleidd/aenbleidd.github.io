import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const markdownFiles = [
  { file: 'blog/2024.03.18.md', title: 'Major BOINC version change' },
  { file: 'blog/2024.03.16.md', title: 'Android BOINC: where are my GPUs?' },
  { file: 'blog/2024.02.28.md', title: 'Vanilla BOINC packages: the reason and the purpose' },
  { file: 'blog/2023.10.14.md', title: 'Introduction' }
];

document.addEventListener('DOMContentLoaded', function() {
  const footer = document.createElement('footer');
  const p = document.createElement('p');
  p.textContent = '© 2025 Vitalii Koshura';
  footer.appendChild(p);
  document.body.appendChild(footer);

  const blogContent = document.getElementById('blog_content');
  const blogItems = document.getElementById('blog_items');
  const blogToggle = document.getElementById('blog_toggle');

  blogToggle.addEventListener('click', function(event) {
    event.preventDefault();
    if (blogItems.style.display === 'none') {
      blogItems.style.display = 'block';
    } else {
      blogItems.style.display = 'none';
    }
  });

  markdownFiles.forEach(({ file, title }) => {
    // Add menu item
    const li = document.createElement('li');
    const a = document.createElement('a');
    const htmlFile = file.replace('.md', '.html');
    a.href = `${htmlFile}`;
    a.textContent = title;
    li.appendChild(a);
    blogItems.appendChild(li);

    // Fetch and render markdown content
    fetch(file)
      .then(response => response.text())
      .then(text => {
        const markdownContent = marked.parse(text);
        const section = document.createElement('section');
        section.id = file;
        section.innerHTML = markdownContent;
        blogContent.appendChild(section);
      })
      .catch(error => console.error('Error fetching the markdown file:', error));
  });
});
