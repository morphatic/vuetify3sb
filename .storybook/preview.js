import { app } from '@storybook/vue3'
import vuetify from '@/plugins/vuetify'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// wrap all stories in `v-app`
export const decorators = [story => ({
  components: { story },
  template: '<v-app><story /></v-app>',
})]

app.use(vuetify)
