# Aprendizaje

**IA utilizada / autor de IA:** Raptor mini (Preview) / GitHub Copilot

## a) ¿Qué es useState y cuándo usarlo?

`useState` es un Hook de React que permite agregar estado local a componentes funcionales. Devuelve un par: el valor actual del estado y una función para actualizarlo. Cada vez que se llama a esa función con un valor nuevo, React vuelve a renderizar el componente con el estado actualizado.

### Explicación teórica

- `useState` se usa dentro de componentes funcionales.
- Permite almacenar valores que cambian con el tiempo: textos de inputs, resultados de filtros, pestañas activas, booleanos de visibilidad, etc.
- El estado persiste mientras el componente siga montado.
- La actualización es asíncrona y puede basarse en el valor anterior usando una función en `setState`.

### 3 ejemplos de su proyecto

1. `Content.jsx`

```jsx
const [search, setSearch] = useState('');
const [debouncedSearch, setDebouncedSearch] = useState('');
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(5);
const [filteredPlayers, setFilteredPlayers] = useState(players);
const [selectedPlayer, setSelectedPlayer] = useState(null);
const [showModal, setShowModal] = useState(false);
```

Aquí se guarda el texto de búsqueda, la versión debounced, la página actual, los jugadores filtrados, el jugador seleccionado y si el modal está abierto.

2. `PlayerTable.jsx`

```jsx
const [rowColors, setRowColors] = useState('none');
```

Este estado controla si las filas de la tabla se pintan pares, impares o no se colorean.

3. `Content.jsx` total favorito

```jsx
const [totalFav, setTotalFav] = useState(getTotalFav());
```

Se usa para mostrar cuántos jugadores marcados como favoritos hay en el filtro actual.

## b) ¿Qué es useEffect y sus casos de uso?

`useEffect` es un Hook que permite ejecutar código después de que el componente se ha renderizado. Es el equivalente funcional de los métodos de ciclo de vida `componentDidMount`, `componentDidUpdate` y `componentWillUnmount` en componentes de clase.

### Explicación del ciclo de vida

- Se ejecuta después del renderizado del componente.
- Al usar un array de dependencias, React corre el efecto cuando cualquiera de las dependencias cambia.
- El efecto puede devolver una función de limpieza (`cleanup`) que se ejecuta antes del siguiente efecto o al desmontar el componente.

### Diferencia entre `[]`, `[dep]` y sin array

- `[]`: el efecto solo se ejecuta una vez, después del primer render. Es útil para inicializar datos o suscribirse a eventos.
- `[dep]`: el efecto se ejecuta en el primer render y cada vez que cambia `dep`. Por ejemplo, actualiza el filtro cuando cambia la búsqueda.
- Sin array: el efecto se ejecuta después de cada render, lo que puede provocar trabajo repetido innecesario.

### Ejemplo de cleanup function

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 250);

  return () => clearTimeout(timer);
}, [search]);
```

Aquí `useEffect` crea un temporizador para aplicar debounce y devuelve una función de limpieza que borra el timeout anterior antes de crear uno nuevo.

## c) ¿Qué es useMemo y cuándo usarlo?

`useMemo` memoriza un valor calculado para evitar recomputar resultados costosos en cada render.

- Se usa cuando tienes una operación pesada o un cálculo derivado que solo debe reevaluarse si cambian ciertas dependencias.
- Devuelve el valor memorizado.

### Diferencia con useCallback

- `useMemo` memoriza el resultado de una función.
- `useCallback` memoriza la función en sí.
- Si necesitas evitar recrear un objeto o array costoso, usa `useMemo`.
- Si necesitas evitar que un callback cambie de referencia y provoque renders extra en componentes hijos, usa `useCallback`.

### Ejemplo de optimización de su proyecto

En este proyecto podrías usar `useMemo` para memorizar `filteredPlayers` si el filtrado fuera costoso:

```jsx
const filteredPlayers = useMemo(() => {
  return players.filter(
    (p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      p.club.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );
}, [debouncedSearch]);
```

Así el filtrado solo se recalcula cuando `debouncedSearch` cambia.

## d) ¿Cómo funciona el cleanup en useEffect?

La función de limpieza en `useEffect` se ejecuta antes de aplicar el siguiente efecto o cuando el componente se desmonta. Sirve para eliminar timers, suscripciones, listeners o datos temporales que ya no deben existir.

### Explicación con ejemplo del debounce de su proyecto

En `Content.jsx`:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 250);

  return () => clearTimeout(timer);
}, [search]);
```

Flujo:

- El usuario escribe en el input.
- `search` cambia y React vuelve a renderizar.
- Se crea un nuevo timeout de 250 ms.
- Si el usuario escribe otra letra antes de 250 ms, el cleanup borra el timer anterior.
- Al final, solo se ejecuta `setDebouncedSearch` una vez que el usuario deja de escribir.

## e) ¿Cómo funciona localStorage con React?

`localStorage` es una API del navegador para guardar datos en el cliente. Con React, se usa normalmente dentro de `useEffect` para leer datos al montar y escribir datos cuando el estado cambia.

### Ejemplo de persistencia de su proyecto

Aunque este proyecto no tiene persistencia en el código actual, el patrón sería:

```jsx
useEffect(() => {
  const savedSearch = localStorage.getItem('search');
  if (savedSearch) {
    setSearch(savedSearch);
  }
}, []);

useEffect(() => {
  localStorage.setItem('search', search);
}, [search]);
```

Así el valor de `search` se carga desde `localStorage` al iniciar y se guarda cada vez que cambia.

### Nota final

En este archivo explico hooks de React usando ejemplos reales del proyecto, con énfasis en cómo funcionan y cuándo conviene aplicarlos.
