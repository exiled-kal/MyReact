import React, {useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Header from './comps/Header';
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

      <h4>All the pictures are taken By myself</h4>
      <p>For more Info about the photos.</p>
      <InstagramIcon fontSize="extra-large" />
      <p>Please check my instagram page</p>
    </div>
  );
}

export default App;
