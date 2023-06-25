# Contributing to QUÉtudes-info

QUÉtudes-info has a *lot* of information, which makes it quite difficult to maintain and keep up-to-date. Any help, from correcting typos and updating facts/information to improving code and stylesheets, would be greatly appreciated!

**IMPORTANT:** QUÉtudes-info's prose content is available under the [CC BY-SA 4.0 license](https://github.com/cw118/quetudesinfo/blob/main/LICENSE.md#license-for-all-prose-content), while the source code is available under the [MPL 2.0 license](https://github.com/cw118/quetudesinfo/blob/main/LICENSE.md#license-for-all-source-code). ***All contributions you make to this repository will be available under these licenses as well!***

As the maintainer, I now have a significantly smaller amount of time to work on this project, but I do my best. If there are questions regarding contributions, you can ping me (@cw118) **if needed**.

## Contributions and Bug Reports

- [Create an issue](https://github.com/cw118/quetudesinfo/issues/new/choose) to report a mistake or bug
- [Create a pull request](https://github.com/cw118/quetudesinfo/compare) to contribute to this project

### Repository Files

Since June 2023, QUÉtudes-info is a [SvelteKit](https://kit.svelte.dev/docs) website that uses [Bootstrap 5.3](https://getbootstrap.com/docs/5.3). Please see their respective documentation for more information as needed.

- [`.github`](https://github.com/cw118/quetudesinfo/tree/main/.github): GitHub Actions, CODEOWNERS (in general, these will/should only be modified by the maintainer)
- [`src`](https://github.com/cw118/quetudesinfo/tree/main/src): the global stylesheet, as well as all components, pages, scripts and constants
  - [`components`](https://github.com/cw118/quetudesinfo/tree/main/src/components): reusable Svelte components like navigation, pagination, etc.
  - [`routes`](https://github.com/cw118/quetudesinfo/tree/main/src/routes): the global template file (`+layout.svelte`), the custom error page (`+error.svelte`), and all pages of the website
- [`static`](https://github.com/cw118/quetudesinfo/tree/main/static): static files that are served as-is by Svelte (photos, icons, sitemap and other assets)
- [`README.md`](https://github.com/cw118/quetudesinfo/tree/main/README.md) and [`CONTRIBUTING.md` (this file)](https://github.com/cw118/quetudesinfo/tree/main/docs/CONTRIBUTING.md): Markdown files with basic documentation about QUÉtudes-info

Other files/folders (those that are not mentioned above) should not be edited. (Or request permission from me, the repository owner.)

### Conventions

#### Page URLs

Page URLs/paths should be equivalent to the page's title (i.e. the title as specified using the `<title>` tag), with all letters lowercased and all spaces removed. Special characters (with accents, e.g. é, ô, ç) should be replaced by their non-accented versions (e.g. 'ç' becomes 'c', 'à' becomes 'a').

For example, the page titled "Disclaimers and Terms" has a path of `/disclaimersandterms`. Notice that the heading at the top of this page is in fact "Disclaimers and Terms of Use", but "Disclaimers and Terms" is the `<title>` specified in the `head`.

#### Anchors

Anchors (`href`/`id`) of a page chapter should be equivalent to the name of the chapter with all letters lowercased, all spaces replaced by a hyphen (`-`), all punctuation removed (if a hyphen `-` is used in the chapter name keep it as-is), and all special characters replaced by their non-accented versions (e.g. 'ç' becomes 'c', 'à' becomes 'a').

For example, a (currently non-existent) page chapter named "Québec-based Student?" would have an anchor of `quebec-based-student`.

#### Titles

Page and chapter titles/names should be capitalized, with the exception of prepositions and conjuctions.
