const dollar = 135;

const Productos = [
  {
    id: 1,
    ean: "7445216986224",
    imagen: "gmrc.jpg",
    imagen2: "mouse-genius-dx.jpg",
    categoria: "MOUSES",
    nombre: "MOUSE GENIUS ROJO USB",
    precio: (3.70 * dollar).toFixed(2),
    stock: 0,
    descripcion: "Sensor optico. Resolucion 1000dpi. 3 Botones (izquierda, derecha y central c/rueda).",
    tamano: "No especifica",
    compatibilidad: "Windows 8/ 7/ Vista/ XP y Mac OSX 10.4+",
    conexion: "Conexion USB."
  },
  {
    id: 2,
    ean: 7855963250012,
    imagen: "GTNC.jpg",
    imagen2: "919963-MLA42315046328_062020-F.jpg",
    categoria: "TECLADOS",
    nombre: "TECLADO GENIUS SMART USB KB-102 ESPAÑOL",
    precio: (4.05 * dollar).toFixed(2),
    stock: 13,
    descripcion: "Este teclado Genius es el mejor complemento para hacer todo tipo de actividades. Es cómodo y práctico al momento de redactar documentos, navegar y hacer búsquedas por internet, ya sea en tu trabajo o en la comodidad del hogar.",
    tamano: "440.51 x 139.67 x 20.07 mm (17.34 x 5.50 x 0.79 pulgadas)",
    compatibilidad: "Windows 7, 8, 8.1, 10, Mac OS X 10.8 o superior",
    conexion: "Conexion USB."
  },
  {
    id: 3,
    ean: 7852143259012,
    imagen: "WEBCAM1000x.jpg",
    imagen2: "webcamphoto2.jpg",
    categoria: "WEBCAM",
    nombre: " WEBCAM CAMARA GENIUS FACECAM 1000X 720P CON MICROFONO",
    precio: (18.51 * dollar).toFixed(2),
    stock: 5,
    descripcion: "Genius presenta una nueva cámara web Plug & Play 720p HD, la FaceCam 1000X, ideal para usar con su PC o equipo portátil para chat de video. La calidad de imagen HD de 720p y el zoom 3X le brinda una experiencia de video más clara y atractiva. Además de calidad HD, la FaceCam 1000X incluye un micrófono que para que pueda hablar con claridad. También incluye el software MiVE de Arcsoft, el cual podrá usar con MSN o Skype para crear efectos de imagen, seguimiento facial y otras funciones.",
    tamano: "20 x 22 x 60 mm",
    compatibilidad: "Windows XP, VISTA, 7 o superior, Mac OS 10.4.6 o posterior, Linux 2.6.21 anterior",
    conexion: "Conexion USB."
  },
  {
    id: 4,
    ean: 7852143784215,
    imagen: "FTATX850.jpg",
    imagen2: "Sentey-MBP850-HS_Foto2g.jpg",
    categoria: "FUENTES",
    nombre: "FUENTE ATX 850W SENTEY MODULAR 80 PLUS",
    precio: (41.5 * dollar).toFixed(2),
    stock: 8,
    descripcion: "Fuente de alimentación ultra silenciosa, excelente refrigeración con certificado 80PLUS BRONZE",
    tamano: "160mm (L) x 150mm (W) x 86mm (H)",
    compatibilidad: "ATX",
    conexion: "220v"
  },
  {
    id: 5,
    ean: 7857851484215,
    categoria: "PARLANTES",
    imagen: "tvparlantes.jpg",
    imagen2: "thnvanspiemader.jpg",
    nombre: "PARLANTE THONET VANDER SPIEL MADERA",
    precio: (80 * dollar).toFixed(2),
    stock: 3,
    descripcion: "Con VERTRAG BT HOME CINEMA ™ nunca fue tan fácil disfrutar de tu música. Gracias a su conectividad Bluetooth® y óptica, este compacto sistema 2.0 permite llenar cualquier espacio con un sonido de gran pureza. Con su diseño moderno y de líneas simples, es el perfecto aliado para cualquier habitación y también para tu Smart TV.",
    tamano: "161 x 190 x 240 mm",
    compatibilidad: "N/A",
    conexion: "Bluetooth + S/PDIF (Optical) + RCA Stereo + 3.5 mm"
  },
  {
    id: 6,
    ean: 7852188966542,
    imagen: "cartucho-negro-epson-135-original.jpg",
    imagen2: "epson-135.jpg",
    categoria: "CARTUCHOS EPSON",
    nombre: "CARTUCHO EPSON 135 NEGRO",
    precio: (9 * dollar).toFixed(2),
    stock: 34,
    descripcion: "Las tintas, los papeles especiales, y las impresoras Epson están diseñadas para trabajar juntas para lograr los mejores resultados.",
    tamano: "N/A",
    compatibilidad: "EPSON STYLUS T25, EPSON STYLUS TX123, EPSON STYLUS TX125, EPSON STYLUS TX133, EPSON STYLUS TX135.",
    conexion: "N/A"
  },
  {
    id: 7,
    ean: 7541236784215,
    imagen: "D_NQ_NP_884417-MLA31122952899_062019-O.jpg",
    imagen2: "toner85a.jpg",
    categoria: "TONER",
    nombre: "TONER ORIGINAL PARA HP 85A",
    precio: (8.1 * dollar).toFixed(2),
    stock: 10,
    descripcion: "Este producto HP está garantizado contra defectos en materiales y mano de obra.",
    tamano: "375 x 226 x 125 mm",
    compatibilidad: "Serie de impresoras HP LaserJet Pro P1100; Series de impresoras multifunción HP LaserJet Pro M1130 y M1210",
    conexion: "N/A"
  },
  {
    id: 8,
    ean: 7852143111254,
    imagen: "discoexterno.jpg",
    imagen2: "STEA1000400.jpg",
    categoria: "ALMACENAMIENTO",
    nombre: "DISCO EXTERNO 1TB SEAGATE",
    precio: (45 * dollar).toFixed(2),
    stock: 7,
    descripcion: "Disco externo de muy buen funcionamiento para salvado de datos.",
    tamano: "Tamaño de 2.5.",
    compatibilidad: "Es compatible con Windows",
    conexion: "Interfaz de conexión: USB 3.0."
  },
  {
    id: 9,
    ean: 7852819464123,
    imagen: "MKheX.jpg",
    imagen2: "mikrotiki.jpg",
    categoria: "ROUTER",
    nombre: "ROUTER MIKROTIK RB-750R2 hEX lite INALAMBRICO",
    precio: (65 * dollar).toFixed(2),
    stock: 5,
    descripcion: "hEX lite es un pequeño enrutador ethernet de cinco puertos.",
    tamano: "28 mm x 113 mm x 89 mm",
    compatibilidad: "N/A",
    conexion: "Voltaje de entrada DC jack 6-30 V"
  },
  {
    id: 10,
    ean: 7852744177254,
    imagen: "ssd240gb.jpg",
    imagen2: "ssd240gb1.jpg",
    categoria: "ALMACENAMIENTO",
    nombre: "DISCO ESTADO SOLIDO 240GB GIGABYTE",
    precio: (45 * dollar).toFixed(2),
    stock: 8,
    descripcion: "Con la unidad en estado sólido Gigabyte vas a incrementar la capacidad de respuesta de tu equipo. Gracias a esta tecnología podrás invertir en velocidad y eficiencia para el inicio, la carga y la transferencia de datos.",
    tamano: "Tamaño de 2.5",
    compatibilidad: "PC, Notebook",
    conexion: "SATA"
  },
  {
    id: 11,
    ean: 2638798643429,
    imagen: "B365MA.jpg",
    imagen2: "PRIME-B365M-A-2-800x800.jpg",
    categoria: "MOTHERBOARDS",
    nombre: "MOTHER ASUS PRIME B365M-A",
    precio: (80 * dollar).toFixed(2),
    stock: 4,
    descripcion: "Placa base Intel LGA-1151 mATX con encabezado Aura Sync RGB, DDR4 2666MHz, soporte M.2, HDMI, memoria Intel Optane lista, SATA 6Gbps",
    tamano: "9.6 pulgadas x 8.6 pulgadas (24.4 cm x 21.8 cm)",
    compatibilidad: "Sistema operativo: Windows® 10 de 64 bits",
    conexion: "ATX"
  },
  {
    id: 12,
    ean: 3209945431597,
    imagen: "CCAST.jpg",
    imagen2: "chormecast.jpg",
    categoria: "CONECTIVIDAD",
    nombre: "CHROMECAST PC HDMI GOOGLE",
    precio: (20 * dollar).toFixed(2),
    stock: 10,
    descripcion: "Con Chromecast, vos tenes el control. Elegí entre más de 200.000 películas y programas de TV, 30 millones de canciones, además de emisoras de radio, deportes, juegos y mucho más. ¡Descubrí una amplia variedad de contenido gratuito, de suscripción o pago de miles de aplicaciones!",
    tamano: "(An x Al x D): 1.38 x 16.2 x 5.18 cm",
    compatibilidad: "Android, IOS, Mac, Windows",
    conexion: "WIFI/HDMI"
  },
  {
    id: 13,
    ean: 1915173566801,
    imagen: `GAH410M.jpg`,
    imagen2: "h410foho2.jpg",
    categoria: "MOTHERBOARDS",
    nombre: "MOTHER GIGABYTE H410",
    precio: (35 * dollar).toFixed(2),
    stock: 3,
    descripcion: "Intel® H410 Ultra Durable Motherboard with GIGABYTE 8118 Gaming LAN, Anti-Sulfur Resistor, Smart Fan 5",
    tamano: "N/A",
    compatibilidad: "N/A",
    conexion: "ATX"
  },
  {
    id: 14,
    ean: 4374288521415,
    imagen: `GF210.jpg`,
    imagen2: "gf2102.jpg",
    categoria: "VIDEO",
    nombre: "PLACA VIDEO GF210 1GB GFORCE",
    precio: (45 * dollar).toFixed(2),
    stock: 10,
    descripcion: "Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.",
    tamano: "1GB RAM",
    compatibilidad: "DIRECTX / OPENGL",
    conexion: "PCI-eXpress"
  },
  {
    id: 15,
    ean: 7854532154215,
    imagen: `GMTB.jpg`,
    imagen2: "mouse-genius-micro-traveler-21.jpg",
    categoria: "MOUSES",
    nombre: "MOUSE GENIUS BLANCO MINI CABLE RETRACTIL",
    precio: (11 * dollar).toFixed(2),
    stock: 10,
    descripcion: "MOUSE DE DIMENSIONES PEQUEÑAS CON CABLE RETRACTIL IDEAL PARA TRANSPORTAR",
    tamano: "(Ancho x Profundidad x Altura) - 74 x 39 x 28 mm",
    compatibilidad: "Windows 7,Windows 8,Windows 8.1,Windows 10,macOS X 10.8",
    conexion: "USB"
  },
  {
    id: 16,
    ean: 7932653966542,
    imagen: `GPU115.jpg`,
    imagen2: "U115.jpg",
    categoria: "PARLANTES",
    nombre: "PARLANTES GENIUS USB CHICOS",
    precio: (9 * dollar).toFixed(2),
    stock: 10,
    descripcion: "Salida total RMS: 1,5 watts, Potencia máxima total: 3 watts, Energía a través de puerto USB de computadora portátil o de escritorio",
    tamano: "N/A",
    compatibilidad: "Win7, Vista, XP, Mac 10.0 o superior",
    conexion: "Jack 3.5 / USB"
  },
  {
    id: 17,
    ean: 7500365241235,
    imagen: `OFT75.jpg`,
    imagen2: "OFT75.jpg",
    categoria: "RESMAS",
    nombre: "RESMA 75Gr A4 500 HOJAS",
    precio: (3.5 * dollar).toFixed(2),
    stock: 20,
    descripcion: "500 HOJAS A4 DE 75Gr COLOR BLANCO",
    tamano: "210 x 297 mm",
    compatibilidad: "N/A",
    conexion: "N/A"
  },
  {
    id: 18,
    ean: 7171813245540,
    imagen: `TR900S.jpg`,
    imagen2: "TR900S.jpg",
    categoria: "MOUSES",
    nombre: "MOUSE GENIUS INALAMBRICO CON PILAS",
    precio: (15 * dollar).toFixed(2),
    stock: 10,
    descripcion: "MOUSE INALAMBRICO CON ALCANCE 10 METROS, INLCUYE PILAS",
    tamano: "N/A",
    compatibilidad: "Win7, Vista, XP, Mac 10.0 o superior",
    conexion: "USB"
  },
  {
    id: 19,
    ean: 2638736533429,
    imagen: "/toners/cf410.jpg",
    // imagen2: "",
    categoria: "TONERS",
    nombre: "Toner Alternativo Cf410",
    precio: (21.30 * dollar).toFixed(2),
    stock: 1,
    descripcion: "Rendimiento aproximado: 2300 páginas al 5% de cobertura",
    // tamano: "N/A",
    compatibilidad: "Color LaserJet Pro M452dw/M452nw/M452dn HP Color LaserJet Pro MFP M477fnw/M477fdn/M477fdw",
    // conexion: "N/A"
  },
  {
    id: 20,
    ean: 7855598643429,
    imagen: "toners/evertec12a.jpg",
    categoria: "TONERS",
    nombre: "TONER ALTERNATIVO 12A",
    precio: (5.75 * dollar).toFixed(2),
    stock: 2,
    descripcion: "Toner Alternativo para HP 12A. Rendimiento : 2000 Copias al 5% de cobertura de la hoja.",
    // tamano: "N/A",
    compatibilidad: "LaserJet 1010/1012/1015/1018/1020/1022/3015/3020/3030/3050/3052/3055 M1005/1319",
    // conexion: "N/A"
  },
  {
    id: 21,
    ean: 7855598434,
    imagen: "toners/toner85a.png",
    categoria: "TONERS",
    nombre: "TONER HP 35A/36A/85A NEGRO ALTERNATIVO",
    precio: (7.5 * dollar).toFixed(2),
    stock: 2,
    descripcion: "Toner Alternativo para HP. Rendimiento : 2000 Copias al 5% de cobertura de la hoja.",
    // tamano: "N/A",
    compatibilidad: "LaserJet -P1005/ P1006/ P1505/ P1505N/ M1120/ M1120N/ M1522/ M1522N/ M1522NF/ P1100/ P1102/ P1102W/ M1130/ 1210MFP / M1132MFP/ P1560/ P1566/ 1600/ 1606/ M1536DNF/ P1106",
    // conexion: "N/A"
  },
  {
    id: 22,
    ean: 785553498434,
    imagen: "toners/toner111s.jpg",
    categoria: "TONERS",
    nombre: "Toner Alternativo Samsung 111s",
    precio: (13.07 * dollar).toFixed(2),
    stock: 2,
    descripcion: "Rendimiento : 1000 Copias al 5% de cobertura de la hoja.",
    // tamano: "N/A",
    compatibilidad: "M-2020/2020W/2022/2022W/2070/2070W",
    // conexion: "N/A"
  },
  {
    id: 23,
    ean: 234234234,
    imagen: "toners/1060evertec.jpg",
    categoria: "TONERS",
    nombre: "Toner Alternativo Brother Tn1060",
    precio: (7.08 * dollar).toFixed(2),
    stock: 2,
    descripcion: "Rendimiento : Negro 1000 copias al 5% de cobertura de la pagina",
    // tamano: "N/A",
    compatibilidad: "HL-1110/1110E/1110R/1112/1112E/1200 DCP-1510/1510R/1512/1512R MFC-1810/1810E/1810R/1815/dcp1617w",
    // conexion: "N/A"
  },
  {
    id: 24,
    ean: 234234223432434,
    imagen: "toners/DR1060.jpg",
    categoria: "TONERS",
    nombre: "DRUM - UNIDAD DE IMAGEN DR1060 - BROTHER",
    precio: (12.60 * dollar).toFixed(2),
    stock: 2,
    descripcion: "RENDIMIENTO DE IMPRESION (valores aproximados): 10.000 Impresiones",
    // tamano: "N/A",
    compatibilidad: "Brother HL 1110, HL 1112, HL 1212W, DCP 1510, DCP 1510, DCP 1512, DCP 1518, DCP 1617NW, MFC 1810 , MFC 1811, MFC 1813, MFC 1815, MFC 1818.",
    // conexion: "N/A"
  },
  {
    id: 25,
    ean: 2323432434,
    imagen: "toners/79a.jpg",
    categoria: "TONERS",
    nombre: "toner alternativo HP CF79A NEGRO",
    precio: (10.85 * dollar).toFixed(2),
    stock: 1,
    descripcion: "RENDIMIENTO DE IMPRESION (valores aproximados): 10.000 Impresiones",
    // tamano: "N/A",
    compatibilidad: "HP M12W",
    // conexion: "N/A"
  },
  {
    id: 26,
    ean: 23287987934,
    imagen: "toners/17A.jpg",
    categoria: "TONERS",
    nombre: "toner alternativo HP CF17A SIN CHIP NEGRO",
    precio: (8.30 * dollar).toFixed(2),
    stock: 1,
    descripcion: "RENDIMIENTO DE IMPRESION (valores aproximados): 10.000 Impresiones",
    // tamano: "N/A",
    compatibilidad: "Laserjet Pro M102w M130fw, Laserjet Pro MFP M130fw M130nw M130fn M130a ",
    // conexion: "N/A"
  }
]

export default Productos;