import { useState, useEffect } from 'react';

const useEmployees = () => {
  // URL de votre serveur local JSON Server
  const apiUrl = 'http://localhost:3001/employees';

  // État pour stocker les données des employés
  const [employees, setEmployees] = useState([]);
  // État pour indiquer s'il y a une erreur lors du chargement des employés
  const [error, setError] = useState(null);
  // État pour indiquer si les données sont en cours de chargement
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour récupérer les données des employés
  const fetchEmployees = async () => {
    setIsLoading(true);
    try {
      // Effectuer une requête GET vers l'API
      const response = await fetch(apiUrl);

      // Vérifier si la réponse est ok (status code 200)
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      // Analyser la réponse JSON
      const data = await response.json();
      
      // Mettre à jour l'état des employés avec les données récupérées
      setEmployees(data);
      setIsLoading(false);
    } catch (error) {
      // Mettre à jour l'état d'erreur en cas d'échec de la requête
      setError(error);
      setIsLoading(false);
    }
  };

  // Utiliser useEffect pour charger les employés lors du montage du composant
  useEffect(() => {
    fetchEmployees();
  }, []); // Dépendance vide pour exécuter uniquement une fois lors du montage

  // Renvoyer les données des employés, l'état de chargement et l'erreur
  return { employees, isLoading, error };
};

export default useEmployees;
