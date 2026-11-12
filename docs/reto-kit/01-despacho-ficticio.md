# Ficha del despacho ficticio: Ortega Contadores

Pieza 1 del kit del reto "Empieza aquí". La clase 1 (bloque 1) la muestra en pantalla y se entrega completa a quien participa.

**Todo lo de esta ficha es inventado.** Los nombres, los RFC, las CURP, las cuentas y los importes no corresponden a ninguna persona ni empresa real. Los RFC y las CURP tienen formato válido, pero llevan "XXX" y fechas redondas a propósito para que se note que son de práctica. Por eso mismo no van a validar contra el SAT.

## Cómo se usa

1. Es el mismo despacho de lunes a viernes. Cada día trabajas un cliente distinto, así que nadie parte de cero.
2. Los datos son de práctica y se pueden usar en el chat y en el proyecto. **Con datos reales de tus clientes no:** ahí aplica tu lista de "qué nunca se sube". Cuando pases tu propio caso, usa las etiquetas Cliente A, Cliente B y Cliente C, no nombres ni RFC.
3. Los archivos de cada cliente traen **errores sembrados a propósito**. Esta ficha te dice cuántos y de qué tipo, no cuáles. Encontrarlos es parte de la práctica, y el checklist de revisión sirve para eso.
4. Todo es del ejercicio 2026 y el mes de trabajo es **octubre de 2026**.

## El despacho

**Ortega Contadores** (ficticio). Ciudad de México. Atiende a micronegocios y pymes de servicios y comercio.

| Quién | Qué hace |
|---|---|
| C.P. Aurelio Ortega Paz | Socio titular. Revisa y firma todo lo que sale del despacho. |
| C.P. Mariana Ríos Cantú | Contadora. Lleva la nómina y las personas morales. |
| Joaquín Mendoza | Auxiliar. Descarga los XML, captura y concilia. |

Tú entras como parte del despacho. La regla de la casa es la del reto: la IA propone, tú firmas.

## Los tres clientes de un vistazo

| | Cliente A | Cliente B | Cliente C |
|---|---|---|---|
| Quién | Persona física | Empresa pequeña | Persona moral |
| Régimen | RESICO (personas físicas) | Régimen general de personas morales, con nómina | Régimen general de personas morales |
| Giro | Consultoría en seguridad e higiene industrial | Lavandería industrial | Comercio al por mayor de material eléctrico |
| Qué se le hace cada mes | Pago mensual y IVA, con la retención de ISR que le hacen | ISR de sueldos de 8 empleados y su resumen | Ingresos, egresos, pagos, conciliación e IVA |
| Día principal | Lunes (y jueves) | Miércoles | Martes (y viernes) |

---

## Cliente A: persona física en RESICO que factura a una persona moral

| Dato | Valor (ficticio) |
|---|---|
| Nombre | Ramiro Valdivia Ochoa |
| RFC | VAOR800101XXX |
| CURP | VAOR800101HDFXXX00 |
| Régimen | Régimen Simplificado de Confianza, personas físicas (actividades profesionales) |
| Giro | Consultoría en seguridad e higiene industrial: auditorías, capacitación y dictámenes para plantas |
| Su cliente principal | Manufacturas del Norte Ejemplo, S.A. de C.V. (RFC MNE100101XXX), persona moral que le retiene ISR |
| Moneda y periodicidad | Pesos. Declaraciones mensuales |

### Qué se le hace cada mes

- Sumar los ingresos **efectivamente cobrados** en el mes, sin IVA, amparados por sus CFDI (LISR art. 113-E).
- Revisar que cada pago de la persona moral traiga la **retención de ISR del 1.25 %** sobre el monto sin IVA (LISR art. 113-J).
- Calcular el pago mensual con la tabla del art. 113-E, acreditando la retención, y presentarlo a más tardar el día 17 del mes siguiente.
- Calcular el IVA del mes.

### Datos de octubre 2026

Tres facturas emitidas a Manufacturas del Norte Ejemplo, por honorarios de consultoría. Vienen en XML y en el auxiliar de ingresos del despacho (Excel).

| Folio | Emisión | Subtotal | IVA 16 % | ISR retenido | Total | Cobro |
|---|---|---|---|---|---|---|
| F-1041 | 2026-10-06 | 18,000.00 | 2,880.00 | 225.00 | 20,655.00 | 2026-10-20 |
| F-1042 | 2026-10-14 | 22,500.00 | 3,600.00 | 225.00 | 25,875.00 | 2026-10-27 |
| F-1043 | 2026-10-29 | 15,000.00 | 2,400.00 | 187.50 | 17,212.50 | 2026-11-06 |

### Errores sembrados: 3

Un duplicado en el auxiliar, una retención con la tasa equivocada y un ingreso en el mes que no le toca. Los encuentras tú, con el checklist en la mano.

### Qué día se usa

- **Lunes:** es el caso de los prompts de la demo (¿le retienen ISR?, ¿con qué tasa y en qué artículo?) y del proyecto "Despacho ficticio".
- **Jueves:** su pago mensual de octubre es el ejemplo de un cálculo con fundamento por renglón (cada cifra con su artículo).

---

## Cliente B: empresa pequeña con nómina

| Dato | Valor (ficticio) |
|---|---|
| Razón social | Lavandería Industrial Jacarandas, S.A. de C.V. |
| RFC | LIJ190101XXX |
| Régimen | Régimen general de personas morales, patrón con 8 trabajadores |
| Giro | Lavado y planchado de ropa de cama y mantelería para hoteles pequeños y restaurantes |
| Nómina | 8 trabajadores, sueldo mensual, un pago al mes |
| Periodo de práctica | Octubre 2026, un solo pago mensual |

### Qué se le hace cada mes

- Calcular el ISR de sueldos de cada trabajador con la tarifa mensual (LISR art. 96; la tarifa vigente de 2026 es la del Anexo 8 de la RMF).
- Cuadrar los CFDI de nómina timbrados contra el auxiliar de nómina.
- Sacar el resumen para el pago del ISR retenido, que se entera a más tardar el día 17 del mes siguiente (LISR art. 96).

### La plantilla (octubre 2026)

| Clave | Nombre | Puesto | Sueldo mensual | RFC | CURP |
|---|---|---|---|---|---|
| E01 | Gerardo Linares Pozos | Gerente de operación | 32,000.00 | LIPG850101XXX | LIPG850101HDFXXX00 |
| E02 | Paola Villaseñor Nieto | Administración | 21,500.00 | VINP900101XXX | VINP900101MDFXXX00 |
| E03 | Hugo Becerril Ayala | Supervisor de planta | 15,500.00 | BEAH880101XXX | BEAH880101HDFXXX00 |
| E04 | Daniela Ocampo Rentería | Atención a clientes | 12,800.00 | OARD950101XXX | OARD950101MDFXXX00 |
| E05 | Iván Montiel Cuevas | Operador de calandria | 11,200.00 | MOCI920101XXX | MOCI920101HDFXXX00 |
| E06 | Rosa Elena Tapia Murguía | Planchadora | 10,800.00 | TAMR800101XXX | TAMR800101MDFXXX00 |
| E07 | Efraín Sandoval Lira | Repartidor | 10,500.00 | SALE870101XXX | SALE870101HDFXXX00 |
| E08 | Karen Zúñiga Olmos | Auxiliar de lavado | 10,000.00 | ZUOK980101XXX | ZUOK980101MDFXXX00 |
| | | **Total de sueldos** | **124,300.00** | | |

Aquí solo hay sueldo ordinario. No hay horas extra, aguinaldo ni otras percepciones, para que el cálculo del miércoles sea limpio y se pueda probar contra un resultado conocido.

### Errores sembrados: 4

Una diferencia de centavos entre el auxiliar y un CFDI, una cifra de sueldo que no coincide, un recibo timbrado dos veces y un dato de identificación incompleto.

### Qué día se usa

- **Miércoles:** el ISR de sueldos como script, probado con un caso de resultado conocido. La plantilla de arriba es la que se calcula.
- **Jueves (opcional):** si eliges las cuotas o el ajuste anual como tu propio cálculo, esta plantilla es la materia prima.

---

## Cliente C: persona moral comercializadora

| Dato | Valor (ficticio) |
|---|---|
| Razón social | Comercializadora Voltaje Central, S.A. de C.V. |
| RFC | CVC200101XXX |
| Régimen | Régimen general de personas morales |
| Giro | Compra y venta al mayoreo de material eléctrico e iluminación, a contratistas y ferreterías |
| Banco | Banco Ejemplo (ficticio), una cuenta de cheques en pesos |
| Periodo de práctica | Octubre 2026 |

### Qué se le hace cada mes

- Descargar y revisar el lote de CFDI del mes: emitidos, recibidos, notas de crédito y complementos de pago.
- Pasar los XML a una tabla y revisar duplicados, totales y comprobantes que no cuadran.
- Conciliar el estado de cuenta contra los CFDI y el auxiliar.
- Calcular el IVA del mes y el pago provisional de ISR, con lo que ya quedó conciliado.

### Datos de octubre 2026

| Archivo | Qué trae |
|---|---|
| Lote de XML | 30 archivos: 12 CFDI emitidos (ingreso), 10 recibidos (compras y gastos), 2 notas de crédito (egreso) y 6 complementos de pago |
| Estado de cuenta | Octubre 2026, unos 35 movimientos (abonos de clientes, pagos a proveedores, comisiones). En PDF y en Excel |
| Auxiliar | Ingresos y egresos del mes que lleva el despacho (Excel) |

### Errores sembrados: 5

Un CFDI repetido, un comprobante cuyo total no cuadra, un cargo del banco sin comprobante, un comprobante sin movimiento en el banco y un abono con diferencia contra lo facturado. Son los cinco que cualquier despacho encuentra en cualquier cierre de mes.

### Qué día se usa

- **Martes:** el lote de XML a tabla y la conciliación contra el estado de cuenta.
- **Viernes:** sus procesos del mes (descargar, revisar, conciliar, calcular) son los candidatos para elegir "qué automatizo primero" en el plan de 30 días.

---

## Qué se usa cada día de la semana

| Día | Qué haces | Qué se usa de esta ficha | Qué tiene que salir |
|---|---|---|---|
| **Lunes 30-nov** | Pides con reglas | Cliente A (la pregunta de la retención), la ficha completa para armar las instrucciones del proyecto | Proyecto configurado, lista de "qué nunca se sube" y checklist de revisión |
| **Martes 1-dic** | Le das tus archivos | Cliente C completo: lote de XML, estado de cuenta y auxiliar. Cliente A: el auxiliar de ingresos (duplicado) | Lote de XML revisado y conciliación contra el estado de cuenta, con los errores encontrados |
| **Miércoles 2-dic** | Lo vuelves repetible | Cliente B completo: plantilla, auxiliar de nómina y CFDI de nómina | ISR de sueldos como script, probado con un caso conocido |
| **Jueves 3-dic** | Lo fundamentas | Cliente A (pago mensual de octubre, como ejemplo) y tu propio problema. Opcional: Cliente B para cuotas o ajuste anual | Tu cálculo con fundamento por renglón |
| **Viernes 4-dic** | Lo conviertes en operación | Los tres clientes: sus tareas del mes como lista de procesos a automatizar | Kit empaquetado y plan de 30 días |

Los errores sembrados salen en el mismo orden: el lunes y el jueves, los de Cliente A; el martes, los de Cliente C (y el duplicado de Cliente A); el miércoles, los de Cliente B.

## Los archivos que acompañan a esta ficha

Todos son de práctica y van en la carpeta de datos ficticios del kit. Se producen antes de la clase que los usa.

| Archivo | Cliente | Se usa | Estado |
|---|---|---|---|
| XML de las tres facturas de octubre y auxiliar de ingresos (Excel) | A | Lunes, martes y jueves | por producir |
| Lote de 30 XML de octubre | C | Martes | por producir |
| Estado de cuenta de octubre (PDF y Excel) | C | Martes | por producir |
| Auxiliar de ingresos y egresos (Excel) | C | Martes | por producir |
| Plantilla de nómina y auxiliar (Excel) | B | Miércoles | por producir |
| 9 XML de nómina de octubre | B | Miércoles | por producir |
| Caso de prueba de ISR de sueldos con resultado conocido | B | Miércoles | por producir |

Verificación de los artículos citados (leyes-mx, 2026-11-11): LISR art. 96 (tarifa mensual y entero a más tardar el día 17), LISR art. 113-E (RESICO: base de ingresos cobrados y tabla mensual), LISR art. 113-J (retención del 1.25 % y entero a más tardar el día 17), LIVA art. 1 (tasa del 16 %). Todos vigentes en 2026. La tarifa mensual de sueldos de 2026 es la del Anexo 8 de la RMF, no la tabla impresa en el art. 96.

---

<!-- CORTAR DE AQUÍ PARA ABAJO ANTES DE PRODUCIR EL PDF QUE SE ENTREGA -->

# Anexo del instructor: clave de los errores sembrados

**No va en el PDF que se entrega ni se muestra en pantalla.** Es la respuesta de la práctica. Al producir los archivos de datos, cada error se siembra tal como está aquí y se prueba que el prompt, el script o la conciliación del día lo detecten.

## Cliente A (lunes, martes y jueves)

| Clave | Error | Dónde | Cómo se ve |
|---|---|---|---|
| A1 | CFDI duplicado en el auxiliar | Auxiliar de ingresos | La F-1041 está capturada dos veces (misma UUID), y el ingreso del mes se infla en 18,000.00 |
| A2 | Retención con tasa equivocada | F-1042 | La persona moral retuvo 225.00, que es el 1.00 % de 22,500.00. Con el 1.25 % de LISR 113-J son 281.25, y el total debió ser 25,818.75 |
| A3 | Ingreso en el mes que no le toca | F-1043 | Se emitió el 29-oct pero se cobró el 6-nov: no entra a octubre porque el pago mensual de RESICO se hace con ingresos efectivamente cobrados (LISR 113-E) |

Resultado de referencia de octubre, ya sin errores (a confirmar con leyes-mx antes de grabar la clase 4): ingresos cobrados en octubre 40,500.00 (F-1041 y F-1042), que caen en el renglón de "hasta 50,000.00" de la tabla mensual del 113-E, tasa 1.10 %, impuesto 445.50. Retenciones acreditables: 225.00 + 281.25 = 506.25. La retención supera al impuesto del mes.

## Cliente B (miércoles)

| Clave | Error | Dónde | Cómo se ve |
|---|---|---|---|
| B1 | Diferencia de centavos | E04, Daniela Ocampo | El ISR retenido del CFDI de nómina trae 0.01 más que el auxiliar (el auxiliar redondea distinto). No se corrige "a ojo": se rastrea la causa |
| B2 | Sueldo que no coincide | E03, Hugo Becerril | El auxiliar dice 15,500.00 y el CFDI de nómina dice 15,050.00 (cifras volteadas). Diferencia de 450.00 |
| B3 | Recibo duplicado | E06, Rosa Elena Tapia | Dos CFDI de nómina del mismo periodo, con UUID distinto. Son 9 XML para 8 trabajadores |
| B4 | CURP incompleta | E07, Efraín Sandoval | La CURP del catálogo trae 17 caracteres en lugar de 18 |

Control: el total de sueldos del auxiliar es 124,300.00. La suma de los XML con errores da 134,650.00 (124,300.00, menos 450.00 de B2, más 10,800.00 del recibo duplicado de B3).

## Cliente C (martes)

| Clave | Error | Dónde | Cómo se ve |
|---|---|---|---|
| C1 | CFDI duplicado | Lote de XML | Una compra de 40,000.00 más IVA 6,400.00, total 46,400.00, viene en dos archivos con nombres distintos y la misma UUID |
| C2 | Comprobante que no cuadra | Un CFDI emitido | Subtotal 25,000.00 más IVA 4,000.00 debe dar 29,000.00, pero el total dice 28,000.00 |
| C3 | Cargo sin CFDI | Estado de cuenta | Transferencia "PAGO SERV LOGISTICOS" por 8,120.00 (7,000.00 más IVA de 1,120.00) sin ningún CFDI recibido |
| C4 | CFDI sin movimiento | Lote de XML | Compra de contado (PUE) de 6,960.00 (6,000.00 más IVA de 960.00) que no aparece en el estado de cuenta |
| C5 | Abono con diferencia | Estado de cuenta contra complemento de pago | El cliente depositó 11,500.00 y el comprobante pagado es de 11,600.00 (10,000.00 más IVA de 1,600.00): diferencia de 100.00 |

## Reglas para producir los archivos

- Ningún dato real: ni un RFC, nombre, cuenta o folio de un contribuyente real. Los RFC de la ficha son los únicos que se usan.
- Los XML llevan UUID inventadas y la leyenda de ejemplo en el emisor. No se timbran: no existen en el SAT, y eso se avisa en la clase 2 para que nadie intente validarlos.
- Cada archivo se corre antes de la clase contra el prompt, el script o la conciliación que se muestra, y la respuesta se compara con esta clave.
- Si se cambia un importe aquí, se cambia en el cuerpo de la ficha (tablas de datos) y en los archivos. Lo que se entrega y lo que se produce tiene que decir lo mismo.
