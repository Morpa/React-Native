import { CarProps } from '../screens/Home'

export const carCardMapper = (cars: CarProps[]) => {
  return cars.map((cars) => ({
    ...cars,
    carDetails: {
      id: cars.id,
      brand: cars.brand,
      name: cars.name,
      thumbnail: cars.thumbnail,
      fuelType: cars.fuel_type
    },
    rentDetails: {
      period: cars.rent.period,
      price: cars.rent.price
    }
  }))
}
