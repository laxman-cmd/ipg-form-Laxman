import { useEffect, useState } from 'react';
import './Home.css';
import {
  Link,
} from 'react-router-dom';

function Home() {
  const [textarea, setTextarea] = useState(() => {
    return localStorage.getItem('textarea') || '';
  });
  const [dG, setDG] = useState(() => {
    return localStorage.getItem('dF') || 'not relevant';
  });
  const [pT, setPT] = useState(() => {
    return localStorage.getItem('pT') || 'not relevant';
  });
  const [mT, setMT] = useState(() => {
    return localStorage.getItem('mT') || 'not relevant';
  });
  const [exProb, setExProb] = useState(() => {
    return localStorage.getItem('exProb') || 'not relevant';
  });
  // const [userInfo, setUserInfo] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('userInfo')) || [];
  // });
  const [userInfo, setUserInfo] = useState([]);

  const [scale, setScale] = useState(() => {
    return localStorage.getItem('scale') || '5';
  });
  const [allData, setAllData] = useState([]);

  const textHandleChange = (event) => {
    setTextarea(event.target.value);
  };
  const handleDG = (e) => {
    setDG(e.target.value);
  };
  console.log(dG);

  const handlePT = (e) => {
    setPT(e.target.value);
  };
  console.log(pT);
  const handleMT = (e) => {
    setMT(e.target.value);
  };
  console.log(mT);
  const handleExProb = (e) => {
    setExProb(e.target.value);
  };
  console.log(exProb);

  const checkHandleChange = (e) => {
    console.log('inside ckbx');
    const { value, checked } = e.target;
    // const { problems } = userInfo;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setUserInfo([...userInfo, value]);
      // setUserInfo({
      //   problems: [...problems, value],
      //   response: [...problems, value],
      // });
    } else {
      setUserInfo(userInfo.filter((e) => e !== value));
      // setUserInfo({
      //   problems: problems.filter((e) => e !== value),
      //   response: problems.filter((e) => e !== value),
      // });
    }
  };
  console.log(userInfo);

  // Clear Form
  const handleScale = (e) => {
    setScale(e.target.value);
  };
  console.log(scale);
  const formHandleSubmit = (e) => {
    e.preventDefault();

    // const formData = {
    //   problemsList: textarea,
    //   problemDiagnosed: dG,
    //   whenProblems: userInfo.response,
    //   intenseLevel: scale,
    // };
    const formData = [textarea, dG, pT, mT, exProb, userInfo, scale];
    // console.log(formData);
    setAllData(formData);
    //clear form data
    // setTextarea('');
    // setUserInfo({ problems: [], response: [] });
    // setDG('not relevant');
    // setPT('not relevant');
    // setMT('not relevant');
    // setExProb('not relevant');

    // setScale('5');
  };

  
  useEffect(() => {
    setUserInfo(JSON.parse(window.localStorage.getItem('userInfo')));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('textarea', textarea);
    window.localStorage.setItem('dG', dG);
    window.localStorage.setItem('pT', pT);
    window.localStorage.setItem('mT', mT);
    window.localStorage.setItem('exProb', exProb);
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
    // window.localStorage.setItem('userInfo', userInfo);

    window.localStorage.setItem('scale', scale);
  }, [textarea, dG, pT, mT, exProb, userInfo, scale]);

  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ color: 'lightblue' }}>Pain & Functional Description</div>
        <p>
          The Description of the current situation gives you Optimum <br />
          Trainer a picture of the clues to the underlying causes of your <br />{' '}
          problems
        </p>
      </header>
      <main>
        <form onSubmit={formHandleSubmit}>
          <p>
            If you have problems with pain/aches stiffness, weakness or
            functional problems, describe this/these below. (List the symptoms
            in descending order with the most troublesome first)
          </p>
          <textarea value={textarea} onChange={textHandleChange} />

          <div className='dG'>
            <label>Have you been diagnosed with this problem?</label>
            <input
              type='radio'
              id='radio-dG1'
              // value='1'
              value='not relevent'
              onChange={handleDG}
              checked={dG === 'not relevant'}
            />
            Not Relevent
            <input
              type='radio'
              id='radio-dG2'
              value={'yes'}
              onChange={handleDG}
              checked={dG === 'yes'}
            />
            Yes
            <input
              type='radio'
              id='radio-dG3'
              value={'no'}
              onChange={handleDG}
              checked={dG === 'no'}
            />
            No
          </div>
          <div className='pT'>
            <label>Did the problem start after a physical trauma?</label>
            <input
              type='radio'
              // value='1'
              value='not relevent'
              onChange={handlePT}
              checked={pT === 'not relevant'}
            />
            Not Relevent
            <input
              type='radio'
              value={'yes'}
              onChange={handlePT}
              checked={pT === 'yes'}
            />
            Yes
            <input
              type='radio'
              value={'no'}
              onChange={handlePT}
              checked={pT === 'no'}
            />
            No
          </div>
          <div className='mT'>
            <label>Did the problem start after a mental trauma?</label>
            <input
              type='radio'
              // value='1'
              value='not relevent'
              onChange={handleMT}
              checked={mT === 'not relevant'}
            />
            Not Relevent
            <input
              type='radio'
              value={'yes'}
              onChange={handleMT}
              checked={mT === 'yes'}
            />
            Yes
            <input
              type='radio'
              value={'no'}
              onChange={handleMT}
              checked={mT === 'no'}
            />
            No
          </div>
          <div className='exProb'>
            <label>How often do you experience the problem?</label>
            <input
              type='radio'
              // value='1'
              value='not relevent'
              onChange={handleExProb}
              checked={exProb === 'not relevant'}
            />
            Not Relevent
            <input
              type='radio'
              value={'daily'}
              onChange={handleExProb}
              checked={exProb === 'daily'}
            />
            Daily
            <input
              type='radio'
              value={'several times/week'}
              onChange={handleExProb}
              checked={exProb === 'several times/week'}
            />
            several times/week
            <input
              type='radio'
              value={'few times/month'}
              onChange={handleExProb}
              checked={exProb === 'few times/month'}
            />
            a few times/month
            <input
              type='radio'
              value={'few times/year'}
              onChange={handleExProb}
              checked={exProb === 'few times/year'}
            />
            a few times/month
          </div>

          <div className='checkbox'>
            <label htmlFor=''> When do you experience the problem</label>
            <br />
            <div className='check1'>
              <input
                type='checkbox'
                value='not Relevant'
                onChange={checkHandleChange}
                // checked={}
              />
              <label htmlFor=''>Not relevant</label>
            </div>
            <div className='check2'>
              <input
                type='checkbox'
                value='When lying down'
                onChange={checkHandleChange}
              />
              <label htmlFor=''>When lying down</label>
            </div>
            <div className='check3'>
              <input
                type='checkbox'
                value='when sitting'
                onChange={checkHandleChange}
              />
              <label htmlFor=''>when sitting</label>
            </div>
            <div className='check4'>
              <input
                type='checkbox'
                value='under standing'
                onChange={checkHandleChange}
              />
              <label htmlFor=''>under standing</label>
            </div>
            <div className='check5'>
              <input
                type='checkbox'
                value='In Walking'
                onChange={checkHandleChange}
              />
              <label htmlFor=''>In Walking</label>
            </div>
          </div>

          <div className='radio'>
            <label>
              How intense is the experience of the problem on average on 0-10
              scale?
            </label>
            <br />
            <input
              type='radio'
              value={1}
              onChange={handleScale}
              checked={scale === '1'}
            />
            1
            <input
              type='radio'
              value={2}
              onChange={handleScale}
              checked={scale === '2'}
            />
            2
            <input
              type='radio'
              value={3}
              onChange={handleScale}
              checked={scale === '3'}
            />
            3
            <input
              type='radio'
              value={4}
              onChange={handleScale}
              checked={scale === '4'}
            />
            4
            <input
              type='radio'
              value={5}
              onChange={handleScale}
              checked={scale === '5'}
            />
            5
            <input
              type='radio'
              value={6}
              onChange={handleScale}
              checked={scale === '6'}
            />
            6
            <input
              type='radio'
              value={7}
              onChange={handleScale}
              checked={scale === '7'}
            />
            7
            <input
              type='radio'
              value={8}
              onChange={handleScale}
              checked={scale === '8'}
            />
            8
            <input
              type='radio'
              value={9}
              onChange={handleScale}
              checked={scale === '9'}
            />
            9
            <input
              type='radio'
              value={10}
              onChange={handleScale}
              checked={scale === '10'}
            />
            10
            <br />
            <br />
          </div>
          <button type='Submit' className='plus-btn'>
            {' '}
            +{' '}
          </button>
        </form>
      </main>
      <br />
      <div>
        <Link to={{ pathname: 'SummaryPage', state: allData }}>
          <button>Next</button>
        </Link>
        {/* <SummaryPage props={allData} /> */}
       
      </div>
    </div>
  );
}

export default Home;



















































// string passed in
    // a string returned by default
    // console.log(e.currentTarget.value);
    // add + to the event to make the value a number
    // setIsRadio(+e.currentTarget.value);
      // Multi Checkbox
  // const getPj1 = (e) => {
  //   // Destructuring
  //   const { value, checked } = e.target
  //   console.log(` ${value} is ${checked}`)
  //   if (checked) { // User Checks the Box
  //   setPjl([... pjl, value])
  //   } else { // User Unchecks the Box
  //   setPjl(pjl.filter((e) => e ! == value) )
  //   }
  //   }