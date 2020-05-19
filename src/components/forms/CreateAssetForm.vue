<template>
  <b-form class="text-left" @submit.prevent="handleSubmit">
    <vue-form-generator
      :schema="schema"
      :model="model"
      :options="formOptions"
      @validated="handleValidation"
    >
    </vue-form-generator>
    <!-- <div v-if="!isValid" class="error text-danger" style="margin-bottom: 1rem;">
      Please correct the errors above before submitting
    </div> -->
    <b-button :disabled="!isValid" type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import validators from '@/lib/validators';

export default {
  name: 'CreateAssetForm',
  data() {
    return {
      isValid: false,
      model: {
        apar: {
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
        defaultFrozen: false
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Name',
            model: 'apar.an',
            required: true,
            validator: validators.assetName
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Unit Name',
            model: 'apar.un',
            required: true,
            validator: validators.unitName
          },
          {
            type: 'select',
            values: Array.from(Array(20), (x, i) => i),
            label: 'Decimal Places',
            model: 'apar.dc',
            required: true,
            selectOptions: {
              hideNoneSelectedText: true
            },
            hint: 'For whole numbers, set decimal places to 0'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Total Issuance',
            required: true,
            model: 'apar.t',
            validator: validators.totalIssuance,
            hint: 'Decimal places are implied'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Url',
            model: 'apar.au',
            validator: validators.assetUrl
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Creator Address',
            model: 'apar.c',
            required: true,
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Freeze Address',
            model: 'apar.f',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Manager Address',
            model: 'apar.m',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Reserve Address',
            model: 'apar.r',
            validator: validators.algoAddress
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Asset Metadata Hash',
            model: 'apar.am',
            validator: validators.assetMetadataHash
          },
          {
            type: 'input',
            inputType: 'checkbox',
            label: 'Freeze by default',
            model: 'defaultFrozen'
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
      if (this.$data.isValid) {
        this.$emit('submit', {
          apar: this.model
        });
      }
    },
    handleValidation(isValid, errors) {
      this.$data.isValid = isValid;
      console.log('Validation result: ', isValid, ', Errors:', errors);
    }
  }
};
</script>

<style lang="scss" scoped></style>
