import React from "react";
import ctl from "@netlify/classnames-template-literals";

import UploadIcon from "svgs/upload-cloud.svg";
import CancelIcon from "svgs/cancel.svg";
import FileIcon from "svgs/file.svg";

import Dropzone from "react-dropzone";

const FileInput = ({ onCancel, onDrop, file, id }) => {
  const acceptedFileTypes = {
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    'application/msword': ['.doc'],
    'application/pdf': ['.pdf'],
  };

  return (
    <Dropzone accept={acceptedFileTypes} multiple={false} onDrop={onDrop}>
      {
        ({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div {...getRootProps()} className={ctl(`
              ${file ? 'bg-n-grey1' : 'bg-white'}
              ${file ? 'border-white border-dashed' : 'border-n-grey1 border-solid'}
              ${isDragActive ? 'border-secondary border-dashed' : ''}
              ${fileInputWrapperStyle}
            `)}>
              <input id={id} {...getInputProps()} />
              <div className="flex items-center w-fit">
                {file && <FileIcon className="mr-2" />}
                <span className={file ? 'text-n-grey5' : 'text-n-grey3'}>
                  {file?.path || 'Drop file here or click to select'}
                </span>
              </div>
              {
                file ? (<CancelIcon onClick={onCancel} />)
                  : (<UploadIcon />)
              }
            </div>
          )
        }
      }
    </Dropzone>
  );
};

const fileInputWrapperStyle = ctl(`
  justify-between
  cursor-pointer
  rounded-[5px]
  items-center
  border
  w-full
  flex
  p-4
`);

export { FileInput };
