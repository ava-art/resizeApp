import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './style.css'

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out',
  width: '500px',
  minHeight: '110px',
  cursor: 'pointer',
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#81b5f9'
};

function DropzoneComponent({ setStateForm, stateForm }) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setStateForm(acceptedFiles.map(file => file.name), 'def-files')
    setStateForm(acceptedFiles.map(file => file.name), 'files')
    setFiles(acceptedFiles.map(file => {
      return(
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
        )
        
    }));

  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],

    }
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);



  const thumbs = files.map(file => (
    <div key={file.name} className='wrap-thumb-item'>
      <img
        src={file.preview}
        alt={file.name}
        width={'50px'}
      />
      
    </div>
  ));


  // clean up
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input type="file" {...getInputProps()} />
        {
          !files.length &&
          <div>Нажмите или перетяните сюда фото в .png</div>
        }
        <aside className='wrap-thumbs'>
          {thumbs.reverse()}
        </aside>
      </div>

    </section>
  )
}



export default DropzoneComponent;