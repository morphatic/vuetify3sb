import VButton from '@/components/Buttons'

export default {
  component: VButton,
  title: 'Buttons',
  argTypes: {
    density: {
      defaultValue: 'default',
      options: ['default', 'comfortable', 'compact'],
      control: {
        type: 'radio',
      },
    },
    elevation: {
      defaultValue: '',
      control: {
        type: 'range',
        min: 0,
        max: 24,
        step: 1,
      },
    },
    position: {
      defaultValue: 'relative',
      options: ['static', 'relative', 'fixed', 'absolute', 'sticky'],
      control: {
        type: 'select',
      },
    },
    size: {
      defaultValue: 'default',
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      control: {
        type: 'select',
      },
    },
  },
}

const Template = args => ({
  components: { VButton },
  setup: () => ({ args }),
  template: `
    <v-row class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
      <v-button v-if="args.icon === false" v-bind="args">{{ $t('click-me') }}</v-button>
      <v-button v-else v-bind= "args" />
    </v-row>
  `,
})

export const Default = Template.bind({})

export const Text = Template.bind({})
Text.args = { text: true }

export const Flat = Template.bind({})
Flat.args = { flat: true }

export const Plain = Template.bind({})
Plain.args = { plain: true }

export const Icon = Template.bind({})
Icon.args = { icon: 'mdi-heart' }

export const Block = Template.bind({})
Block.args = { block: true }

export const Color = Template.bind({})
Color.args = { color: 'secondary' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }

export const Border = Template.bind({})
Border.args = { border: true }

export const Rounded = Template.bind({})
Rounded.args = { rounded: true }

export const Compact = Template.bind({})
Compact.title = 'Density/Compact'
Compact.args = { density: 'compact' }

export const Comfortable = Template.bind({})
Comfortable.title = 'Density/Comfortable'
Comfortable.args = { density: 'comfortable' }
