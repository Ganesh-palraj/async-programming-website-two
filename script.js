// url used for each section 

let patent_Url = 'https://api.nasa.gov/techtransfer/patent/?engine&api_key='

let software_Url = 'https://api.nasa.gov/techtransfer/software/?engine&api_key='

let spinoff_Url = 'https://api.nasa.gov/techtransfer/spinoff/?engine&api_key='

// api_key 

let api_key = "QwXNyrCI2PP4P1V1gyfpgDRTXGzWEegudIep1xSB";

// function to show and hide various sections 

function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

// Getting Data using url

async function getPatentData() {
  let patent_Data;
  try {
    // fetching Patent Data 
    const data = await fetch(patent_Url + api_key, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    patent_Data = await data.json();
    // console.log(patent_Data);
    // console.log(space_News)
  } catch (error) {
    alert(error);
  }
  return patent_Data;
}

// getData();

// function to display patent data 

async function displayPatentData() {
  let allData = await getPatentData();
  // console.log(allData);
  let { results } = allData;
  // console.log(results)
  let display_data = document.querySelector(".patent_data");
  // display_data.innerHTML = "";

  // Iterating through Data 

  results.forEach((element) => {
    // console.log(element.hdurl)
    display_data.innerHTML += `
    <div class="card  text-bg-light mb-3" style="max-width: fit-content;" key=${element?.[0]}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${element?.[10]}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element?.[2]}</h5>
         <p class="card-text">${element?.[3]}</p>
        <p class="card-text">Type:<small class="text-bg-success"> ${element?.[5]}</small></p>
      </div>
    </div>
  </div>
</div>
      `;
  });
}

displayPatentData()  //function call

// Getting Nasa Software Data using url

async function getSoftwareData() {
  let software_Data;
  try {
    const data = await fetch(software_Url + api_key, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    software_Data = await data.json();
    // console.log(software_Data);
    // console.log(space_News)
  } catch (error) {
    console.log(error);
  }
  return software_Data;
}

// display Software Data

async function displaySoftwareData() {
  let allData = await getSoftwareData();
  // console.log(allData);
  let { results } = allData;
  // console.log(results)
  let display_data = document.querySelector(".software_data");
  // display_data.innerHTML = "";

  results.forEach((element) => {
    // console.log(element.hdurl)
    display_data.innerHTML += `
    <div class="card  text-bg-light mb-3" style="max-width: fit-content;" key=${element?.[0]}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://spinoff.nasa.gov/sites/default/files/2020-08/it_14_web_2.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element?.[2]}</h5>
         <p class="card-text">${element?.[3]}</p>
        <p class="card-text">Type:<small class="text-bg-success"> ${element?.[5]}</small></p>
      </div>
    </div>
  </div>
</div>
      `;
  });
}

displaySoftwareData()

// get Spinoff Data 

async function getSpinoffData() {
  let spinoff_Data;
  try {
    const data = await fetch(spinoff_Url + api_key, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    spinoff_Data = await data.json();
    // console.log(spinoff_Data);
    // console.log(space_News)
  } catch (error) {
    console.log(error);
  }
  return spinoff_Data;
}

// To Display Spin off Data

async function displaySpinoffData() {
  let allData = await getSpinoffData();
  // console.log(allData);
  let { results } = allData;
  // console.log(results)
  let display_data = document.querySelector(".spinoff_data");
  // display_data.innerHTML = "";

  results.forEach((element) => {
    // console.log(element.hdurl)
    display_data.innerHTML += `
    <div class="card  text-bg-light mb-3" style="max-width: fit-content;" key=${element?.[0]}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://i0.wp.com/www.spacesafetymagazine.com/wp-content/uploads/2012/02/NASAspinoff.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${element?.[2]}</h5>
         <p class="card-text">${element?.[3]}</p>
        <p class="card-text">Type:<small class="text-bg-success"> ${element?.[5]}</small></p>
      </div>
    </div>
  </div>
</div>
      `;
  });
}

displaySpinoffData()
