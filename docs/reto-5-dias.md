# Reto de 5 días (último taller del año)

Decidido por Israel el 2026-11-03. Es "Empieza aquí" recargado, para cerrar el año.
Producto de precio fijo: SÍ publica precio (regla del 2026-09-20).

**Replanteado el 2026-11-11** (formato, contenido y kit; ver "Formato nuevo" y "La semana"). La
página `/empieza`, el JSON-LD y los `llms.txt` ya están alineados (2026-11-11, sin commit). Falta la
descripción de nas.com y el correo de confirmación.

## Ficha

| Dato | Valor |
|---|---|
| Fechas | Lunes 30 de noviembre al viernes 4 de diciembre de 2026 |
| Formato | **Cada día, una clase grabada que se libera a las 9:00 (20 a 30+ min) y una sesión por Zoom de 17:30 a 18:00, hora del centro, para dudas y práctica.** Registro obligatorio con correo |
| Cupo | 25 |
| Precio | $1,497 MXN. **Se conserva en esta edición; sube en 2027** |
| Preventa | $1,197 hasta el domingo 15-nov, código `CIERRA2026` (20.04% de descuento sobre $1,497: $299.99, queda en $1,197.01) |
| Quien tomó "Empieza aquí" | 30% de descuento (aprox. $1,048), cupón propio. Lunes y martes les repiten teoría y XML a Excel |
| Equipos | Boletos por lote en nas.com. Sin precio publicado: cotización por correo |
| Reembolso | 100% si completó las cinco entregas y no le convenció. Hasta el viernes 11-dic |

## Formato nuevo (2026-11-11)

- **Las cinco clases se graban y se editan ANTES del lunes 30**, para que cada una se libere a las
  9:00 de su día. Eso quita la presión del vivo y permite que duren lo que el tema pida (20 a 30
  minutos o más), con el material completo.
- **La tarde (17:30 a 18:00) no enseña nada nuevo.** Se trabaja sobre el caso de cada quien,
  se ven dos o tres casos en pantalla y se resuelven las dudas. Quien no pueda conectarse no
  pierde contenido; "si falto un día" deja de ser un problema.
- **La meta de valor:** que el participante sienta que debió pagar cinco veces más. Por eso el kit
  (abajo) es parte del producto, no un adorno.
- **Copy:** el video del hero dice "clase grabada" y "por la tarde", sin horas ni "en vivo".
  La página sí puede decir las horas.

## Qué es "profesional" (el criterio de calidad)

Cada entregable tiene que pasar cuatro criterios:

1. **Seguro:** no sube datos que no debe y sabe qué configurar.
2. **Verificable:** cita el fundamento y la persona revisa antes de firmar. "La IA propone, tú firmas."
3. **Repetible:** da el mismo resultado el mes siguiente.
4. **Reutilizable:** queda guardado y lo puede usar alguien más del despacho.

No se promete "dominar Claude" en cinco días: se promete un estándar de trabajo y piezas listas
para usar el lunes siguiente.

## Alcance (decisión de Israel, 2026-11-03; se mantiene)

El reto NO construye software con la profundidad de una plataforma (servidor, base de datos,
usuarios, infraestructura como la de TodoConta). SÍ crea programas internos para resolver algo
muy puntual y específico: scripts, artefactos de Claude y apps web de una sola página en HTML.
Eso mismo va en la página y en los correos. Construir una plataforma pide otra sesión, más
intensa y a más profundidad. Cuidar el lenguaje para el Avatar A: "flujo", "script que Claude
escribe y tú corres", "artefacto"; nunca "aprende a programar".

Todo es **contable y fiscal** (ver memoria `capacitacion-solo-contable`): ningún ejemplo ni
promesa de marketing u otras áreas. Todo dentro de **Claude** (sin Claude Code ni Excel a fondo:
eso es el curso de 8 horas).

## La semana

**Un caso corre toda la semana:** un despacho ficticio con tres clientes (una persona física RESICO,
una nómina y una persona moral). Cada día se avanza sobre el mismo despacho, así nadie parte de cero.
Además, en el correo de confirmación se les pide **un problema real propio** (sin datos del cliente)
que usan el miércoles y el jueves.

| Día | Etapa | La clase grabada cubre | Entregable (pasa los cuatro criterios) |
|---|---|---|---|
| Lun 30-nov | Pides con reglas | Qué es y qué no es Claude; privacidad y configuración; los tres niveles de datos; el prompt de cuatro partes (rol, contexto, instrucción, formato) con la línea que exige citar; el proyecto del despacho | Proyecto configurado, lista de "qué nunca se sube" y **checklist de revisión de una respuesta** |
| Mar 1-dic | Le das tus archivos | XML, Excel y PDF a tabla; duplicados, totales, el comprobante que no cuadra; conciliación contra estado de cuenta (el caso del testimonio de Daniel) | Lote de XML revisado y **conciliación contra estado de cuenta** |
| Mié 2-dic | Lo vuelves repetible | Dejar de pedir que calcule y pedir el script que calcula. Probarlo contra un caso de resultado conocido; huella y qué cambió | ISR de sueldos como script, **probado con un caso conocido** |
| Jue 3-dic | Lo fundamentas | Instalar `leyes-mx`; cita de ley, artículo y vigencia en cada renglón; qué hacer cuando no lo encuentra ("no verificado") | Tu propio cálculo (cuotas, ajuste anual, otro) **con fundamento por renglón** |
| Vie 4-dic | Lo conviertes en operación | Skills que se quedan en tu cuenta; artefacto de una página; cómo se lo pasas a tu equipo; qué sigue | Kit empaquetado y **plan de 30 días**: qué proceso contable se automatiza primero |

La tarde de cada día trabaja el entregable de ese día sobre el caso de cada quien.

## El kit (lo que se entrega)

La meta es excederse. Cada pieza se produce y se verifica antes de prometerla; el estado va en la
última columna y se actualiza.

| Pieza | Qué es | Estado |
|---|---|---|
| Guía de trabajo por día | PDF con el paso a paso de la clase y de la práctica de la tarde | por producir |
| Ficha del despacho ficticio | Ortega Contadores y sus tres clientes, con los errores sembrados (la clave va en un anexo del instructor que se corta antes del PDF) | borrador: `reto-kit/01-despacho-ficticio.md` |
| Proyecto base de Claude | Las instrucciones del despacho, listas para pegar y adaptar | borrador: `reto-kit/02-proyecto-base.md`; probarlo con la pregunta de RESICO |
| Biblioteca de prompts | Los prompts del reto y otros por régimen y tarea (RESICO, sueldos, persona moral, IVA, XML), todos con la línea de fundamento | por producir |
| Checklist de revisión | Diez puntos para revisar cualquier respuesta antes de firmar. Es la pieza central | borrador: `reto-kit/04-checklist-de-revision.md` |
| "Qué nunca se sube" | Lista de verificación y los tres niveles (chat, proyecto con datos anonimizados, canal controlado) | borrador: `reto-kit/03-que-nunca-se-sube.md` (dos hojas; la LFPDPPP no está en leyes-mx y va "no verificado") |
| Datos ficticios | El despacho ficticio completo: XML (ingresos, egresos, nómina, pagos), estados de cuenta, auxiliar y nómina, con un par de errores sembrados | por producir |
| Scripts probados | Lote XML a tabla, conciliación, ISR de sueldos, cada uno con su caso de prueba | por producir |
| Skills listas | Tres a cinco skills para instalar en la cuenta | por producir |
| `leyes-mx` | Instalación guiada y qué cubre y qué no (la RMF es el original del DOF, sin modificaciones) | existe la herramienta; falta guía |
| Plantilla de artefacto | Una página HTML de ejemplo para adaptar | por producir |
| Plan de 30 días | Plantilla: qué proceso contable se automatiza primero y quién se encarga | por producir |
| Las cinco clases | Grabadas y editadas | por decidir cuánto tiempo quedan disponibles |
| Sesiones de la tarde | Grabación de cada una | por decidir (privacidad de quien participa) |
| WhatsApp | Durante el reto y 30 días después | definido |

## Producción (a partir del 2026-11-12)

- Se empieza grabando la **clase 1**. Guion: `social-studio/decks/soycontador/2026-11-11-empieza-clase-1.json`
  (teleprompter en `dist/2026-11-11-empieza-clase-1/guion.html`).
- Orden de grabación: 1, 2, 3, 4, 5, porque cada una se apoya en el despacho ficticio de la anterior.
  Los datos ficticios se preparan antes de la clase 2.
- Antes de grabar cada clase se corre en vivo todo lo que se muestra (prompts, scripts, `leyes-mx`) y se
  confirma que la respuesta es correcta. Lo que se ve ahí es lo que se firma.
- Los datos del proveedor (privacidad de Claude, límites del plan, precio) se leen en pantalla el día de
  la grabación y se anota la fecha. No se dicen de memoria.

## Reembolso: cómo se verifica (por definir con nas.com)

La condición "completó las cinco entregas" no la hace cumplir nas.com, la verifico yo.
Propuesta: cada día los participantes pegan en el grupo de WhatsApp una captura de su
entrega; quien pide reembolso se revisa contra esa lista. Hay que confirmar que nas.com
permita reembolsar después del evento (la de octubre cerraba dos días antes).

## Calendario

- 3-nov: correo de la clase práctica + anuncio (lista general 39 + live 41, sin compradores).
- ~17-nov: correo personal a quienes tomaron "Empieza aquí" (ediciones 1 y 2) con el cupón del 30%.
- 15-nov: cierra la preventa.
- 12 a ~27-nov: grabación y edición de las cinco clases y producción del kit.
- 30-nov a 4-dic: el reto (clase a las 9:00, sesión de 17:30 a 18:00).
- 11-dic: cierra la ventana de reembolso.

## Pendientes técnicos

- Alinear con el formato nuevo: `HORARIO`, `EMPIEZA.horario`, `EMPIEZA.duracion`, el folio "RETO EN VIVO",
  la intro de `#la-semana`, `DIAS`, `INCLUYE`, las FAQ (hora, "si falto un día"), el JSON-LD (`empiezaCourse`) y
  la descripción de nas.com.
- Crear el evento (o reto) en nas.com con boletos: general, preventa, alumni, por lote. Pasar el checkout.
- Página: ver si es `/reto` propia o se adapta `/empieza` (el pixel y el JSON-LD apuntan al taller de $697).
- Precio en los cuatro lugares: página, JSON-LD, `llms.txt`, `llms-full.txt`, más `PIXEL_EMPIEZA`.
- Zoom: activar registro obligatorio con correo.
- Claude Pro: NECESARIO en el reto (decisión de Israel, 2026-11-03). Verificar aún con prueba real que alcance para las 5 días,
  y en particular que el script del miércoles corra en la cuenta sin instalar nada (`verificado-claude.md`), y que quede en la
  confirmación de compra de nas.com.
- Correo de confirmación: pedir el problema propio de cada participante.

## Alta en nas.com (borrador del 2026-11-03; la descripción está por actualizar al formato nuevo)

**Título:** Empieza aquí: el reto de 5 días con Claude

**Fechas:** lunes 30 de nov a viernes 4 de dic de 2026. Clase grabada a las 9:00 y sesión por Zoom de 17:30 a
18:00 (hora del centro de México). Un solo evento con cinco sesiones, o cinco eventos enlazados: lo que nas.com
permita, mientras un solo boleto dé acceso a todas.

**Lugar:** Zoom, con registro obligatorio con correo. Un solo enlace para las cinco sesiones.

**Cupo:** 25.

**Boletos** (los descuentos NO van en la página pública; se dan por cupón o boleto oculto, según deje nas.com):

| Boleto | Precio | Visible | Para quién |
|---|---|---|---|
| General | $1,497 MXN | Sí, es el del checkout de la página | Todos |
| Preventa | $1,197 MXN | Código `CIERRA2026` (20.04% menos, ~$300), hasta el domingo 15-nov 23:59 |  La lista (correo del 3-nov) |
| Alumni "Empieza aquí" | 30% menos (~$1,048) | Código `ALUMNI30` | Ediciones 1 y 2 (correo del ~17-nov) |
| Por lote (equipos) | Cotización | Oculto | Despachos que quieran varios lugares |

**Después de crearlo:**
1. Pasarme el checkout del boleto GENERAL (la URL de compra directa, como el de octubre) y lo pego en
   `EDICIONES[0].checkout` de `src/lib/empieza.ts`. Con eso la página muestra el botón sola.
2. Confirmar que se pueda reembolsar después del evento y no solo antes.
3. Que pida nombre y correo del asistente por boleto (para no repetir lo de Adriana en la edición 2).
4. Confirmar si nas.com permite agregar el mismo Pixel (1407516788160351): dispara su propio
   InitiateCheckout.

**Descripción (borrador anterior, por reescribir al formato nuevo):**

> Reto de cinco días, del lunes 30 de noviembre al viernes 4 de diciembre. Cada día te llega una clase grabada a las
> 9:00 y por la tarde, de 17:30 a 18:00 (hora del centro de México), nos conectamos por Zoom a resolver dudas y a
> ver cómo te fue. Es el último taller del año: pasas de probar la inteligencia artificial a trabajar con ella.
> Cada día termina con algo hecho en tu pantalla.
>
> Lunes: tu proyecto de Claude configurado para tu despacho y un prompt que cita el fundamento.
> Martes: tu primer lote de XML convertido en tabla y revisado.
> Miércoles: el ISR de sueldos como flujo que da el mismo resultado cada vez.
> Jueves: tu propio cálculo, con el artículo que lo sustenta en cada renglón.
> Viernes: tus flujos empaquetados en skills que se quedan en tu cuenta, y qué sigue.
>
> Incluye las cinco clases, las sesiones de la tarde, el kit completo (guías, prompts, scripts, skills y datos
> ficticios) y un grupo de WhatsApp para resolver dudas durante el reto y 30 días después. Cupo de 25.
>
> Necesitas una computadora y una suscripción a Claude Pro (US$20 al mes, se paga
> aparte, las prácticas consumen más que el plan gratuito). No necesitas saber nada de IA ni de programación.
>
> Si haces las cinco entregas y el reto no te convenció, te devuelvo el 100%, sin preguntas. Lo pides
> hasta el viernes 11 de diciembre.
>
> Más información: https://soycontador.ai/empieza

## "Avísame cuándo" (página /empieza)

Mientras `EDICIONES[0].checkout` sea `null`, el botón de registro abre un cuadro que recoge el correo
en la lista de Sendy `reto` (doble opt-in, como las demás). Cuando se pegue el checkout, el botón pasa
solo a "Apartar mi lugar" y el cuadro deja de montarse. Si la edición se llena (`agotado`) o pasa la
fecha, el mismo botón dice "Avísame de la siguiente edición".

**Pendiente de Israel (Sendy + Vercel):** crear la lista "Reto" en Sendy (con `confirm_url` hacia
`/gracias` o `/dentro` y su autoresponder), y poner su ID en la variable `SENDY_RETO_LIST_ID` de Vercel.
Mientras no exista, el alta cae en la lista general (39), que sí recibe el anuncio del reto, pero con la
bienvenida de la guía de 5 prompts.
