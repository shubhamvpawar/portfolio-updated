const Hero = () => {
  return (
    <main className="items-center mx-auto py-8 w-3/4">
      <h1 className="text-3xl font-semibold">
        I<span className="text-red-800">&apos;</span>m Shubham Pawar
      </h1>
      <p className="py-4">
        Frontend Developer, UI/UX Enthusiast, with over 2 years of Experience. I
        spend my days exploring and implementing new concepts into my workflow
        and Projects.
      </p>
      <p className="py-4">
        Embracing minimalism, I find beauty in simplicity. When not crafting web
        experiences, I immerse myself in capturing the beauty of nature, or lose
        myself in the captivating flow of melodies, anyways you can contact me.
      </p>
      <ul className="flex space-x-4">
        <li className="border border-white px-2 rounded-lg">HTML</li>
        <li className="border border-white px-2 rounded-lg">CSS</li>
        <li className="border border-white px-2 rounded-lg">JavaScript</li>
        <li className="border border-white px-2 rounded-lg">React</li>
        <li className="border border-white px-2 rounded-lg">Redux</li>
        <li className="border border-white px-2 rounded-lg">Tailwind CSS</li>
        <li className="border border-white px-2 rounded-lg">Jest</li>
      </ul>
    </main>
  );
};

export default Hero;
