import Service from '@ember/service';
import fetch from 'fetch';

export default class APIService extends Service {
    async getHolidays() {
      try {
        const response = await fetch('http://localhost:3000/api/v1/holidays');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching holidays:', error);
        throw error; 
      }
    }

    //getHolidays works and the rest below not tested yet

    async addHoliday(newHoliday) {
        try {
          const response = await fetch('http://localhost:3000/api/v1/holidays', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHoliday),
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error adding holiday:', error);
          throw error;
        }
      }
    
      async updateHoliday(id, updatedHoliday) {
        try {
          const response = await fetch(`http://localhost:3000/api/v1/holidays/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedHoliday),
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error updating holiday:', error);
          throw error;
        }
      }
    
      async removeHoliday(id) {
        try {
          const response = await fetch(`http://localhost:3000/api/v1/holidays/${id}`, {
            method: 'DELETE',
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error removing holiday:', error);
          throw error;
        }
      }

  }
