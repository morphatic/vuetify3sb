import { app } from '@storybook/vue3'
import { useI18n } from 'vue-i18n'
import i18n from '@/i18n'
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

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'i18n locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: 'US', title: 'English' },
        { value: 'ja', right: 'JA', title: '日本語' },
      ]
    }
  }
}

// wrap all stories in `v-app`
export const decorators = [(story, { globals }) => ({
  components: { story },
  setup: () => {
    const { locale, t } = useI18n({ useScope: 'global' })
    locale.value = globals.locale
    return { locale, t }
  },
  template: '<v-app><story /></v-app>',
})]

app.use(i18n)
app.use(vuetify)
