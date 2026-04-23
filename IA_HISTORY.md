# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** Agustina Ayélen Rivoira
**Fecha:** 23/04/2026

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Al intentar hacer git push la terminal me tiro un error por no tener permisos
-->
```

### Lo que le pedí a la IA

```
<"La terminal me tira un error de permisos al intentar hacer git push. Me dice que el permiso fue denegado a mi usuario en el repositorio del curso, como se soluciona?"
```

### Análisis del resultado obtenido

```
<!--
  La IA me explico que lo que estaba haciendo es subir cambios al repositorio original que no tengo permisos porque no soy la dueña, entonces me sugirió hacer un Fork lo hice y la IA me sugirió usar HTTPS pero no fue lo que yo esperaba porque como yo habia creado durante el curso la llave SSH, decidí mantener ese formato y luego ya me dejo subir los commits.
  
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  El error que tenia es que me sugeria seguir usar HTTPS pero yo ya tenia mi clave SSH creada y lo vi innecesario ya que tendria que seguir un nuevo paso más porque me iba a pedir ingresar el usuario y demás, por ende decidí seguir el formato que vimos en la clases ya que estaba mas familiarizada con este y me resultaba más comodo para trabajar.
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Estaba intentando resolver la function3 de la consigna utilizando el arrowfunction pero no me salia la funcion y no veia el error
-->
```

### Lo que le pedí a la IA

```
Necesito crear una función en JavaScript llamada canCastSpell que sea de tipo Arrow Function. La función es verificar si hay suficiente mana y si el personaje no está aturdido
```

### Análisis del resultado obtenido

```
<!--
  Me pasó una funcion de una sola linea que en su momento no lograba comprender, la modifique utilizando {} y le agregué un if else ya que lo entiendo mejor, y remplace el !stunned por isstunned===false 
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  la modifique utilizando {} y le agregué un if else ya que lo entiendo mejor, y remplace el !stunned por isstunned===false para que sea mas claro
-->
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  La IA me sugirió buenos cambios pero decidi hacer cambios por mi misma ya que veia que habia opciones que no entendia, o que me costaba más realizar. No lo mencioné pero para el tema del diseño me enfoque tambien en ver las opciones que me daba la IA y quedó mejor esteticamente, considero que debo trabajar más en el CSS y entenderlo mejor para futuros trabajos.
-->
```
