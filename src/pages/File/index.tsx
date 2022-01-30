import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { RootState } from '../../app/rootReducer';
import Header from '../../components/Header';
import { getCurrentFile } from '../../slice/fileSlice';

const File: FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getCurrentFile(id as string));
  }, []);

  const { streams, format } = useSelector((state: RootState) => state.files);

  return (
    <>
      <Header />
      <section>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-2xl mt-16">File Details</h1>

          <div className="max-w-5xl px-8 mx-auto grid gap-8 sm:grid-cols-2 grid-cols-1 mt-8">
            <div className="">
              <h2 className="text-2xl">Streams</h2>
              {streams.map((stream: any) => (
                <ul className="flex-auto dark:bg-white  border-2 my-4 rounded-md p-4 bg-gray-50 border-dashed">
                  <li key={nanoid()} className="text-xl py-4">
                    Codec Name: {stream.codec_name}
                  </li>
                  <li key={nanoid()} className="text-xl py-4">
                    Codec Long Name: {stream.codec_long_name}
                  </li>
                  <li key={nanoid()} className="text-xl py-4">
                    Codec Type: {stream.codec_type}
                  </li>
                  <li key={nanoid()} className="text-xl py-4">
                    Codec Tag String: {stream.codec_tag_string}
                  </li>
                  <li key={nanoid()} className="text-xl py-4">
                    R Fram Rate: {stream.r_frame_rate}
                  </li>
                  <li key={nanoid()} className="text-xl py-4">
                    Average Frame Rate: {stream.avg_frame_rate}
                  </li>
                  <li key={nanoid()} className="text-xl py-4">
                    Time base: {stream.time_base}
                  </li>
                </ul>
              ))}
            </div>
            <div className="">
              <h2 className="text-2xl">Format</h2>

              <ul className="flex-auto dark:bg-white  border-2 my-4 rounded-md p-4 bg-gray-50 border-dashed">
                <li key={nanoid()} className="text-xl py-4">
                  File Name: {format.filename as string}
                </li>
                <li key={nanoid()} className="text-xl py-4">
                  Number of streams: {format.nb_streams}
                </li>
                <li key={nanoid()} className="text-xl py-4">
                  Number of programs: {format.nb_programs}
                </li>
                <li key={nanoid()} className="text-xl py-4">
                  Format Name: {format.format_name}
                </li>
                <li key={nanoid()} className="text-xl py-4">
                  Format Long Name: {format.format_long_name}
                </li>
                <li key={nanoid()} className="text-xl py-4">
                  Start Time: {format.start_time}
                </li>
                <li key={nanoid()} className="text-xl py-4">
                  Duration: {format.duration}
                </li>
                <li key={nanoid()} className="text-xl py-4">
                  Probe Score: {format.probe_score}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default File;
