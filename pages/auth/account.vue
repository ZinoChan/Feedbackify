<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md bg-dark2 p-8 rounded shadow-lg space-y-8">
      <h3 class="text-red-500">
        {{ errorMsg }}
      </h3>
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-white"
        >
          Create Profile
        </h2>
      </div>
      <form @submit.prevent="submitForm" class="mt-8 space-y-6"></form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { getErrorMessage } from "~~/util/ErrorMsg";

definePageMeta({
  middleware: ["auth"],
});

const formData = reactive({
  username: "",
  avatar_url: "",
});

const errorMsg = ref("");
const loading = ref(false);

const rules = computed(() => {
  return {
    username: {
      required: helpers.withMessage(
        "The user name field is required",
        required
      ),
    },
  };
});

const submitForm = async () => {
  errorMsg.value = "";
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
    } catch (error) {
      alert("an error acourd");
      errorMsg.value = getErrorMessage(error);
    } finally {
      loading.value = false;
    }
  }
};

const v$ = useVuelidate(rules, formData);

const supabase = useSupabaseClient();
const user = useSupabaseUser();

let { data } = await supabase
  .from("profiles")
  .select(`username, avatar_url`)
  .eq("id", user?.value?.id)
  .single();

if (data) {
  formData.username = data.username;
  formData.avatar_url = data.avatar_url;
}

loading.value = false;

// async function updateProfile() {
//   try {
//     loading.value = true;

//     const updates = {
//       id: user?.value?.id,
//       username: formData.username,
//       avatar_url: formData.avatar_url,
//       updated_at: new Date(),
//     };

//     let data = prisma.profiles()
//   } catch (error) {

//   } finally {
//     loading.value = false;
//   }
// }
</script>
