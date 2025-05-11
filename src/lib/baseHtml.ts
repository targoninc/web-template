export async function baseHtml(req: Request) {
    return `<!DOCTYPE html>
<html lang="en">
<head id="header">
    <title>${process.env.SITE_NAME}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${process.env.SITE_NAME}">
    <meta name="theme-color" content="white">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    
    <!-- Material Symbols Filled -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="/styles/style.css"/>
    
    <!-- Icons -->
    <link rel="apple-touch-icon" href="/images/LOGO128.png">
    <link rel="icon" href="/images/LOGO.svg" sizes="128x128">

    <!-- OG Tags -->
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="${process.env.SITE_NAME}"/>
    <meta property="og:description" content="${process.env.SITE_DESCRIPTION}"/>
    <script src="/main.js" type="module"></script>
</head>
<body>
<div id="content"></div>
</body>
</html>`;
}