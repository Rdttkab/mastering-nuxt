<template>
  <div v-if="user" class="rounded p-2 flex items-center space-x-3 bg-white">
    <img
      :src="profile"
      class="rounded-full w-12 h-12 border-2 border-blue-400 m-0" />
    <div class="text-right">
      <div class="font-medium">{{ name }}</div>
      <button class="text-sm text-slate-500 border rounded p-1" @click="logout">
        Log out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const name = computed(() => user.value?.user_metadata.full_name);
const profile = computed(() => user.value?.user_metadata.avatar_url);

const logout = async () => {
  const { error } = await auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  await navigateTo("/login");
};
</script>
