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

// List of example photo URLs
const photoList = [
  'https://live.staticflickr.com/65535/54090603617_4bfcc69a65_m.jpg',
  'https://live.staticflickr.com/65535/54091726473_8febd36f74_m.jpg',
  'https://live.staticflickr.com/65535/54090627397_b258a5e165_m.jpg'
  // Add more photo URLs here
];

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.getElementById('menu_items');
  const li = document.createElement('li');
  const aHome = document.createElement('a');
  aHome.href = 'index.html';
  aHome.textContent = 'Home';
  li.appendChild(aHome);
  menuItems.appendChild(li);
  const blogLi = document.createElement('li');
  const blogToggle = document.createElement('a');
  blogToggle.id = 'blog_toggle';
  blogToggle.href = '#';
  blogToggle.textContent = 'Blog';
  const blogItems = document.createElement('ul');
  blogItems.id = 'blog_items';
  blogItems.style.display = 'none';

  blogToggle.addEventListener('click', function(event) {
    event.preventDefault();
    if (blogItems.style.display === 'none') {
      blogItems.style.display = 'block';
    } else {
      blogItems.style.display = 'none';
    }
  });
  blogLi.appendChild(blogToggle);
  blogLi.appendChild(blogItems);
  menuItems.appendChild(blogLi);

  const randomPhotoContainer = document.getElementById('random_photo');
  const h3 = document.createElement('h3');
  h3.textContent = 'Random photo';
  randomPhotoContainer.appendChild(h3);
  const photoContainer = document.createElement('div');
  photoContainer.id = 'photo-container';
  randomPhotoContainer.appendChild(photoContainer);
  const photoElement = document.createElement('img');
  photoElement.id = 'random-photo';
  photoElement.src = '';
  photoElement.alt = 'Random Photo';
  photoContainer.appendChild(photoElement);
  const instagramLink = document.createElement('div');
  instagramLink.id = 'instagram-link';
  const instagramLogo = document.createElement('img');
  instagramLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png';
  instagramLogo.alt = 'Instagram Logo';
  instagramLink.appendChild(instagramLogo);
  const moreInstagramLink = document.createElement('a');
  moreInstagramLink.id = 'more-instagram';
  moreInstagramLink.target = '_blank';
  moreInstagramLink.href = 'https://www.instagram.com/aenbleidd/';
  moreInstagramLink.textContent = 'More on Instagram';
  instagramLink.appendChild(moreInstagramLink);
  photoContainer.appendChild(instagramLink);
  randomPhotoContainer.appendChild(photoContainer);
  const randomIndex = Math.floor(Math.random() * photoList.length);
  const randomPhotoUrl = photoList[randomIndex];
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
