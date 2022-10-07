import React from 'react';
import './SummaryPage.css';
import {Link} from 'react-router-dom';

const SummaryPage = (props) => {
  
  console.log(props.location.state);
  const [textarea, dG, pT, mT, exProb, when, scale] = props.location.state;

 
  return (
    <div className='sum-main'>
      <tbody>
          <tr>
            <th></th>
            <th>Problems List</th>
            <th>Problem Diagnosed?</th>
            <th>Physical trauma?</th>
            <th>Mental Trauma?</th>
            <th>Exprience Problem?</th>
            <th>When Does Problem?</th>
            <th>Intense Level</th>
          </tr>
         
          <tr>
            <td>
              <button>Edit</button>
            </td>
            <td>{textarea}</td>
            <td>{dG}</td>
            <td>{pT}</td>
            <td>{mT}</td>
            <td>{exProb}</td>
            <td>{when}</td>
            <td>{scale}</td>
          </tr>
          
      </tbody>
     
     <>
     <Link to={{ pathname: '/',}}>
          <button>Back</button>
        </Link>
     </>
    </div>
    
  );
};

export default SummaryPage;



 // console.log(props.props);
  // const data = props.props;
  // const [textarea, dG, pT, mT, exProb, when, scale] = props.props;

  //  console.log( Object.keys(props.props).map((item) => { return item }))
