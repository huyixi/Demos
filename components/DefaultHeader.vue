<template>
  <header w-full mb-8 p-8>
    <div flex max-w-480 mx-auto justify-between>
      <div class="subtitle subtitle--regular subtitle--left" data-block="subtitle">
        <div class="subtitle__brace aspect-[27/78]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 78">
            <path
              fill="#0e100f"
              d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            ></path>
          </svg>
        </div>
        <p class="subtitle__label">huyixi's Gallery</p>
        <div class="subtitle__brace">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78">
            <path
              fill="#0e100f"
              d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="flex grow shrink-0 items-center space-x-2 max-w-[800px] min-w-[200px] ml-4">
        <input type="search" placeholder="Search.." border-2 inline-block h-12 w-full rounded-full pr-1 pl-6 cursor-text />
      </div>
    </div>
  </header>
</template>

<style>
.subtitle {
  color: inherit;
  display: inline-block;
  max-width: 33.75rem;
  padding: 1rem 1.25rem;
  position: relative;
  text-align: center;
}

.subtitle p {
  margin-bottom: 0;
  padding-bottom: 0;
}

.subtitle--small {
  padding: 0;
}

.subtitle--large {
  padding: max(0.5rem, min(0.517799vw + 0.378641rem, 1rem)) max(1.5rem, min(0.517799vw + 1.37864rem, 2rem));
}

.subtitle--center {
  margin-left: auto;
  margin-right: auto;
}

.subtitle--right {
  margin-left: auto;
}

.subtitle__label {
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
  padding: 0 0.75rem;
}

.subtitle__brace {
  aspect-ratio: 27/78;
  height: 100%;
  position: absolute;
  top: 0;
}

.subtitle__brace:first-child {
  left: 0;
}

.subtitle__brace:last-child {
  right: 0;
  transform: rotate(180deg);
}

.subtitle__brace svg {
  display: block;
  height: 100%;
}
</style>
