# Qué nunca se sube a un chat

Lista de verificación del reto "Empieza aquí". Imprímela o pégala junto a tu pantalla.
Versión del 2026-11-11. Va con la clase 1 (lunes) y se usa los cinco días.

---

## 1. La regla corta

> **Si trae nombre, RFC o CURP, no se pega.**

Tus clientes te dieron sus datos para que hagas su contabilidad, no para que los pases a una herramienta.
Antes de pegar o adjuntar cualquier cosa, una pregunta: **¿esto identifica a una persona o a un cliente?**
Si la respuesta es sí o "no sé", no se sube. Primero se anonimiza (sección 4).

---

## 2. Los tres niveles de datos

Para cada tarea, decide en qué nivel cae. Si dudas, sube un nivel de cautela.

| Nivel | Dónde | Qué puede ir | Ejemplo |
|---|---|---|---|
| **1. Chat cualquiera** | Un chat nuevo de Claude | Solo lo que podría estar en un blog: una **duda fiscal sin nombre ni RFC**, un artículo, una regla, un caso inventado | "¿Cómo se calcula el pago provisional de una persona física en RESICO?" |
| **2. Proyecto de Claude con datos anonimizados** | Tu proyecto del despacho | El caso real, **sin quién es**: nombres sustituidos, RFC y CURP fuera, cifras con la misma lógica (sección 4) | La nómina de "Empleado 1 a 8" de la "Empresa A" |
| **3. Canal controlado** | Un lugar donde **tú puedes ver quién accede** (carpeta o sistema del despacho con permisos por persona y registro de accesos) | **Todo lo que trae datos de personas** y no se puede anonimizar sin perder el trabajo | El lote real de XML de un cliente, la nómina con nombres, el estado de cuenta real |

Dos avisos:

- El nivel 3 **no es un chat**. Si la tarea exige los datos reales, esa parte no se hace en Claude, o se hace con los datos ya anonimizados.
- Anonimizar no es solo quitar el nombre. Un monto poco común, con una fecha y una ciudad, puede identificar a alguien. Revisa el conjunto, no solo cada dato.

---

## 3. Lo que NUNCA se sube

Marca cada renglón cuando lo hayas leído. Ninguno de estos va a un chat, ni a un proyecto, tal cual.

### Para entrar al SAT y firmar

- [ ] **e.firma (FIEL)**: el archivo .cer, el archivo .key y su contraseña. Quien los tiene firma como el titular: el CFF art. 17-D dice que la firma electrónica avanzada con certificado vigente sustituye a la firma autógrafa y produce los mismos efectos.
- [ ] **Certificados de sello digital (CSD)**: .cer, .key y contraseña.
- [ ] **Contraseña del SAT (CIEC)** y cualquier contraseña de portales: SAT, IMSS (IDSE, SIPARE), INFONAVIT, banca en línea, buzón tributario.
- [ ] **Tokens, llaves de acceso y códigos de verificación** de cualquier servicio, incluidos los de tus propias herramientas.

### Quién es la persona o el cliente

- [ ] **RFC** (de clientes, de empleados, de proveedores, de ti mismo si es persona física).
- [ ] **CURP**.
- [ ] **Nombres completos** de personas, **razón social** de tus clientes y nombre comercial.
- [ ] **NSS** (número de seguridad social) y número de crédito INFONAVIT.
- [ ] **Domicilio, teléfono, correo** y fecha de nacimiento.
- [ ] **Identificaciones** (INE, pasaporte), actas, comprobantes de domicilio.

### Dinero

- [ ] **CLABE, número de cuenta y de tarjeta** (completos o los últimos dígitos junto con el nombre).
- [ ] **Estados de cuenta** con datos reales: titular, cuenta, movimientos con nombres de terceros.
- [ ] **Nóminas con nombres** (y recibos de nómina): sueldos de personas identificables.
- [ ] **Descuentos y préstamos** de empleados (pensión alimenticia, INFONAVIT, FONACOT).

### Documentos del cliente

- [ ] **XML y PDF de CFDI reales** (traen RFC, nombre, domicilio fiscal e importes de emisor y receptor).
- [ ] **Constancia de Situación Fiscal y opinión de cumplimiento**: traen RFC, CURP y domicilio.
- [ ] **Declaraciones, acuses y papeles de trabajo** con el nombre del cliente.
- [ ] **Balanzas, auxiliares y pólizas** que dicen de qué cliente son o con quién operó.
- [ ] **Contratos, expedientes laborales, incapacidades, finiquitos y demandas** con nombres.
- [ ] **Datos de salud** de cualquier persona (incapacidades, constancias médicas).

### Lo que se cuela sin que lo veas

- [ ] **El nombre del archivo** ("Nomina_Gomez_Quincena2.xlsx").
- [ ] **Hojas ocultas, comentarios, encabezados, pies de página y propiedades del archivo** (autor, empresa).
- [ ] **Capturas de pantalla** con la barra de pestañas, el correo o un RFC al fondo.
- [ ] **Nombres de carpeta** en la ruta que aparece en una captura.

**Dos clases de renglón:** las credenciales (contraseñas, llaves, tokens) **no se suben nunca, ni en ningún nivel**: no hay forma de anonimizarlas. Los datos de personas se anonimizan para el nivel 2 o se quedan en el nivel 3.

---

## 4. Cómo se anonimiza en la práctica

Cuatro movimientos. Después de cada uno, **la lógica del caso se queda igual**: lo que se sustituye es quién, no cuánto ni cómo.

1. **Nombres**: cambia cada persona por un rótulo fijo (Cliente A, Empleado 1, Proveedor X). El mismo rótulo para la misma persona en todo el documento. Guarda la tabla de equivalencias en tu equipo, **no** en el chat.
2. **RFC, CURP, NSS, CLABE**: se quitan o se "mochan". El RFC mocho conserva solo el tipo ("RFC de persona física", "RFC de persona moral") o un marcador ("RFC-CLIENTE-A"). Ojo: los primeros 10 caracteres del RFC de una persona física salen de su nombre y su fecha de nacimiento, así que **cortarle la homoclave no lo anonimiza**.
3. **Cifras**: redondea, o multiplica todo por un mismo factor, o cámbialas por otras del mismo orden. Lo que no se toca: **las proporciones, los signos y las reglas** (un ingreso que rebasa el tope sigue rebasándolo; una diferencia de $0.01 que debe cuadrar sigue cuadrando).
4. **Fechas**: recórrelas todas por el mismo número de días o conserva el mes y cambia el día, sin romper el periodo (el mes de pago, el ejercicio y los vencimientos siguen siendo los mismos).

### Ejemplo 1: una consulta de RESICO

**Antes (no se sube):**

```
Mi cliente Marcela Treviño Ibarra, RFC TEIM850314XX0, tuvo ingresos en
octubre por $48,732.50 facturados a Constructora del Bajío SA de CV.
¿Cuánto paga de ISR provisional en RESICO?
```

**Después (puede ir al nivel 2):**

```
Una persona física en RESICO tuvo ingresos facturados en el mes por
$48,000.00, todos a una persona moral. ¿Cuánto paga de ISR provisional?
Cita el artículo y la vigencia.
```

Se quitó: nombre, RFC y cliente. Se redondeó la cifra. La tasa depende del monto del mes, así que el redondeo no cambió el tramo; **revísalo** antes de redondear.

### Ejemplo 2: un renglón de estado de cuenta

**Antes (no se sube):**

```
03/10/2026  SPEI RECIBIDO  BBVA  CLABE 012180001234567891
            Ordenante: INMOBILIARIA LOMAS DEL SUR SA DE CV
            Concepto: Renta oficina oct    $ 18,560.00   Saldo $ 241,889.14
```

**Después (puede ir al nivel 2):**

```
03/10/2026  SPEI RECIBIDO  [BANCO A]  CLABE [OMITIDA]
            Ordenante: [CLIENTE-1]
            Concepto: Renta oficina oct    $ 18,000.00   Saldo $ 240,000.00
```

Se quitó: CLABE, banco y nombre del ordenante. Cada monto se cambió por una cifra del mismo orden y el movimiento sigue siendo un ingreso en esa fecha. Si el ejercicio es una conciliación, **todas las partidas se ajustan con la misma regla** para que la suma siga cuadrando con el saldo.

### Ejemplo 3: una nómina

**Antes (no se sube):**

| Empleado | NSS | Sueldo mensual | Descuento |
|---|---|---|---|
| Hernández Cruz, Luis Alberto | 12 34 56 7890 1 | $ 18,450.00 | Crédito INFONAVIT |
| Soto Pérez, Daniela | 98 76 54 3210 9 | $ 11,200.00 | Pensión alimenticia |

**Después (puede ir al nivel 2):**

| Empleado | NSS | Sueldo mensual | Descuento |
|---|---|---|---|
| Empleado 1 | [OMITIDO] | $ 18,000.00 | Descuento tipo A |
| Empleado 2 | [OMITIDO] | $ 11,000.00 | Descuento tipo B |

Se quitó: nombres, NSS y el tipo de descuento (que por sí solo dice cosas de la persona). Los sueldos se redondearon; si el cálculo depende de un tope o de un tramo de la tarifa, **confirma que cada sueldo siga en el mismo tramo**.

### Antes de enviar, revisa

- [ ] Busqué en el texto el patrón de RFC, CURP, CLABE y NSS (letras y números largos).
- [ ] Busqué el nombre del cliente, del dueño y de los empleados.
- [ ] Revisé hojas ocultas, comentarios, encabezados y propiedades del archivo.
- [ ] Revisé el nombre del archivo y las capturas.
- [ ] Un colega que no conoce al cliente no podría decir de quién es esto.

---

## 5. Si ya subiste algo por error

Pasa. Hazlo en orden y sin alarmismo; lo importante es dejar constancia de qué pasó.

1. **Para.** No sigas la conversación ni subas más archivos en ese chat.
2. **Anota qué se subió**: qué datos, de quién, en qué fecha y en qué cuenta (personal o del despacho). Esto lo vas a necesitar para los pasos 5 y 6.
3. **Borra el chat** (o el archivo del proyecto, si fue ahí). Borrar es lo primero que se hace, pero **no se da por hecho** que con eso termina el asunto: lo que pasa del otro lado depende de la política del proveedor, que cambia.
4. **Revisa Configuración > Privacidad de tu cuenta y lee lo que dice hoy.** No te fíes de lo que alguien (ni este documento) recuerde de plazos de retención o de si los chats se usan para entrenar: lee tu pantalla, ese día, y apunta qué ves.
   **Revisado el: ____ / ____ / ________**
5. **Si era una credencial** (contraseña, CIEC, e.firma, token): cámbiala de inmediato. Si fue la e.firma o su contraseña, consulta en el SAT cómo revocar el certificado y tramitar uno nuevo; no esperes a ver si pasa algo.
6. **Si eran datos de un cliente, avísale.** Dile qué datos fueron, cuándo, qué hiciste y qué cambiaste. Mejor que lo sepa por ti. Si tu despacho tiene aviso de privacidad o contrato de servicios con el cliente, revisa qué te obliga.
7. **Avisa a tu equipo y ajusta el proceso**: qué falló (¿no se anonimizó?, ¿se adjuntó el archivo equivocado?) y qué cambia para que no se repita. Agrega ese caso a esta lista.

**Sobre la ley:** la protección de datos personales en posesión de particulares tiene su propia ley (LFPDPPP) y obligaciones de aviso y de seguridad. **No verificado**: la base de leyes que usa este kit (LISR, LIVA, CFF, LFT, LSS y sus reglamentos) no la incluye, así que aquí no se cita ni artículo ni plazo. Consúltala en su fuente oficial vigente, o con quien lleve lo jurídico de tu despacho, antes de decidir qué te obliga en tu caso.

---

## Control de esta hoja

- Configuración de privacidad de mi cuenta revisada el: ____ / ____ / ________
- Quién revisó (nombre o iniciales): ______________
- Lugar donde guardo la tabla de equivalencias de nombres (nivel 3): ______________
- Lo que cambié en mi proceso después de esta lista: ____________________________

*Esta hoja es una guía de trabajo del reto, no asesoría jurídica. Lo que dice el proveedor de la herramienta sobre privacidad, retención o entrenamiento se lee en su pantalla, el día que lo usas.*
