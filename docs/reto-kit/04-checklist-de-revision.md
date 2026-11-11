# Checklist de revisión: cómo se revisa una respuesta de Claude antes de firmar

**La IA propone, tú firmas.** Imprime esta hoja y pégala junto a tu pantalla. Cada vez que
Claude te dé algo que vayas a firmar, entregar o mandar a un cliente, pasa por estos diez
puntos. Son unos dos minutos, y cuestan menos que un requerimiento.

Si una sola casilla queda sin marcar, no se firma.

```
Fecha: ____________   Asunto (sin nombre ni RFC): ______________________________
Revisó: ___________________________
```

---

## Primero, el fundamento

**[ ] 1. ¿Cita ley, artículo y fracción? Si no, no vale.**
Por qué: una respuesta sin fundamento es una opinión, y a la autoridad no se le entregan opiniones.
Ejemplo: "los RESICO no sufren retención" no vale; "LISR art. 113-J: la persona moral retiene 1.25 % sobre los pagos sin IVA" sí (si el artículo no tiene fracciones, pide el párrafo).

**[ ] 2. ¿Lo abriste y dice lo que Claude dice que dice?**
Por qué: Claude puede citar un artículo que existe pero que habla de otra cosa, o uno que no existe.
Ejemplo: te cita el 113-J, lo abres en `leyes-mx` y confirmas que sí trata la retención a RESICO, no otro tema.

**[ ] 3. ¿La vigencia es la del ejercicio que trabajas?**
Por qué: la ley cambia cada año y Claude contesta con lo que más vio, no con lo que aplica a tu ejercicio.
Ejemplo: trabajas el ejercicio 2024 y la respuesta cita el texto vigente en 2026; pide la vigencia y la fecha de última reforma, y compárala con tu ejercicio.

## Después, los números y los datos

**[ ] 4. ¿Las cifras cuadran si las haces tú a mano una vez?**
Por qué: Claude se equivoca con aplomo, y un error aritmético con buena redacción se firma sin querer.
Ejemplo: te da una retención de $1,450 sobre pagos de $100,000 más IVA; a mano, 1.25 % de $100,000 es $1,250: calculó sobre el total con IVA.

**[ ] 5. ¿Trae algún dato de un cliente que no debía estar?**
Por qué: una vez que un nombre, RFC o CURP sale del despacho, ya no se recoge.
Ejemplo: en la tabla de salida aparece un RFC que no pediste; se borra antes de guardar o compartir y se revisa de dónde salió.

## Lo que sigue: el trabajo real de un despacho

**[ ] 6. ¿Distingue lo que verificó de lo que supone?**
Por qué: una suposición dicha con el mismo tono que un hecho es la forma más común de colarse un error.
Ejemplo: "aplica la tasa de 1.25 %" parte de suponer que el cliente está en RESICO; ese supuesto se marca y lo confirmas tú con su constancia, no Claude.
Pídeselo siempre: "separa en dos listas lo que verificaste en la fuente y lo que estás suponiendo".

**[ ] 7. Si cambias un dato, ¿el resultado cambia donde debe? (prueba de sensibilidad)**
Por qué: un cálculo que no reacciona al cambiar la entrada no está calculando, está repitiendo.
Ejemplo: cambias pagos de $100,000 a $200,000 y la retención sigue en $1,250; debía ser $2,500.

**[ ] 8. ¿Usa la RMF o criterios del SAT sin decir cuál ni de qué año?**
Por qué: "según la miscelánea" no es un fundamento; la RMF cambia cada año y se modifica durante el ejercicio.
Ejemplo: "según la RMF ya no es necesario presentar el aviso" sin número de regla ni ejercicio; pide la regla y el año, ábrela, y revisa en el DOF si tuvo modificaciones (la RMF 2026 en `leyes-mx` es el original del DOF del 28-12-2025, sin las resoluciones de modificación).

**[ ] 9. ¿El resultado se puede repetir mañana igual?**
Por qué: lo que hoy sale bien y el mes que viene sale distinto no es un proceso, es suerte.
Ejemplo: pasas el mismo XML mañana y el total cambia; en lugar de pedirle que calcule, pídele el script que calcula y guárdalo con su caso de prueba.

**[ ] 10. ¿Quién firma y qué dejaste documentado?**
Por qué: si te preguntan en seis meses, firmas tú, y necesitas poder reconstruir de dónde salió.
Ejemplo: en el expediente queda: "Retención RESICO. Prompt: proyecto Despacho v2. Fuente: LISR art. 113-J (`leyes-mx`). Fecha: 2026-11-11. Revisó: [tu nombre]".
Lo mínimo que se guarda: el prompt, la fuente con su vigencia, la fecha y quién revisó.

---

## Para memorizar (una línea)

> **Fundamento, abierto, vigente, cuadra, sin datos ajenos, sin supuestos, reacciona, RMF con año, repetible, documentado: si falla uno, no firmo.**

---

```
+--------------------------------------------------------------------+
|  CUÁNDO NO USAR CLAUDE Y CALCULAR A MANO                           |
|                                                                    |
|  [ ] Los datos traen nombre, RFC o CURP y no los puedes anonimizar |
|      (nivel tres: no va a un chat).                                |
|  [ ] Es una sola operación: una suma o un porcentaje. Calculadora  |
|      u hoja de cálculo; Claude solo agrega riesgo.                 |
|  [ ] No hay fundamento que puedas abrir y leer tú. Si la fuente    |
|      dice "no verificado", no hay respuesta, hay una conjetura.    |
|  [ ] La entrega es hoy y no hay tiempo de pasar los diez puntos.   |
|      Lo que no se revisa no se firma, aunque se vea bien.          |
|  [ ] Es una defensa ante la autoridad (requerimiento, recurso):    |
|      el argumento lo armas tú; Claude, a lo más, ordena el borrador|
|  [ ] No podrías explicarle al cliente por qué sale ese resultado.  |
|                                                                    |
|  Si marcas una sola: se hace a mano o con el script ya probado.    |
+--------------------------------------------------------------------+
```

*Verificación del ejemplo de fundamento: LISR art. 113-J, vigencia 2026, última reforma DOF
2024-04-01 (`leyes-mx`, 2026-11-11). La persona moral retiene 1.25 % sobre el monto de los pagos
sin IVA y lo entera a más tardar el día 17 del mes siguiente. Las cifras de los ejemplos 4 y 7
son aritmética simple sobre esa tasa.*
