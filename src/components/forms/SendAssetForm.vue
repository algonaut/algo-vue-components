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
  name: 'SendAssetForm',
  data() {
    return {
      model: {
        xaid: '',
        aamt: '',
        arcv: '',
        snd: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Algorand Asset ID',
            model: 'xaid',
            required: true,
            validator: validators.xaid
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Amount',
            required: true,
            model: 'aamt',
            validator: validators.assetAmt
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Recipient address',
            model: 'arcv',
            required: true,
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Sender Address',
            model: 'snd',
            required: true,
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
