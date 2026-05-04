import {
  FaBook,
  FaBroom,
  FaCamera,
  FaCar,
  FaHeadset,
  FaLaptopCode,
  FaMotorcycle,
  FaShoppingBag,
  FaSpa,
  FaTasks,
  FaTaxi,
  FaTools,
  FaTruck,
  FaTshirt,
  FaUsers,
  FaWrench,
} from 'react-icons/fa'

const iconByServiceName = {
  ojek: FaMotorcycle,
  motor: FaMotorcycle,
  'ojek motor': FaMotorcycle,
  mobil: FaTaxi,
  'ojek mobil': FaTaxi,
  'angkut barang': FaTruck,
  'bersih bersih': FaBroom,
  jastip: FaShoppingBag,
  'daily activity': FaTasks,
  'jasa nemenin': FaUsers,
  laundry: FaTshirt,
  'all service': FaTools,
  travel: FaCar,
  editing: FaCamera,
  'bantuan online': FaHeadset,
  'joki tugas': FaBook,
  teknisi: FaWrench,
  spa: FaSpa,
  'jasa it': FaLaptopCode,
}

export function getServiceIcon(serviceName) {
  const key = serviceName.trim().toLowerCase()
  return iconByServiceName[key] ?? FaTasks
}
