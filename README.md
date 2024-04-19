# 🐸 vue-tailwind-dashboard

Vue 3(Vite) + tailwindcss

##
### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

##
## Simple Dashboard in Vue 따라하기

youtube [Simple Dashboard in Vue and Tailwind](https://youtu.be/P2hwV3MQ-wE?si=ZMGvJmd1glNUD94y)

[vue](https://vuejs.org) + [tailwindcss](https://tailwindcss.com)


##
### 📌 Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

##
### 📌 Tailwind CSS info
#### Install Tailwind CSS

```sh
npm install -D tailwindcss
npx tailwindcss init
```

#### tailwind.config.js Setting

```sh
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### your CSS(/src/assets/scss/input.css)

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### build your CSS.

```sh
npx tailwindcss -i ./src/assets/scss/input.css -o ./src/assets/css/app.css --watch
npx tailwindcss -o ./src/assets/css/app.min.css --minify
```

##
### 📌 heroicons, webfont(pretendard)
* icon [heroicons](https://heroicons.com/)
* webfont [pretendard-github](https://github.com/webfontworld/pretendard)
