**Uncle Doge Site**

*** How to test locally: ***

Requirements:
NodeJS

1.Go inside project folder
2.Run "npm install"
3.Run "npm run dev"


*** How to deploy to server: ***

1.Go inside project folder
2.Run "npm install"
3.Run "npm run build"
4.Go into build folder and add a ".htaccess" file with the following contents:

/////////////

RewriteOptions inherit
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off 
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
RewriteBase /subdirectory
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>

/////////////

5.Select all contents in build folder and zip it
6.Upload zip into server directory and extract it
7.Done. Your website is deployed


