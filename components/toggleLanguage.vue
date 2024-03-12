<template>
  <div class="navbar-item toggle-language-checkbox">
    <input
      id="toggle-language"
      type="checkbox"
      :title="$t('toggle.title')"
      :aria-label="$t('toggle.title')"
      :checked="$i18n.locale === 'en'"
      @change="changeLanguage($event)"
    />
    <label
      for="toggle-language"
      :title="$t('toggle.title')"
      :aria-label="$t('toggle.title')"
    >
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useLanguageStore } from "~/stores/language";
import { useMenuStore } from "~/stores/menu";

export default defineComponent({
  name: "ToggleLanguage",
  setup() {
    // Puxa os atributos do store
    const language = useLanguageStore();
    const menu = useMenuStore();
    const locale = computed(() => language.locale);
    const { setLocale } = language;
    return {
      locale,
      setLocale,
      menu,
    };
  },

  mounted() {
    const localeStorage = localStorage.getItem("language");
    if (localeStorage) {
      // @ts-ignore
      this.$i18n.setLocale(localeStorage);
    } else {
      // @ts-ignore
      this.$i18n.setLocale(this.locale);
    }
    this.menu.setItens(this.$t);
  },

  methods: {
    changeLanguage(event: any) {
      const input = event.target as HTMLInputElement;
      if (input.checked) {
        this.setLocale("en");
        // @ts-ignore
        this.$i18n.setLocale("en");
      } else {
        this.setLocale("pt-br");
        // @ts-ignore
        this.$i18n.setLocale("pt-br");
      }
      setTimeout(() => {
        this.menu.setItens(this.$t);
      }, 500);
    },
  },
});
</script>

<style lang="scss" scope>
.toggle-language-checkbox {
  position: relative;
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  top: 50%;
  left: 50%;
  height: 35px;
  width: 65px;
  background-color: #806203;
  border: 1px solid var(--dark);
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
}

label[for="toggle-language"] {
  position: absolute;
  background-image: url("../assets/img/toggle/Brazil.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  //background-color: #cccccc;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 15px;
  height: 33px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.5s;
}

input[type="checkbox"]:checked {
  background-color: #062642;
}

input[type="checkbox"]:checked + label[for="toggle-language"] {
  transform: translateX(29px) rotate(360deg);
  background-image: url("../assets/img/toggle/USA.png");
}
</style>
