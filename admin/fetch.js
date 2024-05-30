const env = "http://localhost:3333";

async function fetchAndProcessServices() {
    try {
      const response = await fetch(`${env}/services`);
      const data = await response.json();
  
      const tableBody = document.getElementById('servicesTableBody');
      
      // Önceki tablo içeriğini temizleyin
      tableBody.innerHTML = '';
  
      data?.data?.forEach((item) => {
        // Yeni bir satır oluştur
        const row = document.createElement('tr');
        
        // Name hücresini oluştur ve içeriğini ayarla
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
        
        // Description hücresini oluştur ve içeriğini ayarla
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = item.description;
        row.appendChild(descriptionCell);
        
        // Actions hücresini oluştur ve içeriğini ayarla
        const actionsCell = document.createElement('td');
        
        // Edit düğmesini oluştur ve ekle
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-primary', 'mr-2'); // mr-2 for margin-right
        editButton.addEventListener('click', () => {
          console.log(item);
        });
        actionsCell.appendChild(editButton);
        
        // Delete düğmesini oluştur ve ekle
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', async () => {
          const deleteUrl = `${env}/service/delete/${item.id}`;
          try {
            const deleteResponse = await fetch(deleteUrl, {
              method: 'DELETE'
            });
  
            if (deleteResponse.ok) {
              // Satırı tablodan kaldır
              row.remove();
            } else {
              console.error('Delete failed:', deleteResponse.statusText);
            }
          } catch (error) {
            console.error('Error deleting item:', error);
          }
        });
        actionsCell.appendChild(deleteButton);
  
        row.appendChild(actionsCell);
  
        // Satırı tablo gövdesine ekle
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
async function fetchAndProcessSkills() {
  try {
    const response = await fetch(`${env}/skills`);
    const data = await response.json();

    data?.data?.map((item) => {
      console.log(item);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndProcessPortfolios() {
  try {
    const response = await fetch(`${env}/portfolios`);
    const data = await response.json();

    data?.data?.map((item) => {
      console.log(item);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndProcessExperiences() {
  try {
    const response = await fetch(`${env}/experiences`);
    const data = await response.json();

    data?.data?.map((item) => {
      console.log(item);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchAndProcessSettings() {
  try {
    const response = await fetch(`${env}/settings`);
    const result = await response.json();
    const data = result.data[0];

    data?.data?.map((item) => {
      console.log(item);
    });
  } catch (error) {
    console.error("Bir hata oluştu:", error);
  }
}

fetchAndProcessSettings();
fetchAndProcessSkills();
fetchAndProcessServices();
fetchAndProcessPortfolios();
fetchAndProcessExperiences();