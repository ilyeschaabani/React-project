// Importer les bibliothèques nécessaires pour faire des requêtes HTTP
import axios from 'axios';

// Fonction pour interagir avec l'API ChatGPT et obtenir les résultats des universités en fonction des réponses
export async function fetchUniversitiesByResponses(answers) {
    try {
        // Exemple d'URL de l'API ChatGPT (remplacez par l'URL réelle de votre API ChatGPT)
        const apiUrl = 'https://chatgpt-api.shn.hk/v1/';

        // Faire une requête POST à l'API ChatGPT avec les réponses de l'utilisateur
        const response = await axios.post(apiUrl, { answers });

        // Récupérer les résultats de l'API (assurez-vous que l'API retourne les données dans un format approprié)
        const results = response.data;

        // Traiter les résultats si nécessaire et retourner les données finales
        return results;
    } catch (error) {
        // Gérer les erreurs en cas de problème avec l'appel à l'API
        console.error('Error fetching data from ChatGPT API:', error);
        throw new Error('Failed to fetch data from ChatGPT API');
    }
}
