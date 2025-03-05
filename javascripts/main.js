import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
console.log('This would be the main JS file.');
console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
fetch('blog/2023.10.14.md')
  .then(response => response.text())
  .then(text => {
    const markdownContent = marked.parse(text);
    document.getElementById("blog_content").innerHTML = markdownContent;
  })
  .catch(error => console.error('Error fetching the markdown file:', error));
