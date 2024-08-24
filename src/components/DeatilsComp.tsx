import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../app/rootApi";

// import React from 'react'

export const DeatilsComp = () => {
  const { blogId } = useParams();
  // console.log(typeof blogId);
  const { data, error, isLoading } = useGetBlogByIdQuery(blogId!);
  // console.log(data);

  // const handleSeeMore = () => {
  //   setVisibleCount((prevCount) => Math.min(prevCount + 4, blogs.length));
  // };

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading blogs...</div>;
  }

  if (error) {
    // Assuming `error.message` is a string. Adjust according to the actual structure.
    const errorMessage =
      "error" in error ? error.error : "An unknown error occurred";
    return <div className="text-center text-red-500">{errorMessage}</div>;
  }
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-5xl">{data.title}</h2>
      <div className="  ">
        <img
          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
          alt="Avatar Tailwind CSS Component"
          className="h-full w-full "
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold">{data.body}</p>
        <p>
          idem deleniti minima nam voluptatibus, sit suscipit. Ab doloremque hic
          architecto perferendis, quis beatae iusto, distinctio, quidem
          quibusdam ipsam nobis? Quam voluptatibus at recusandae magnam,
          exercitationem distinctio laborum illum pariatur tempora quibusdam
          voluptate molestiae vitae, aut nulla, cupiditate quas quia minima
          excepturi vero doloribus. Odio facere necessitatibus hic esse! Alias
          aspernatur eum ipsum magnam, voluptas iste perspiciatis!
        </p>

        <p>
          idem deleniti minima nam voluptatibus, sit suscipit. Ab doloremque hic
          architecto perferendis, quis beatae iusto, distinctio, quidem
          quibusdam ipsam nobis? Quam voluptatibus at recusandae magnam,
          exercitationem distinctio laborum illum pariatur tempora quibusdam
          voluptate molestiae vitae, aut nulla, cupiditate quas quia minima
          excepturi vero doloribus. Odio facere necessitatibus hic esse! Alias
          aspernatur eum ipsum magnam, voluptas iste perspiciatis!
        </p>
        <p>
          idem deleniti minima nam voluptatibus, sit suscipit. Ab doloremque hic
          architecto perferendis, quis beatae iusto, distinctio, quidem
          quibusdam ipsam nobis? Quam voluptatibus at recusandae magnam,
          exercitationem distinctio laborum illum pariatur tempora quibusdam
          voluptate molestiae vitae, aut nulla, cupiditate quas quia minima
          excepturi vero doloribus. Odio facere necessitatibus hic esse! Alias
          aspernatur eum ipsum magnam, voluptas iste perspiciatis!
        </p>
        <p>
          idem deleniti minima nam voluptatibus, sit suscipit. Ab doloremque hic
          architecto perferendis, quis beatae iusto, distinctio, quidem
          quibusdam ipsam nobis? Quam voluptatibus at recusandae magnam,
          exercitationem distinctio laborum illum pariatur tempora quibusdam
          voluptate molestiae vitae, aut nulla, cupiditate quas quia minima
          excepturi vero doloribus. Odio facere necessitatibus hic esse! Alias
          aspernatur eum ipsum magnam, voluptas iste perspiciatis!
        </p>
        <p>
          idem deleniti minima nam voluptatibus, sit suscipit. Ab doloremque hic
          architecto perferendis, quis beatae iusto, distinctio, quidem
          quibusdam ipsam nobis? Quam voluptatibus at recusandae magnam,
          exercitationem distinctio laborum illum pariatur tempora quibusdam
          voluptate molestiae vitae, aut nulla, cupiditate quas quia minima
          excepturi vero doloribus. Odio facere necessitatibus hic esse! Alias
          aspernatur eum ipsum magnam, voluptas iste perspiciatis!
        </p>
        <p>
          idem deleniti minima nam voluptatibus, sit suscipit. Ab doloremque hic
          architecto perferendis, quis beatae iusto, distinctio, quidem
          quibusdam ipsam nobis? Quam voluptatibus at recusandae magnam,
          exercitationem distinctio laborum illum pariatur tempora quibusdam
          voluptate molestiae vitae, aut nulla, cupiditate quas quia minima
          excepturi vero doloribus. Odio facere necessitatibus hic esse! Alias
          aspernatur eum ipsum magnam, voluptas iste perspiciatis!
        </p>
      </div>
    </div>
  );
};
