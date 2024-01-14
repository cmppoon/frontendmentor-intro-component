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
        <form action="#">
          <div>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              class="w-full rounded-md py-3 px-4 sm:px-7 placeholder:font-bold leading-6 ring-1 ring-gray-300 focus:ring-primary-blue"
            />
          </div>
          <div class="mt-5">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              class="w-full rounded-md py-3 px-4 sm:px-7 placeholder:font-bold leading-6 ring-1 ring-gray-300 focus:ring-primary-blue"
            />
          </div>
          <div class="mt-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              class="w-full rounded-md py-3 px-4 sm:px-7 placeholder:font-bold leading-6 ring-1 ring-gray-300 focus:ring-primary-blue"
            />
          </div>
          <div class="mt-5">
            <input
              type="password"
              name="passowrd"
              id="password"
              placeholder="Password"
              class="w-full rounded-md py-3 px-4 sm:px-7 placeholder:font-bold leading-6 ring-1 ring-grayish-blue focus:ring-primary-blue"
            />
          </div>
          <div class="mt-5">
            <button
              type="submit"
              class="w-full bg-primary-green hover:bg-primary-green-hover rounded-lg p-2 pt-3 pb-2 leading-6 text-white font-medium tracking-wide border-primary-green/[0.9] border-1 border-b-4"
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
