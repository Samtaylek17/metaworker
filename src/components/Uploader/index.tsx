import React, { FC, MouseEvent } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const Uploader: FC = () => {
  const { Dragger } = Upload;

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://file.io',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
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
    <section className="bg-gray-900 py-12">
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
