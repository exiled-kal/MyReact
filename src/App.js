import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Header from './comps/Header';

import CopyrightIcon from '@material-ui/icons/Copyright';
import InstagramIcon from '@material-ui/icons/Instagram';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Header />
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <div className="social__link">
        <br />
        <p>Click on the Logo to check my Instagram page</p>
        <a href="https://www.instagram.com/exiled_fotos/">
          <InstagramIcon className="insta__link" />
        </a>
        <h3 className="like__follow">Like & Follow</h3>
        <CopyrightIcon className="copy__right" />
        All the pictures are taken by me.
      </div>
    </div>
  );
}

export default App;
