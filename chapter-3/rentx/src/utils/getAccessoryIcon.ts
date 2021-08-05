import SpeedSvg from '../assets/speed.svg'
import AccelerationSvg from '../assets/acceleration.svg'
import ForceSvg from '../assets/force.svg'
import GasolineSvg from '../assets/gasoline.svg'
import EnergySvg from '../assets/energy.svg'
import HybridSvg from '../assets/hybrid.svg'
import ExchangeSvg from '../assets/exchange.svg'
import PeopleSvg from '../assets/people.svg'
import CarSvg from '../assets/car.svg'

const Icons = {
  speed: SpeedSvg,
  acceleration: AccelerationSvg,
  turning_diameter: ForceSvg,
  gasoline_motor: GasolineSvg,
  electric_motor: EnergySvg,
  hybrid_motor: HybridSvg,
  exchange: ExchangeSvg,
  seats: PeopleSvg,
  default: CarSvg
}

type Icon = keyof typeof Icons

export const getAccessoryIcon = (type: Icon | string) => {
  return Icons[type] || Icons['default']
}
