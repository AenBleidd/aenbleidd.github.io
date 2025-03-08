const markdownFiles = [
  { file: '2025.02.02.md', title: 'BOINC Development Status Report: January 2025' },
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

  // List of example photo URLs
  const photoList = [
    'https://live.staticflickr.com/65535/54090603617_4bfcc69a65_m.jpg',
    'https://live.staticflickr.com/65535/54091726473_8febd36f74_m.jpg',
    'https://live.staticflickr.com/65535/54090627397_b258a5e165_m.jpg'
    // Add more photo URLs here
  ];

  // Function to display a random photo
  const randomIndex = Math.floor(Math.random() * photoList.length);
  const randomPhotoUrl = photoList[randomIndex];
  const photoElement = document.getElementById('random-photo');
  photoElement.src = randomPhotoUrl;

  markdownFiles.forEach(({ file, title }) => {
    // Add menu item
    const li = document.createElement('li');
    const a = document.createElement('a');
    const htmlFile = file.replace('.md', '.html');
    a.href = `${htmlFile}`;
    a.textContent = title;
    li.appendChild(a);
    blogItems.appendChild(li);
  });
});
