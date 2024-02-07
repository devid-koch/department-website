const Statistics4 = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="grid gap-24 row-gap-8 lg:grid-cols-5">
        <div class="grid gap-8 lg:col-span-2">
          <div>
            <p class="mb-2 text-lg font-bold">Old man</p>
            <p class="text-gray-700">
              An old man lived in the village. He was one of the most unfortunate people in the world. The whole village
              was tired of him, he was always gloomy, he constantly complained.
            </p>
          </div>
          <div>
            <p class="mb-2 text-lg font-bold">The Wise Man</p>
            <p class="text-gray-700">
              People have been coming to the wise man, complaining about the same problems every time. One day he told
              them a joke and everyone roared in laughter.
            </p>
          </div>
        </div>
        <div class="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div class="flex flex-col justify-between p-10">
            <div>
              <p class="text-lg font-semibold text-gray-800 sm:text-base">Funds Raised</p>
              <p class="text-2xl font-bold text-purple-400 sm:text-xl">$84 000 000</p>
            </div>
            <div>
              <p class="text-lg font-semibold text-gray-800 sm:text-base">Products</p>
              <p class="text-2xl font-bold text-purple-400 sm:text-xl">52</p>
            </div>
            <div>
              <p class="text-lg font-semibold text-gray-800 sm:text-base">Downloads</p>
              <p class="text-2xl font-bold text-purple-400 sm:text-xl">186M</p>
            </div>
          </div>
          <div class="flex flex-col justify-between p-10">
            <div>
              <p class="text-lg font-semibold text-gray-800 sm:text-base">Users</p>
              <p class="text-2xl font-bold text-purple-400 sm:text-xl">86K</p>
            </div>
            <div>
              <p class="text-lg font-semibold text-gray-800 sm:text-base">Installations</p>
              <p class="text-2xl font-bold text-purple-400 sm:text-xl">917 000</p>
            </div>
            <div>
              <p class="text-lg font-semibold text-gray-800 sm:text-base">Subscribers</p>
              <p class="text-2xl font-bold text-purple-400 sm:text-xl">213K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics4;
