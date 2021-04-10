import VButton from '@/components/Buttons'

export default {
  component: VButton,
  title: 'Buttons',
  argTypes: {
    text: {
      name: 'Text',
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    flat: {
      name: 'Flat',
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  },
}

const Template = args => ({
  components: { VButton },
  setup: () => ({ args }),
  template: '<v-button v-bind="args">Click Me</v-btn>',
})

export const Default = Template.bind({})

export const Text = Template.bind({})
Text.args = { text: true }

export const Flat = Template.bind({})
Flat.args = { flat: true }
