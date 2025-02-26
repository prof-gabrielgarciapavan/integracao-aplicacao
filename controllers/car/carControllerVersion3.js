let cars = [
    { id: 2, name: 'Car 2', modal: 'FIAT 2' },
    { id: 3, name: 'Car 3', model: 'FIAT 3' },
  ];
  
  // Função para retornar todos os usuários
  exports.getAllCars = (req, res) => {
    res.json(cars);
  };
  
  // Função para retornar um usuário por ID
  exports.getCarById = (req, res) => {
    const { id } = req.params; // api.gabriel.com/cars/1
    const car = cars.find(u => u.id == id);
    if (car) {
      res.json(car);
    } else {
      res.status(404).send('Carro não encontrado');
    }
  };
  
  // Função para criar um novo usuário
  exports.createCar = (req, res) => {
    const { name, model } = req.body;
    const newCar = { id: cars.length + 1, name: name, model: model };
    cars.push(newCar);
    res.status(201).json(newCar);
  };
  
  // Função para atualizar um usuário
  exports.updateCar = (req, res) => {
    const { id } = req.params;
    const { name, model } = req.body;
    let car = cars.find(u => u.id == id);
    if (car) {
      car.name = name;
      car.model = model;
      res.status(201).json(car);
    } else {
      res.status(404).send('Carro não encontrado');
    }
  };
  
  // Função para deletar um usuário
  exports.deleteCar = (req, res) => {
    const { id } = req.params;
    const userIndex = cars.findIndex(u => u.id == id);
    if (userIndex >= 0) {
      cars.splice(userIndex, 1);
      res.status(200).send();
    } else {
      res.status(404).send('Carro não encontrado');
    }
  };
  