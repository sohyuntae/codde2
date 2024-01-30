<template>
  <button
    v-bind="props"
    role="button"
    :class="buttonClasses"
    :disabled="isDisabled"
  >
    <Icon
      v-if="showIcon"
      :class="iconClasses"
    />
    <slot></slot>
  </button>
</template>

<script>
import Spinner from '/@/components/spinner/Spinner.vue'; // Adjust the import path as needed

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
    },
    theme: String,
    shape: {
      type: String,
      default: 'contained',
    },
    icon: Object,
    disabled: Boolean,
    className: String,
  },
  computed: {
    buttonClasses() {
      return (
        'border font-medium leading-6 transition duration-150 ease-in-out disabled:cursor-not-allowed',
        this.size === 'xs' ? 'gap-1.5 rounded py-px px-2 text-xs' : 'rounded-md',
        this.shape === 'outlined' ? 'group bg-white' : 'border-transparent',
        {
          'inline-flex items-center justify-center': this.showIcon,
          'hover:brightness-105 active:brightness-90': !this.isDisabled,
          'gap-2 py-1 px-3 text-sm': this.size === 'sm',
          'gap-3 py-2 px-4 text-base': this.size === 'md',
          'gap-3 py-3 px-5 text-lg': this.size === 'lg',
          'bg-neutral-900 text-white': !this.theme && this.shape === 'contained',
          'bg-red-600 text-white': this.theme === 'danger' && this.shape === 'contained',
          'bg-primary text-white': this.theme === 'primary' && this.shape === 'contained',
          'bg-emerald-500 text-white': this.theme === 'success' && this.shape === 'contained',
          'disabled:bg-neutral-300 disabled:text-white dark:bg-neutral-400': this.shape === 'contained' && (this.isLoading || this.isDisabled),
          'bg-transparent disabled:hover:bg-neutral-200 disabled:hover:text-white': this.shape === 'text',
          'hover:bg-neutral-200': !this.theme && this.shape === 'text',
          'text-red-600 hover:bg-red-100': this.theme === 'danger' && this.shape === 'text',
          'text-primary hover:bg-blue-100': this.theme === 'primary' && this.shape === 'text',
          'text-emerald-500 hover:bg-emerald-100': this.theme === 'success' && this.shape === 'text',
          'hover:text-white dark:bg-transparent dark:hover:text-neutral-400': this.shape === 'outlined',
          'border-neutral-500 text-neutral-500 hover:bg-neutral-900': !this.theme && this.shape === 'outlined',
          'border-primary text-primary hover:bg-primary': this.theme === 'primary' && this.shape === 'outlined',
          'border-red-500 text-red-500 hover:bg-red-500': this.theme === 'danger' && this.shape === 'outlined',
          'border-emerald-500 text-emerald-500 hover:bg-emerald-500': this.theme === 'success' && this.shape === 'outlined',
          'cursor-progress': this.isLoading,
        },
        this.class
      );
    },
    showIcon() {
      return this.isLoading || !!this.icon;
    },
    iconClasses() {
      return ({
        'h-3 w-3': this.size === 'xs',
        'h-4 w-4': this.size === 'sm',
        'h-5 w-5': this.size === 'md',
        'h-6 w-6': this.size === 'lg',
        'text-white': this.shape === 'contained',
        'group-hover:text-white': this.shape === 'outlined',
        'text-neutral-900': (this.shape !== 'contained' && !this.theme) || this.shape === 'text',
        'text-primary': this.shape !== 'contained' && this.theme === 'primary',
        'text-red-500': this.shape !== 'contained' && this.theme === 'danger',
        'text-emerald-500': this.shape !== 'contained' && this.theme === 'success',
      });
    },
    isDisabled() {
      return this.isLoading || this.disabled;
    },
  },
  components: {
    Spinner,
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
