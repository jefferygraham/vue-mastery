<template>
  <form action="">
    <section class="help">
      <slot name="help"></slot>
    </section>
    <section class="fields">
      <slot name="fields"></slot>
    </section>
    <section class="buttons">
      <slot name="buttons"></slot>
    </section>
    <slot></slot>
  </form>
</template>
