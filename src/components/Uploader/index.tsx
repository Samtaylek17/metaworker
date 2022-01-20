import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { io, Socket } from 'socket.io-client';

import { addFile } from '../../slice/fileSlice';

const Uploader: FC = () => {
  const { Dragger } = Upload;

  const dispatch = useDispatch();

  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io('https://metaworker.herokuapp.com');
    setSocket(newSocket);
    return () => {
      socket.close();
    };
    // socket.on('connect', (): void => {
    //   console.log(socket.id);

    //   socket.on('completed', (arg) => {
    //     console.log('status: ', arg);
    //   });
    // });
    // socket.on('event', (data): void => {
    //   console.log(data);
    // });

    // socket.on('disconnect', () => {
    //   console.log('Disconnected!');
    // });
  }, [setSocket]);

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://file.io',
    async onChange(info: Record<string, any>) {
      const { status } = info.file;
      if (status !== 'uploading') {
        if (Object.entries(info.file.originFileObj).length > 0) {
          const formData = new FormData();
          formData.append('file', info.file.originFileObj);
          const result = await axios.post('https://file.io', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          if (result.data) {
            dispatch(addFile(result.data.link, socket));
          }
        }
      }

      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const { name, multiple, action, onChange, onDrop } = props;

  return (
    <section className="dark:bg-gray-900 bg-white py-12">
      <div className="max-w-4xl mx-auto">
        <div className="container px-8">
          <Dragger
            name={name}
            multiple={multiple}
            action={action}
            onChange={onChange}
            onDrop={onDrop}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Dragger>
        </div>
      </div>
    </section>
  );
};

export default Uploader;
