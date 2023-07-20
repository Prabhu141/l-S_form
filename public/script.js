document.getElementById('getDataBtn').addEventListener('click', async () => {
    try {
      const response = await fetch('/data');
      const jsonData = await response.json();
  
      // Display the data on the page
      const dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = '';
      jsonData.items.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.textContent = `ID: ${item.id}, Name: ${item.name}`;
        dataContainer.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  document.getElementById('getDataBtn1').addEventListener('click', async () => {
    try {
      const response = await fetch('/csvdata');
      const csvData = await response.json();
  
      // Display the data on the page
      const dataContainer = document.getElementById('dataContainer1');
      dataContainer.innerHTML = '';
      csvData.forEach((data) => {
        const listItem = document.createElement('div');
        listItem.textContent = `ID: ${data.id}, Name: ${data.name}, Age: ${data.age}, Email: ${data.email}`;
        dataContainer.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
  