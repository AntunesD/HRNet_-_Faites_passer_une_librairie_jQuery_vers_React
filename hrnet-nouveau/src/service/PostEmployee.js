const postEmployee = async (newEmployeeData) => {
    try {
      // URL de votre serveur local JSON Server
      const apiUrl = 'http://localhost:3001/employees';
  
      // Effectuer une requête POST vers l'API avec les nouvelles données d'employé
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployeeData),
      });
  
      // Vérifier si la réponse est ok (status code 201 pour une création réussie)
      if (!response.ok) {
        throw new Error('Failed to add employee');
      }
  
      // Récupérer la réponse JSON
      const data = await response.json();
  
      // Afficher la réponse dans la console
      console.log('Employee added successfully:', data);
  
      return data;
    } catch (error) {
      console.error('Error adding employee:', error.message);
      throw error;
    }
  };
  
  export default postEmployee;
  