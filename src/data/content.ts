import type { Article, Category, ListItem } from "@/types/content";

export const categories: Category[] = [
  { slug: "musica", label: "Música" },
  { slug: "cine", label: "Cine" },
  { slug: "libros", label: "Libros" },
  { slug: "ideas", label: "Ideas" },
  { slug: "cultura", label: "Cultura" },
  { slug: "play", label: "Play" },
  { slug: "tech", label: "Tech" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const featuredArticleSlug = "el-arte-de-no-encajar";
export const heroSplitArticleSlug = "la-escena-electronica-chilena-tambien-existe";

export const articles: Article[] = [
  {
    slug: "el-arte-de-no-encajar",
    category: "cultura",
    index: "013",
    title: "El arte de no encajar",
    dek: "Hablamos con la artista visual chilena Renata Solar sobre su nueva exposición, la importancia de lo marginal y cómo el arte también es una forma de resistencia.",
    featured: true,
    body: [
      "Renata Solar lleva más de una década trabajando desde los bordes de la escena visual chilena, y dice que eso nunca fue una estrategia: simplemente nunca encontró un centro al cual pertenecer del todo. Su nueva exposición, que reúne cinco años de trabajo entre dibujo, textil y video, parte precisamente de esa incomodidad.",
      "\"Durante mucho tiempo sentí que tenía que elegir un lenguaje y quedarme ahí. Con los años entendí que lo marginal no es un lugar de llegada, sino un método de trabajo\", cuenta en su taller, rodeada de bocetos que todavía no decide si van a la muestra final.",
      "La exposición no ofrece respuestas fáciles ni un relato ordenado. Es, en sus palabras, un intento de mostrar el proceso tanto como el resultado: los descartes, las dudas, las piezas que no funcionaron y que igual quedaron colgadas porque, dice, \"el fracaso también es información\".",
      "Para Solar, hacer arte desde el margen es hoy una postura tan estética como política. \"No se trata de rechazar lo establecido por rebeldía, sino de insistir en que hay otras formas de mirar que merecen espacio\", explica. La muestra estará abierta durante todo el mes en un espacio independiente del centro de Santiago.",
    ],
  },
  {
    slug: "cinco-discos-que-estan-marcando-el-2025",
    category: "musica",
    index: "017",
    title: "5 discos que están marcando el 2025",
    dek: "Una selección de álbumes que merecen tu atención, sin importar en qué género te muevas.",
    image: {
      src: "/images/cinco-discos.jpg",
      alt: "Vista aérea de un escritorio de madera con laptop, audífonos y teléfono",
      credit: "Foto: Aleksi Tappura / Unsplash",
    },
    body: [
      "Cada año hay discos que se sienten como un corte: antes y después de escucharlos. Esta selección no busca ser exhaustiva ni predecir qué quedará en la historia, sino señalar cinco trabajos que, en lo que va de 2025, han logrado algo cada vez más difícil: sonar necesarios.",
      "Hay de todo un poco. Un debut que nadie esperaba, un regreso que se sintió como reinvención, y al menos un disco que probablemente vas a odiar la primera vez que lo escuches y no vas a poder dejar de escuchar la segunda.",
      "Lo que conecta a estos cinco trabajos no es el género ni la escena, sino una misma voluntad de arriesgar: producciones que no le tienen miedo al silencio, canciones que se toman su tiempo, artistas que prefieren equivocarse a repetirse.",
      "La lista completa, con notas track por track, está disponible para quienes prefieren profundizar antes de decidir si vale la pena el viaje completo.",
    ],
  },
  {
    slug: "la-escena-electronica-chilena-tambien-existe",
    category: "musica",
    index: "018",
    title: "La escena electrónica chilena también existe",
    dek: "Un recorrido por los espacios, artistas y sonidos que están construyendo una nueva ola en Santiago.",
    image: {
      src: "/images/escena-electronica.jpg",
      alt: "Multitud con los brazos en alto frente al escenario de un concierto, entre luces y humo",
      credit: "Foto: Daniel Ebersole / Unsplash",
    },
    body: [
      "Mientras la conversación pública sigue enfocada en un puñado de géneros dominantes, en galpones y clubes pequeños de Santiago se ha ido armando, casi en silencio, una escena electrónica con identidad propia. No pretende ser masiva. Le basta con ser sólida.",
      "Los colectivos que la sostienen —muchos de ellos autogestionados— comparten equipos, difunden en redes con presupuesto cero y programan noches que rara vez superan las doscientas personas. Aun así, la calidad de lo que se produce ahí compite de igual a igual con cualquier escena regional del continente.",
      "\"No estamos tratando de sonar como Berlín ni como Buenos Aires. Estamos tratando de sonar como acá\", dice uno de los productores que recorrimos durante semanas para este reportaje. Esa búsqueda de un sonido propio, más que cualquier otra cosa, es lo que define a esta nueva ola.",
      "El recorrido incluye visitas a cuatro espacios distintos, conversaciones con productores, DJs y programadores, y una selección de pistas para quienes quieran empezar a seguirle la pista a esta escena antes de que deje de ser un secreto.",
    ],
  },
  {
    slug: "vinilo-por-que-volvimos-a-girar-el-disco",
    category: "musica",
    index: "011",
    title: "Vinilo: por qué volvimos a girar el disco",
    dek: "El formato que parecía muerto se transformó en ritual. Una mirada al regreso del vinilo y lo que dice de cómo queremos escuchar música hoy.",
    body: [
      "Durante años el vinilo fue un objeto de nicho, cosa de coleccionistas y nostálgicos. Hoy las prensadoras trabajan a capacidad máxima y hay listas de espera de meses para lanzamientos que, hace una década, nadie hubiera pensado en sacar en este formato.",
      "La explicación fácil habla de nostalgia, pero eso no alcanza para entender por qué tantas personas que nunca vivieron la era del vinilo también se sumaron. Lo que parece estar pasando es otra cosa: un cansancio con el consumo desechable de la música en streaming.",
      "Poner un disco es un compromiso de veinte minutos, sin skip fácil, sin algoritmo de por medio. Esa fricción, que debería ser una desventaja, se volvió exactamente lo que muchos estaban buscando: una razón para escuchar con atención completa.",
      "No se trata de que el streaming vaya a desaparecer, sino de que el vinilo encontró su lugar como contrapeso: un formato lento para una cultura que ya no sabe cómo hacer pausas.",
    ],
  },
  {
    slug: "la-nostalgia-tambien-es-una-forma-de-futuro",
    category: "cine",
    index: "021",
    title: "La nostalgia también es una forma de futuro",
    dek: "El cine como archivo emocional y la manera en que el pasado sigue construyendo nuestro presente.",
    image: {
      src: "/images/la-nostalgia.jpg",
      alt: "Calle de una ciudad al atardecer con luz dorada entre los edificios",
      credit: "Foto: Danka & Peter / Unsplash",
    },
    body: [
      "El cine ha sido, desde siempre, una máquina de archivar tiempo. Pero en los últimos años algo cambió en la forma en que las películas se relacionan con su propio pasado: ya no lo citan, lo habitan.",
      "Esta ola de películas que miran hacia atrás no busca simplemente reciclar estética. En sus mejores versiones, usa la nostalgia como una herramienta para procesar el presente, para entender qué se perdió y qué vale la pena rescatar antes de seguir avanzando.",
      "Hay un riesgo evidente en este ejercicio: quedarse pegado, convertir la memoria en una jaula bonita. Pero cuando funciona, el resultado es exactamente lo contrario: una forma de reconciliarse con el pasado para poder imaginar mejor lo que viene.",
      "Este texto recorre media docena de películas recientes que entendieron esa diferencia, y por qué mirar atrás, bien hecho, puede ser el gesto más futurista del cine actual.",
    ],
  },
  {
    slug: "el-cine-chileno-que-no-llega-a-las-salas",
    category: "cine",
    index: "015",
    title: "El cine chileno que no llega a las salas",
    dek: "Festivales, plataformas y circuitos alternativos: dónde ver el cine nacional que el circuito comercial deja fuera.",
    image: {
      src: "/images/cine-chileno.jpg",
      alt: "Interior de una sala con siluetas de personas a contraluz junto a un ventanal",
      credit: "Foto: Adam Przewoski / Unsplash",
    },
    body: [
      "Cada año se estrenan en Chile decenas de películas nacionales que la mayoría del público nunca sabrá que existieron. No por falta de calidad, sino porque el circuito comercial de salas simplemente no tiene espacio —ni interés— para sostenerlas más de una semana.",
      "La buena noticia es que ese cine no desapareció: se movió. Festivales regionales, cineclubes universitarios, plataformas de streaming independientes y ciclos itinerantes se convirtieron en el verdadero circuito de exhibición para buena parte de la producción nacional.",
      "El desafío ya no es tanto hacer las películas, dicen varios de los realizadores consultados para este texto, sino que alguien las encuentre. Por eso armamos una guía de dónde buscar, actualizada cada temporada, para no perderle el rastro a lo que se está haciendo fuera del radar.",
    ],
  },
  {
    slug: "directoras-que-estan-cambiando-las-reglas",
    category: "cine",
    index: "006",
    title: "Directoras que están cambiando las reglas",
    dek: "Un recorrido por las voces detrás de cámara que están redefiniendo qué historias se cuentan y cómo.",
    image: {
      src: "/images/directoras.jpg",
      alt: "Persona sosteniendo una cámara fotográfica vintage de doble lente",
      credit: "Foto: Jennifer Trovato / Unsplash",
    },
    body: [
      "Durante décadas, la lista de directoras con acceso real a presupuestos grandes y distribución masiva podía contarse casi con una mano. Eso está cambiando, y no solo en número: está cambiando en el tipo de películas que se están haciendo.",
      "Lo que conecta a las directoras que reunimos en este texto no es un estilo común, sino una misma disposición a romper estructuras narrativas que durante mucho tiempo se dieron por obligatorias. Estructuras de tres actos que se abandonan a mitad de camino, géneros que se mezclan sin pedir permiso.",
      "El resultado es un cine que se siente menos predecible, y eso, lejos de ser un defecto, es probablemente su mayor virtud. Un cine que todavía no sabe exactamente en qué se va a convertir, y que por eso vale la pena seguir de cerca.",
    ],
  },
  {
    slug: "libros-para-una-epoca-incierta",
    category: "libros",
    index: "009",
    title: "Libros para una época incierta",
    dek: "Cinco novelas, ensayos y crónicas para entender lo que viene y lo que ya está pasando.",
    image: {
      src: "/images/libros-epoca-incierta.jpg",
      alt: "Libro abierto sobre una mesa de madera",
      credit: "Foto: Alejandro Escamilla / Unsplash",
    },
    body: [
      "No hace falta que un libro hable explícitamente del presente para que termine explicándolo. Esta selección reúne cinco títulos —entre novela, ensayo y crónica— que, cada uno a su manera, ayudan a poner en palabras la sensación difusa de estar viviendo un cambio de época.",
      "Algunos lo hacen desde la ficción especulativa, imaginando futuros que se sienten incómodamente posibles. Otros optan por el camino contrario: mirar el pasado con la suficiente distancia como para reconocer patrones que se repiten.",
      "Lo que todos comparten es una negativa a ofrecer consuelo fácil. Son libros que incomodan antes de aclarar, que complican antes de simplificar, y que —quizás por eso mismo— se quedan dando vueltas mucho después de cerrada la última página.",
    ],
  },
  {
    slug: "editoriales-independientes-que-vale-la-pena-seguir",
    category: "libros",
    index: "004",
    title: "Editoriales independientes que vale la pena seguir",
    dek: "Pequeños sellos, grandes catálogos: dónde buscar cuando las novedades de las grandes editoriales ya no alcanzan.",
    body: [
      "Mientras los grandes grupos editoriales concentran cada vez más el espacio en librerías, un puñado de sellos independientes sigue apostando por catálogos pequeños, cuidados y con una identidad clara. Encontrar sus libros exige un poco más de esfuerzo. Vale la pena.",
      "Lo que distingue a estas editoriales no es solo el tipo de autores que publican, sino la manera en que arman su catálogo: menos títulos, más criterio, y una disposición a apostar por voces que las editoriales grandes considerarían demasiado arriesgadas.",
      "Esta guía reúne seis sellos —chilenos y latinoamericanos— que llevan años sosteniendo ese trabajo casi artesanal, y que en 2025 siguen publicando algunos de los libros más interesantes que vas a encontrar este año.",
    ],
  },
  {
    slug: "releer-en-tiempos-de-scroll-infinito",
    category: "libros",
    index: "019",
    title: "Releer en tiempos de scroll infinito",
    dek: "Por qué volver a los mismos libros puede ser más revelador que perseguir siempre lo nuevo.",
    image: {
      src: "/images/releer-scroll.jpg",
      alt: "Silla junto a una ventana con cortina, al atardecer",
      credit: "Foto: Logan Adermatt / Unsplash",
    },
    body: [
      "Vivimos rodeados de la presión constante de lo nuevo: la novedad editorial, el estreno de la semana, la lista de lo último. En ese contexto, releer un libro que ya conocemos se siente casi como un acto de desperdicio. Este texto argumenta lo contrario.",
      "Releer no es repetir. Cada vez que volvemos a un libro lo hacemos siendo alguien distinto de quien lo leyó la primera vez, y eso cambia radicalmente lo que encontramos en él. Frases que antes pasaban desapercibidas de pronto se vuelven centrales.",
      "En una cultura diseñada para el consumo rápido y constante, detenerse a releer es también una forma de resistir el ritmo del scroll infinito: una decisión consciente de profundizar en lugar de acumular.",
    ],
  },
  {
    slug: "el-fin-del-multitasking",
    category: "ideas",
    index: "008",
    title: "El fin del multitasking",
    dek: "La ciencia detrás de por qué hacer varias cosas a la vez nos hace peores en todas ellas, y cómo estamos reaprendiendo a enfocarnos.",
    image: {
      src: "/images/fin-multitasking.jpg",
      alt: "Escritorio visto desde arriba con monitor, tablet, teclado y notas",
      credit: "Foto: Vadim Sherbakov / Unsplash",
    },
    body: [
      "Durante años el multitasking se vendió como una habilidad deseable, casi una virtud laboral. La evidencia acumulada en la última década cuenta una historia distinta: lo que llamamos hacer varias cosas a la vez es, en realidad, cambiar de foco constantemente, y cada cambio tiene un costo.",
      "Ese costo no es solo de tiempo. Es de calidad: peor memoria, más errores, más fatiga acumulada al final del día. El cerebro no está diseñado para procesar dos tareas complejas en simultáneo, por más que la tecnología nos haya convencido de lo contrario.",
      "Lo interesante es lo que está pasando ahora: una generación entera reaprendiendo, casi desde cero, qué se siente hacer una sola cosa a la vez. Aplicaciones de foco, jornadas sin notificaciones, bloques de trabajo profundo. El péndulo empieza a moverse hacia el otro lado.",
    ],
  },
  {
    slug: "de-quien-es-una-idea",
    category: "ideas",
    index: "022",
    title: "¿De quién es una idea?",
    dek: "Entre la inteligencia artificial, la remezcla y el plagio, las fronteras de la autoría se volvieron más difusas que nunca.",
    image: {
      src: "/images/de-quien-es-una-idea.jpg",
      alt: "Máquina de escribir vintage desarmada en piezas sobre una superficie",
      credit: "Foto: Florian Klauer / Unsplash",
    },
    body: [
      "La pregunta por la autoría no es nueva, pero rara vez había sido tan urgente. Herramientas capaces de generar texto, imagen y música a partir de patrones aprendidos de obras existentes obligan a repensar algo que dábamos por resuelto: qué significa que una idea sea de alguien.",
      "El debate suele polarizarse rápido, entre quienes ven en esto una amenaza existencial para la creación y quienes lo consideran una extensión más de una larga tradición de remezcla, cita e influencia. La realidad, como casi siempre, es más incómoda que cualquiera de los dos extremos.",
      "Este texto no pretende resolver la discusión, sino ordenarla: qué está realmente en juego, qué distingue a la inspiración de la copia, y por qué la respuesta probablemente vaya a depender más de acuerdos sociales que de definiciones técnicas.",
    ],
  },
  {
    slug: "aburrirse-como-acto-de-resistencia",
    category: "ideas",
    index: "003",
    title: "Aburrirse como acto de resistencia",
    dek: "En un mundo diseñado para nunca soltar la atención, no hacer nada se ha vuelto casi radical.",
    image: {
      src: "/images/aburrirse-resistencia.jpg",
      alt: "Dos siluetas caminando por un campo con neblina, al atardecer",
      credit: "Foto: Caleb George / Unsplash",
    },
    body: [
      "Cada segundo de tiempo libre disponible tiene, hoy, algo diseñado para llenarlo. Notificaciones, feeds infinitos, recomendaciones automáticas. En ese contexto, aburrirse deliberadamente —no hacer nada, sin más— se ha convertido en una decisión que va a contracorriente de una economía entera.",
      "La psicología viene señalando desde hace tiempo algo que intuíamos: el aburrimiento no es un vacío improductivo, sino un estado necesario para que surjan ideas nuevas. Cuando la mente deja de recibir estímulo externo, empieza a generar el propio.",
      "Recuperar el aburrimiento no significa romantizar la inacción, sino entender que hay un tipo de pensamiento que solo aparece cuando dejamos de perseguir constantemente el siguiente estímulo. Un lujo cada vez más raro, y por eso mismo, cada vez más valioso.",
    ],
  },
  {
    slug: "santiago-una-ciudad-de-contrastes",
    category: "cultura",
    index: "026",
    title: "Santiago: una ciudad de contrastes",
    dek: "Recorremos la ciudad para encontrar sus rincones más interesantes, lejos del centro.",
    image: {
      src: "/images/santiago-contrastes.jpg",
      alt: "Skyline nocturno de una ciudad con luces distantes junto al agua",
      credit: "Foto: Guillaume / Unsplash",
    },
    body: [
      "Santiago tiene la reputación de ser una ciudad difícil de querer. Gris, extensa, dividida. Pero basta con salir de los circuitos habituales para encontrar otra cosa: barrios que conservan una identidad propia, esquinas que resisten la homogenización, comunidades que insisten en construir cultura desde lo local.",
      "Este recorrido evita a propósito los puntos ya sobreexplorados de la ciudad. En cambio, se detiene en talleres de barrio, ferias que llevan décadas funcionando igual, y proyectos culturales autogestionados que rara vez aparecen en las guías turísticas convencionales.",
      "Lo que emerge no es una versión idealizada de Santiago, sino algo más interesante: una ciudad de contrastes reales, donde conviven el abandono y la vitalidad, muchas veces en la misma cuadra. Una invitación a mirar de nuevo un lugar que creíamos conocido.",
    ],
  },
  {
    slug: "los-oficios-que-la-ciudad-esta-perdiendo",
    category: "cultura",
    index: "012",
    title: "Los oficios que la ciudad está perdiendo",
    dek: "Talabarteros, relojeros, tipógrafos: un registro de los oficios manuales que resisten en medio de la ciudad que cambia.",
    image: {
      src: "/images/oficios-ciudad.jpg",
      alt: "Puerta antigua de madera en una fachada de piedra",
      credit: "Foto: Paul Evans / Unsplash",
    },
    body: [
      "En un puñado de locales que sobreviven casi por terquedad, un grupo cada vez más reducido de artesanos sigue practicando oficios que el resto de la ciudad dejó de necesitar hace tiempo. Este texto es un registro de esos espacios, antes de que desaparezcan.",
      "Ninguno de los oficiantes que visitamos se define a sí mismo como un símbolo de resistencia. Simplemente siguen haciendo lo que siempre supieron hacer, aunque cada año sea más difícil encontrar aprendices dispuestos a continuar el oficio.",
      "Hay algo profundamente actual, sin embargo, en esa insistencia por lo manual y lo lento, justo cuando el resto del mundo se mueve en la dirección exactamente opuesta. Un contrapeso silencioso a una ciudad que parece decidida a automatizarlo todo.",
    ],
  },
  {
    slug: "los-videojuegos-que-se-sienten-como-literatura",
    category: "play",
    index: "010",
    title: "Los videojuegos que se sienten como literatura",
    dek: "Un puñado de títulos que usan la mecánica del juego para contar historias que no podrían existir en ningún otro formato.",
    image: {
      src: "/images/videojuegos-literatura.jpg",
      alt: "Laptop, cámara y cuaderno sobre un escritorio de madera",
      credit: "Foto: Galymzhan Abdugalimov / Unsplash",
    },
    body: [
      "La comparación entre videojuegos y literatura suele usarse como un cumplido fácil, casi como si necesitara pedirle prestado prestigio a otro medio. Los juegos reunidos en este texto no necesitan esa comparación: lo que logran solo es posible dentro del videojuego.",
      "Lo que los distingue no es la calidad de su guion, sino cómo integran la mecánica de juego a la narrativa: decisiones que importan de verdad, estructuras que cambian según cómo se juega, silencios que solo el jugador puede llenar.",
      "Son, en ese sentido, la mejor respuesta a quienes todavía dudan de que el videojuego pueda ser una forma narrativa tan seria y compleja como cualquier otra. La lista incluye tanto grandes producciones como títulos casi desconocidos que merecen mucho más atención.",
    ],
  },
  {
    slug: "jugar-solo-ya-no-es-jugar-solo",
    category: "play",
    index: "024",
    title: "Jugar solo ya no es jugar solo",
    dek: "Cómo el streaming y los chats convirtieron las partidas individuales en experiencias profundamente sociales.",
    body: [
      "Hasta hace poco, jugar en modo historia era casi por definición una experiencia solitaria. Eso cambió por completo: hoy es común que una partida individual transcurra con un chat activo, una transmisión en vivo, o simplemente la certeza de que alguien más está mirando.",
      "Ese cambio no es solo tecnológico, es cultural. El streaming transformó al videojuego en un espectáculo compartido en tiempo real, y a los jugadores en algo parecido a narradores improvisados de su propia experiencia.",
      "Este texto explora qué se gana y qué se pierde en esa transformación: comunidades que se arman alrededor de una partida, pero también una presión nueva por reaccionar, comentar y performar mientras se juega, incluso cuando lo único que uno quería era perderse un rato.",
    ],
  },
  {
    slug: "la-dificultad-como-diseno-no-como-castigo",
    category: "play",
    index: "016",
    title: "La dificultad como diseño, no como castigo",
    dek: "Por qué algunos de los juegos más exigentes también son los más queridos por quienes los terminan.",
    body: [
      "Existe la idea extendida de que un juego difícil es, casi por definición, un juego hostil con quien lo juega. Los títulos que revisamos en este texto demuestran lo contrario: la dificultad, bien diseñada, puede ser exactamente lo que hace que una victoria se sienta merecida.",
      "La diferencia está en el diseño. Un juego injustamente difícil castiga; uno exigente enseña. Cada muerte entrega información, cada intento acerca un poco más a entender el sistema. Cuando eso funciona, la frustración se transforma en algo parecido a la obsesión.",
      "No es casualidad que algunos de los juegos más duros de la última década también estén entre los más queridos por sus comunidades. La dificultad, lejos de alejar a los jugadores, terminó siendo la razón por la que se quedaron.",
    ],
  },
  {
    slug: "que-queda-de-internet-en-nuestras-vidas",
    category: "tech",
    index: "014",
    title: "¿Qué queda de internet en nuestras vidas?",
    dek: "Una reflexión sobre la tecnología, la atención y lo que estamos dejando atrás.",
    image: {
      src: "/images/que-queda-internet.jpg",
      alt: "Laptop abierto junto a un teléfono y una taza de café sobre un escritorio de madera",
      credit: "Foto: Alejandro Escamilla / Unsplash",
    },
    body: [
      "Hubo una época en que internet prometía ser un espacio abierto, casi utópico, de conexión y descubrimiento. Buena parte de esa promesa sigue viva en algunos rincones, pero la experiencia cotidiana de estar conectado hoy se parece cada vez menos a eso.",
      "Plataformas optimizadas para retener la atención el mayor tiempo posible, algoritmos que deciden por nosotros qué vale la pena ver, un feed que nunca termina. La pregunta ya no es solo qué hacemos con internet, sino qué está haciendo internet con nosotros.",
      "Este texto no propone una vuelta romántica al pasado —esa opción ya no existe—, sino una pausa para preguntarse, con honestidad, qué parte de esa promesa original todavía vale la pena rescatar, y qué parte simplemente dejamos ir sin darnos cuenta.",
    ],
  },
  {
    slug: "la-era-del-software-que-nadie-entiende-del-todo",
    category: "tech",
    index: "020",
    title: "La era del software que nadie entiende del todo",
    dek: "Sistemas tan complejos que ni sus propios creadores pueden explicarlos por completo. Qué significa eso para quienes los usamos.",
    image: {
      src: "/images/software-nadie-entiende.jpg",
      alt: "Piezas de una cámara desarmada ordenadas sobre una superficie blanca",
      credit: "Foto: Vadim Sherbakov / Unsplash",
    },
    body: [
      "Los sistemas que hoy tomamos decisiones cada día —qué vemos, qué compramos, a veces incluso qué oportunidades laborales se nos presentan— se volvieron tan complejos que ni los equipos que los construyen pueden explicar del todo por qué producen un resultado específico.",
      "Esto no es necesariamente el escenario de ciencia ficción que suele imaginarse. Es algo más silencioso y, en algún sentido, más difícil de abordar: una infraestructura invisible que damos por hecho, aunque cada vez entendamos menos cómo funciona por dentro.",
      "Este texto conversa con ingenieros y investigadores que trabajan todos los días con esa incertidumbre, y que coinciden en algo incómodo: aprender a convivir con sistemas que no comprendemos del todo puede ser, de aquí en adelante, simplemente parte de vivir en el presente.",
    ],
  },
  {
    slug: "desconectarse-es-un-privilegio",
    category: "tech",
    index: "007",
    title: "Desconectarse es un privilegio",
    dek: "Apagar el teléfono suena simple hasta que se convierte en un lujo que no todos pueden costear.",
    image: {
      src: "/images/desconectarse-privilegio.jpg",
      alt: "Mar en calma cubierto por una neblina densa",
      credit: "Foto: Yuriy Khimanin / Unsplash",
    },
    body: [
      "El consejo aparece en todas partes: apaga el teléfono, tómate un descanso digital, desconéctate el fin de semana. Es un buen consejo. También es, para una parte importante de quienes trabajan hoy, casi imposible de seguir.",
      "Para quienes dependen de plataformas digitales para conseguir trabajo, coordinar turnos o simplemente estar disponibles para un empleador que espera respuesta inmediata, estar siempre conectado no es una elección: es una condición del trabajo mismo.",
      "Este texto examina esa desigualdad poco discutida: mientras para algunos desconectarse es una decisión de bienestar, para otros es un riesgo económico real. Antes de recomendar la desconexión como solución universal, vale la pena preguntarse quién puede realmente costeársela.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((article) => article.category === categorySlug);
}

export function getLatestGrid(): Article[] {
  const slugs = [
    "cinco-discos-que-estan-marcando-el-2025",
    "la-nostalgia-tambien-es-una-forma-de-futuro",
    "libros-para-una-epoca-incierta",
    "que-queda-de-internet-en-nuestras-vidas",
    "santiago-una-ciudad-de-contrastes",
  ];
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a));
}

export const listItems: ListItem[] = [
  { order: "01", action: "Escuchar", title: "Songs of a Lost World", creator: "The Cure" },
  {
    order: "02",
    action: "Ver",
    title: "Ghost in the Shell",
    creator: "1995",
    image: {
      src: "/images/list-ver.jpg",
      alt: "Persona sosteniendo una cámara fotográfica vintage de doble lente",
      credit: "Foto: Jennifer Trovato / Unsplash",
    },
  },
  {
    order: "03",
    action: "Leer",
    title: "Sapiens",
    creator: "Yuval Noah Harari",
    image: {
      src: "/images/list-leer.jpg",
      alt: "Silla junto a una ventana con cortina, al atardecer",
      credit: "Foto: Logan Adermatt / Unsplash",
    },
  },
  { order: "04", action: "Jugar", title: "Elden Ring", creator: "FromSoftware" },
  { order: "05", action: "Descubrir", title: "Salomon XT-6", creator: "Gore-Tex" },
];

export const footerLinks = [
  { label: "Sobre Margen", href: "/sobre-margen" },
  { label: "Contribuidores", href: "/contribuidores" },
  { label: "Newsletter", href: "/#newsletter" },
  { label: "Eventos", href: "/eventos" },
  { label: "Tienda", href: "/tienda" },
];

export const legalLinks = [
  { label: "Términos", href: "/terminos" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Contacto", href: "/contacto" },
];

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Spotify", href: "#" },
];
