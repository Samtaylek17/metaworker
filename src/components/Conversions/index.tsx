import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/rootReducer';

const Conversions: FC = () => {
  const { currentFile } = useSelector((state: RootState) => state.files);

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-center text-2xl dark:text-white text-gray-900">File Results</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 mt-16">
          <div className="">
            <h3 className="text-center text-2xl dark:text-white text-gray-900">Streams</h3>
            <div className="flex-auto">
              <ul>
                <li>Codec Name: mjpeg</li>
              </ul>
            </div>
          </div>
          <div className="">
            <h3 className="text-center text-2xl dark:text-white text-gray-900">Format</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversions;
