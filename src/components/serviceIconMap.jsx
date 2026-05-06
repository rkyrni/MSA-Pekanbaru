import {
  FaBook,
  FaBroom,
  FaCamera,
  FaCar,
  FaCode,
  FaHandshake,
  FaHeadset,
  FaLaptopCode,
  FaMotorcycle,
  FaShoppingBag,
  FaSpa,
  FaTasks,
  FaTaxi,
  FaTint,
  FaTools,
  FaTruck,
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
  'jual beli': FaHandshake,
  jastip: FaShoppingBag,
  'daily activity': FaTasks,
  'tim profesional': FaUsers,
  'jasa nemenin': FaUsers,
  laundry: FaTint,
  'all service': FaTools,
  travel: FaCar,
  editing: FaCamera,
  'bantuan online': FaHeadset,
  'joki tugas': FaBook,
  teknisi: FaWrench,
  'teknisi/tukang': FaWrench,
  spa: FaSpa,
  'jasa it': FaLaptopCode,
  'konsultasi it': FaCode,
}

export function getServiceIcon(serviceName) {
  const key = serviceName.trim().toLowerCase()
  return iconByServiceName[key] ?? FaTasks
}
