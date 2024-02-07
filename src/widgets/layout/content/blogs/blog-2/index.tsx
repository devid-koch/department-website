import { defaultPadding } from "config/styles";

const Blog2 = () => {
  return (
    <section class={`bg-white ${defaultPadding}`}>
      <div class="py-10">
        <div class="text-center">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Courses we provide</h1>

          <p class="mt-4 text-textColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium quia
            tempore delect
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              class="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />

            <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
              <a href="#" class="font-semibold text-gray-800 hover:underline  md:text-xl">
                BA LL.B
              </a>

              <p class="mt-3 text-sm text-textColor  md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
              </p>

              <p class="mt-3 text-sm text-blue-500">Read More</p>
            </div>
          </div>

          <div>
            <img
              class="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
              alt=""
            />

            <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
              <a href="#" class="font-semibold text-gray-800 hover:underline  md:text-xl">
                LL.B
              </a>

              <p class="mt-3 text-sm text-textColor  md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
              </p>

              <p class="mt-3 text-sm text-blue-500">Read More</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog2;
