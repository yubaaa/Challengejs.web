function countPeopleByCity(people) {
    return people.reduce((countByCity, person) => {
      const city = person.city;
      countByCity[city] = (countByCity[city] || 0) + 1;
      return countByCity;
    }, {});
  }
  