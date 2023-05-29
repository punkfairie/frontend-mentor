# Frontend Mentor - Product preview card component solution

This is a solution to
the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/product-preview-card-vanilla-csshtml-w-vite-tOKhLeMFut)
- [Live Site URL](https://product-preview-card-component-zeta-teal.vercel.app/)

## My process

### Built with

- CSS/HTML
- Vite.js

### What I learned

How to use a `<picture>` element and set images differently based on media queries:

```html

<picture>
  <source media="(max-width: 999px)" srcset="images/image-product-mobile.jpg">
  <source media="(min-width: 1000px)" srcset="images/image-product-desktop.jpg">
  <!-- <img> is required! Src is set to fallback img -->
  <img
    src="images/image-product-desktop.jpg"
    alt="Gabrielle Essence perfume bottle"
    class="ProductCard-picture"
  >
</picture>
```

Additionally, <picture> does not automatically shrink-wrap to its <img>, so CSS is required to keep
<picture> from creating extra spacing:

```css
.ProductCard-picture {
    height: 100%;
}
```

### Useful resources

[SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

I've known about BEM for a long time, and more recently came across SUIT CSS. For a while I've used
a sort of hybrid, as I liked the spacing of BEM's syntax (block__elem vs block-elem), but prefer
SUIT's seperation of modifier & state. For this project though, I decided to try conforming fully
to SUIT and found I actually really liked it.

## Author

- Website - [Marley Rae](https://www.punkfairie.net)
- Frontend Mentor - [@punkfairie](https://www.frontendmentor.io/profile/punkfairie)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
