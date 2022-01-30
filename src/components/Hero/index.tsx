import React, { FC } from 'react';
import Typed from 'react-typed';

const Hero: FC = () => (
  <section className="dark:bg-gray-900 bg-white pt-12">
    <div className="max-w-5xl mx-auto mt-24">
      <h1 className=" dark:text-white font-ubuntu font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-gray-900">
        <Typed
          typeSpeed={40}
          backSpeed={50}
          loop
          strings={[
            'Upload your files and get report in seconds',
            'Get detailed analysis of your files in seconds.',
            'No security flaws, as we do not store your files.',
          ]}
        />
      </h1>
      <p className="mt-6 text-lg text-gray-600 mb-0 text-center max-w-3xl mx-auto dark:text-gray-400">
        Lorem ipsum dolor sit amet, consect{' '}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">Lorem</code>,{' '}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">pt-4</code>,{' '}
        <code className="font-mono font-medium text-sky-500 dark:text-sky-400">text-center</code>{' '}
        and <code className="font-mono font-medium text-sky-500 dark:text-sky-400">rotate-90</code>{' '}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum rem nam
      </p>
    </div>
  </section>
);

export default Hero;
