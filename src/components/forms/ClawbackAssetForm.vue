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
  name: 'ClawbackAssetForm',
  data() {
    return {
      model: {
        aamt: '',
        arcv: '',
        asnd: '',
        snd: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Amount',
            model: 'aamt'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Revoke from',
            model: 'asnd',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Transfer to',
            model: 'arcv',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Freeze Manager Address',
            model: 'snd',
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
