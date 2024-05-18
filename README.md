<h1 align="center">
  Favorite Places
</h1>

<p align="center">Lugares Incríveis</p>

<p align="center">
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/JhonatanBergmann/favorite-places" />
  <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/JhonatanBergmann/favorite-places" />
  <img alt="Github License" src="https://img.shields.io/github/license/JhonatanBergmann/favorite-places" />
</p>

<p align="center">
  <img src="readme/onboarding.gif" alt="Demo">
</p>
<p align="center">
  <img src="readme/login.gif" alt="Demo">
  <img src="readme/places.gif" alt="Demo">
  <img src="readme/place-photos.gif" alt="Demo">
  <img src="readme/place-video.gif" alt="Demo">
  <img src="readme/place-maps.gif" alt="Demo">
  <img src="readme/place-register.gif" alt="Demo">
</p>

## 📅 Sobre

Favorite Places permite procurar e compartilhar lugares incríveis, inserir fotos, localização, ver vídeos, comentar e muito mais!

## 🌐 Tecnologias Usadas
Foram usadas essas tecnologias:

- [React Native](https://reactnative.dev/)
- [Node](https://nodejs.org/en)

## ***</>*** Como usar o código?
1. Instale o **Yarn** em seu computador
1. Instale o **NodeJs** na versão >= 12.0
1. Clone este repositório `git clone https://github.com/jhonbergmann/favorite-places.git`

### ⚙️ Backend
1. Acesse a pasta *backend* e dê o comando `yarn install`
2. Acesse o arquivo *images_view.ts* dentro de *src/views/images_view.ts*
3. Na linha *7* altere a url para seu ip local -> exemplo: url: `http://SEU-IP-LOCAL:3333/uploads/${image.path}`
4. Acesse novamente a pasta *backend* e dê o comando `yarn dev`

### 📱 Mobile
1. Acesse a pasta *mobile* e dê o comando `yarn install`
2. Acesse o arquivo *api.js* dentro de *src/services/api.js*
3. Na linha *4* altere a baseURL para seu ip local -> exemplo: baseURL: `http://SEU-IP-LOCAL:3333`
4. Acesse novamente a pasta *mobile* e dê o comando `npx react-native run-android`
