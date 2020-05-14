<template>
  <b-form class="text-left" @submit.prevent="handleSubmit">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions">
    </vue-form-generator>
    <b-button type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import validators from '@/lib/validators';

export default {
  name: 'CreateAssetForm',
  data() {
    return {
      model: {
        an: '', // asset name
        un: '', // unit name
        dc: 0, // decimal places
        t: 0, // total issuance
        au: '', // asset url
        c: '', // creator address
        f: '', // freeze address
        m: '', // manager address
        r: '', // reserve address
        am: '' // asset metadata hash
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Name',
            model: 'an',
            validator: validators.assetName
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Unit Name',
            model: 'un',
            validator: validators.unitName
          },
          {
            type: 'select',
            values: Array.from(Array(20), (x, i) => i),
            label: 'Decimal Places',
            model: 'dc',
            selectOptions: {
              hideNoneSelectedText: true
            }
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Total Issuance',
            model: 't',
            validator: validators.totalIssuance
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Url',
            model: 'au',
            validator: validators.assetUrl
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Creator Address',
            model: 'c',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Freeze Address',
            model: 'f',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Manager Address',
            model: 'm',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Reserve Address',
            model: 'r',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Metadata Hash',
            model: 'am',
            validator: validators.algoAddress
          }
        ]
      },
      formOptions: {
        validateAfterChanged: true
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.model);
    }
  }
};
</script>
