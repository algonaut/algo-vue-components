# algo-vue-components

A set of example Vue components for building asset transactions in your web applications.

## Demo

[Live Demo](https://algonaut.github.com/algo-vue-components)

## Usage

```bash
npm install @algonaut/algo-vue-components
```

Example Create Asset Form:

```
<template>
  <CreateAssetForm @submit="handleSubmit" />

</template>

<script>
import {
  CreateAssetForm,
} from '@algonaut/algo-vue-components';

export default {
  components: {
    CreateAssetForm,
  },
  methods: {
    handleSubmit(payload) {
      console.log(payload);
    }
  }
};
</script>
```

## Contributing

```
# Install dependencies
npm install

# Compile and hot-reload for development
npm run serve

# Compile and minify for production
npm run build
```
