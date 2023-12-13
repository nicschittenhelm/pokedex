# Pokédex

This is a infinite-scroll Pokedèx with clickable cards, dark mode, dynamic gradient generation based on pokemon types and beautiful design.
This was part of me trying out and learning new frameworks, a livedemo can be seen on my [Github-Pages](https://nicschittenhelm.github.io/pokedex/).

# Technical details

### This site was created using:

* [Node.js](https://nodejs.org/en/)
* [ReactJS](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Axios](https://axios-http.com/)
* [PokeAPI](https://pokeapi.co/docs/v2)


### Problems and solutions:

> **Having the modal nested inside each card caused clipping, wrong click behaviour and limited styling caused by the DOM.**
>> This was solved using [React-Portals](https://reactjs.org/docs/portals.html) to render each modal outside the root div.

> **Scaling up images without blurring them**
>> This was solved using a package called [tailwindcss-image-rendering](https://www.npmjs.com/package/tailwindcss-image-rendering), which adds the default CSS functionality `image-rendering: pixelated;` that tailwind doesnt offer.

> **Long loading times fetching all the pokemon data at once.**
>> This was solved by fetching in increments of 24 whenever the user scolls to the bottom of the page, turning the pokedex into an infinite-scroller. The `loadPokemon()` function checks if the current index exceeds `MAX_POKEMON` in order to avoid fetching non existing pokemon id's. Newly fetched data gets appended to the `newPokemon[]` list and the component gets rerenderd.
