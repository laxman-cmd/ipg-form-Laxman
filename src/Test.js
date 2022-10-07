import { useState } from 'react';
import './App.css';

import SummaryPage from './Pages/SummaryPage';

function App() {
  const [userInfo, setUserInfo] = useState({ problems: [], response: [] });
  const [textarea, setTextarea] = useState('');
  const [dG, setDG] = useState('not relevant');
  const [pT, setPT] = useState('not relevant');
  const [mT, setMT] = useState('not relevant');
  const [exProb, setExProb] = useState('not relevant');
  const [scale, setScale] = useState(5);
  const [allData, setAllData] = useState([]);

  const textHandleChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleDG = (e) => {
    // string passed in
    // a string returned by default
    // console.log(e.currentTarget.value);
    // add + to the event to make the value a number
    // setIsRadio(+e.currentTarget.value);
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
    const { value, checked } = e.target;
    const { problems } = userInfo;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setUserInfo({
        problems: [...problems, value],
        response: [...problems, value],
      });
    }
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        problems: problems.filter((e) => e !== value),
        response: problems.filter((e) => e !== value),
      });
    }
  };
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
    const formData = [textarea, dG, pT, mT, exProb, userInfo.response, scale];
    // console.log(formData);
    setAllData(formData);
    //clear form data
    setTextarea('');
    setUserInfo({ problems: [], response: [] });
    setDG('not relevant');
    setPT('not relevant');
    setMT('not relevant');
    setExProb('not relevant');

    setScale(5);
  };

  console.log(userInfo);
  const history = useHistory();
  const handleRoute = () => {
    return history.push('/SummaryPage.js');
  };
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <div style={{ color: 'lightblue' }}>
            Pain & Functional Description
          </div>
          <p>
            The Description of the current situation gives you Optimum <br />
            Trainer a picture of the clues to the underlying causes of your{' '}
            <br /> problems
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
                  name='problem'
                  value='Not Relevant'
                  onChange={checkHandleChange}
                />
                <label htmlFor=''>Not relevant</label>
              </div>
              <div className='check2'>
                <input
                  type='checkbox'
                  name='problem'
                  value='When lying down'
                  onChange={checkHandleChange}
                />
                <label htmlFor=''>When lying down</label>
              </div>
              <div className='check3'>
                <input
                  type='checkbox'
                  name='problem'
                  value='when sitting'
                  onChange={checkHandleChange}
                />
                <label htmlFor=''>when sitting</label>
              </div>
              <div className='check4'>
                <input
                  type='checkbox'
                  name='problem'
                  value='under standing'
                  onChange={checkHandleChange}
                />
                <label htmlFor=''>under standing</label>
              </div>
              <div className='check5'>
                <input
                  type='checkbox'
                  name='problem'
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
                id='scale-1'
                value={1}
                onChange={handleScale}
                checked={scale === 1}
              />
              1
              <input
                type='radio'
                id='scale-2'
                value={2}
                onChange={handleScale}
                checked={scale === 2}
              />
              2
              <input
                type='radio'
                id='scale-3'
                value={3}
                onChange={handleScale}
                checked={scale === 3}
              />
              3
              <input
                type='radio'
                id='scale-4'
                value={4}
                onChange={handleScale}
                checked={scale === 4}
              />
              4
              <input
                type='radio'
                id='scale-5'
                value={5}
                onChange={handleScale}
                checked={scale === 5}
              />
              5
              <input
                type='radio'
                id='scale-6'
                value={6}
                onChange={handleScale}
                checked={scale === 6}
              />
              6
              <input
                type='radio'
                id='scale-7'
                value={7}
                onChange={handleScale}
                checked={scale === 7}
              />
              7
              <input
                type='radio'
                id='scale-8'
                value={8}
                onChange={handleScale}
                checked={scale === 8}
              />
              8
              <input
                type='radio'
                id='scale-9'
                value={9}
                onChange={handleScale}
                checked={scale === 9}
              />
              9
              <input
                type='radio'
                id='scale-10'
                value={10}
                onChange={handleScale}
                checked={scale === 10}
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
          {/* <Link to='/src/Pages/SummaryPage.js'>
            <button>next</button>
          </Link> */}
          {/* <SummaryPage props={allData} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
