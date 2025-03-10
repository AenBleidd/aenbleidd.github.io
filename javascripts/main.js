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

  const rightBlock = document.getElementById('right_block');

  const randomPhotoContainer = document.createElement('div');
  randomPhotoContainer.id = 'random_photo';
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
  rightBlock.appendChild(randomPhotoContainer);

  const usefulLinksContainer = document.createElement('div');
  usefulLinksContainer.id = 'useful_links';
  usefulLinksContainer.style.marginTop = '50px';
  const h3UsefulLinks = document.createElement('h3');
  h3UsefulLinks.textContent = 'Useful links';
  usefulLinksContainer.appendChild(h3UsefulLinks);
  const boincButton = document.createElement('a');
  boincButton.href = 'https://boinc.berkeley.edu/download.php';
  boincButton.target = '_blank';
  boincButton.rel = 'noopener noreferrer';
  boincButton.className = 'boinc-button';
  const boincLogo = document.createElement('img');
  boincLogo.src = 'https://raw.githubusercontent.com/BOINC/boinc/refs/heads/master/android/BOINC/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png';
  boincLogo.alt = 'BOINC Logo';
  boincLogo.width = 30;
  boincLogo.height = 30;
  boincButton.appendChild(boincLogo);
  boincButton.appendChild(document.createTextNode('Download BOINC'));
  usefulLinksContainer.appendChild(boincButton);
  const scienceUnitedButton = document.createElement('a');
  scienceUnitedButton.href = 'https://scienceunited.org/su_join.php';
  scienceUnitedButton.target = '_blank';
  scienceUnitedButton.rel = 'noopener noreferrer';
  scienceUnitedButton.className = 'boinc-button';
  const scienceUnitedLogo = document.createElement('img');
  scienceUnitedLogo.src = 'https://scienceunited.org/power.png?raw=true';
  scienceUnitedLogo.alt = 'Science United Logo';
  scienceUnitedLogo.width = 30;
  scienceUnitedLogo.height = 30;
  scienceUnitedButton.appendChild(scienceUnitedLogo);
  scienceUnitedButton.appendChild(document.createTextNode('Join Science United'));
  usefulLinksContainer.appendChild(scienceUnitedButton);
  const youtubeButton = document.createElement('a');
  youtubeButton.href = 'https://www.youtube.com/channel/UCPiLkvr_N56hhISGzhfDv1w';
  youtubeButton.target = '_blank';
  youtubeButton.rel = 'noopener noreferrer';
  youtubeButton.className = 'boinc-button';
  const youtubeLogo = document.createElement('img');
  youtubeLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png';
  youtubeLogo.alt = 'YouTube Logo';
  youtubeLogo.width = 30;
  youtubeLogo.height = 30;
  youtubeButton.appendChild(youtubeLogo);
  youtubeButton.appendChild(document.createTextNode('My BOINC videos'));
  usefulLinksContainer.appendChild(youtubeButton);
  const githubButton = document.createElement('a');
  githubButton.href = 'https://github.com/AenBleidd';
  githubButton.target = '_blank';
  githubButton.rel = 'noopener noreferrer';
  githubButton.className = 'boinc-button';
  const githubLogo = document.createElement('img');
  githubLogo.src = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';
  githubLogo.alt = 'GitHub Logo';
  githubLogo.width = 30;
  githubLogo.height = 30;
  githubButton.appendChild(githubLogo);
  githubButton.appendChild(document.createTextNode('My contributions'));
  usefulLinksContainer.appendChild(githubButton);
  const linkedinButton = document.createElement('a');
  linkedinButton.href = 'https://www.linkedin.com/in/aenbleidd/';
  linkedinButton.target = '_blank';
  linkedinButton.rel = 'noopener noreferrer';
  linkedinButton.className = 'boinc-button';
  const linkedinLogo = document.createElement('img');
  linkedinLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg';
  linkedinLogo.alt = 'LinkedIn Logo';
  linkedinLogo.width = 30;
  linkedinLogo.height = 30;
  linkedinButton.appendChild(linkedinLogo);
  linkedinButton.appendChild(document.createTextNode('My CV'));
  usefulLinksContainer.appendChild(linkedinButton);
  const donationButton = document.createElement('a');
  donationButton.href = 'https://thesciencecommons.org/';
  donationButton.target = '_blank';
  donationButton.rel = 'noopener noreferrer';
  donationButton.className = 'boinc-button';
  const donationLogo = document.createElement('img');
  donationLogo.src = 'https://avatars.githubusercontent.com/u/105822116';
  donationLogo.alt = 'The Science Commons Initiative Logo';
  donationLogo.width = 30;
  donationLogo.height = 30;
  donationButton.appendChild(donationLogo);
  donationButton.appendChild(document.createTextNode('Make donation'));
  usefulLinksContainer.appendChild(donationButton);
  // Add more useful links here
  rightBlock.appendChild(usefulLinksContainer);

  const followMeContainer = document.createElement('div');
  followMeContainer.id = 'follow_me';
  followMeContainer.style.marginTop = '50px';
  const h3FollowMe = document.createElement('h3');
  h3FollowMe.textContent = 'Follow me';
  followMeContainer.appendChild(h3FollowMe);
  const xButton = document.createElement('a');
  xButton.href = 'https://twitter.com/AenVampire';
  xButton.target = '_blank';
  xButton.rel = 'noopener noreferrer';
  xButton.className = 'boinc-button';
  const xLogo = document.createElement('img');
  xLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/100px-X_logo_2023.svg.png';
  xLogo.alt = 'X Logo';
  xLogo.width = 30;
  xLogo.height = 30;
  xButton.appendChild(xLogo);
  xButton.appendChild(document.createTextNode('X/Twitter'));
  followMeContainer.appendChild(xButton);
  const mastodonButton = document.createElement('a');
  mastodonButton.href = 'https://fosstodon.org/@AenBleidd';
  mastodonButton.target = '_blank';
  mastodonButton.rel = 'me noopener noreferrer';
  mastodonButton.className = 'boinc-button';
  const mastodonLogo = document.createElement('img');
  mastodonLogo.src = 'https://joinmastodon.org/logos/logo-purple.svg';
  mastodonLogo.alt = 'Mastodon Logo';
  mastodonLogo.width = 30;
  mastodonLogo.height = 30;
  mastodonButton.appendChild(mastodonLogo);
  mastodonButton.appendChild(document.createTextNode('Mastodon'));
  followMeContainer.appendChild(mastodonButton);
  const threadsButton = document.createElement('a');
  threadsButton.href = 'https://www.threads.net/@aenbleidd';
  threadsButton.target = '_blank';
  threadsButton.rel = 'noopener noreferrer';
  threadsButton.className = 'boinc-button';
  const threadsLogo = document.createElement('img');
  threadsLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Threads_%28app%29_logo.svg';
  threadsLogo.alt = 'Threads Logo';
  threadsLogo.width = 30;
  threadsLogo.height = 30;
  threadsButton.appendChild(threadsLogo);
  threadsButton.appendChild(document.createTextNode('Threads'));
  followMeContainer.appendChild(threadsButton);
  const blueskyButton = document.createElement('a');
  blueskyButton.href = 'https://bsky.app/profile/aenbleidd.bsky.social';
  blueskyButton.target = '_blank';
  blueskyButton.rel = 'noopener noreferrer';
  blueskyButton.className = 'boinc-button';
  const blueskyLogo = document.createElement('img');
  blueskyLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Bluesky_Logo.svg/1024px-Bluesky_Logo.svg.png';
  blueskyLogo.alt = 'BlueSky Logo';
  blueskyLogo.width = 30;
  blueskyLogo.height = 30;
  blueskyButton.appendChild(blueskyLogo);
  blueskyButton.appendChild(document.createTextNode('BlueSky'));
  followMeContainer.appendChild(blueskyButton);
  rightBlock.appendChild(followMeContainer);

  const SubscribeSection = document.createElement('div');
  SubscribeSection.id = 'subscribe';
  SubscribeSection.style.marginTop = '50px';
  const h3Subscribe = document.createElement('h3');
  h3Subscribe.textContent = 'Subscribe';
  SubscribeSection.appendChild(h3Subscribe);
  const subscribeButton = document.createElement('a');
  subscribeButton.href = 'rss.xml';
  subscribeButton.target = '_blank';
  subscribeButton.rel = 'noopener noreferrer';
  subscribeButton.className = 'boinc-button';
  const subscribeLogo = document.createElement('img');
  subscribeLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Feed-icon.svg/1280px-Feed-icon.svg.png';
  subscribeLogo.alt = 'RSS Feed Icon';
  subscribeLogo.width = 30;
  subscribeLogo.height = 30;
  subscribeButton.appendChild(subscribeLogo);
  subscribeButton.appendChild(document.createTextNode('Subscribe'));
  SubscribeSection.appendChild(subscribeButton);
  rightBlock.appendChild(SubscribeSection);

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
