# NextJS Project Boilerplate
A NextJS boilerplate customised for **IntelliJ IDEA** ✨
<br/>
[<img alt="idea" height="36" src="https://skillicons.dev/icons?i=idea&amp;perline=1" width="36"/>](https://skillicons.dev)  

### Core Modules
- [<img alt="next" height="12" src="https://skillicons.dev/icons?i=nextjs&amp;perline=1" width="12"/>](https://skillicons.dev) Next v13
- [<img alt="react" height="12" src="https://skillicons.dev/icons?i=react&amp;perline=1" width="12"/>](https://skillicons.dev) React v18
- [<img alt="node" height="12" src="https://skillicons.dev/icons?i=nodejs&amp;perline=1" width="12"/>](https://skillicons.dev) NodeJS v18 w/ Typescript v3.2.4
- [<img alt="tw" height="12" src="https://skillicons.dev/icons?i=tailwind&amp;perline=1" width="12"/>](https://skillicons.dev) Tailwind v4.9.3

### Quality Controls
- 🦊 A little Husky
- 🪄 ESlint (w/ configurations)
- 💅🏻 Prettier
- 🔨 Git commit lint

### Initialisation 
Edit these following files.
<br/>
**./package.json**
```
{
  "name": "YOUR PROJECT NAME",
  "version": "0.0.1", 
  ...
```
**./src/utils/AppConfig.ts**
```typescript
export const AppConfig = {
  site_name: "APP_NAME",
  title: "APP_TITLE",
  description: "APP_DESCRIPTION",
  locale: "en"
}
```
**./next-sitemap.config.js**
```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "YOUR_SITE_URL",
  generateRobotsTxt: true
}
```
After finished filling config files don't forget to run
```shell
yarn install
```
or
```shell
npm install
```
<br/>
<br/>
😺 Enjoy coding :)
