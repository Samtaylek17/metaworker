import React from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Typed from 'react-typed';
import Header from '../../components/Header';

const Home = () => {
  const { Dragger } = Upload;
  return (
    <>
      <Header />
      <section className="dark:bg-gray-900 bg-gray-900 pt-12">
        <div className="max-w-5xl mx-auto mt-24">
          <h1 className=" dark:text-gray-900 font-ubuntu font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">
            <Typed
              typeSpeed={40}
              backSpeed={50}
              loop
              strings={[
                'Upload your files and get report in seconds',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              ]}
            />
          </h1>
          <p className="mt-6 text-lg text-gray-600 pb-0 text-center max-w-3xl mx-auto dark:text-gray-400">
            Lorem ipsum dolor sit amet, consect{' '}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">Lorem</code>,{' '}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">pt-4</code>,{' '}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              text-center
            </code>{' '}
            and{' '}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">rotate-90</code>{' '}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsum rem nam
          </p>
        </div>
      </section>
      <section className="bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="container px-8">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                />
              </svg> */}
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </p>
            </Dragger>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
