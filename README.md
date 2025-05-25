# NewPortfolio
New Portfolio, for new oportunities 

(Angular Structure)>>
my-angular-portfolio/
├── src/
│   ├── index.html                   # Punto de entrada HTML (carga FontAwesome)
│   ├── styles.css                   # Estilos CSS globales
│   ├── main.ts                      # Archivo principal de Angular (arranca la aplicación)
│   ├── app/
│   │   ├── app.config.ts            # Configuración global (rutas, animaciones)
│   │   ├── app.component.ts         # Componente raíz de la aplicación
│   │   ├── app.component.html       # Plantilla principal (ensambla las secciones)
│   │   ├── app.component.css        # Estilos para el layout principal
│   │   ├── components/              # Carpeta para componentes de secciones específicas
│   │   │   ├── header/
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   └── header.component.css
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   └── footer.component.css
│   │   │   ├── services/
│   │   │   │   ├── services.component.ts
│   │   │   │   ├── services.component.html
│   │   │   │   └── services.component.css
│   │   │   ├── experience/
│   │   │   │   ├── experience.component.ts
│   │   │   │   ├── experience.component.html
│   │   │   │   └── experience.component.css
│   │   │   ├── portfolio/
│   │   │   │   ├── portfolio.component.ts
│   │   │   │   ├── portfolio.component.html
│   │   │   │   └── portfolio.component.css
│   │   │   └── testimonial/
│   │   │       ├── testimonial.component.ts
│   │   │       ├── testimonial.component.html
│   │   │       └── testimonial.component.css
│   │   └── assets/                  # Carpeta por defecto para assets estáticos
│   │       └── images/              # Todas tus imágenes deben ir aquí (profile, logos, etc.)
│   │           ├── profile-hero.jpg
│   │           ├── logo-company1.png
│   │           └── ...
│   └── public/                      # ALTERNATIVA A 'assets' si `angular.json` apunta aquí (Angular 17+)
│       └── images/
│           ├── ...
└── angular.json                     # Archivo de configuración principal de Angular CLI
