import axios from 'axios';

class AuthService {
  getToken() {
    return localStorage.getItem('jwtToken');
  }

  setAuthHeaders() {
    const token = this.getToken();

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      // Limpiar los encabezados si no hay token disponible
      delete axios.defaults.headers.common['Authorization'];
    }
  }
}

export default new AuthService();
