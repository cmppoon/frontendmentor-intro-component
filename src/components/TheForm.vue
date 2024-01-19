<template>
  <div
    class="flex justify-center sm:justify-start items-center text-sm p-6 sm:p-8"
  >
    <div>
      <button
        class="w-full text-white font-light bg-primary-blue rounded-lg hover:bg-primary-blue/[0.9] py-4 px-16 sm:px-10 leading-6 shadow-custom"
      >
        <span class="font-bold">Try it free 7 days </span>then $20/mo.
        thereafter
      </button>

      <div class="bg-white rounded-lg p-6 lg:p-10 mt-8 shadow-custom">
        <form @submit.prevent="validateForm" novalidate>
          <div class="relative">
            <input
              type="text"
              name="firstname"
              id="firstname"
              v-model="firstName"
              placeholder="First Name"
              class="w-full rounded-md py-3 px-4 sm:px-7 placeholder:font-bold leading-6 border border-grayish-blue focus:outline-none focus:border focus:border-primary-blue"
              :class="{
                'border-primary-red focus:border-primary-red text-primary-red placeholder:text-primary-red':
                  !isFirstNameValid,
              }"
            />
            <div v-if="!isFirstNameValid" class="mt-8">
              <ErrorIcon
                class="absolute inset-y-3 end-5 pointer-events-none z-10"
              ></ErrorIcon>
              <p
                class="absolute inset-y-[52px] end-0 text-primary-red text-[0.6rem] italic"
              >
                First Name cannot be empty
              </p>
            </div>
          </div>
          <div class="mt-5 relative">
            <input
              type="text"
              name="lastname"
              v-model="lastName"
              id="lastname"
              placeholder="Last Name"
              class="w-full rounded-md py-3 px-4 sm:px-7 placeholder:font-bold leading-6 border border-grayish-blue focus:outline-none focus:border focus:border-primary-blue"
              :class="{
                'border-primary-red focus:border-primary-red text-primary-red placeholder:text-primary-red':
                  !isLastNameValid,
              }"
            />
            <div v-if="!isLastNameValid" class="mt-8">
              <ErrorIcon
                class="absolute inset-y-3 end-5 pointer-events-none z-10"
              ></ErrorIcon>
              <p
                class="absolute inset-y-[52px] end-0 text-primary-red text-[0.6rem] italic"
              >
                Last Name cannot be empty
              </p>
            </div>
          </div>
          <div class="mt-5 relative">
            <input
              type="email"
              name="email"
              v-model="email"
              id="email"
              placeholder="Email Address"
              class="w-full rounded-md py-3 px-4 sm:px-7 placeholder:font-bold leading-6 border border-grayish-blue focus:outline-none focus:border focus:border-primary-blue"
              :class="{
                'border-primary-red focus:border-primary-red text-primary-red placeholder:text-primary-red':
                  !isEmailValid,
              }"
            />
            <div v-if="!isEmailValid" class="mt-8">
              <ErrorIcon
                class="absolute inset-y-3 end-5 pointer-events-none z-10"
              ></ErrorIcon>
              <p
                class="absolute inset-y-[52px] end-0 text-primary-red text-[0.6rem] italic"
              >
                Looks like this is not an email
              </p>
            </div>
          </div>
          <div class="mt-5 relative">
            <input
              type="password"
              name="passowrd"
              v-model="password"
              id="password"
              placeholder="Password"
              class="w-full rounded-md py-3 px-4 sm:px-7 placeholder:font-bold leading-6 border border-grayish-blue focus:outline-none focus:border focus:border-primary-blue"
              :class="{
                'border-primary-red focus:border-primary-red text-primary-red placeholder:text-primary-red':
                  !isPasswordValid,
              }"
            />
            <div v-if="!isPasswordValid" class="mt-8">
              <ErrorIcon
                class="absolute inset-y-3 end-5 pointer-events-none z-10"
              ></ErrorIcon>
              <p
                class="absolute inset-y-[52px] end-0 text-primary-red text-[0.6rem] italic"
              >
                Password cannot be empty
              </p>
            </div>
          </div>
          <div class="mt-5">
            <button
              type="submit"
              class="w-full bg-primary-green hover:bg-primary-green-hover rounded-lg p-2 pt-3 pb-2 leading-6 text-white font-medium tracking-wide border-primary-green/[0.9] border border-b-4"
            >
              CLAIM YOUR FREE TRIAL
            </button>
          </div>
          <p
            class="text-[0.65rem] text-center font-semibold text-grayish-blue px-6 sm:px-8 mt-2"
          >
            By clicking the button, you are agreeing to our
            <span class="text-primary-red">Terms and Services</span>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ErrorIcon from "./ErrorIcon.vue";
const firstName = defineModel("firstname");
const lastName = defineModel("lastname");
const password = defineModel("password");
const email = defineModel("email");

const isFirstNameValid = ref(true);
const isLastNameValid = ref(true);
const isEmailValid = ref(true);
const isPasswordValid = ref(true);

function validateForm() {
  isFirstNameValid.value = firstName.value && firstName.value.length !== 0;
  isLastNameValid.value = lastName.value && lastName.value.length !== 0;
  isEmailValid.value = validateEmail(email.value);
  isPasswordValid.value = password.value && password.value.length !== 0;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
</script>
