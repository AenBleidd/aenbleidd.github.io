import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const markdownFiles = [
  { file: '2025.01.01.md', title: 'BOINC Development Status Report: December 2024' },
  { file: '2024.12.01.md', title: 'BOINC Development Status Report: November 2024' },
  { file: '2024.11.02.md', title: 'BOINC Development Status Report: October 2024' },
  { file: '2024.10.13.md', title: 'BOINC Workshop 2024: What\'s next?' },
  { file: '2024.04.01.md', title: 'BOINC Release 8.0.0 and liblzma vulnerability' },
  { file: '2024.03.18.md', title: 'Major BOINC version change' },
  { file: '2024.03.16.md', title: 'Android BOINC: where are my GPUs?' },
  { file: '2024.02.28.md', title: 'Vanilla BOINC packages: the reason and the purpose' },
  { file: '2023.10.14.md', title: 'Introduction' }
];

document.addEventListener('DOMContentLoaded', function() {
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
