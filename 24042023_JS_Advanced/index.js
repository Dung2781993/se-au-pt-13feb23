const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json').then(
  async (response) => {
    console.log(`Received response: ${response.status}`);
    console.log(`Received Type: ${response.type}`);
    console.log(await response.json());
  }
);

const testPromise = new Promise((resolve, reject) => {
  const currentYear = new Date().getFullYear();
  if (currentYear >= 2023) {
    let successfulResponse = {
      success: true,
      data: "This year is greater than 2023",
      message: "Fetching data successfully",
    };
    resolve(successfulResponse);
  } else {
    reject("This year is smaller than 2023");
  }
});

const testCounting = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    return new Promise((resolve, reject) => {
      resolve(result * 4);
    });
  })
  .then(function (result) {
    return new Promise((resolve, reject) => {
      resolve(result * 5);
    });
  })
  .then(function (result) {
    return new Promise((resolve, reject) => {
      resolve(result * 6);
    });
  });

const testGetPromiseValue = async () => {
  try {
    const value = await testCounting;
    console.log(value);
  } catch (err) {
    console.log("Errrrr !");
    console.log(err);
  }
};

testGetPromiseValue();

/**
  Promise all
 */

const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  resolve('Third promise');
});
try{
  Promise.all([fetchPromise, promise2, promise3]).then((values) => {
    console.log(values);
  });  
} catch (err) {
  console.err(err);
}

// Expected output: Array [3, 42, "foo"]


async function testOdd () {
  return Promise.resolve('Odd');
}

console.log(testOdd());

