import React, { useState } from 'react';
import './App.css';

function SlateApi() {

const [visits, setVisits] = useState([]);
let url = 'https://admissions.ucmo.edu/manage/query/run?id=68cdd6dd-d8e4-40c5-9c65-97ee9e88ddd0&cmd=service&output=json&h=615aee37-be1d-4fd1-a7f9-df91b3d6c202';


async function getVisits() {
    const response = await fetch(url);
    const data = await response.json();
    setVisits(data.row);
    console.log(visits);
}

  return (
    <div>SlateApi
        <button onClick={getVisits}>Get Data</button>
        {visits.map(visit => 
            <div className="API-response">
                <h2 className="heading" key={visit.slate_prospect_id}>{visit?.visit_date}</h2>
                <h3 className="heading" key={visit.slate_prospect_id}>{visit?.student_territory}</h3>
                <h3 className="heading" key={visit.slate_prospect_id}>{visit?.student_major}</h3>
                <h3 className="heading" key={visit.slate_prospect_id}>{visit?.student_city}</h3>
            </div>
            )}
    </div>
  )
}

export default SlateApi