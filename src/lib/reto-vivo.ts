/**
 * Lo que tiene fecha en los anuncios del reto, resuelto en el navegador.
 *
 * El sitio se construye una vez y se sirve igual durante semanas: si la cuenta
 * regresiva saliera del build, el 20 de noviembre seguiría diciendo "faltan 17
 * días". Por eso el HTML trae la fecha y aquí se escribe el texto del día, y
 * cuando la edición ya arrancó el anuncio se esconde solo, aunque nadie haya
 * vuelto a publicar. Sin JavaScript queda el texto del build, que dice la
 * fecha y no un número de días.
 */

/** El día del calendario en el centro de México (UTC-6 fijo desde 2022). */
const diaCdmx = (ms: number) => Math.floor((ms - 6 * 3_600_000) / 86_400_000);

export function textoFaltan(inicioIso: string, ahora = Date.now()): string | null {
  const inicio = Date.parse(inicioIso);
  if (Number.isNaN(inicio)) return null;
  const n = diaCdmx(inicio) - diaCdmx(ahora);
  if (n > 1) return `Faltan ${n} días`;
  if (n === 1) return "Empieza mañana";
  if (n === 0) return "Empieza hoy";
  return null;
}

/** Esconde lo que ya cerró y pone la cuenta regresiva en `[data-faltan]`. */
export function retoVivo(ahora = Date.now()): void {
  for (const el of document.querySelectorAll<HTMLElement>("[data-cierra]")) {
    const cierra = Date.parse(el.dataset.cierra ?? "");
    if (!Number.isNaN(cierra) && ahora > cierra) el.hidden = true;
  }
  for (const el of document.querySelectorAll<HTMLElement>("[data-faltan]")) {
    const texto = textoFaltan(el.dataset.faltan ?? "", ahora);
    if (texto) el.textContent = texto;
  }
}
