

// Import images at the top of the file
import img1 from './assets1.jpg';
import img2 from './assets2.jpg';
import img3 from './assets3.jpg';
import img4 from './assets4.jpg';
import img5 from './assets5.jpg';
import img6 from './assets6.jpg';
import img7 from './assets7.jpg';
import img8 from './assets8.jpg';
import img9 from './assets9.jpg';
import img10 from './assets10.jpg';



export const venues = [
  {
    id: 1,
    location: "Cj Turf Chembur",
    sports: ["Football", "Tennis"],
    timeSlots: ["7:00 AM - 9:00 AM", "5:00 PM - 7:00 PM"],
    datesAvailable: ["2024-09-15", "2024-09-17"],
    image: img1, // Use imported image
    distance: "2.5 km",
    ownerContact: {
      name: "Rohit Sharma",
      phone: "+91-9876543210",
    },
  },
  {
    id: 2,
    location: "K Star Chembur",
    sports: ["Cricket", "Badminton"],
    timeSlots: ["6:00 AM - 8:00 AM", "4:00 PM - 6:00 PM"],
    datesAvailable: ["2024-09-16", "2024-09-18"],
    image: img2, // Use imported image
    distance: "3.0 km",
    ownerContact: {
      name: "Virat Kohli",
      phone: "+91-9876543211",
    },
  },
  {
    id: 3,
    location: "Lavender Bough Turf Ghatkopar",
    sports: ["Football"],
    timeSlots: ["7:00 AM - 10:00 AM", "5:00 PM - 8:00 PM"],
    datesAvailable: ["2024-09-18", "2024-09-20"],
    image: img3, // Use imported image
    distance: "3.5 km",
    ownerContact: {
      name: "Sachin Tendulkar",
      phone: "+91-9876543212",
    },
  },
  {
    id: 4,
    location: "Sudha Park Turf Ghatkopar",
    sports: ["Tennis"],
    timeSlots: ["6:00 AM - 9:00 AM", "4:00 PM - 7:00 PM"],
    datesAvailable: ["2024-09-19", "2024-09-21"],
    image: img4, // Use imported image
    distance: "2.0 km",
    ownerContact: {
      name: "MS Dhoni",
      phone: "+91-9876543213",
    },
  },
  {
    id: 5,
    location: "Greenfield Turf Borivali",
    sports: ["Badminton", "Football"],
    timeSlots: ["8:00 AM - 10:00 AM", "3:00 PM - 5:00 PM"],
    datesAvailable: ["2024-09-20", "2024-09-22"],
    image: img5, // Use imported image
    distance: "4.0 km",
    ownerContact: {
      name: "Ravindra Jadeja",
      phone: "+91-9876543214",
    },
  },
  {
    id: 6,
    location: "Kohinoor Turf Kurla",
    sports: ["Cricket"],
    timeSlots: ["7:00 AM - 9:00 AM", "6:00 PM - 8:00 PM"],
    datesAvailable: ["2024-09-21", "2024-09-23"],
    image: img6, // Use imported image
    distance: "5.0 km",
    ownerContact: {
      name: "Rohit Sharma",
      phone: "+91-9876543215",
    },
  },
  {
    id: 7,
    location: "Sky Turf BKC",
    sports: ["Tennis"],
    timeSlots: ["6:00 AM - 8:00 AM", "5:00 PM - 7:00 PM"],
    datesAvailable: ["2024-09-22", "2024-09-24"],
    image: img7, // Use imported image
    distance: "3.5 km",
    ownerContact: {
      name: "Virat Kohli",
      phone: "+91-9876543216",
    },
  },
  {
    id: 8,
    location: "Sporting Lions Sports Turf Bandra",
    sports: ["Football"],
    timeSlots: ["8:00 AM - 10:00 AM", "4:00 PM - 6:00 PM"],
    datesAvailable: ["2024-09-23", "2024-09-25"],
    image: img8, // Use imported image
    distance: "2.8 km",
    ownerContact: {
      name: "Sachin Tendulkar",
      phone: "+91-9876543217",
    },
  },
  {
    id: 9,
    location: "SSM Multi Sports Turf Versova, Andheri W",
    sports: ["Badminton", "Cricket"],
    timeSlots: ["9:00 AM - 11:00 AM", "6:00 PM - 8:00 PM"],
    datesAvailable: ["2024-09-24", "2024-09-26"],
    image: img9, // Use imported image
    distance: "3.2 km",
    ownerContact: {
      name: "MS Dhoni",
      phone: "+91-9876543218",
    },
  },
  {
    id: 10,
    location: "The Sports Square Wadala",
    sports: ["Tennis"],
    timeSlots: ["6:00 AM - 8:00 AM", "5:00 PM - 7:00 PM"],
    datesAvailable: ["2024-09-25", "2024-09-27"],
    image: img10, // Use imported image
    distance: "4.5 km",
    ownerContact: {
      name: "Ravindra Jadeja",
      phone: "+91-9876543219",
    },
  },
];

export default venues;
