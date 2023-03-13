<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md bg-dark2 p-8 rounded shadow-lg space-y-8">
      <div
        v-if="errorMsg"
        class="p-4 mb-4 text-sm text-red-400 bg-dark3 text-center rounded-lg bg-transparent border-2 border-red-400"
        role="alert"
      >
        <span class="font-medium">
          {{ errorMsg }}
        </span>
      </div>
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-white"
        >
          Create new account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <NuxtLink to="/auth/login" class="font-medium text-primary1"
            >Login</NuxtLink
          >
        </p>
      </div>
      <form @submit.prevent="submitForm" class="mt-8 space-y-6">
        <div class="-space-y-px rounded-md shadow-sm mb-4">
          <div class="mb-4">
            <label for="email-address" class="sr-only mb-2">User Name</label>
            <div class="relative">
              <input
                v-model="formData.username"
                type="text"
                id="username"
                name="userName"
                placeholder="username"
                class="relative block w-full appearance-none bg-dark3 rounded border border-gray-900 px-3 py-2 text-white placeholder-gray-300 focus:z-10 focus:border-primary2 focus:outline-none focus:primary2 sm:text-sm"
                @change="v$.username.$touch"
                :class="{
                  'border-red-500 focus:border-red-500': v$.username.$error,
                  'border-[#42d392] ': !v$.username.$invalid,
                }"
              />
              <Icon
                v-if="!v$.username.$invalid || v$.username.$error"
                class="absolute right-2 z-30 top-[1px] h-full text-xl text-green-500"
                :class="{
                  'text-green-500': !v$.username.$invalid,
                  'text-yellow-500': v$.username.$error,
                }"
                :name="`heroicons-solid:${
                  !v$.username.$error ? 'check-circle' : 'exclamation'
                }`"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.username.$error">{{
              v$.username.$errors[0].$message
            }}</span>
          </div>
        </div>
        <div class="-space-y-px rounded-md shadow-sm mb-4">
          <div class="mb-4">
            <label for="email-address" class="sr-only mb-2"
              >Email address</label
            >
            <div class="relative">
              <input
                v-model="formData.email"
                type="email"
                id="email"
                name="email"
                placeholder="e.g. example@email.com"
                class="relative block w-full appearance-none bg-dark3 rounded border border-gray-900 px-3 py-2 text-white placeholder-gray-300 focus:z-10 focus:border-primary2 focus:outline-none focus:primary2 sm:text-sm"
                @change="v$.email.$touch"
                :class="{
                  'border-red-500 focus:border-red-500': v$.email.$error,
                  'border-[#42d392] ': !v$.email.$invalid,
                }"
              />
              <Icon
                v-if="!v$.email.$invalid || v$.email.$error"
                class="absolute right-2 z-30 top-[1px] h-full text-xl text-green-500"
                :class="{
                  'text-green-500': !v$.email.$invalid,
                  'text-yellow-500': v$.email.$error,
                }"
                :name="`heroicons-solid:${
                  !v$.email.$error ? 'check-circle' : 'exclamation'
                }`"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.email.$error">{{
              v$.email.$errors[0].$message
            }}</span>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
              <input
                v-model="formData.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full appearance-none bg-dark3 rounded border border-gray-900 px-3 py-2 text-white placeholder-gray-300 focus:z-10 focus:border-primary2 focus:outline-none focus:primary2 sm:text-sm"
                placeholder="Password"
                @change="v$.password.$touch"
                :class="{
                  'border-red-500 focus:border-red-500': v$.password.$error,
                  'border-[#42d392] ': !v$.password.$invalid,
                }"
              />
              <Icon
                v-if="!v$.password.$invalid || v$.password.$error"
                class="absolute right-2 top-[1px] z-30 h-full text-xl text-green-500"
                :class="{
                  'text-green-500': !v$.password.$invalid,
                  'text-yellow-500': v$.password.$error,
                }"
                :name="`heroicons-solid:${
                  !v$.password.$error ? 'check-circle' : 'exclamation'
                }`"
              />
            </div>
            <span class="text-xs text-red-500" v-if="v$.password.$error">{{
              v$.password.$errors[0].$message
            }}</span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-primary1"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"
              >Remember me</label
            >
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-primary1"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div>
          <LoadingButton :isLoading="loading" label="SignUp" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { getErrorMessage } from "~~/util/ErrorMsg";

const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) {
    return navigateTo("/");
  }
});

const formData = reactive({
  username: "",
  email: "",
  password: "",
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
      minLength: helpers.withMessage(
        "user name must contain more than 6 chars",
        minLength(3)
      ),
    },
    email: {
      required: helpers.withMessage("The email field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    password: {
      required: helpers.withMessage("The password field is required", required),
      minLength: helpers.withMessage(
        "password muxt contain more than 6 chars",
        minLength(6)
      ),
    },
  };
});

const client = useSupabaseClient();

const submitForm = async () => {
  errorMsg.value = "";
  v$.value.$validate();
  if (!v$.value.$error) {
    try {
      loading.value = true;
      const { data, error } = await client.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      if (data?.user?.id) {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: data.user.id,
            username: formData.username,
          }),
        };

        const response = await fetch("/api/profile", options);
        const userProfile = await response.json();
        if (userProfile.id) {
          console.log(user);
        }
      }
    } catch (error) {
      errorMsg.value = getErrorMessage(error);
    } finally {
      loading.value = false;
    }
  }
};

const v$ = useVuelidate(rules, formData);
</script>
