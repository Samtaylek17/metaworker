import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/rootReducer';

const Conversions: FC = () => {
  const navigate = useNavigate();
  const { fileList, isLoading: fileLoading } = useSelector((state: RootState) => state.files);

  const navigateTo = (path: string) => navigate(`/${path}`);

  return (
    <Spin delay={500} spinning={Boolean(fileLoading)}>
      <section className="dark:bg-gray-900 bg-white">
        <div className="max-w-6xl mx-auto">
          {fileList.length > 0 && (
            <>
              <h2 className="text-center text-2xl dark:text-white text-gray-900">File Results</h2>
              <div className="max-w-5xl px-8 mx-auto grid gap-x-8 md:grid-cols-2 sm:grid-cols-3 grid-cols-1 mt-8">
                {fileList.map((file: any) => (
                  <div
                    className="container"
                    key={file.uuid}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => navigateTo(file.uuid)}
                    onClick={() => navigateTo(file.uuid)}
                  >
                    <div className="flex-auto dark:bg-white bg-gray-50 border-dashed border-2 my-8 rounded-md p-4">
                      <ul>
                        <li className="text-lg py-3">
                          <span className="text-xl font-semibold">ID:</span> {file.uuid}
                        </li>
                        <li className="text-lg py-3">
                          <span className="text-xl font-semibold">URL:</span> {file.url}
                        </li>
                        <li className="text-lg py-3">
                          <span className="text-xl font-semibold">File type:</span> {file.type}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Spin>
  );
};

export default Conversions;
