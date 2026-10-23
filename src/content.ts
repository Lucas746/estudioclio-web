// Todos los textos y datos del sitio están en este archivo.
// Para cambiar un texto, se cambia acá y se vuelve a publicar.

export const estudio = {
  nombre: "Estudio Clio",
  nombreCompleto: "Estudio Clio · Arq. Lucas M. Hick",
  arquitecto: "Arq. Lucas Martín Hick",
  matricula: "CAPBA Distrito 1 · Mat. 33313",
  whatsapp: "5491124979061",
  whatsappVisible: "11 2497 9061",
  telefono: "+54 9 11 2497 9061",
  email: "contacto@estudioclio.com",
  instagram: "estudioclio",
  url: "https://www.estudioclio.com",
  pie: "Estudio Clio · Arq. Lucas M. Hick · Hudson, Berazategui",
  // Google Analytics 4 (cuenta contacto@estudioclio.com)
  analytics: "G-XD6JENKQR7",
};

export const mensajeWhatsApp = "Hola, quiero consultar por un proyecto.";

export const waLink = (texto: string = mensajeWhatsApp) =>
  `https://wa.me/${estudio.whatsapp}?text=${encodeURIComponent(texto)}`;

// La galería Espacios se muestra recién cuando todos los renders estén cargados.
export const hayEspacios = () => espacios.every((e) => e.imagen !== null);

export const menu = [
  { href: "#metodo", texto: "Método" },
  { href: "#servicio", texto: "Servicio" },
  { href: "#espacios", texto: "Espacios" },
  { href: "#estudio", texto: "Estudio" },
  { href: "#contacto", texto: "Contacto" },
];

export const hero = {
  zona: "Pueblos del Plata · Hudson · Corredor sur",
  titulo: "Tu casa, sin sorpresas en obra.",
  bajada:
    "Proyecto ejecutivo BIM y dirección de obra. Honorario fijo y plan de obra cerrado desde el primer contrato.",
  imagenAlt:
    "Render de Casa Querandíes, proyecto ejecutivo de Estudio Clio para una casa en barrio cerrado de zona sur",
  botonSecundario: "Ver cómo trabajamos",
};

export const metodo = {
  etiqueta: "Método",
  titulo: "Cada decisión de la casa se toma en el proyecto, antes de construir.",
  pilares: [
    {
      titulo: "Certeza",
      texto:
        "Materiales, medidas y detalles quedan definidos en los planos antes de pedir presupuestos. Todos los constructores cotizan lo mismo, y el presupuesto de obra sale del proyecto, no de una estimación.",
    },
    {
      titulo: "Tranquilidad",
      texto:
        "Antes de empezar sabés cuánto cuesta la obra y cuánto tarda: presupuesto por rubros y plan de obra cerrado, partida por partida. Nuestro honorario es fijo, no un porcentaje de la obra: no ganamos más si la obra sale más cara.",
    },
    {
      titulo: "Dirección",
      texto:
        "Dirigimos desde la experiencia en obra: sabemos dónde aparecen las sorpresas. Seguimos la construcción con el mismo modelo con el que se proyectó la casa, y si la obra se extiende por causa nuestra, no cobramos ningún mes extra de dirección.",
    },
  ],
};

export const servicio = {
  etiqueta: "Servicio",
  titulo: "Del lote a la obra terminada, con el mismo equipo y el mismo modelo.",
  etapas: [
    {
      numero: "01",
      titulo: "Anteproyecto",
      texto:
        "Verificamos qué admite el lote: reglamento del barrio, normativa municipal y presupuesto de obra. Sobre esa base definimos distribución, orientación, vistas y relación con el jardín, con un modelo 3D.",
      items: [
        "Factibilidad del lote",
        "Plantas, cortes y vistas",
        "Imágenes fotorrealistas",
        "Presupuesto general de obra",
      ],
    },
    {
      numero: "02",
      titulo: "Proyecto ejecutivo",
      texto:
        "Desarrollamos el proyecto completo con metodología BIM, con el diseño interior incluido: la casa queda definida hasta la última terminación. Planos, cómputo y plan de obra salen de un mismo modelo y son coherentes entre sí.",
      items: [
        "14 partidas coordinadas",
        "Diseño interior incluido",
        "Cómputo de materiales",
        "Plan de obra cerrado",
      ],
    },
    {
      numero: "03",
      titulo: "Dirección de obra",
      texto:
        "Controlamos que la obra se ejecute según lo documentado y respete el plan de obra.",
      items: [
        "Control en obra de cada etapa constructiva",
        "Plan de obra compartido y actualizado cada semana: si algo se corre, lo ves ahí",
        "Seguís el avance desde el celular, sin viajar a la obra",
      ],
    },
  ],
  plazo: {
    titulo: "Empezás a construir en 4 meses.",
    texto:
      "Mientras el barrio y el municipio aprueban los planos, avanzamos con el proyecto ejecutivo. Cuando sale el permiso de obra, la documentación para construir ya está completa.",
  },
};

export const partidas = {
  etiqueta: "Proyecto ejecutivo",
  titulo: "14 partidas coordinadas en un solo modelo.",
  bajada:
    "Trabajamos con metodología BIM: antes de construir la casa en el terreno, la construimos completa en digital, con su estructura, muros, aberturas e instalaciones en su medida real. Si un caño cruza una viga, lo vemos en la pantalla y lo resolvemos antes de construir.",
  proyecto: "Casa Querandíes",
  // `imagen`: archivo en /public/partidas. N1400 no tiene imagen propia: arma una grilla con `etapasN1400`.
  lista: [
    { codigo: "A100", nombre: "Arquitectura", texto: "Espacios, alturas y luz, recorridos antes de aprobarlos.", imagen: "a100" },
    { codigo: "B200", nombre: "Trabajos preliminares", texto: "El terreno preparado para que la obra empiece en orden.", imagen: "b200" },
    { codigo: "C300", nombre: "Estructura", texto: "La resistencia justa para sostener la vivienda, verificada por cálculo.", imagen: "c300" },
    { codigo: "D400", nombre: "Albañilería", texto: "Muros, contrapisos y revoques definidos al centímetro.", imagen: "d400" },
    { codigo: "E500", nombre: "Carpinterías", texto: "Cada abertura con su medida, su forma de abrir y su herraje.", imagen: "e500" },
    { codigo: "F600", nombre: "Terminaciones", texto: "Pisos, revestimientos y cielorrasos elegidos antes de comprarlos.", imagen: "f600" },
    { codigo: "G700", nombre: "Equipamiento", texto: "Cocina, baños y placares pensados para cómo vivís.", imagen: "g700" },
    { codigo: "H800", nombre: "Iluminación", texto: "Una luz para cada momento del día, decidida antes de cablear.", imagen: "h800" },
    { codigo: "I900", nombre: "Instalación eléctrica", texto: "Cada enchufe y cada llave donde realmente los vas a usar.", imagen: "i900" },
    { codigo: "J1000", nombre: "Instalación sanitaria", texto: "Agua y desagües trazados sin cruzarse con la estructura.", imagen: "j1000" },
    { codigo: "K1100", nombre: "Climatización", texto: "Temperatura pareja en cada ambiente, todo el año.", imagen: "k1100" },
    { codigo: "L1200", nombre: "Gas", texto: "Una instalación segura, lista para el gasista matriculado.", imagen: "l1200" },
    { codigo: "M1300", nombre: "Paisajismo", texto: "Especies, riego y sombra pensados desde el primer plano.", imagen: "m1300" },
    { codigo: "N1400", nombre: "Presupuesto y plan de obra", texto: "Cuánto cuesta y en qué orden se construye, antes de empezar.", imagen: null },
  ],
  etapasN1400: [
    { imagen: "b200", nombre: "Preliminares" },
    { imagen: "c300", nombre: "Estructura" },
    { imagen: "d400", nombre: "Muros" },
    { imagen: "j1000", nombre: "Instalaciones" },
    { imagen: "e500", nombre: "Carpinterías" },
    { imagen: "f600", nombre: "Terminaciones" },
  ],
};

// Galería de renders. Mientras `imagen` sea null se muestra un marcador.
// Cada render va en dos formatos: horizontal 16:9 (escritorio) y vertical 9:16 (celular).
export const espacios: {
  nombre: string;
  alt: string;
  imagen: { horizontal: string; vertical: string } | null;
  fondo: [string, string];
}[] = [
  { nombre: "Galería", alt: "Galería semicubierta de Casa Querandíes", imagen: null, fondo: ["#4a4640", "#1f1d1a"] },
  { nombre: "Living", alt: "Living de Casa Querandíes", imagen: null, fondo: ["#3d4447", "#1a1e20"] },
  { nombre: "Cocina", alt: "Cocina integrada de Casa Querandíes", imagen: null, fondo: ["#48443a", "#201e19"] },
  { nombre: "Dormitorio", alt: "Dormitorio principal de Casa Querandíes", imagen: null, fondo: ["#3f3f3f", "#1b1b1b"] },
  { nombre: "Jardín", alt: "Jardín de Casa Querandíes", imagen: null, fondo: ["#474039", "#1e1b18"] },
];

export const enObra = {
  etiqueta: "En obra",
  titulo: "El proyecto, en el terreno.",
  fotos: [
    { etapa: "Fundaciones", detalle: "platea con las instalaciones previstas antes de hormigonar" },
    { etapa: "Mampostería", detalle: "muros y columnas" },
    { etapa: "Estructura", detalle: "encofrado de vigas" },
    { etapa: "Hormigonado", detalle: "hormigonado de la losa" },
    { etapa: "Armado de losa", detalle: "armado de la losa" },
    { etapa: "Instalación sanitaria", detalle: "desagües bajo la losa" },
    { etapa: "Losa radiante", detalle: "losa radiante" },
    { etapa: "Revestimientos exteriores", detalle: "revestimiento de piedra terminado" },
    { etapa: "Revestimientos interiores", detalle: "baño principal con revestimiento de porcelanato" },
    { etapa: "Equipamiento", detalle: "baño con sanitarios colocados" },
    { etapa: "Pisos", detalle: "pisos del dormitorio" },
    { etapa: "Terminaciones", detalle: "comedor terminado" },
  ],
};

export const comoEmpezamos = {
  etiqueta: "Cómo empezamos",
  titulo: "Antes de contratarnos, te escuchamos.",
  pasos: [
    {
      titulo: "Nos escribís",
      texto:
        "Nos contás dónde está tu lote y en qué momento del proyecto estás. Con eso ya sabemos por dónde empezar.",
    },
    {
      titulo: "Nos reunimos",
      texto:
        "30 minutos para que nos cuentes cómo piensan vivir la casa y veamos juntos qué permite el lote. Al terminar la reunión, ya sabés cuál es nuestro honorario.",
    },
    {
      titulo: "Lo dejamos por escrito",
      texto: "Te enviamos la propuesta con el alcance y el honorario que conversamos.",
    },
    {
      titulo: "Empezamos a proyectar",
      texto: "En la primera reunión de anteproyecto ves tu casa en 3D sobre el lote.",
    },
  ],
};

export const sobreEstudio = {
  etiqueta: "Estudio",
  titulo: "Quién dirige el estudio",
  fotoAlt: "Arquitecto Lucas Martín Hick, director de Estudio Clio",
  parrafos: [
    "Estudio Clio está dirigido por el arquitecto Lucas Martín Hick. Además de arquitecto es técnico electromecánico y dirigió obras de infraestructura: redes de gas, cloacas e instalaciones eléctricas.",
    "Esa formación está en el método: las instalaciones se resuelven en el modelo junto con la arquitectura, y la obra se dirige con la documentación, sin improvisar.",
  ],
};

export const contacto = {
  etiqueta: "Contacto",
  titulo: "Contanos sobre tu lote.",
  bajada: "Con estos datos coordinamos la primera reunión.",
  campos: {
    nombre: "Nombre",
    barrio: "Barrio (ej. Magallanes, Pueblos del Plata)",
    momento: {
      etiqueta: "¿En qué momento estás?",
      opciones: [
        "Estoy por comprar un lote",
        "Tengo el lote",
        "Tengo una idea o anteproyecto",
        "Ya tengo proyecto y busco dirección de obra",
        "Otro",
      ],
      inicial: "Tengo el lote",
    },
    cuando: {
      etiqueta: "¿Cuándo pensás empezar a construir?",
      opciones: [
        "En los próximos 6 meses",
        "Entre 6 meses y un año",
        "Más adelante",
        "Todavía no lo sé",
      ],
      inicial: "En los próximos 6 meses",
    },
    mensaje: "Contanos brevemente tu idea (opcional)",
  },
  boton: "Enviar por WhatsApp",
  directo: "O escribinos directo",
  zona: {
    desarrollo: "Pueblos del Plata",
    barrios: "Elcano · Magallanes · Villalobos · Sebastián Gaboto",
    resto: "Y otros barrios cerrados de Hudson y zona sur",
  },
};

export const pueblosDelPlata = {
  etiqueta: "Pueblos del Plata",
  texto:
    "Proyecto y dirección de obra en los cuatro barrios de Pueblos del Plata, en Hudson: Elcano, Magallanes, Villalobos y Sebastián Gaboto.",
};
