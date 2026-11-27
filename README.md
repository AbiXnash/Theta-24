# Theta-24

The website for **Theta 2k24**, a national-level techno-management fest: a static HTML/SCSS/JavaScript site with
events and workshops for each cluster, a timeline, the crew, a T-shirt page and contact details.

> Note: this isn't the complete website. A few tabs and the countdown are hidden. Change the date in the countdown
> JavaScript (`assets/js/main.js`, currently 29 March 2024) to see it. To buy the full code, contact
> abinashs2704@gmail.com.

## Pages

| Page | What it is |
|------|------------|
| `index.html` | Home, with the countdown |
| `events.html`, `events/*.html` | Events per cluster: Access America, Biogenesis, Electronica, Emulsion, Equilibria, Informatica, Mathematica, Robotics, Strategia |
| `workshops.html`, `workshops/*.html` | Workshops per cluster (the same clusters plus Optica) |
| `timeline.html` | Fest timeline |
| `crew.html` | The team |
| `tshirt.html` | Fest T-shirt |
| `contact.html` | Contact |
| `stay-tuned.html` | Placeholder for pages not yet live |

Styles are in `assets/scss` (compiled to `assets/css`), scripts in `assets/js`, and images in `assets/img`,
`assets/crew` and `assets/Cluster Logos`. The cursor effect uses [magicmouse.js](https://www.npmjs.com/package/magicmouse.js).

## Run it

```sh
git clone https://github.com/AbiXnash/Theta-24.git
cd Theta-24
npm install
npm start      # serves the folder with `serve`
```

Then open the address `serve` prints. Or just open `index.html` in a browser.

`.github/workflows/static.yml` deploys the site to GitHub Pages.

## Contributing

Please read the [contributing guidelines](CONTRIBUTING.md) and the [code of conduct](CODE_OF_CONDUCT.md).

## License

MIT, see [License.md](License.md).
