/**
 * "Empieza aquí": el reto de 5 días (30 de noviembre al 4 de diciembre de 2026).
 *
 * Desde el 2026-11-03 (decisión de Israel) esta página ya no vende el taller
 * de 2 horas ($697): vende el último taller del año convertido en reto.
 *
 * Formato replanteado el 2026-11-11 (Israel): cada día, una CLASE GRABADA que
 * se libera a las 9:00 y una SESIÓN POR ZOOM de 17:30 a 18:00 (media hora, no
 * una hora) para dudas y práctica; la tarde no enseña nada nuevo. Por eso ya
 * no se dice "en vivo" de las clases: solo de la sesión de la tarde. Precio,
 * cupo, fechas, garantía y Claude Pro no cambian. El detalle del formato y
 * del kit vive en docs/reto-5-dias.md.
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
 * Las horas de cada día, del centro de México. Esa zona no cambia de horario
 * desde 2022, así que el desfase es fijo. `clase` es cuando se libera la clase
 * grabada; `inicio` y `fin` son la sesión por Zoom de la tarde (media hora,
 * 2026-11-11; antes eran 17:30 a 18:30). De lunes a viernes.
 */
export const HORARIO = { clase: "9:00", inicio: "17:30", fin: "18:00", zona: "-06:00" } as const;

/** Fecha y hora ISO del primer día (por omisión, cuando se libera la primera clase). */
export function isoDe(e: Edicion, hora: string = HORARIO.clase): string {
  return `${e.inicio}T${hora.padStart(5, "0")}:00${HORARIO.zona}`;
}

/** Fecha y hora ISO del último día (por omisión, cuando cierra la sesión de la tarde). */
export function isoFinDe(e: Edicion, hora: string = HORARIO.fin): string {
  return `${e.fin}T${hora.padStart(5, "0")}:00${HORARIO.zona}`;
}

export const EMPIEZA = {
  nombre: "Empieza aquí",
  titulo: "el reto de 5 días",
  /** Para el <title> y el JSON-LD, donde el nombre corto no dice nada solo */
  nombreCompleto: "Empieza aquí: el reto de 5 días con Claude",
  descripcion:
    "Reto de 5 días para contadores que quieren pasar de probar la inteligencia artificial a trabajar con ella. Cada día te llega una clase grabada a las 9:00 y, por la tarde, de 17:30 a 18:00, hay una sesión por Zoom para dudas y práctica. Cada día termina con algo hecho en tu pantalla: un proyecto de Claude para tu despacho, un lote de XML revisado y conciliado, el ISR de sueldos como script probado, un cálculo con su fundamento y tus flujos empaquetados. Lo que armas busca ser seguro, verificable, repetible y reutilizable, y te llevas un kit para trabajar con ello. Sin conocimientos previos.",
  horario: `clase grabada a las ${HORARIO.clase} y sesión por Zoom de ${HORARIO.inicio} a ${HORARIO.fin}, hora del centro de México, de lunes a viernes`,
  duracion: "5 clases grabadas y 5 sesiones por Zoom de 30 min",
  sede: "Clases grabadas en línea y sesión diaria por Zoom",
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
 * Video de la página: el hero del reto (GbCj4TaRtKg, 2:24, grabado y editado el
 * 2026-11-11 en hyperframes-30-days, `edicion/2026-11-11-start-challenge-hero/`).
 * Habla del formato nuevo (una clase cada mañana y la sesión por Zoom de la
 * tarde) y es atemporal: sin fechas, precio ni cupo. Reemplaza a QCA6xuvNSeM,
 * que hablaba del taller de 2 horas. Mientras `id` sea null no se pinta y en su
 * lugar va la lista de lo que te llevas. La carátula NO es la miniatura de
 * YouTube: sale de `design/piezas/caratula-empieza.html` con
 * `node design/piezas/render.mjs caratula-empieza`; su "No fue la herramienta."
 * es el giro de este video también, así que se queda.
 */
export const VIDEO_EMPIEZA: { id: string | null; titulo: string; poster: string; cinta: string } = {
  id: "GbCj4TaRtKg",
  titulo: "Empieza aquí: el reto de 5 días con Claude",   // el mismo nombre que nas.com y que RETO.nombreCompleto (Israel, 2026-11-11)
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
    etapa: "Pides con reglas",
    titulo: "Que te conteste como contador",
    texto:
      "Qué es y qué no es Claude, privacidad y configuración, y los tres niveles de datos. Cómo se le pide una consulta fiscal: rol, contexto, instrucción, formato, y el renglón que le exige citar el artículo. Se crea el proyecto de tu despacho y se define qué nunca se sube a un chat.",
    antes: "Respuestas genéricas que suenan a blog.",
    despues: "Un proyecto tuyo, un prompt que cita el fundamento y un checklist para revisar.",
    sale: "Tu proyecto de Claude configurado, la lista de qué nunca se sube y un checklist para revisar una respuesta",
  },
  {
    dia: "Martes",
    fecha: "1 dic",
    etapa: "Le das tus archivos",
    titulo: "Tus archivos, revisados y conciliados",
    texto:
      "XML, Excel y PDF convertidos en tabla, y revisados: totales, duplicados, el comprobante que no cuadra. Después, la conciliación contra un estado de cuenta, el caso que Daniel cuenta más abajo. Es la base de todo lo que sigue.",
    antes: "Abrir XML uno por uno.",
    despues: "Una tabla revisada y una conciliación que puedes repetir.",
    sale: "Un lote de XML revisado y una conciliación contra estado de cuenta",
  },
  {
    dia: "Miércoles",
    fecha: "2 dic",
    etapa: "Lo vuelves repetible",
    titulo: "El mismo resultado cada vez",
    texto:
      "Si le pides un cálculo dos veces, no siempre contesta igual. Aquí dejas de pedirle que calcule y le pides que escriba el script que calcula: el ISR de sueldos de una nómina. Lo corres tú, lo pruebas contra un caso de resultado conocido, da el mismo resultado y, si cambias un dato, te dice en qué renglón se movió.",
    antes: "Un cálculo distinto cada vez que lo pides.",
    despues: "Un script que corres tú, probado, y da la misma huella.",
    sale: "El ISR de sueldos como script, probado con un caso de resultado conocido",
  },
  {
    dia: "Jueves",
    fecha: "3 dic",
    etapa: "Lo fundamentas",
    titulo: "Tu cálculo, con el artículo en cada renglón",
    texto:
      "Eliges un cálculo que sí te toca (cuotas, ajuste anual, el que sea) y lo construyes con su sustento. Se instala leyes-mx, la base abierta de leyes y reglamentos que Claude consulta en tu computadora, y cada renglón cita ley, artículo y vigencia. Si no lo encuentra, lo dice (\"no verificado\") en vez de inventarlo.",
    antes: "Un cálculo que hay que defender de memoria.",
    despues: "Un cálculo que se defiende solo, con su artículo.",
    sale: "Tu propio cálculo, con ley, artículo y vigencia en cada renglón",
  },
  {
    dia: "Viernes",
    fecha: "4 dic",
    etapa: "Lo conviertes en operación",
    titulo: "Tus flujos se quedan contigo",
    texto:
      "Lo que armaste en la semana se guarda en skills que se quedan en tu cuenta. Y se hace algo muy puntual de tu despacho como artefacto o app de una sola página en HTML. Cómo se lo pasas a tu equipo, cierre del reto y qué sigue.",
    antes: "Cuatro cosas sueltas en cuatro chats.",
    despues: "Un kit de flujos y un plan para usarlos el lunes siguiente.",
    sale: "Tu kit empaquetado y un plan de 30 días: qué proceso contable automatizas primero",
  },
] as const;

/** A quién le habla. Tres perfiles. */
export const PARA_QUIEN = [
  {
    titulo: "Nunca la has abierto",
    texto:
      "Te da desconfianza o sientes que no tienes tiempo. No hace falta saber nada antes: el lunes empezamos desde cero, paso a paso, y por la tarde tienes media hora por Zoom para preguntar.",
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

/**
 * Lo que se entrega. El kit se está produciendo (docs/reto-5-dias.md, "El
 * kit"): se describe como lo que se entrega y se promete completo ANTES de que
 * empiece el reto (2026-11-11). No se promete cuánto tiempo quedan las clases
 * ni que las sesiones de la tarde se graben: eso sigue por decidir.
 */
export const INCLUYE = [
  "Las 5 clases grabadas: se liberan a las 9:00 de cada día y las ves cuando puedas, también para repasar",
  "Las 5 sesiones por Zoom de 17:30 a 18:00, en grupo de 25, para dudas y práctica sobre tu caso",
  "El kit completo, que recibes antes de que empiece el reto: guías de trabajo, proyecto base de Claude, biblioteca de prompts, checklist de revisión, scripts probados, skills, datos ficticios para practicar y plan de 30 días",
  "La lista de verificación de qué nunca se sube a un chat",
  "Un grupo de WhatsApp para resolver dudas durante el reto y 30 días después",
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
      "Sí, es necesaria. Lo que vemos en el reto (scripts, skills, lotes de XML) consume bastantes más tokens que un chat normal, y el plan gratuito se agota a media práctica. No queremos que te quedes limitado y no puedas seguir el reto. Cuesta US$20 al mes (aprox. $400 MXN), se paga aparte y puedes cancelarla antes de que se renueve.",
  },
  {
    pregunta: "¿A qué hora son las clases y las sesiones?",
    respuesta:
      "De lunes a viernes, hora del centro de México. A las 9:00 se libera la clase del día, grabada, y la ves cuando te acomode, siempre antes de la sesión de la tarde, que es donde se aplica lo que viste. Por la tarde, de 17:30 a 18:00, hay una sesión por Zoom para dudas y práctica sobre tu caso. En la sesión no se enseña nada nuevo: la teoría está en la clase.",
  },
  {
    pregunta: "¿Qué pasa si falto un día?",
    respuesta:
      "Casi nada, y por eso el formato es así: la clase queda grabada y la sesión de la tarde no enseña nada nuevo, solo dudas y práctica. Si no puedes conectarte, ves la clase cuando puedas y no pierdes contenido. Eso sí, cada día se apoya en el anterior y termina con algo hecho en tu pantalla, así que conviene no atrasarte. Si ya sabes que no vas a poder dedicarle tiempo a varios días, mejor espera la siguiente edición.",
  },
  {
    pregunta: "¿Qué incluye el kit?",
    respuesta:
      "Guías de trabajo por día, el proyecto base de Claude con las instrucciones del despacho, una biblioteca de prompts por régimen y tarea, el checklist para revisar una respuesta antes de firmar, scripts probados, skills para instalar en tu cuenta, datos ficticios para practicar y una plantilla de plan de 30 días. Se está produciendo y se entrega completo antes de que empiece el reto.",
  },
  {
    pregunta: "¿Qué quiere decir que lo que armo sea \"profesional\"?",
    respuesta:
      "Cada entregable tiene que cumplir cuatro cosas. Seguro: no sube datos que no debe y sabes qué configurar. Verificable: cita el fundamento y tú revisas antes de firmar; la IA propone, tú firmas. Repetible: da el mismo resultado el mes siguiente. Reutilizable: queda guardado y lo puede usar alguien más de tu despacho. No se promete dominar Claude en cinco días: se promete un estándar de trabajo y piezas listas para usar el lunes siguiente.",
  },
  {
    pregunta: "¿Y si no me convence?",
    respuesta:
      "Si haces las cinco entregas y el reto no te convenció, te devuelvo el 100%, sin preguntas. Lo pides hasta el viernes 11 de diciembre. La condición de haber hecho las entregas es para que la devolución sea de quien lo intentó de verdad.",
  },
  {
    pregunta: "¿Por qué solo 25 lugares?",
    respuesta:
      "Porque en la sesión de la tarde se trabaja sobre el caso de cada quien, y con más gente eso se vuelve conferencia. El cupo no se sube: si se llena, se abre otra edición.",
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
