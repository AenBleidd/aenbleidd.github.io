#!/usr/bin/env python3
# pip install markdown

import markdown
import re

blog_posts = [
    {
        'file': 'boinc_central_autodock_vina_vinardo_raccoon2',
        'title': 'Molecular docking with Autodock4, Vina and Vinardo on BOINC Central',
        'description': 'This tutorial explains how to perform molecular docking using AutoDock4, Vina, and Vinardo on BOINC Central.',
        'keywords': 'BOINC, Vina, Vinardo, AutoDock4, Raccoon2, molecular docking',
        'type': 'tutorial',
        'date': '2025.11.24',
        'image': 'images/tutorial_autodock_vina_preview.png'
    },
    {
        'file': '2023.10.14',
        'title': 'Introduction',
        'description': 'Find more information about the purpose of this blog about BOINC development.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information',
        'type': 'blog',
        'date': '2023.10.14',
        'image': 'images/2023.10.14.jpg'
    },
    {
        'file': '2024.02.28',
        'title': 'Vanilla BOINC packages: the reason and the purpose',
        'description': 'Find more details about the purpose of vanilla BOINC packages for DEB and RPM based Linux distributions.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, Linux, DEB, RPM',
        'type': 'blog',
        'date': '2024.02.28',
        'image': 'images/boinc_tux.png'
    },
    {
        'file': '2024.03.16',
        'title': 'Android BOINC: where are my GPUs?',
        'description': 'Find more information about Android GPUs and their detection by BOINC client.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, Android, GPU',
        'type': 'blog',
        'date': '2024.03.16',
        'image': 'images/boinc_android.png'
    },
    {
        'file': '2024.03.18',
        'title': 'Major BOINC version change',
        'description': 'Find more information about the new major release of BOINC.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, release',
        'type': 'blog',
        'date': '2024.03.18',
        'image': 'images/boinc_7_8.png'
    },
    {
        'file': '2024.04.01',
        'title': 'BOINC Release 8.0.0 and liblzma vulnerability',
        'description': 'Find more information about the liblzma vulnerability and its impact on BOINC.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, liblzma, vulnerability',
        'type': 'blog',
        'date': '2024.04.01',
        'image': 'images/74f1822a50ba58c7.jpeg'
    },
    {
        'file': '2024.10.13',
        'title': 'BOINC Workshop 2024: What\'s next?',
        'description': 'Find more information about the BOINC Workshop 2024 hosted by CERN in Geneva, Switzerland.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, workshop, CERN, Geneva',
        'type': 'blog',
        'date': '2024.10.13',
        'image': 'images/IMG_3537.JPG'
    },
    {
        'file': '2024.11.02',
        'title': 'BOINC Development Status Report: October 2024',
        'description': 'Read the monthly report for October 2024 to find more information about the WSL and Docker features in the upcoming release of BOINC.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, WSL, Docker, release',
        'type': 'blog',
        'date': '2024.11.02',
        'image': 'images/IMG_3682.jpg'
    },
    {
        'file': '2024.12.01',
        'title': 'BOINC Development Status Report: November 2024',
        'description': 'Read the monthly report for November 2024 to find more information about the Windows installer and BUDA: the new Docker based type of BOINC applications.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, Windows installer, BUDA, Docker, release',
        'type': 'blog',
        'date': '2024.12.01',
        'image': 'images/Statistics_2024.png'
    },
    {
        'file': '2025.01.01',
        'title': 'BOINC Development Status Report: December 2024',
        'description': 'Read the monthly report for December 2024 to find more information about the 2024 year recap.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, 2024 recap',
        'type': 'blog',
        'date': '2025.01.01',
        'image': 'images/2025.01.01.png'
    },
    {
        'file': '2025.02.02',
        'title': 'BOINC Development Status Report: January 2025',
        'description': 'Read the monthly report for January 2025 to find more information about the future release plans.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, January 2025, release plans',
        'type': 'blog',
        'date': '2025.02.02',
        'image': 'images/IMG_3711.jpg'
    },
    {
        'file': '2025.03.11',
        'title': 'BOINC Development Status Report: February 2025',
        'description': 'Read the monthly report for February 2025 to find more information about the future release plans.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, February 2025, release plans',
        'type': 'blog',
        'date': '2025.03.11',
        'image': 'images/2025.03.11.png'
    },
    {
        'file': '2025.04.04',
        'title': 'BOINC Development Status Report: March 2025',
        'description': 'Read the monthly report for March 2025 to find more information about the upcoming release with BUDA applications support.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, March 2025, upcoming release, BUDA, Docker, Podman, BOINC Central',
        'type': 'blog',
        'date': '2025.04.04',
        'image': 'images/2025.04.04.png'
    },
    {
        'file': '2025.05.11',
        'title': 'BOINC Development Status Report: April 2025',
        'description': 'Read the monthly report for April 2025 to find more information about the upcoming release with BUDA applications support.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, April 2025, upcoming release, BUDA, Docker, Podman, BOINC Central',
        'type': 'blog',
        'date': '2025.05.11',
        'image': 'images/2025.05.11.png'
    },
    {
        'file': '2025.06.04',
        'title': 'BOINC Development Status Report: May 2025',
        'description': 'Read the monthly report for May 2025 to find more information about first milestone achieved by BOINC Central.',
        'keywords': 'BOINC, development, Vitalii Koshura, updates, information, May 2025, BOINC Central',
        'type': 'blog',
        'date': '2025.06.04',
        'image': 'images/2025.06.04.png'
    },
    {
        'file': '2025.07.11',
        'title': 'Blender application for BOINC Central',
        'description': 'Read the information about the new upcoming Blender application for BOINC Central.',
        'keywords': 'BOINC, development, Vitalii Koshura, BOINC Central, Blender',
        'type': 'blog',
        'date': '2025.07.11',
        'image': 'images/2025.07.11.jpeg'
    },
    {
        'file': '2025.10.17',
        'title': 'BOINC WSL image installer and other updates',
        'description': 'Read the information about the new BOINC WSL image installer for BUDA jobs and some other minor updates.',
        'keywords': 'BOINC, development, Vitalii Koshura, BOINC Central, WSL, BUDA',
        'type': 'blog',
        'date': '2025.10.17',
        'image': 'images/2025.10.17.png'
    }
]

previous_post = None
for post in blog_posts:
    file_path = f"md/{post['file']}.md"
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    html_content = markdown.markdown(content)
    with open(f"{post['file']}.html", 'w', encoding='utf-8') as f:
        f.write("""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset='utf-8'>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="fediverse:creator" content="@AenBleidd@fosstodon.org">""")
        f.write(f'<meta name="description" content="{post["description"]}">')
        f.write(f'<meta name="keywords" content="{post["keywords"]}">')
        f.write(f'<meta propery="og:title" content="{post["title"]}">')
        f.write(f'<meta propery="og:description" content="{post["description"]}">')
        f.write(f'<meta propery="og:type" content="website">')
        f.write(f'<meta propery="og:url" content="https://aenbleidd.github.io/{post["file"]}.html">')
        f.write(f'<meta propery="og:image" content="https://aenbleidd.github.io/{post["image"]}">')
        f.write(f'<link rel="canonical" href="https://aenbleidd.github.io/{post["file"]}.html">')
        f.write(f'<title>{post["title"]}</title>')
        f.write("""<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" type="text/css" href="stylesheets/stylesheet.css" media="screen">
<link rel="stylesheet" type="text/css" href="stylesheets/github-dark.css" media="screen">
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RB9QYE55Z3"></script>
<script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-RB9QYE55Z3');</script>
<body>""")
        f.write(f'<header><div class="container"><h1>Vitalii Koshura: Maintaining BOINC / {post["title"]}</h1></div></header>')
        f.write("""<div class="container"><aside id="menu"><ul id="menu_items"><li><a href = 'index.html'>Home</a></li><li><a href = 'blog.html'>Blog</a></li><li><a href = 'tutorials.html'>Tutorials</a></li></ul></aside><section id="main_content"><div id="blog_post_single">""")
        f.write(html_content)
        f.write('</div>')
        if post['type'] == 'blog':
            if previous_post and post['type'] == 'blog':
                f.write(f'<div id="previous_post_link"><a href="{previous_post["file"]}.html">Previous Post: {previous_post["title"]}</a></div>')
            f.write("""</section><aside id="right_block" style="margin-left: 100px;"></aside></div>
    <script type="text/javascript">var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));</script>
    <script type="text/javascript">try {var pageTracker = _gat._getTracker("UA-64184707-1");pageTracker._trackPageview();} catch(err) {}</script><script src="../javascripts/main.js" type="module"></script>""")
            f.write('<footer><div class="container"><p>Vitalii Koshura © 2025</p></div></footer></body></html>')
            previous_post = post

last_blog_posts = blog_posts[-2:]
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
    with open(f"md/{last_blog_posts[1]['file']}.md", 'r', encoding='utf-8') as f:
        md_content = f.read()
    html_content = markdown.markdown(md_content)
    content = re.sub(r'<!--BLOG REPLACE START-->.*<!--BLOG REPLACE END-->', f'<!--BLOG REPLACE START--><div id="blog_content"><h1>{last_blog_posts[1]["title"]}</h1>{html_content}</div><div id="previous_post_link"><a href="{last_blog_posts[0]["file"]}.html">Previous Post: {last_blog_posts[0]["title"]}</a></div><!--BLOG REPLACE END-->', content, flags=re.DOTALL)
    with open('index.html', 'w', encoding='utf-8') as f:
      f.write(content)

with open('blog.html', 'r', encoding='utf-8') as f:
    content = f.read()
    html_content = "<ul>"
    html_content += "".join([f'<li><a href="{post["file"]}.html">{post["file"]}:\t{post["title"]}</a></li>' for post in reversed(blog_posts) if post['type'] == 'blog'])
    html_content += "</ul>"
    content = re.sub(r'<!--BLOG REPLACE START-->.*<!--BLOG REPLACE END-->', f'<!--BLOG REPLACE START--><div id="blog_content">{html_content}</div><!--BLOG REPLACE END-->', content, flags=re.DOTALL)
    with open('blog.html', 'w', encoding='utf-8') as f:
        f.write(content)

with open('tutorials.html', 'r', encoding='utf-8') as f:
    content = f.read()
    html_content = "<ul>"
    html_content += "".join([f'<li><a href="{post["file"]}.html">{post["title"]}</a></li>' for post in reversed(blog_posts) if post['type'] == 'tutorial'])
    html_content += "</ul>"
    content = re.sub(r'<!--BLOG REPLACE START-->.*<!--BLOG REPLACE END-->', f'<!--BLOG REPLACE START--><div id="blog_content">{html_content}</div><!--BLOG REPLACE END-->', content, flags=re.DOTALL)
    with open('tutorials.html', 'w', encoding='utf-8') as f:
        f.write(content)

with open('rss.xml', 'w', encoding='utf-8') as f:
    f.write("""<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
<title>Vitalii Koshura: Maintaining BOINC</title>
<link href="https://aenbleidd.github.io/rss.xml" rel="self"/>
<link href="https://aenbleidd.github.io/"/>""")
    f.write(f'<updated>{blog_posts[-1]['file'].replace('.', '-')}T00:00:00Z</updated>')
    f.write("""<author>
<name>Vitalii Koshura</name>
</author>
<id>https://aenbleidd.github.io/</id>""")
    for post in reversed(blog_posts):
        f.write(f"""<entry>
<title>{post['title']}</title>
<link href="https://aenbleidd.github.io/{post['file']}.html"/>
<id>https://aenbleidd.github.io/{post['file']}.html</id>
<updated>{post['date'].replace('.', '-')}T00:00:00Z</updated>
<summary>{post['description']}</summary>
</entry>""")
    f.write('</feed>')

with open('sitemap.xml', 'w', encoding='utf-8') as f:
    f.write("""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n""")
    f.write(f'\t<url>\n\t\t<loc>https://aenbleidd.github.io/</loc>\n\t\t<lastmod>{max([post['date'] for post in blog_posts if post['type'] == 'blog']).replace('.', '-')}T00:00:00Z</lastmod>\n\t</url>\n')
    f.write(f'\t<url>\n\t\t<loc>https://aenbleidd.github.io/blog.html</loc>\n\t\t<lastmod>{max([post['date'] for post in blog_posts if post['type'] == 'blog']).replace('.', '-')}T00:00:00Z</lastmod>\n\t</url>\n')
    f.write(f'\t<url>\n\t\t<loc>https://aenbleidd.github.io/tutorials.html</loc>\n\t\t<lastmod>{max([post['date'] for post in blog_posts if post['type'] == 'tutorial']).replace('.', '-')}T00:00:00Z</lastmod>\n\t</url>\n')
    for post in reversed(blog_posts):
        f.write(f'\t<url>\n\t\t<loc>https://aenbleidd.github.io/{post["file"]}.html</loc>\n\t\t<lastmod>{post["date"].replace('.', '-')}T00:00:00Z</lastmod>\n\t</url>\n')
    f.write('</urlset>')

with open('sitemap.txt', 'w', encoding='utf-8') as f:
    f.write('https://aenbleidd.github.io/\n')
    f.write('https://aenbleidd.github.io/blog.html\n')
    f.write('https://aenbleidd.github.io/tutorials.html\n')
    for post in blog_posts:
        f.write(f'https://aenbleidd.github.io/{post["file"]}.html\n')
