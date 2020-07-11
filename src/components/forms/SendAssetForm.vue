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
        assetIndex: '',
        amount: '',
        to: '',
        from: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Algorand Asset ID',
            model: 'assetIndex',
            required: true,
            validator: validators.assetIndex
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Amount',
            required: true,
            model: 'amount',
            validator: validators.amount
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Recipient address',
            model: 'to',
            required: true,
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Sender Address',
            model: 'from',
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
