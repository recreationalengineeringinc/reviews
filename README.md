# Recreational Engineering Inc. - Frontend
#### Frontend Developer: Victor Wong

> Reviews component for retail product web app
<div align="center">
  <img src="https://media.giphy.com/media/7X85NalRLA0eb3CwFo/source.mp4">
</div>


## Related Projects

  - https://github.com/recreationalengineeringinc/cart
  - https://github.com/recreationalengineeringinc/carousel
  - https://github.com/recreationalengineeringinc/image-display

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

- Access the individual component through http://18.217.62.125:3004/product/5/review/
- Access the site in whole through http://3.20.233.115:3000/userid/1/product/5/
- Change user/product by modifying the numerical value after userid & product respectively 
  e.g. from http://3.20.233.115:3000/userid/1/5/ to http://3.20.233.115:3000/userid/2/10/
  changed from user 1 to 2 and product 5 to 10.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run seed
npm run webpack
npm start
```
