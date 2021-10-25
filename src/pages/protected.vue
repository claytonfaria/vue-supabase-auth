<script setup lang="ts">
// eslint-disable-next-line import/order
import { supabase } from '../logic/supabase';

async function signOut() {
  await supabase.auth.signOut()
}

</script>

<template>
  <div>
    <p>This is a protected Route</p>

    <button @click="signOut">
      Log out
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
</route>
