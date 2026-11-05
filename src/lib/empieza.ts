/**
 * "Empieza aquí": el reto de 5 días (30 de noviembre al 4 de diciembre de 2026).
 *
 * Desde el 2026-11-03 (decisión de Israel) esta página ya no vende el taller
 * de 2 horas ($697): vende el último taller del año convertido en reto, una
 * hora diaria por Zoom.
 *
 * Esta página publica solo el precio fijo ($1,497; regla del 2026-09-20: los
 * productos de precio fijo sí lo publican). Nada de condiciones especiales
 * para grupos concretos: eso viaja por correo y WhatsApp, y su detalle vive en
 * la ficha interna del reto (fuera del repo público).
 *
 * El precio se escribe UNA vez (`PRECIO`) y de ahí salen la página, la FAQ, el
 * JSON-LD, llms.txt, llms-full.txt y el pixel de Meta. Al cambiarlo: esos
 * cuatro lugares ya cuelgan de aquí.
 */

const PRECIO = 1497;
const MONEDA = "MXN";

function conUtm(url: string, contenido: string): string {
  const u = new URL(url);
  u.searchParams.set("utm_source", "soycontador");
  u.searchParams.set("utm_medium", "web");
  u.searchParams.set("utm_campaign", "empieza");
  u.searchParams.set("utm_content", contenido);
  return u.toString();
}

/**
 * Las ediciones. El cupo de 25 no se sube: si una se llena se abre otra, y por
 * eso esto es una lista. Cada edición es un evento distinto en nas.com con su
 * propio checkout (la URL de compra directa, con el boleto elegido, no la
 * página del evento).
 *
 * `agotado` se marca a mano en cuanto se venda el lugar 25.
 */
export interface Edicion {
  /** YYYY-MM-DD, primer día */
  inicio: string;
  /** YYYY-MM-DD, último día */
  fin: string;
  fechaTexto: string;
  /** Checkout directo en nas.com; null mientras el evento no exista */
  checkout: string | null;
  agotado?: boolean;
}

export const EDICIONES: readonly Edicion[] = [
  {
    inicio: "2026-11-30",
    fin: "2026-12-04",
    fechaTexto: "Del 30 de noviembre al 4 de diciembre",
    /* Checkout del reto en nas.com (2026-11-05). Si algún día vuelve a ser
       null, la página deja de mostrar el botón de compra y dice que el registro
       abre en unos días. */
    checkout:
      "https://nas.com/checkout-global?communityId=67ab5a14d444670df4027cad&communityCode=TODOCONTA_CLUB&requestor=whatsappSignup&linkClicked=https%3A%2F%2Fnas.com%2Fportal%2Fchallenges%2Fmanage%3Fid%3D6aea5be5e7f19ed57c633c2e&sourceInfoType=challenge&sourceInfoOrigin=6aea5be5e7f19ed57c633c2e",
  },
];

/**
 * La hora de cada sesión, del centro de México. Esa zona no cambia de horario
 * desde 2022, así que el desfase es fijo. Una hora diaria, de lunes a viernes.
 */
export const HORARIO = { inicio: "17:30", fin: "18:30", zona: "-06:00" } as const;

/** Fecha y hora ISO del primer día (por omisión, la hora de inicio). */
export function isoDe(e: Edicion, hora: string = HORARIO.inicio): string {
  return `${e.inicio}T${hora}:00${HORARIO.zona}`;
}

/** Fecha y hora ISO del último día (por omisión, la hora de cierre). */
export function isoFinDe(e: Edicion, hora: string = HORARIO.fin): string {
  return `${e.fin}T${hora}:00${HORARIO.zona}`;
}

export const EMPIEZA = {
  nombre: "Empieza aquí",
  titulo: "el reto de 5 días",
  /** Para el <title> y el JSON-LD, donde el nombre corto no dice nada solo */
  nombreCompleto: "Empieza aquí: el reto de 5 días con Claude",
  descripcion:
    "Reto en vivo de 5 días, una hora diaria, para contadores que quieren pasar de probar la inteligencia artificial a trabajar con ella. Cada día termina con algo hecho en tu pantalla: un proyecto de Claude para tu despacho, un lote de XML revisado, el ISR de sueldos como flujo repetible, un cálculo con su fundamento y tus flujos empaquetados. Sin conocimientos previos.",
  horario: `${HORARIO.inicio} a ${HORARIO.fin}, hora del centro de México, de lunes a viernes`,
  duracion: "5 sesiones de 1 hora en vivo",
  sede: "Por Zoom, con grabaciones",
  cupo: 25,
  precio: PRECIO,
  moneda: MONEDA,
  precioTexto: `$${PRECIO.toLocaleString("en-US")} ${MONEDA}`,
  /** Lo que se paga aparte, dicho de frente: es parte del precio real */
  herramienta: {
    nombre: "Claude Pro",
    /* Claude lo muestra en dólares; el aproximado en pesos va entre paréntesis.
       Dato del proveedor: verificado en claude.com/pricing el 2026-10-13
       (Pro, US$20 al mes; US$17 al mes con plan anual). */
    costoTexto: "US$20 al mes (aprox. $400 MXN)",
    verificado: "2026-10-13",
  },
  /* La garantía SÍ es pública (no es promoción, es confianza), pero lleva su
     condición: haber hecho las cinco entregas. Israel la verifica; nas.com no. */
  garantia:
    "Si haces las cinco entregas y el reto no te convenció, te devuelvo el 100%, sin preguntas. Lo pides hasta el viernes 11 de diciembre.",
} as const;

/**
 * Lo que recibe el pixel de Meta en ViewContent y AddToCart: el
 * producto, nunca la persona. SOLO parámetros estándar de Meta: el conjunto
 * de datos está en una categoría restringida y uno personalizado no pasa.
 */
export const PIXEL_EMPIEZA = {
  content_name: "empieza-aqui-reto",
  content_type: "product",
  content_ids: ["reto-empieza"],
  value: PRECIO,
  currency: MONEDA,
} as const;

function limiteDe(e: Edicion): Date {
  return new Date(`${e.fin}T23:59:59${HORARIO.zona}`);
}

/** Las ediciones que todavía no pasan, en orden de fecha (agotadas incluidas). */
export function edicionesVigentes(hoy = new Date()): Edicion[] {
  return EDICIONES.filter((e) => limiteDe(e) >= hoy).sort((a, b) => a.inicio.localeCompare(b.inicio));
}

/** La primera edición con lugares y checkout: es a la que apunta el botón. Null si no hay. */
export function edicionAbierta(hoy = new Date()): Edicion | null {
  return edicionesVigentes(hoy).find((e) => !e.agotado && e.checkout) ?? null;
}

/** URL de compra de una edición, con UTM de la página. */
export function checkoutDe(e: Edicion, contenido = "pagina"): string | null {
  return e.checkout ? conUtm(e.checkout, contenido) : null;
}

/**
 * Video de la página. Mientras `id` sea null no se pinta y en su lugar va la
 * lista de lo que te llevas. El anterior (QCA6xuvNSeM, "Por qué empezar aquí")
 * menciona "taller" y las "tres cosas" del taller de 2 horas, y contradice el
 * reto de 5 días; Israel grabará uno nuevo (2026-11-03). Cuando esté: pegar su
 * `id` aquí y cambiar la carátula. La carátula NO es la miniatura de YouTube:
 * sale de `design/piezas/caratula-empieza.html` con
 * `node design/piezas/render.mjs caratula-empieza`.
 */
export const VIDEO_EMPIEZA: { id: string | null; titulo: string; poster: string; cinta: string } = {
  id: null,
  titulo: "Por qué tomar el reto Empieza aquí",
  poster: "/assets/empieza-video.jpg",
  cinta: "Por qué empezar aquí",
};

/**
 * Los cinco días: la línea de tiempo de la página. `etapa` es el verbo de
 * cómo evoluciona lo que sabes hacer (de pedir a empaquetar); `antes` y
 * `despues` son el salto del día en una línea cada uno; `sale` es el entregable.
 * Sin "programar": el lenguaje es flujo, script que Claude escribe y tú corres,
 * artefacto (Avatar A, ver docs/reto-5-dias.md).
 */
export interface Dia {
  dia: string;
  fecha: string;
  etapa: string;
  titulo: string;
  texto: string;
  antes: string;
  despues: string;
  sale: string;
}

export const DIAS: readonly Dia[] = [
  {
    dia: "Lunes",
    fecha: "30 nov",
    etapa: "Pides bien",
    titulo: "Que te conteste como contador",
    texto:
      "Qué es y qué no es Claude. Cómo se le pide una consulta fiscal: rol, contexto, instrucción, formato, y el renglón que le exige citar el artículo. Se crea el proyecto de tu despacho y se define qué nunca se sube a un chat.",
    antes: "Respuestas genéricas que suenan a blog.",
    despues: "Un proyecto tuyo y un prompt que cita el fundamento.",
    sale: "Tu proyecto de Claude configurado y un prompt que cita el fundamento",
  },
  {
    dia: "Martes",
    fecha: "1 dic",
    etapa: "Le das trabajo",
    titulo: "Tu primer lote de XML, revisado",
    texto:
      "Un lote de CFDI ficticios convertido en tabla de Excel y revisado: totales, duplicados, el comprobante que no cuadra. Es la conciliación más simple que existe, y la base de todo lo que sigue.",
    antes: "Abrir XML uno por uno.",
    despues: "Una tabla revisada y el prompt para repetirla.",
    sale: "Tu primer lote de XML convertido en tabla y revisado",
  },
  {
    dia: "Miércoles",
    fecha: "2 dic",
    etapa: "Lo vuelves repetible",
    titulo: "El mismo resultado cada vez",
    texto:
      "Si le pides un cálculo dos veces, no siempre contesta igual. Aquí dejas de pedirle que calcule y le pides que escriba el script que calcula: el ISR de sueldos de una nómina. Lo corres tú, da el mismo resultado, y si cambias un dato te dice en qué renglón se movió.",
    antes: "Un cálculo distinto cada vez que lo pides.",
    despues: "Un script que corres tú y da la misma huella.",
    sale: "El ISR de sueldos como flujo que corres cuando quieras",
  },
  {
    dia: "Jueves",
    fecha: "3 dic",
    etapa: "Lo fundamentas",
    titulo: "Tu cálculo, con el artículo en cada renglón",
    texto:
      "Eliges un cálculo que sí te toca (cuotas, ajuste anual, el que sea) y lo construyes con su sustento. Se instala leyes-mx, la base abierta de leyes y reglamentos que Claude consulta en tu computadora, y cada renglón cita ley, artículo y vigencia.",
    antes: "Un cálculo que hay que defender de memoria.",
    despues: "Un cálculo que se defiende solo, con su artículo.",
    sale: "Tu propio cálculo, con el artículo que lo sustenta en cada renglón",
  },
  {
    dia: "Viernes",
    fecha: "4 dic",
    etapa: "Lo empaquetas",
    titulo: "Tus flujos se quedan contigo",
    texto:
      "Lo que armaste en la semana se guarda en skills que se quedan en tu cuenta. Y se hace algo muy puntual de tu despacho como artefacto o app de una sola página en HTML. Cierre del reto y qué sigue.",
    antes: "Cuatro cosas sueltas en cuatro chats.",
    despues: "Un kit de flujos que usas el lunes siguiente.",
    sale: "Tus flujos empaquetados en skills que se quedan en tu cuenta",
  },
] as const;

/** A quién le habla. Tres perfiles. */
export const PARA_QUIEN = [
  {
    titulo: "Nunca la has abierto",
    texto:
      "Te da desconfianza o sientes que no tienes tiempo. No hace falta saber nada antes: el lunes empezamos desde cero y todo se hace contigo al lado.",
  },
  {
    titulo: "La usas, pero cada respuesta sale distinta",
    texto:
      "Le preguntas y a veces acierta y a veces no. El miércoles y el jueves son para ti: cómo hacer que el resultado sea repetible y que cite su fundamento.",
  },
  {
    titulo: "Tienes un problema puntual de tu despacho",
    texto:
      "Una conciliación, un cálculo, un reporte que repites cada mes. En cinco días lo conviertes en un flujo tuyo, con datos ficticios para practicar.",
  },
] as const;

/** Lo que sí y lo que no se hace: el alcance dicho de frente. */
export const ALCANCE = {
  si: "Programas internos para algo muy puntual: un script que Claude escribe y tú corres, un artefacto o una app web de una sola página en HTML.",
  no: "Una plataforma completa, con servidor, base de datos y usuarios. Eso pide otra sesión, más intensa y a más profundidad.",
} as const;

export const INCLUYE = [
  "Las 5 sesiones en vivo por Zoom, en grupo de 25",
  "Las grabaciones, para repasar",
  "Los scripts, las skills y los prompts del reto, y los datos ficticios para practicar",
  "Un grupo de WhatsApp para resolver dudas durante el reto y 30 días después",
  "La lista de verificación de qué nunca se sube a un chat",
] as const;

export const FAQ_EMPIEZA = [
  {
    pregunta: "¿Necesito saber algo de IA o de programación?",
    respuesta:
      "No. El lunes empezamos desde cero: qué es y qué no es la inteligencia artificial y cómo se le pide. Los scripts los escribe Claude; tú los corres y los entiendes. No es un curso de programación.",
  },
  {
    pregunta: "¿Es un curso para crear aplicaciones?",
    respuesta:
      "Hasta cierto punto. Hacemos programas internos para algo muy puntual: un script, un artefacto o una app web de una sola página en HTML que resuelve un problema específico de tu despacho. Lo que no hacemos es una plataforma completa, con servidor, base de datos y usuarios. Eso pide otra sesión, más intensa y a más profundidad.",
  },
  {
    pregunta: "¿Sirve si uso ChatGPT?",
    respuesta:
      "El reto es de Claude y solo de Claude, a propósito. Con una sola herramienta se llega más lejos en cinco días, y los proyectos, scripts y skills que armamos son funciones concretas de Claude.",
  },
  {
    pregunta: "¿Necesito Claude Pro?",
    respuesta:
      "Sí, es necesaria. Lo que vemos en el reto (scripts, skills, lotes de XML) consume bastantes más tokens que un chat normal, y el plan gratuito se agota a media práctica. No queremos que te quedes limitado y no puedas seguir la clase. Cuesta US$20 al mes (aprox. $400 MXN), se paga aparte y puedes cancelarla antes de que se renueve.",
  },
  {
    pregunta: "¿A qué hora son las sesiones?",
    respuesta:
      "De lunes a viernes de 17:30 a 18:30, hora del centro de México. Dura una hora; el resto de la tarde queda libre para que lo apliques el mismo día.",
  },
  {
    pregunta: "¿Qué pasa si falto un día?",
    respuesta:
      "Tienes la grabación. Pero cada día se apoya en el anterior y termina con algo hecho en tu pantalla, así que conviene no saltarse ninguno. Si ya sabes que vas a faltar a varios, mejor espera la siguiente edición.",
  },
  {
    pregunta: "¿Y si no me convence?",
    respuesta:
      "Si haces las cinco entregas y el reto no te convenció, te devuelvo el 100%, sin preguntas. Lo pides hasta el viernes 11 de diciembre. La condición de haber hecho las entregas es para que la devolución sea de quien lo intentó de verdad.",
  },
  {
    pregunta: "¿Por qué solo 25 lugares?",
    respuesta:
      "Porque cada día termina con algo hecho en la pantalla de cada quien, y con más gente eso se vuelve conferencia. El cupo no se sube: si se llena, se abre otra edición.",
  },
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta:
      `${EMPIEZA.precioTexto}, pago único. Necesitas además una suscripción a Claude Pro (US$20 al mes, aprox. $400 MXN, se paga aparte). ${EMPIEZA.garantia}`,
  },
  {
    pregunta: "¿Esto es el curso Claude para Contadores?",
    respuesta:
      "No: es el escalón anterior. Claude para Contadores son 8 horas en Fiscalistas.AI para ir a fondo, con Claude Code y Excel. Si ya usas proyectos de Claude y quieres ir más lejos, ve directo al curso.",
  },
] as const;
