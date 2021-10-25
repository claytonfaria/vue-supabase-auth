<script setup lang="ts">
import { useUserStore } from '~/stores/user';
// eslint-disable-next-line import/order
import { supabase } from '../logic/supabase';

const user = useUserStore()

function CheckAuth() {
  console.log(supabase.auth.user())
}
</script>

<template>
  <div>
    <p>This is Home screen</p>
    <div class="flex flex-col mt-10">
      <router-link to="/login">
        Login
      </router-link>
      <router-link to="/protected">
        Secret Page
      </router-link>
      <button @click="CheckAuth">
        Check auth
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
