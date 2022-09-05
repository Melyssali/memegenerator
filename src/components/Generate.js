import React, { useState, useEffect } from 'react';
import './generate.scss';
import './input.scss';
import GeneratedImage from './GeneratedImage';


const Generate = () => {
    // state
    const [allMemeData, setAllMemeData] = useState({});
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage : "http://i.imgflip.com/1bij.jpg",
   });

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(result => {
                const {memes} = result.data;
                setAllMemeData(memes)
            });
            
    }, []) 

    console.log(`voici les résultats du fetch : ${JSON.stringify(allMemeData)}`);

   
    let url;
    const okfunc = () => {
        const randomArray = Math.floor(Math.random() * allMemeData.length);
        url = allMemeData[randomArray].url;
        setMeme(prevState => ({
            ...prevState, 
            randomImage: url
            })
        )  
    }
      // on crée un objet avec les deux noms des input
      const [inputValue, setInputValue] = useState({
        topvalue: "", bottomvalue: ""
    });


    const handleChange = (event) => {
        event.preventDefault();

        setInputValue(prevInputValue => {
            return {
                ...prevInputValue,
                // on crée quelque chose de dynamique pour avoir le nom de l'input concerné
                [event.target.name]: event.target.value
            }
        });
    }
    const { topvalue, bottomvalue } = inputValue;

    console.log(inputValue);

   
    return (
        <>
          <form className='input--section'>
                <input
                    className="input--1"
                    type="text"
                    onChange={handleChange}
                    name="topvalue"
                    value={topvalue}

                ></input>
                <input
                    className='input--2'
                    type='text'
                    onChange={handleChange}
                    name="bottomvalue"
                    value={bottomvalue}
                ></input>
            </form>

            <div className='Generate'>
                <button onClick={okfunc}>Get a new meme image 🖼 </button>
                <GeneratedImage url={meme.randomImage} topvalue={topvalue} bottomvalue={bottomvalue}/>
            </div>
    
        </>
    );
};

export default Generate;

// import React, { useState } from 'react';
// import './Generate.scss';
// import memedata from '../memedata';
// import GeneratedImage from './GeneratedImage';

// const Generate = () => {
//     // state
//     const [isOn, setIsOn] = useState(false);
//     const [memeImage, setMemeImage] = useState({
//         topText: "",
//         bottomText: "",
//         randomImage : "http://i.imgflip.com/1bij.jpg",
//    });
    

//     let url;
//     const okfunc = () => {
//         const memeArray = memedata.data.memes;
//         const randomArray = Math.floor(Math.random() * memeArray.length);
//         url = memeArray[randomArray].url;
//         setIsOn(true)
//         setMemeImage(url)  
//     }
    
//     const okfunc = () => {
//         const memeArray = memedata.data.memes;
//         const randomArray = Math.floor(Math.random() * memeArray.length);
//         url = memeArray[randomArray].url;
//         setIsOn(true)
//         setMemeImage()
        
//     }
//     return (
//         <div className='Generate'>
//             <button onClick={okfunc}>Get a new meme image 🖼 </button>
//             {isOn && <GeneratedImage url={memeImage} />}
//         </div>
//     );
// };

// export default Generate;