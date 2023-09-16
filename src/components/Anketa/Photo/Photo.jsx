import React, {useState} from 'react';
import './Photo.scss';
import img from './img/image.png';
import img1 from './img/image1.png';
import img2 from './img/image2.png';
import img3 from './img/image3.png';
import img4 from './img/image4.png';
import img5 from './img/image5.png';
import img6 from './img/image6.png';
import img7 from './img/image7.png';
import img8 from './img/image8.png';

const Photo = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFile(event.target.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div id="photo">
            <div className="container">
                <div className="photo">
                    <div className="photo--photo-text">
                        <img width='400px' height='400px' src={file} alt=""/>
                        <h2>Профиль</h2>
                    </div>
                    <div className="photo--block">
                        <div className="photo--block__block1">
                            <h1>Gallery</h1>
                            <img style={{marginTop:'30px'}} width='350px' height='200px' src={img1} alt=""/>
                            <div className='photo--block__block1--div lol'>
                                <img width='110' src={img2} alt=""/>
                                <img src={img3} alt=""/>
                                <img src={img4} alt=""/>
                            </div>
                        </div>
                        <div className="photo--block__block2">

                            <div className='photo--block__block1--div'>
                                <img src={img5} alt=""/>
                                <img src={img6} alt=""/>
                                <img src={img7} alt=""/>
                            </div>
                            <div className='photo--block__block2--div1'>
                                <img src={img8} alt=""/>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    placeholder="+"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photo;