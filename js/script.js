// Definición de categorías y sus correspondientes patrones de dork

const dorkCategories = [
    {
        name: "Búsquedas Básicas",
        dorks: [
            'site:{site}',
            'intitle:{search}',
            'inurl:{search}',
            'filetype:{search}',
            'intext:{search}',
            'ext:{search}',
            'cache:{site}',
            'related:{site}',
            'link:{site}',
            'allintitle:{search}',
            'allinurl:{search}',
            'allintext:{search}'
        ]
    },
    {
        name: "Dominios Específicos",
        dorks: [
            'site:.gov',
            'site:.edu',
            'site:.org',
            'intitle:index of',
            'filetype:xls inurl:"email" intext:"password"'
        ]
    },
    {
        name: "Búsqueda Avanzada Personalizada",
        dorks: [
            'site:"{site}" ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:json'
        ]
    },
    {
        name: "Búsquedas de Dominio Amplio con Exclusiones",
        dorks: [
            'site:{site} -www -shop -share -ir -mfa'
        ]
    },
    {
        name: "Extensión PHP con Parámetros",
        dorks: [
            'site:{site} ext:php inurl:?'
        ]
    },
    {
        name: "Puntos Finales de API",
        dorks: [
            'site:"{site}" inurl:api | site:*/rest | site:*/v1 | site:*/v2 | site:*/v3'
        ]
    },
    {
        name: "Extensiones",
        dorks: [
            'site:"{site}" ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess | ext:json',
        ]
    },
    {
        name: "Palabras Clave en URL",
        dorks: [
            'inurl:conf | inurl:env | inurl:cgi | inurl:bin | inurl:etc | inurl:root | inurl:sql | inurl:backup | inurl:admin | inurl:php site:{site}',
        ]
    },
    {
        name: "Errores de Servidor",
        dorks: [
            'inurl:"error" | intitle:"exception" | intitle:"failure" | intitle:"server at" | inurl:exception | "database error" | "SQL syntax" | "undefined index" | "unhandled exception" | "stack trace" site:{site}',
        ]
    },
    {
        name: "Parámetros Propensos a XSS",
        dorks: [
            'inurl:q= | inurl:s= | inurl:search= | inurl:query= | inurl:keyword= | inurl:lang= inurl:& site:{site}',
        ]
    },
    {
        name: "Parámetros Propensos a Redirección Abierta",
        dorks: [
            'inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir= | inurl:ret= | inurl:r2= | inurl:page= inurl:& inurl:http site:{site}',
        ]
    },
    {
        name: "Parámetros Propensos a SQLi",
        dorks: [
            'inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:& site:{site}',
        ]
    },
    {
        name: "Parámetros Propensos a SSRF",
        dorks: [
            'inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain=  | inurl:page= inurl:& site:{site}',
        ]
    },
    {
        name: "Parámetros Prospensos a LFI",
        dorks: [
            'inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:& site:{site}',
        ]
    },
    {
        name: "Parámetros Prospensos a RCE",
        dorks: [
            'inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read=  | inurl:ping= inurl:& site:{site}',
        ]
    },
    {
        name: "URL para Carga de Archivos",
        dorks: [
            'site:{site} ”choose file”',
        ]
    },
    {
        name: "Documentación de APIs",
        dorks: [
            'inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer site:"{site}"',
        ]
    },
    {
        name: "Páginas de Logueo",
        dorks: [
            'inurl:login | inurl:signin | intitle:login | intitle:signin | inurl:secure site:{site}',
        ]
    },
    {
        name: "Plataformas de Testing",
        dorks: [
            'inurl:test | inurl:env | inurl:dev | inurl:staging | inurl:sandbox | inurl:debug | inurl:temp | inurl:internal | inurl:demo site:{site}',
        ]
    },
    {
        name: "Documentos sensibles",
        dorks: [
            'site:{site} ext:txt | ext:pdf | ext:xml | ext:xls | ext:xlsx | ext:ppt | ext:pptx | ext:doc | ext:docx intext:"confidential" | intext:"Not for Public Release" | intext:"internal use only" | intext:"do not distribute"',
        ]
    },
    {
        name: "Parámetros Sensibles",
        dorks: [
            'inurl:email= | inurl:phone= | inurl:password= | inurl:secret= inurl:& site:{site}',
        ]
    },
    {
        name: "Administrador de Adobe",
        dorks: [
            'inurl:/content/usergenerated | inurl:/content/dam | inurl:/jcr:content | inurl:/libs/granite | inurl:/etc/clientlibs | inurl:/content/geometrixx | inurl:/bin/wcm | inurl:/crx/de site:{site}',
        ]
    },
    {
        name: "XSS y Redirecciones Abiertas",
        dorks: [
            'site:openbugbounty.org inurl:reports intext:"{site}"',
        ]
    },
    {
        name: "Grupo de Google",
        dorks: [
            'site:groups.google.com {site}',
        ]
    },
    {
        name: "Códigos Filtrados",
        dorks: [
            'site:pastebin.com {site}',
            'site:jsfiddle.net {site}',
            'site:codebeautify.org {site}',
            'site:codepen.io {site}',
            ]
    },
    {
        name: "Almacenamiento en la Nube",
        dorks: [
            'site:s3.amazonaws.com {site}',
            'site:blob.core.windows.net {site}',
            'site:googleapis.com {site}',
            'site:drive.google.com {site}',
            'site:dev.azure.com {site}',
            'site:onedrive.live.com {site}',
            'site:digitaloceanspaces.com {site}',
            'site:sharepoint.com {site}',
            'site:s3-external-1.amazonaws.com {site}',
            'site:s3.dualstack.us-east-1.amazonaws.com {site}',
            'site:dropbox.com/s {site}',
            'site:box.com/s {site}',
            'site:docs.google.com inurl:"/d/" {site}',
        ]
    }
    
];

const siteInput = document.getElementById('siteInput');
const searchInput = document.getElementById('searchInput');
const output = document.getElementById('output');

function generateDorks() {
    const site = siteInput.value.trim();
    const search = searchInput.value.trim();
    output.innerHTML = ''; // Limpiar resultados previos

    if (site === '' && search === '') {
        return; // No mostrar nada si ambos campos están vacíos
    }

    dorkCategories.forEach(category => {
        // Filtrar dorks que requieren al menos uno de los campos
        const relevantDorks = category.dorks.filter(dork => {
            // Si el dork incluye {site} y el sitio está vacío, omitir
            if (dork.includes('{site}') && site === '') return false;
            // Si el dork incluye {search} y el término de búsqueda está vacío, omitir
            if (dork.includes('{search}') && search === '') return false;
            return true;
        });

        if (relevantDorks.length === 0) return; // No mostrar categorías sin dorks relevantes

        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);

        relevantDorks.forEach(dork => {
            let query = dork;

            if (dork.includes('{site}')) {
                query = query.replace(/{site}/g, site);
            }

            if (dork.includes('{search}')) {
                query = query.replace(/{search}/g, search);
            }

            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

            const dorkDiv = document.createElement('div');
            dorkDiv.classList.add('dork');

            const link = document.createElement('a');
            link.href = searchUrl;
            link.textContent = query;
            link.target = '_blank'; // Abrir en una nueva pestaña

            dorkDiv.appendChild(link);
            categoryDiv.appendChild(dorkDiv);
        });

        output.appendChild(categoryDiv);
    });
}

// Event listeners para actualizar las búsquedas en tiempo real
siteInput.addEventListener('input', generateDorks);
searchInput.addEventListener('input', generateDorks);